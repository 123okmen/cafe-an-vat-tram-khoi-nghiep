import os
import json
import urllib.request
import urllib.parse
from PIL import Image
from io import BytesIO

BASE_DIR = r"c:\Users\pc\Desktop\cafe-an-vat-tram-khoi-nghiep"
PUBLIC_MENU = os.path.join(BASE_DIR, "public", "menu")
MENU_DIR = os.path.join(BASE_DIR, "menu")
os.makedirs(PUBLIC_MENU, exist_ok=True)
os.makedirs(MENU_DIR, exist_ok=True)

# Curated direct high-res images for Vietnamese cafe & street food
CURATED_IMAGES = {
    "cf-1": ("Ca_Phe_Den_Phin.jpg", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Vietnamese_iced_coffee_with_condensed_milk.jpg/640px-Vietnamese_iced_coffee_with_condensed_milk.jpg",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=640&q=80",
    ]),
    "cf-2": ("Ca_Phe_Sua_Phin.jpg", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Viet-coffee.jpg/640px-Viet-coffee.jpg",
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=640&q=80",
    ]),
    "cf-3": ("Bac_Xiu_Sua_Tuoi.jpg", [
        "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=640&q=80",
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=640&q=80",
    ]),
    "cf-4": ("Ca_Phe_Muoi_Beo.jpg", [
        "https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=640&q=80",
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=640&q=80",
    ]),
    "cf-5": ("Tra_Dao_Cam_Sa.jpg", [
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=640&q=80",
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=640&q=80",
    ]),
    "cf-6": ("Tra_Vai_Hoa_Hong.jpg", [
        "https://images.unsplash.com/photo-1556881286-fc6915169721?w=640&q=80",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=640&q=80",
    ]),
    "cf-7": ("Tra_Tac_Xi_Muoi.jpg", [
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=640&q=80",
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=640&q=80",
    ]),
    "cf-8": ("Tra_Sua_Tran_Chau.jpg", [
        "https://images.unsplash.com/photo-1558857563-b37cf5c8e089?w=640&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Boba_Tea.jpg/640px-Boba_Tea.jpg",
    ]),
    "sam-1": ("Sam_Bong_Cuc_Nhan_Nhuc.jpg", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Chrysanthemum_tea_in_a_glass.jpg/640px-Chrysanthemum_tea_in_a_glass.jpg",
    ]),
    "sam-2": ("Sam_Cu_Nang_Tao_Do.jpg", [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=640&q=80",
    ]),
    "sam-3": ("Sam_Mia_Lau.jpg", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sugarcane_juice_glass.jpg/640px-Sugarcane_juice_glass.jpg",
    ]),
    "ep-1": ("Nuoc_Cam_Vat.jpg", [
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=640&q=80",
    ]),
    "ep-2": ("Nuoc_Ep_Dua_Hau.jpg", [
        "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=640&q=80",
    ]),
    "av-1": ("Nem_Nuong.jpg", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Nem_nuong.jpg/640px-Nem_nuong.jpg",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=640&q=80",
    ]),
    "av-2": ("Ca_Vien_Chien_Thap_Cam_Nho.jpg", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Fried_fish_balls.jpg/640px-Fried_fish_balls.jpg",
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=640&q=80",
    ]),
    "av-3": ("Ca_Vien_Chien_Thap_Cam_Lon.jpg", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Fishballs_with_curry_sauce.jpg/640px-Fishballs_with_curry_sauce.jpg",
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=640&q=80",
    ]),
    "av-4": ("Khoai_Tay_Chien_Bo_Toi.jpg", [
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=640&q=80",
        "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=640&q=80",
    ]),
    "av-5": ("Banh_Trang_Tron_Dac_Biet.jpg", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/B%C3%A1nh_tr%C3%A1ng_tr%E1%BB%99n.jpg/640px-B%C3%A1nh_tr%C3%A1ng_tr%E1%BB%99n.jpg",
    ]),
    "av-6": ("Banh_Trang_Nuong.jpg", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/B%C3%A1nh_tr%C3%A1ng_n%C6%B0%E1%BB%9Bng_%C4%90%C3%A0_L%E1%BA%A1t.jpg/640px-B%C3%A1nh_tr%C3%A1ng_n%C6%B0%E1%BB%9Bng_%C4%90%C3%A0_L%E1%BA%A1t.jpg",
    ]),
    "av-7": ("Xuc_Xich_Duc_Chien.jpg", [
        "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=640&q=80",
    ]),
    "av-8": ("Ga_Ran_Gion_Rum.jpg", [
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=640&q=80",
        "https://images.unsplash.com/photo-1562967914-608f82629710?w=640&q=80",
    ]),
    "av-9": ("Bap_Xao_Bo_Tep.jpg", [
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=640&q=80",
    ]),
    "mi-1": ("Mi_Tron_Xuc_Xich_Trung.jpg", [
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=640&q=80",
    ]),
    "mi-2": ("Mi_Tron_Ga_Ran.jpg", [
        "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=640&q=80",
    ]),
    "mi-3": ("Mi_Cay_7_Cap_Do.jpg", [
        "https://images.unsplash.com/photo-1552611052-33e04de081de?w=640&q=80",
    ]),
    "tp-1": ("Tran_Chau_Them.jpg", [
        "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?w=640&q=80",
    ]),
    "tp-2": ("Trung_Op_La_Them.jpg", [
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=640&q=80",
    ]),
    "tp-3": ("Pho_Mai_Them.jpg", [
        "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=640&q=80",
    ]),
    "tp-4": ("Xuc_Xich_Them.jpg", [
        "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=640&q=80",
    ]),
    "tp-5": ("Trung_Cut_Them.jpg", [
        "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=640&q=80",
    ])
}

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
}

for code, (friendly_name, url_list) in CURATED_IMAGES.items():
    pub_path = os.path.join(PUBLIC_MENU, f"{code}.jpg")
    menu_path = os.path.join(MENU_DIR, friendly_name)
    if os.path.exists(pub_path) and os.path.getsize(pub_path) > 5000:
        print(f"[EXISTS] {code} ({friendly_name})")
        continue

    success = False
    for u in url_list:
        try:
            req = urllib.request.Request(u, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=10) as r:
                data = r.read()
            im = Image.open(BytesIO(data)).convert("RGB")
            w, h = im.size
            if w > 640:
                im = im.resize((640, int(h * (640 / w))), Image.Resampling.LANCZOS)
            im.save(pub_path, "JPEG", quality=88)
            im.save(menu_path, "JPEG", quality=88)
            print(f"[OK] {code} -> {friendly_name} ({im.size})")
            success = True
            break
        except Exception as e:
            continue
    if not success:
        print(f"[FAIL] {code}")
