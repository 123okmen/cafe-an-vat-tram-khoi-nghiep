import os
import shutil
import re
import urllib.request
import urllib.parse
from io import BytesIO
from PIL import Image

DEST_BASE = r"c:\Users\pc\Desktop\cafe-an-vat-tram-khoi-nghiep"
MENU_DIR = os.path.join(DEST_BASE, "menu")
PUBLIC_MENU_DIR = os.path.join(DEST_BASE, "public", "menu")

os.makedirs(MENU_DIR, exist_ok=True)
os.makedirs(PUBLIC_MENU_DIR, exist_ok=True)

# Sources from existing folders
PLAN_DIR = r"c:\Users\pc\Desktop\Plan"
FOOD_STATION_MENU = r"c:\Users\pc\Desktop\mô hình quán ăn nhanh\public\menu"

# 1. Copy available local images
local_copies = {
    # From Plan folder
    os.path.join(PLAN_DIR, "nem_nuong.jpg"): ("av-1.jpg", "Nem_Nuong.jpg"),
    os.path.join(PLAN_DIR, "sam bong cuc nhan luc.jpg"): ("sam-1.jpg", "Sam_Bong_Cuc_Nhan_Nhuc.jpg"),
    os.path.join(PLAN_DIR, "sam cu nang tao do.jpg"): ("sam-2.jpg", "Sam_Cu_Nang_Tao_Do.jpg"),
    os.path.join(PLAN_DIR, "sam mia lau.jpg"): ("sam-3.jpg", "Sam_Mia_Lau.jpg"),
    os.path.join(PLAN_DIR, "cam.jpg"): ("ep-1.jpg", "Nuoc_Cam_Vat.jpg"),
    os.path.join(PLAN_DIR, "dua_hau.jpg"): ("ep-2.jpg", "Nuoc_Ep_Dua_Hau.jpg"),

    # From Food Station menu
    os.path.join(FOOD_STATION_MENU, "ff-5.jpg"): ("av-5.jpg", "Banh_Trang_Tron_Dac_Biet.jpg"),
    os.path.join(FOOD_STATION_MENU, "tp-3.jpg"): ("av-7.jpg", "Xuc_Xich_Duc_Chien.jpg"),
    os.path.join(FOOD_STATION_MENU, "ff-3.jpg"): ("mi-1.jpg", "Mi_Tron_Xuc_Xich_Trung.jpg"),
    os.path.join(FOOD_STATION_MENU, "ff-4.jpg"): ("mi-3.jpg", "Mi_Cay_7_Cap_Do.jpg"),
    os.path.join(FOOD_STATION_MENU, "tp-1.jpg"): ("tp-2.jpg", "Trung_Op_La_Them.jpg"),
    os.path.join(FOOD_STATION_MENU, "tp-2.jpg"): ("tp-3.jpg", "Pho_Mai_Them.jpg"),
    os.path.join(FOOD_STATION_MENU, "tp-3.jpg"): ("tp-4.jpg", "Xuc_Xich_Them.jpg"),
}

for src_path, (code_name, friendly_name) in local_copies.items():
    if os.path.exists(src_path):
        try:
            im = Image.open(src_path).convert("RGB")
            w, h = im.size
            if w > 640:
                im = im.resize((640, int(h * (640 / w))), Image.Resampling.LANCZOS)
            im.save(os.path.join(PUBLIC_MENU_DIR, code_name), "JPEG", quality=88)
            im.save(os.path.join(MENU_DIR, friendly_name), "JPEG", quality=88)
            print(f"[LOCAL OK] {code_name} ({friendly_name}) from {os.path.basename(src_path)}")
        except Exception as e:
            print(f"[LOCAL ERR] {src_path}: {e}")

# 2. Search & Download remaining cafe & snack items
ITEMS_TO_FETCH = [
    ("cf-1", "Ca_Phe_Den_Phin.jpg", "cà phê đen đá pha phin ngon ly thủy tinh"),
    ("cf-2", "Ca_Phe_Sua_Phin.jpg", "cà phê sữa đá pha phin sài gòn ly thủy tinh"),
    ("cf-3", "Bac_Xiu_Sua_Tuoi.jpg", "bạc xỉu 3 tầng sữa tươi cà phê ly"),
    ("cf-4", "Ca_Phe_Muoi_Beo.jpg", "cà phê muối huế kem béo sánh mịn ly"),
    ("cf-5", "Tra_Dao_Cam_Sa.jpg", "trà đào cam sả ly đẹp miếng đào"),
    ("cf-6", "Tra_Vai_Hoa_Hong.jpg", "trà vải hoa hồng hạt chia ly"),
    ("cf-7", "Tra_Tac_Xi_Muoi.jpg", "trà tắc xí muội đá chua ngọt ly"),
    ("cf-8", "Tra_Sua_Tran_Chau.jpg", "trà sữa truyền thống trân châu đen ly"),
    ("av-2", "Ca_Vien_Chien_Thap_Cam_Nho.jpg", "dĩa cá viên chiên thập cẩm tương ớt dưa leo"),
    ("av-3", "Ca_Vien_Chien_Thap_Cam_Lon.jpg", "mẹt cá viên chiên thập cẩm đậu bắp xúc xích"),
    ("av-4", "Khoai_Tay_Chien_Bo_Toi.jpg", "khoai tây chiên bơ tỏi vàng giòn rụm"),
    ("av-6", "Banh_Trang_Nuong.jpg", "bánh tráng nướng đà lạt mắm ruốc trứng cút xúc xích"),
    ("av-8", "Ga_Ran_Gion_Rum.jpg", "đùi gà rán giòn rụm vàng óng"),
    ("av-9", "Bap_Xao_Bo_Tep.jpg", "bắp xào bơ tép hành ruốc thơm"),
    ("mi-2", "Mi_Tron_Ga_Ran.jpg", "mì trộn gà rán giòn rụm sốt cay"),
    ("tp-1", "Tran_Chau_Them.jpg", "chén trân châu đen đường đen dẻo"),
    ("tp-5", "Trung_Cut_Them.jpg", "trứng cút luộc bóc vỏ đĩa nhỏ"),
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
}

def search_bing_image_urls(query: str):
    url = "https://www.bing.com/images/search?q=" + urllib.parse.quote(query) + "&form=HDRSC2&first=1"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=12) as resp:
        html = resp.read().decode("utf-8", errors="ignore")
    return re.findall(r'murl&quot;:&quot;(https?://[^&]+?)&quot;', html)

for code, friendly_name, query in ITEMS_TO_FETCH:
    out_pub = os.path.join(PUBLIC_MENU_DIR, f"{code}.jpg")
    out_menu = os.path.join(MENU_DIR, friendly_name)
    if os.path.exists(out_pub):
        continue
    try:
        urls = search_bing_image_urls(query)
        saved = False
        for img_url in urls[:8]:
            try:
                req = urllib.request.Request(img_url, headers=HEADERS)
                with urllib.request.urlopen(req, timeout=8) as r:
                    data = r.read()
                im = Image.open(BytesIO(data)).convert("RGB")
                w, h = im.size
                if w < 200 or h < 160:
                    continue
                if w > 640:
                    im = im.resize((640, int(h * (640 / w))), Image.Resampling.LANCZOS)
                im.save(out_pub, "JPEG", quality=88)
                im.save(out_menu, "JPEG", quality=88)
                print(f"[NET OK] {code} ({friendly_name}) <- {query} ({im.size})")
                saved = True
                break
            except Exception:
                continue
        if not saved:
            print(f"[WARN] Could not fetch {code}")
    except Exception as e:
        print(f"[ERR] {code}: {e}")
