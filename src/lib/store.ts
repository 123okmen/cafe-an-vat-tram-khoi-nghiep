// Kho dữ liệu POS & Order — CAFE ĂN VẶT TRẠM KHỞI NGHIỆP
// Địa chỉ: 36/5E Nguyễn Thị Ngâu, Trung Đông 8, Xã Đông Thạnh, TP.HCM

export const BRAND_NAME = 'CAFE ĂN VẶT TRẠM KHỞI NGHIỆP';
export const BRAND_SUBTITLE = 'Bánh Mì Nướng Phô Mai · Bò Né · Bò Bít Tết · Cơm Chiên & Mì Xào';
export const STORE_ADDRESS = '36/5E Nguyễn Thị Ngâu, Trung Đông 8, Xã Đông Thạnh, TP.HCM';
export const STORE_HOTLINE = '0938.888.xxx';

export type Category = 'banh-mi-bo-ne' | 'com-xao' | 'mi-nui' | 'an-vat' | 'topping';

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
  { id: 'banh-mi-bo-ne', label: 'Bánh Mì & Bò Né', emoji: '🥖', color: '#f59e0b' },
  { id: 'com-xao', label: 'Cơm Chiên & Món Xào', emoji: '🍛', color: '#10b981' },
  { id: 'mi-nui', label: 'Mì, Nui & Mì Ý', emoji: '🍜', color: '#ef4444' },
  { id: 'an-vat', label: 'Ăn Vặt Nóng Hổi', emoji: '🍟', color: '#ec4899' },
  { id: 'topping', label: 'Topping & Nước Uống', emoji: '➕', color: '#3b82f6' },
];

export const MENU: MenuItem[] = [
  // --- 1. BÁNH MÌ & BÒ NÉ ---
  {
    id: 'bm-1',
    name: 'Bánh Mì Nướng Hải Sản Phô Mai',
    price: 35000,
    cost: 18000,
    category: 'banh-mi-bo-ne',
    badge: 'Món Mới',
    img: 'menu/banh-mi-nuong-hai-san.jpg',
    description: 'Bánh mì baguette nướng giòn rụm phủ phô mai tan chảy, tôm tươi và thanh cua thơm béo'
  },
  {
    id: 'bm-2',
    name: 'Bánh Mì Bò Né Thập Cẩm',
    price: 50000,
    cost: 26000,
    category: 'banh-mi-bo-ne',
    badge: 'Đặc Biệt',
    img: 'menu/bo-ne-thap-cam.jpg',
    description: 'Thịt bò xào sốt tiêu đậm vị, trứng ốp la lòng đào, pate gan béo ngậy, chả lụa ăn kèm bánh mì giòn'
  },
  {
    id: 'bm-3',
    name: 'Bánh Mì Chảo Bò Né',
    price: 45000,
    cost: 23000,
    category: 'banh-mi-bo-ne',
    badge: 'Best Seller',
    img: 'menu/banh-mi-chao.jpg',
    description: 'Chảo gang nóng hổi: thịt bò mềm sốt tiêu, 2 trứng ốp la, xíu mại, giăm bông, thịt ba rọi kèm bánh mì & salad'
  },
  {
    id: 'bm-4',
    name: 'Bò Bít Tết Khoai Tây Chiên',
    price: 55000,
    cost: 29000,
    category: 'banh-mi-bo-ne',
    badge: 'Thượng Hạng',
    img: 'menu/bo-bit-tet.jpg',
    description: 'Thăn bò áp chảo mềm mọng vân xém nướng, sốt tiêu đậm vị ăn kèm khoai tây chiên vàng giòn và salad tươi'
  },
  {
    id: 'bm-5',
    name: 'Bò Lúc Lắc Khoai Tây Chiên',
    price: 45000,
    cost: 24000,
    category: 'banh-mi-bo-ne',
    badge: 'Hot',
    img: 'menu/bo-luc-lac.jpg',
    description: 'Thịt bò thái vuông áp chảo lửa lớn xào ớt chuông, hành tây, khoai tây chiên giòn và salad tươi'
  },

  // --- 2. CƠM CHIÊN & MÓN XÀO ---
  {
    id: 'cx-1',
    name: 'Cơm Chiên Hải Sản',
    price: 40000,
    cost: 21000,
    category: 'com-xao',
    badge: 'Bán Chạy',
    img: 'menu/com-chien-hai-san.jpg',
    description: 'Cơm chiên hạt vàng tơi thơm ráo cùng tôm tươi, mực giòn, đậu, cà rốt hạt lựu và ngò rí rắc tiêu'
  },
  {
    id: 'cx-2',
    name: 'Cơm Chiên Trứng + Bò Xào Củ Hành',
    price: 40000,
    cost: 22000,
    category: 'com-xao',
    badge: 'Đậm Vị',
    img: 'menu/com-chien-bo-xao.jpg',
    description: 'Cơm chiên trứng tơi xốp ăn kèm thịt bò xào hành tây mềm ngọt, rắc tiêu đen thơm nức mũi'
  },
  {
    id: 'cx-3',
    name: 'Bò Xào Củ Hành Lót Xà Lách Dầu Giấm',
    price: 50000,
    cost: 26000,
    category: 'com-xao',
    badge: 'Món Ngon',
    img: 'menu/bo-xao-cu-hanh-xa-lach.jpg',
    description: 'Thịt bò xào củ hành tây rắc tiêu đen thơm nồng, lót lớp xà lách tươi và cà chua sốt dầu giấm thanh mát'
  },
  {
    id: 'cx-4',
    name: 'Mực Xào Thập Cẩm',
    price: 50000,
    cost: 27000,
    category: 'com-xao',
    badge: 'Hải Sản',
    img: 'menu/muc-xao-thap-cam.jpg',
    description: 'Mực ống tươi dày thịt xào ớt chuông đỏ vàng, cần tây, hành tây, dưa leo giòn rụm đậm vị'
  },

  // --- 3. MÌ, NUI & MÌ Ý ---
  {
    id: 'mn-1',
    name: 'Mì Xào Bò (Kèm Trứng Ốp La)',
    price: 40000,
    cost: 20000,
    category: 'mi-nui',
    badge: 'Quen Thuộc',
    img: 'menu/mi-xao-bo.jpg',
    description: 'Mì sợi xào giòn dai cùng thịt bò mềm mọng, cải xanh, cà rốt và trứng ốp la lòng đào rắc tiêu'
  },
  {
    id: 'mn-2',
    name: 'Nui Xào Bò (Kèm Trứng Ốp La)',
    price: 40000,
    cost: 20000,
    category: 'mi-nui',
    badge: 'Yêu Thích',
    img: 'menu/nui-xao-bo.jpg',
    description: 'Nui ống xào xém cạnh vàng mướt hòa quyện thịt bò mềm ngọt, rau cải giòn và trứng ốp la lòng đào'
  },
  {
    id: 'mn-3',
    name: 'Mì Ý Sốt Bò Băm (Spaghetti Bolognese)',
    price: 40000,
    cost: 21000,
    category: 'mi-nui',
    badge: 'Âu Mỹ',
    img: 'menu/mi-y-bo-bam.jpg',
    description: 'Sợi mì Ý spaghetti mềm dai phủ sốt cà chua thịt bò bằm đậm đà chuẩn vị Âu, rắc phô mai thơm ngậy'
  },
  {
    id: 'mn-4',
    name: 'Mì Cay Hàn Quốc Thập Cẩm',
    price: 40000,
    cost: 21000,
    category: 'mi-nui',
    badge: 'Cay Nồng',
    img: 'menu/mi-cay-hq-thap-cam.jpg',
    description: 'Sợi mì Hàn Quốc cay đậm đà với thịt bò mềm mọng, xúc xích, trứng ốp la và cải thìa xanh giòn'
  },

  // --- 4. ĂN VẶT & TOPPING THÊM ---
  {
    id: 'av-1',
    name: 'Khoai Tây Chiên Lắc Phô Mai',
    price: 25000,
    cost: 11000,
    category: 'an-vat',
    badge: 'Giòn Béo',
    img: 'menu/khoai-tay-lac-pho-mai.jpg',
    description: 'Khoai tây cắt thanh dài chiên vàng giòn rụm lắc đều lớp bột phô mai béo ngậy'
  },
  {
    id: 'tp-1',
    name: 'Bánh Mì Thêm (1 Ổ Giòn)',
    price: 3000,
    cost: 1500,
    category: 'topping',
    description: 'Bánh mì nướng nóng hổi, vỏ ngoài giòn rụm ruột mềm'
  },
  {
    id: 'tp-2',
    name: 'Trứng Ốp La Thêm',
    price: 5000,
    cost: 3000,
    category: 'topping',
    description: 'Trứng gà chiên lòng đào viền xém giòn rắc tiêu'
  },
  {
    id: 'tp-3',
    name: 'Phô Mai Lát Thêm',
    price: 5000,
    cost: 3000,
    category: 'topping',
    description: 'Phô mai Cheddar béo ngậy tan chảy'
  },
  {
    id: 'tp-4',
    name: 'Nước Ngọt / Trà Đá',
    price: 10000,
    cost: 4000,
    category: 'topping',
    description: 'Coca / Pepsi / 7Up / Trà đá ướp lạnh sảng khoái'
  }
];

export interface OrderLine {
  id: string;
  name: string;
  price: number;
  qty: number;
  note?: string;
}

export type Shift = 'sang' | 'trua' | 'chieu-toi';

export interface ShiftSchedule {
  id: Shift | 'prep' | 'break' | 'close';
  time: string;
  name: string;
  tasks: string;
  isWorkShift?: boolean;
}

export const STORE_SCHEDULE: ShiftSchedule[] = [
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
];

export type PaymentMethod = 'tienmat' | 'chuyenkhoan' | 'app';
export type OrderType = 'tai-quan' | 'mang-ve' | 'giao-hang';

export interface Order {
  paymentMethod?: PaymentMethod;
  id: string;
  time: string;
  tableNo?: number;
  orderType?: OrderType;
  staff: string;
  shift: Shift;
  lines: OrderLine[];
  total: number;
  discount?: number;
  surcharge?: number;
  customerPhone?: string;
  customerAddress?: string;
  cash?: number;
  change?: number;
  note?: string;
  synced: boolean;
  source?: string;
}

export const APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyktPQSBZEi6FSVMDBV27SWCQSzHMItoKHG8_um4TtAvREYmkVx1PTRncc1-E-3CVZk/exec";
export const CUSTOM_SCRIPT_URL_KEY = "cafe_anvat_dongthanh_script_url_v1";
export const CUSTOM_SHEET_VIEW_URL_KEY = "cafe_anvat_dongthanh_sheet_view_url_v1";
export const CONFIG_CHANGED_EVENT = "fastfood_7a_config_changed";

/** Key localStorage dùng riêng cho mô hình quán ăn nhanh Phước Thiện */
export const ORDERS_KEY = 'cafe_anvat_dongthanh_orders_v1';
export const ORDERS_CHANGED_EVENT = 'fastfood_7a_orders_changed';
export const EXPENSES_KEY = 'cafe_anvat_dongthanh_expenses_v1';
export const EXPENSES_CHANGED_EVENT = 'fastfood_7a_expenses_changed';
export const OFFICIAL_OPENING_DATE = '2026-10-22';

export type ExpenseCategory =
  | 'Thịt · Gà · Bò · Hải Sản'
  | 'Vỏ Bánh Bao · Mì · Hủ Tiếu · Gạo'
  | 'Dầu Ăn · Gia Vị · Sốt · Trứng · Rau'
  | 'Hộp Xốp · Túi · Ly · Bao Bì'
  | 'Gas · Điện · Nước · Đá Viên'
  | 'Nhân Sự · Sửa Chữa · Chi Khác';

export const EXPENSE_CATEGORIES: ExpenseCategory[] = [
  'Thịt · Gà · Bò · Hải Sản',
  'Vỏ Bánh Bao · Mì · Hủ Tiếu · Gạo',
  'Dầu Ăn · Gia Vị · Sốt · Trứng · Rau',
  'Hộp Xốp · Túi · Ly · Bao Bì',
  'Gas · Điện · Nước · Đá Viên',
  'Nhân Sự · Sửa Chữa · Chi Khác',
];

export interface Expense {
  id: string;
  time: string;
  staff: string;
  shift: Shift;
  category: ExpenseCategory | string;
  title: string;
  amount: number;
  paymentMethod: PaymentMethod;
  synced: boolean;
}

export function newExpenseId(): string {
  return 'CP' + Date.now().toString().slice(-8);
}

export function getExpenses(): Expense[] {
  try {
    const raw = localStorage.getItem(EXPENSES_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw) as Expense[];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export function saveExpense(exp: Expense) {
  const list = getExpenses().filter(e => e.id !== exp.id);
  list.unshift(exp);
  localStorage.setItem(EXPENSES_KEY, JSON.stringify(list));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(EXPENSES_CHANGED_EVENT, { detail: exp }));
  }
}

export function deleteExpense(expenseId: string) {
  const list = getExpenses().filter(e => e.id !== expenseId);
  localStorage.setItem(EXPENSES_KEY, JSON.stringify(list));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(EXPENSES_CHANGED_EVENT, { detail: { id: expenseId, deleted: true } }));
  }
}

export function isOrderFromOpening(timeStr: string, orderId?: string): boolean {
  if (orderId && orderId.startsWith('TEST_')) return false;
  try {
    const d = parseOrderDate(timeStr);
    const key = localDateKey(d);
    return key >= OFFICIAL_OPENING_DATE;
  } catch {
    return false;
  }
}

export function getOrders(): Order[] {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw) as Order[];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export function saveOrder(order: Order) {
  const orders = getOrders().filter(o => o.id !== order.id);
  orders.unshift(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(ORDERS_CHANGED_EVENT, { detail: order }));
  }
}

export function deleteOrder(orderId: string) {
  const orders = getOrders().filter(o => o.id !== orderId);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(ORDERS_CHANGED_EVENT, { detail: { id: orderId, deleted: true } }));
  }
}

export function clearAllOrders() {
  localStorage.removeItem(ORDERS_KEY);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(ORDERS_CHANGED_EVENT, { detail: { cleared: true } }));
  }
}

export interface RevenueSummary {
  totalRevenue: number;
  totalOrders: number;
  cashRevenue: number;
  bankRevenue: number;
  appRevenue: number;
}

export function computeRevenueSummary(orders: Order[]): RevenueSummary {
  let totalRevenue = 0;
  let cashRevenue = 0;
  let bankRevenue = 0;
  let appRevenue = 0;

  for (const o of orders) {
    const amt = o.total || 0;
    totalRevenue += amt;
    if (o.paymentMethod === 'chuyenkhoan') {
      bankRevenue += amt;
    } else if (o.paymentMethod === 'app') {
      appRevenue += amt;
    } else {
      cashRevenue += amt;
    }
  }

  return {
    totalRevenue,
    totalOrders: orders.length,
    cashRevenue,
    bankRevenue,
    appRevenue,
  };
}

export function parseOrderDate(timeStr: string): Date {
  if (!timeStr) return new Date();
  if (/^\d{1,2}\/\d{1,2}\/\d{4}/.test(timeStr)) {
    const parts = timeStr.split(/[\/\s:]/);
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const hour = parts[3] ? parseInt(parts[3], 10) : 0;
    const min = parts[4] ? parseInt(parts[4], 10) : 0;
    return new Date(year, month, day, hour, min);
  }
  const d = new Date(timeStr);
  return isNaN(d.getTime()) ? new Date() : d;
}

export function newOrderId(): string {
  return 'FF' + Date.now().toString().slice(-8);
}

export function getScriptUrl(): string {
  if (typeof window !== 'undefined') {
    const custom = localStorage.getItem(CUSTOM_SCRIPT_URL_KEY) || localStorage.getItem('fastfood_custom_script_url');
    if (custom && custom.startsWith('http')) {
      return custom.trim();
    }
  }
  return APP_SCRIPT_URL;
}

export function hasConfiguredScriptUrl(): boolean {
  const url = getScriptUrl();
  return Boolean(url && url.startsWith('https://script.google.com/'));
}

export function setCustomScriptUrl(url: string) {
  if (typeof window !== 'undefined') {
    if (!url.trim()) {
      localStorage.removeItem(CUSTOM_SCRIPT_URL_KEY);
      localStorage.removeItem('fastfood_custom_script_url');
    } else {
      localStorage.setItem(CUSTOM_SCRIPT_URL_KEY, url.trim());
    }
    window.dispatchEvent(new CustomEvent(CONFIG_CHANGED_EVENT));
  }
}

export function getSheetViewUrl(): string {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(CUSTOM_SHEET_VIEW_URL_KEY) || '';
  }
  return '';
}

export function setSheetViewUrl(url: string) {
  if (typeof window !== 'undefined') {
    if (!url.trim()) {
      localStorage.removeItem(CUSTOM_SHEET_VIEW_URL_KEY);
    } else {
      localStorage.setItem(CUSTOM_SHEET_VIEW_URL_KEY, url.trim());
    }
    window.dispatchEvent(new CustomEvent(CONFIG_CHANGED_EVENT));
  }
}

export async function postToScript(payload: Record<string, unknown>): Promise<boolean> {
  const scriptUrl = getScriptUrl();
  if (!scriptUrl) return false;
  try {
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload)
    });
    return true;
  } catch {
    return false;
  }
}

function orderPayload(order: Order) {
  return {
    orderId: order.id,
    staff: order.staff,
    shift: order.shift,
    tableNo: order.tableNo || '',
    orderType: order.orderType || 'tai-quan',
    paymentMethod: order.paymentMethod || 'tienmat',
    items: order.lines.map(l => l.name + ' x' + l.qty + (l.note ? ' (' + l.note + ')' : '')).join(', '),
    detail: JSON.stringify(order.lines),
    note: order.note || '',
    total: order.total,
    cash: order.cash || '',
    change: order.change || '',
    time: order.time
  };
}

export function syncOrder(order: Order): Promise<boolean> {
  return postToScript({ type: 'order', ...orderPayload(order) });
}

export function syncTableOrder(order: Order): Promise<boolean> {
  return postToScript({ type: 'table_order', ...orderPayload(order) });
}

export function syncDeleteOrder(orderId: string): Promise<boolean> {
  return postToScript({ type: 'delete_order', orderId });
}

export function syncExpense(exp: Expense): Promise<boolean> {
  return postToScript({
    type: 'expense',
    expenseId: exp.id,
    time: exp.time,
    staff: exp.staff,
    shift: exp.shift,
    category: exp.category,
    title: exp.title,
    amount: exp.amount,
    paymentMethod: exp.paymentMethod
  });
}

export function syncDeleteExpense(expenseId: string): Promise<boolean> {
  return postToScript({ type: 'delete_expense', expenseId });
}

export function getShift(): Shift {
  const d = new Date();
  const minutes = d.getHours() * 60 + d.getMinutes();
  if (minutes < 10 * 60 + 30) return 'sang';
  if (minutes < 15 * 60) return 'trua';
  return 'chieu-toi';
}

export function shiftLabel(s: string): string {
  if (s === 'sang') return '🌅 Ca Sáng (06h15-10h30)';
  if (s === 'trua') return '☀️ Ca Trưa (10h30-14h30)';
  return '🌆 Ca Chiều - Tối (16h00-22h00)';
}

export function localDateKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function fmtVND(n: number): string {
  return (n || 0).toLocaleString('vi-VN') + 'đ';
}

export function fmtTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString('vi-VN');
}

export function normalizePaymentMethod(pm?: string): PaymentMethod {
  if (!pm) return 'tienmat';
  const s = cleanStr(pm);
  if (s.includes('chuyen') || s.includes('ck') || s.includes('bank') || s.includes('qr') || s.includes('transfer')) {
    return 'chuyenkhoan';
  }
  if (s.includes('app') || s.includes('grab') || s.includes('shopee') || s.includes('be') || s.includes('food')) {
    return 'app';
  }
  return 'tienmat';
}

export function normalizeShift(s?: string): Shift {
  if (!s) return 'sang';
  const str = cleanStr(s);
  if (str.includes('chieu') || str.includes('toi')) return 'chieu-toi';
  if (str.includes('trua')) return 'trua';
  return 'sang';
}

export function cleanStr(s: string): string {
  if (!s) return '';
  return s.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

export function findMenuPrice(name: string): number {
  if (!name) return 0;
  const cleanTarget = cleanStr(name);
  let found = MENU.find(m => cleanStr(m.name) === cleanTarget);
  if (found) return found.price;
  found = MENU.find(m => cleanStr(m.name).includes(cleanTarget) || cleanTarget.includes(cleanStr(m.name)));
  if (found) return found.price;
  return 0;
}

export function findMenuCost(name: string, fallbackPrice: number = 0): number {
  if (!name) return Math.round(fallbackPrice * 0.54);
  const cleanTarget = cleanStr(name);
  let found = MENU.find(m => cleanStr(m.name) === cleanTarget);
  if (found && found.cost) return found.cost;
  found = MENU.find(m => cleanStr(m.name).includes(cleanTarget) || cleanTarget.includes(cleanStr(m.name)));
  if (found && found.cost) return found.cost;
  return Math.round(fallbackPrice * 0.54);
}

export function computeOrderCost(order: Order): number {
  if (Array.isArray(order.lines) && order.lines.length > 0) {
    return order.lines.reduce((sum, l) => sum + findMenuCost(l.name, l.price) * (l.qty || 1), 0);
  }
  return Math.round((order.total || 0) * 0.54);
}

export function parseOrderItems(rawInput?: string, orderTotal?: number): OrderLine[] {
  if (!rawInput) return [];
  let rawList = String(rawInput).split('\n').map(s => s.trim()).filter(Boolean);
  if (rawList.length === 1 && rawList[0].includes(',')) {
    rawList = rawList[0].split(',').map(s => s.trim()).filter(Boolean);
  }

  const result: OrderLine[] = [];
  for (let i = 0; i < rawList.length; i++) {
    const raw = rawList[i];
    let name = raw;
    let qty = 1;
    let note: string | undefined = undefined;
    let price = 0;

    const match = raw.match(/^(.*?)(?:\s+[xX]\s*(\d+))(?:\s*\((.*?)\))?(?:\s*=\s*(.*))?$/);
    if (match) {
      name = match[1].trim();
      qty = parseInt(match[2], 10) || 1;
      note = match[3]?.trim();
      if (match[4]) {
        const subtotal = parseInt(match[4].replace(/[^\d]/g, ''), 10) || 0;
        price = Math.round(subtotal / qty);
      }
    } else {
      const match2 = raw.match(/^(.*?)(?:\s*\((.*?)\))?$/);
      if (match2) {
        name = match2[1].trim();
        const paren = match2[2]?.trim();
        if (paren && /\d+/.test(paren)) {
          const num = parseInt(paren.replace(/[^\d]/g, ''), 10) || 0;
          if (num > 1000) price = num;
          else note = paren;
        } else if (paren) {
          note = paren;
        }
      }
    }

    if (price <= 0) {
      price = findMenuPrice(name);
    }

    if (price <= 0 && orderTotal && rawList.length === 1) {
      price = Math.round(Number(orderTotal) / qty);
    }

    result.push({
      id: `item-${Date.now()}-${i}`,
      name,
      qty,
      price,
      note
    });
  }

  return result;
}

export function isCustomerTableOrder(o: { source?: string; staff?: string; orderType?: string }): boolean {
  if (!o) return false;
  const src = (o.source || "").trim().toLowerCase();
  const staff = (o.staff || "").trim().toLowerCase();

  if (
    src.includes("tại quầy") ||
    src.includes("tai quay") ||
    src.includes("pos") ||
    src.includes("thu ngân") ||
    src.includes("thu ngan") ||
    src.includes("mang về") ||
    src.includes("mang ve") ||
    src.includes("app") ||
    src.includes("shopee") ||
    src.includes("grab") ||
    src.includes("giao hàng") ||
    src.includes("giao hang")
  ) {
    return false;
  }

  const isTableSource = /^(bàn|ban)\s*\d+/i.test(src) ||
                        src.includes("gọi bàn") ||
                        src.includes("goi ban") ||
                        src.includes("qr bàn") ||
                        src.includes("qr ban") ||
                        src.includes("tại bàn") ||
                        src.includes("tai ban");

  const isTableStaff = staff.includes("khách") && (staff.includes("bàn") || staff.includes("ban"));

  return Boolean(isTableSource || isTableStaff);
}

export const HANDLED_TABLE_ORDERS_KEY = "cafe_anvat_dongthanh_handled_table_orders_v1";

export function getHandledTableOrders(): Set<string> {
  try {
    const raw = localStorage.getItem(HANDLED_TABLE_ORDERS_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

export function markTableOrderHandled(orderId: string): void {
  try {
    const set = getHandledTableOrders();
    set.add(orderId);
    localStorage.setItem(HANDLED_TABLE_ORDERS_KEY, JSON.stringify(Array.from(set)));
  } catch {}
}

export interface BankConfig {
  bankBin: string;
  bankName: string;
  accountNo: string;
  accountName: string;
  showQrOnBill: boolean;
}

export const BANK_CONFIG_KEY = 'cafe_anvat_dongthanh_bank_config_v1';

export const POPULAR_BANKS = [
  { bin: 'MB', name: 'MBBank (Quân Đội)' },
  { bin: 'VCB', name: 'Vietcombank' },
  { bin: 'TCB', name: 'Techcombank' },
  { bin: 'ACB', name: 'ACB (Á Châu)' },
  { bin: 'CTG', name: 'VietinBank' },
  { bin: 'BIDV', name: 'BIDV' },
  { bin: 'VPB', name: 'VPBank' },
  { bin: 'TPB', name: 'TPBank' },
  { bin: 'STB', name: 'Sacombank' },
  { bin: 'VBA', name: 'Agribank' },
];

export function getBankConfig(): BankConfig {
  try {
    const raw = localStorage.getItem(BANK_CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.bankBin) return parsed;
    }
  } catch {}
  return {
    bankBin: 'MB',
    bankName: 'MBBank (Quân Đội)',
    accountNo: '0931811872',
    accountName: 'CAFE AN VAT TRAM KHOI NGHIEP',
    showQrOnBill: true
  };
}

export function saveBankConfig(cfg: BankConfig): void {
  try {
    localStorage.setItem(BANK_CONFIG_KEY, JSON.stringify(cfg));
    window.dispatchEvent(new Event(CONFIG_CHANGED_EVENT));
  } catch {}
}

export function getVietQrUrl(amount: number, orderId?: string): string {
  const cfg = getBankConfig();
  if (!cfg.accountNo) return '';
  const cleanAmt = Math.max(0, Math.round(amount || 0));
  const info = encodeURIComponent(orderId ? `TT ${orderId}` : 'CAFE AN VAT TRAM KHOI NGHIEP');
  const accName = encodeURIComponent(cfg.accountName || 'CAFE AN VAT TRAM KHOI NGHIEP');
  return `https://img.vietqr.io/image/${cfg.bankBin}-${cfg.accountNo.trim()}-compact2.png?amount=${cleanAmt}&addInfo=${info}&accountName=${accName}`;
}

export interface SopRecipeItem {
  id: string;
  category: string;
  title: string;
  prepTime: string;
  temperature: string;
  ingredients: string[];
  steps: string[];
  note: string;
}

export const SOP_RECIPES: SopRecipeItem[] = [
  {
    id: 'sop-1',
    category: '🍛 Bếp Nóng Wok (40K)',
    title: 'Cơm Gà Xối Mỡ & Cơm Gà Mắm Tỏi (Chuẩn Da Giòn)',
    prepTime: '90 – 120 giây',
    temperature: 'Bếp chiên nhúng: 170°C',
    ingredients: [
      'Đùi gà góc tư (hoặc má đùi lớn): 1 miếng (~210g - 230g đã luộc sơ 70% với gừng, nghệ, muối)',
      'Cơm chiên đỏ (gạo nở xốp rang bơ tỏi + màu điều/gấc): 220g (1 chén đầy)',
      'Đồ chua (cà rốt + củ cải ngâm chua ngọt) + Dưa leo + Xà lách: 50g',
      'Nước chấm: 1 túi sốt mắm tỏi ớt kẹo hoặc tương ớt + nước tương (30ml)'
    ],
    steps: [
      'Thả đùi gà đã ráo nước vào rổ bếp chiên nhúng ở 170°C trong 2 phút, dùng muỗng xối dầu sôi liên tục lên mặt da để da phồng giòn rụm.',
      'Nếu khách gọi Gà Mắm Tỏi: Vớt gà ra chặt miếng vừa ăn, đảo nhanh 15 giây trên chảo với 1 muỗng canh sốt mắm tỏi bơ đường.',
      'Đơm 1 chén cơm chiên nóng vào hộp 3 ngăn, xếp gà + dưa leo + đồ chua + 1 bịch canh rong biển/cải ngọt.'
    ],
    note: 'Tuyệt đối để gà thật ráo trước khi thả vào dầu để không bắn dầu và giữ lớp da giòn lâu khi mang về.'
  },
  {
    id: 'sop-2',
    category: '🍛 Bếp Nóng Wok (40K)',
    title: 'Cơm Bò Lúc Lắc / Bò Xào Rau Củ / Sườn Chua Ngọt',
    prepTime: '90 – 120 giây',
    temperature: 'Bếp khè Wok: Lửa lớn tối đa',
    ingredients: [
      'Thịt bò thăn/vai mềm thái vuông 2x2cm (đã ướp dầu hào, tỏi, tiêu, dầu ăn): 85g - 90g/phần',
      'Ớt chuông xanh/đỏ + Hành tây thái vuông (hoặc cải ngọt, bông cải): 80g',
      'Cơm chiên trứng hoặc Cơm trắng nóng: 220g',
      'Sốt xào chuẩn: 1 muỗng canh sốt tổng hợp (dầu hào + nước tương + tương cà + chút đường + tiêu)'
    ],
    steps: [
      'Đun chảo Wok thật nóng, cho 1 muỗng dầu tỏi phi, trút ớt chuông + hành tây vào đảo 20 giây cho dậy mùi khói (Wok Hei).',
      'Cho thịt bò + 1 muỗng sốt xào vào lắc lửa lớn đúng 35 - 45 giây cho bò vừa chín tới mềm ngọt (không xào quá 1 phút bò sẽ dai).',
      'Múc ra khay hộp cơm 3 ngăn, rắc tiêu xay và hành ngò.'
    ],
    note: 'Thịt bò chia sẵn từng túi/khay định lượng 85g-90g trong tủ mát để giờ cao điểm trưa chỉ việc trút vào chảo.'
  },
  {
    id: 'sop-3',
    category: '🍜 Mì & Hủ Tiếu Xào (40K)',
    title: 'Mì Xào Hải Sản / Mì Giòn / Hủ Tiếu Xào Bò',
    prepTime: '90 – 120 giây',
    temperature: 'Bếp khè Wok: Lửa lớn',
    ingredients: [
      'Mì vắt (2 vắt trụng vừa tới xả qua nước lạnh trộn chút dầu) hoặc Hủ tiếu dai: 160g',
      'Tôm bóc vỏ (3 con) + Mực khứa vảy rồng (45g) hoặc Thịt bò (80g)',
      'Cải ngọt + Cải thìa + Cà rốt tỉa hoa + Giá hẹ: 100g',
      'Sốt xào mì: 1.5 muỗng canh sốt dầu hào hải sản (nếu làm Mì Giòn thì pha thêm chút bột năng tạo độ sánh)'
    ],
    steps: [
      'Áp chảo mì/hủ tiếu trên chảo gang lửa lớn 30 giây cho sợi mì săn thơm mùi chảo.',
      'Phi tỏi, xào tôm mực/bò cùng rau cải + sốt xào trong 45 giây, sau đó đảo đều với mì (hoặc rưới lên vắt mì chiên giòn).',
      'Đóng hộp kèm nước tương ớt cắt lát.'
    ],
    note: 'Với Mì Xào Giòn mang về: Luôn để vắt mì chiên giòn vào túi riêng và nước sốt hải sản vào hộp/túi riêng để không bị ỉu!'
  },
  {
    id: 'sop-4',
    category: '🥟 Quầy FastFood (18K – 26K)',
    title: 'Bánh Bao Kẹp (BBK) Xúc Xích · Gà Rán · Tôm Phô Mai · Sườn BBQ',
    prepTime: '45 – 60 giây',
    temperature: 'Nồi hấp: 95°C | Bếp chiên/NCKD: 170°C',
    ingredients: [
      'Vỏ bánh bao kẹp (vỏ bánh cắt đôi hình vỏ sò): 1 cái (giữ nóng trong xửng hấp có lót màng lưới chống dính)',
      'Nhân tùy chọn: 1 cây xúc xích khía (18K) / 1 miếng gà rán giòn 65g (20K) / 1 miếng chả tôm 70g (24K) + 1 lát phô mai (26K) / Sườn BBQ (25K)',
      'Rau kèm: 1 lá xà lách tươi + 2 lát dưa leo + đồ chua sợi',
      'Sốt đặc trưng: Xịt ziczac Tương ớt + Sốt Mayonnaise + Sốt phô mai/BBQ'
    ],
    steps: [
      'Lấy vỏ bánh bao nóng từ xửng hấp ra bằng kẹp gắp inox.',
      'Lót xà lách + dưa leo vào lòng bánh, đặt nhân vừa chiên giòn (xúc xích/gà/tôm/sườn) + lát phô mai lên khi nhân còn nóng để phô mai tan chảy.',
      'Xịt sốt tương ớt + mayo, cho vào túi giấy thấm dầu giao khách ngay trong 60 giây.'
    ],
    note: 'Luôn đậy nắp nồi hấp và kiểm tra mực nước dưới đáy xửng mỗi 2 tiếng để vỏ bánh bao trắng mềm, không bị khô mặt.'
  },
  {
    id: 'sop-5',
    category: '🍔 FastFood & Ăn Vặt (20K – 40K)',
    title: 'Mì Cay 7 Cấp Độ · Mì Trộn Thập Cẩm · Hamburger · Bánh Tráng Trộn',
    prepTime: '2 – 3 phút',
    temperature: 'Bếp đơn / Nồi chiên không dầu 180°C',
    ingredients: [
      'Mì Cay (40K): 1 gói mì Koreno + 450ml nước dùng kim chi chua cay + Bò/Tôm/Mực/Cá viên/Xúc xích + Nấm kim châm + Bông cải + Bắp cải tím',
      'Mì Trộn (30K): 2 vắt mì + 1.5 muỗng sốt trộn chua ngọt cay + Xúc xích + Gà rán cắt lát + Trứng ốp la lòng đào',
      'Hamburger (28K): Vỏ bánh burger nướng ấm 30s trong nồi chiên không dầu + Nhân bò/gà giòn + Phô mai + Xà lách + Cà chua'
    ],
    steps: [
      'Định lượng ớt cấp độ Mì Cay: Cấp 0 (không ớt), Cấp 1 (1/2 muỗng cà phê sốt ớt Hàn Quốc), Cấp 2 (1 muỗng), Cấp 3 (1.5 muỗng)...',
      'Nấu nước dùng sôi bùng, thả hải sản/bò + rau nấm + mì Koreno nấu đúng 2 phút 30 giây là tắt bếp để sợi mì dai ngon.'
    ],
    note: 'Cốt nước dùng kim chi nấu sẵn 1 nồi 5 lít vào đầu ca chiều (15h30) để ca tối múc ra nấu siêu tốc.'
  }
];

