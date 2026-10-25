# -*- coding: utf-8 -*-
import os, sys

source_path = "c:/Users/pc/Desktop/mô hình quán ăn nhanh/src/lib/store.ts"
dest_path = "c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/lib/store.ts"

with open(source_path, "r", encoding="utf-8") as f:
    orig = f.read()

# Let's define the top header, categories, and menu for Cafe Ăn Vặt Trạm Khởi Nghiệp
top_header_and_menu = """// Kho dữ liệu POS & Order — CAFE ĂN VẶT TRẠM KHỞI NGHIỆP
// Địa chỉ: 36/5E Nguyễn Thị Ngâu, Trung Đông 8, Xã Đông Thạnh, TP.HCM

export const BRAND_NAME = 'CAFE ĂN VẶT TRẠM KHỞI NGHIỆP';
export const BRAND_SUBTITLE = 'Cà Phê Muối · Trà Dâu · Đồ Ăn Vặt Nóng Hổi · Mì Trộn Mì Cay';
export const STORE_ADDRESS = '36/5E Nguyễn Thị Ngâu, Trung Đông 8, Xã Đông Thạnh, TP.HCM';
export const STORE_HOTLINE = '0938.888.xxx';

export type Category = 'cafe-tra' | 'nuoc-sam' | 'do-an-vat' | 'mi-cay-tron' | 'topping';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: Category;
  cost?: number;
  img?: string;
  description?: string;
  badge?: string;
}

export interface CategoryInfo {
  id: Category;
  label: string;
  emoji: string;
  color: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'cafe-tra', label: 'Cà Phê & Trà', emoji: '☕', color: '#f59e0b' },
  { id: 'nuoc-sam', label: 'Nước Sâm & Nước Ép', emoji: '🥤', color: '#10b981' },
  { id: 'do-an-vat', label: 'Đồ Ăn Vặt Nóng Hổi', emoji: '🍟', color: '#ef4444' },
  { id: 'mi-cay-tron', label: 'Mì Trộn & Mì Cay', emoji: '🍜', color: '#ec4899' },
  { id: 'topping', label: 'Topping Thêm', emoji: '➕', color: '#3b82f6' },
];

export const MENU: MenuItem[] = [
  // --- 1. CÀ PHÊ & TRÀ ---
  {
    id: 'cf-1',
    name: 'Cà Phê Muối Kem Béo',
    price: 20000,
    cost: 7500,
    category: 'cafe-tra',
    badge: 'Best Seller',
    img: 'menu/cf-1.jpg',
    description: 'Cà phê pha phin mộc đậm đà phủ lớp kem mặn béo ngậy chuẩn vị Huế'
  },
  {
    id: 'cf-2',
    name: 'Cà Phê Đen Đá Phin',
    price: 15000,
    cost: 4500,
    category: 'cafe-tra',
    img: 'menu/cf-2.jpg',
    description: 'Cà phê nguyên chất rang mộc đắng dịu, hậu ngọt đậm hương thơm'
  },
  {
    id: 'cf-3',
    name: 'Cà Phê Sữa Đá Sài Gòn',
    price: 18000,
    cost: 6000,
    category: 'cafe-tra',
    badge: 'Phổ Biến',
    img: 'menu/cf-3.jpg',
    description: 'Cà phê sữa đá ngọt thanh béo ngậy truyền thống'
  },
  {
    id: 'cf-4',
    name: 'Bạc Xỉu 3 Tầng Sữa Đá',
    price: 20000,
    cost: 7000,
    category: 'cafe-tra',
    img: 'menu/cf-4.jpg',
    description: 'Nhiều sữa đặc ngọt dịu hòa quyện chút cà phê thơm nồng'
  },
  {
    id: 'cf-5',
    name: 'Trà Dâu Tươi Tằm',
    price: 25000,
    cost: 9000,
    category: 'cafe-tra',
    badge: 'Hot Trend',
    img: 'menu/cf-5.jpg',
    description: 'Trà lài thơm ngát ngâm dâu tây chua ngọt thanh mát giải nhiệt'
  },
  {
    id: 'cf-6',
    name: 'Trà Đào Cam Sả',
    price: 25000,
    cost: 9500,
    category: 'cafe-tra',
    img: 'menu/cf-6.jpg',
    description: 'Trà đào vàng giòn sần sật kèm tinh chất cam sả thư thái'
  },
  {
    id: 'cf-7',
    name: 'Trà Sữa Trân Châu Đường Đen',
    price: 25000,
    cost: 10000,
    category: 'cafe-tra',
    badge: 'Yêu Thích',
    img: 'menu/cf-7.jpg',
    description: 'Trà sữa thơm béo kèm trân châu hoàng kim dẻo dai ngọt dịu'
  },
  {
    id: 'cf-8',
    name: 'Trà Chanh Mật Ong Giã Tay',
    price: 18000,
    cost: 5500,
    category: 'cafe-tra',
    img: 'menu/cf-8.jpg',
    description: 'Chanh tươi giã tay tinh dầu thơm nức kết hợp mật ong ngọt thanh'
  },

  // --- 2. NƯỚC SÂM & NƯỚC ÉP ---
  {
    id: 'sam-1',
    name: 'Nước Sâm Bí Đao La Hán Quả',
    price: 15000,
    cost: 4500,
    category: 'nuoc-sam',
    badge: 'Đặc Sản',
    img: 'menu/sam-1.jpg',
    description: 'Bí đao tươi nấu cùng la hán quả, mía lau, râu bắp thanh mát ngọt thanh tự nhiên'
  },
  {
    id: 'sam-2',
    name: 'Nước Sâm Hoa Cúc Hạt Chia',
    price: 18000,
    cost: 5500,
    category: 'nuoc-sam',
    img: 'menu/sam-2.jpg',
    description: 'Hoa cúc vàng thơm nhẹ mát gan bổ mắt kèm hạt chia giàu dưỡng chất'
  },
  {
    id: 'sam-3',
    name: 'Nước Mía Sầu Riêng / Tắc',
    price: 15000,
    cost: 5000,
    category: 'nuoc-sam',
    img: 'menu/sam-3.jpg',
    description: 'Mía tươi ép nguyên chất thơm lừng vị sầu riêng hoặc chua thanh trái tắc'
  },
  {
    id: 'ep-1',
    name: 'Nước Ép Cam Tươi Nguyên Chất',
    price: 25000,
    cost: 11000,
    category: 'nuoc-sam',
    badge: 'Vitamin C',
    img: 'menu/ep-1.jpg',
    description: 'Cam sành miền Tây vắt tươi nguyên chất bổ sung vitamin C tức thì'
  },
  {
    id: 'ep-2',
    name: 'Nước Ép Dưa Hấu Đỏ',
    price: 22000,
    cost: 8500,
    category: 'nuoc-sam',
    img: 'menu/ep-2.jpg',
    description: 'Dưa hấu tươi mát ngọt ngào không thêm phẩm màu'
  },

  // --- 3. ĐỒ ĂN VẶT NÓNG HỔI ---
  {
    id: 'av-1',
    name: 'Cá Viên Chiên Nước Mắm Bơ Tỏi',
    price: 30000,
    cost: 13000,
    category: 'do-an-vat',
    badge: 'Best Seller',
    img: 'menu/av-1.jpg',
    description: 'Cá viên chiên giòn lắc nước mắm kẹo bơ tỏi thơm nức, thêm đậu bắp sốt'
  },
  {
    id: 'av-2',
    name: 'Khoai Tây Chiên Lắc Phô Mai',
    price: 25000,
    cost: 9500,
    category: 'do-an-vat',
    img: 'menu/av-2.jpg',
    description: 'Khoai tây giòn rụm áo lớp bột phô mai cam béo mặn cuốn hút'
  },
  {
    id: 'av-3',
    name: 'Gà Lắc Rong Biển / Phô Mai',
    price: 30000,
    cost: 13500,
    category: 'do-an-vat',
    badge: 'Giòn Rụm',
    img: 'menu/av-3.jpg',
    description: 'Ức gà phi lê cắt viên tẩm bột chiên giòn tan lắc rong biển thơm ngon'
  },
  {
    id: 'av-4',
    name: 'Xúc Xích Đức Nướng / Chiên',
    price: 15000,
    cost: 6500,
    category: 'do-an-vat',
    img: 'menu/av-4.jpg',
    description: 'Xúc xích Đức xông khói thịt chắc giòn chấm tương ớt cay nhẹ'
  },
  {
    id: 'av-5',
    name: 'Bắp Xào Tôm Bơ Trứng Muối',
    price: 25000,
    cost: 10500,
    category: 'do-an-vat',
    img: 'menu/av-5.jpg',
    description: 'Bắp ngọt vàng xào ruốc tôm thơm lừng bơ và hành lá giòn ngọt'
  },
  {
    id: 'av-6',
    name: 'Bánh Tráng Trộn Sa Tế Tắc',
    price: 20000,
    cost: 8000,
    category: 'do-an-vat',
    badge: 'Ăn Vặt',
    img: 'menu/av-6.jpg',
    description: 'Bánh tráng dẻo mềm kèm trứng cút, khô bò, xoài xanh và sốt sa tế chua cay'
  },
  {
    id: 'av-7',
    name: 'Bánh Tráng Cuộn Bơ Trứng Cút',
    price: 22000,
    cost: 9000,
    category: 'do-an-vat',
    img: 'menu/av-7.jpg',
    description: 'Bánh tráng cuộn sốt bơ trứng cút béo ngậy hành phi vàng giòn'
  },
  {
    id: 'av-8',
    name: 'Hồ Lô Nướng Mật Ong',
    price: 25000,
    cost: 11000,
    category: 'do-an-vat',
    img: 'menu/av-8.jpg',
    description: 'Viên hồ lô tròn căng mọng nướng vàng bóng thơm lừng mật ong'
  },
  {
    id: 'av-9',
    name: 'Phô Mai Que Kéo Sợi (3 cây)',
    price: 25000,
    cost: 12000,
    category: 'do-an-vat',
    img: 'menu/av-9.jpg',
    description: 'Phô mai que chiên xù vàng ươm kéo sợi mozzarella béo ngậy chấm sốt tương cà'
  },

  // --- 4. MÌ TRỘN & MÌ CAY ---
  {
    id: 'mi-1',
    name: 'Mì Trộn Xúc Xích Trứng Đào',
    price: 30000,
    cost: 14000,
    category: 'mi-cay-tron',
    badge: 'No Bụng',
    img: 'menu/mi-1.jpg',
    description: 'Mì Indomie sốt cay ngọt, xúc xích chiên giòn, trứng lòng đào hồng đào béo ngậy'
  },
  {
    id: 'mi-2',
    name: 'Mì Trộn Cá Viên Sa Tế Bơ Tỏi',
    price: 35000,
    cost: 16000,
    category: 'mi-cay-tron',
    badge: 'Đặc Biệt',
    img: 'menu/mi-2.jpg',
    description: 'Mì trộn đẫm sốt sa tế bơ tỏi cùng cá viên chiên giòn, rau cải thìa tươi'
  },
  {
    id: 'mi-3',
    name: 'Mì Cay Hàn Quốc Bò Kim Chi',
    price: 45000,
    cost: 23000,
    category: 'mi-cay-tron',
    badge: 'Món Tối',
    img: 'menu/mi-3.jpg',
    description: 'Mì Koreno sợi dai nấu nước dùng kim chi chua cay cùng thịt bò Mỹ và nấm kim châm'
  },

  // --- 5. TOPPING THÊM ---
  {
    id: 'tp-1',
    name: 'Thêm Trân Châu / Thạch Củ Năng',
    price: 5000,
    cost: 2000,
    category: 'topping',
    img: 'menu/tp-1.jpg'
  },
  {
    id: 'tp-2',
    name: 'Thêm Trứng Ốp La / Lòng Đào',
    price: 5000,
    cost: 3000,
    category: 'topping',
    img: 'menu/tp-2.jpg'
  },
  {
    id: 'tp-3',
    name: 'Thêm Xúc Xích / Cá Viên',
    price: 8000,
    cost: 4000,
    category: 'topping',
    img: 'menu/tp-3.jpg'
  }
];
"""

# Find where `export interface OrderLine` starts in orig
split_marker = "export interface OrderLine {"
pos = orig.find(split_marker)
if pos == -1:
    print("Error: could not find OrderLine in orig")
    sys.exit(1)

rest_of_code = orig[pos:]

# Now replace specific sections in rest_of_code:
# 1. Update STORE_SCHEDULE
schedule_old_start = "export const STORE_SCHEDULE: ShiftSchedule[] = ["
schedule_old_end = "];"
sch_start_idx = rest_of_code.find(schedule_old_start)
sch_end_idx = rest_of_code.find(schedule_old_end, sch_start_idx) + 2

cafe_schedule = """export const STORE_SCHEDULE: ShiftSchedule[] = [
  {
    id: 'prep',
    time: '06h00 - 06h30',
    name: 'Chuẩn bị đầu ca sáng',
    tasks: 'Kiểm tra máy pha cà phê, nấu sâm bí đao mẻ tươi đầu ngày, kiểm tra tủ lạnh rau củ quả & đá sạch.'
  },
  {
    id: 'sang',
    time: '06h30 - 11h30',
    name: 'Ca Sáng (Cà Phê Muối · Trà Sáng · Điểm Tâm)',
    tasks: 'Pha chế cà phê muối, bạc xỉu, trà dâu, phục vụ khách uống sáng & học tập làm việc.',
    isWorkShift: true
  },
  {
    id: 'trua',
    time: '11h30 - 16h30',
    name: 'Ca Trưa (Nước Ép · Nước Sâm · Mì Trộn)',
    tasks: 'Phục vụ nước giải khát, ép cam, nấu mì trộn xúc xích phục vụ khách trưa.',
    isWorkShift: true
  },
  {
    id: 'chieu-toi',
    time: '16h30 - 22h30',
    name: 'Ca Tối (Cao Điểm Ăn Vặt · Mì Cay · Trà Sữa)',
    tasks: 'Bếp chiên nhúng đồ ăn vặt nóng giòn (cá viên sốt bơ tỏi, khoai tây lắc phô mai, gà lắc), nấu mì cay, tụ tập bạn bè.',
    isWorkShift: true
  },
  {
    id: 'close',
    time: '22h30 - 23h00',
    name: 'Dọn dẹp & Chốt ca đêm',
    tasks: 'Vệ sinh máy pha/nồi chiên dầu, lau chùi bàn ghế, kiểm kê nguyên vật liệu và chốt quỹ ngày.'
  }
];"""

rest_of_code = rest_of_code[:sch_start_idx] + cafe_schedule + rest_of_code[sch_end_idx:]

# 2. Update storage keys
rest_of_code = rest_of_code.replace("fastfood_7a_custom_script_url_v1", "cafe_anvat_dongthanh_script_url_v1")
rest_of_code = rest_of_code.replace("fastfood_7a_sheet_view_url_v1", "cafe_anvat_dongthanh_sheet_view_url_v1")
rest_of_code = rest_of_code.replace("fastfood_7a_orders_v1", "cafe_anvat_dongthanh_orders_v1")
rest_of_code = rest_of_code.replace("fastfood_7a_expenses_v1", "cafe_anvat_dongthanh_expenses_v1")
rest_of_code = rest_of_code.replace("fastfood_7a_handled_table_orders_v1", "cafe_anvat_dongthanh_handled_table_orders_v1")
rest_of_code = rest_of_code.replace("fastfood_7a_bank_config_v1", "cafe_anvat_dongthanh_bank_config_v1")
rest_of_code = rest_of_code.replace("FOOD STATION 7A", "CAFE AN VAT TRAM KHOI NGHIEP")

full_new_store = top_header_and_menu + "\n" + rest_of_code

with open(dest_path, "w", encoding="utf-8") as f:
    f.write(full_new_store)

print("Successfully written", dest_path)
