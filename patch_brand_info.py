# -*- coding: utf-8 -*-
import os
import sys

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

def replace_in_file(path, old, new):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if old in content:
        content = content.replace(old, new)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {path} -> replaced '{old[:30]}...'")
    else:
        print(f"Pattern not found in {path}: '{old[:30]}...'")

# 1. PlannerPage.tsx
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/pages/PlannerPage.tsx',
    'BÁO CÁO ĐƠN HÀNG & CHI PHÍ - FOOD STATION 7A (PHƯỚC THIỆN)',
    'BÁO CÁO ĐƠN HÀNG & CHI PHÍ - CAFE ĂN VẶT TRẠM KHỞI NGHIỆP'
)
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/pages/PlannerPage.tsx',
    'Cơm Chiên · Mì Xào · Bánh Bao Kẹp · FastFood • <strong>Số 2 Đường 7A, KP. Phước Thiện, P. Long Bình, TP. Thủ Đức</strong>',
    'Cà Phê Muối · Trà Dâu · Đồ Ăn Vặt · Mì Trộn • <strong>36/5E Nguyễn Thị Ngâu, Trung Đông 8, Xã Đông Thạnh, TP.HCM</strong>'
)

# 2. GoogleSheetSyncPanel.tsx
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/components/GoogleSheetSyncPanel.tsx',
    "'FOOD STATION 7A'",
    "'CAFE ĂN VẶT TRẠM KHỞI NGHIỆP'"
)
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/components/GoogleSheetSyncPanel.tsx',
    'DÃ LIÊN KẾT GOOGLE TRANG TÍNH RIÊNG (FOOD STATION 7A)',
    'ĐÃ LIÊN KẾT GOOGLE TRANG TÍNH RIÊNG (CAFE ĂN VẶT TRẠM KHỞI NGHIỆP)'
)
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/components/GoogleSheetSyncPanel.tsx',
    'ĐÃ LIÊN KẾT GOOGLE TRANG TÍNH RIÊNG (FOOD STATION 7A)',
    'ĐÃ LIÊN KẾT GOOGLE TRANG TÍNH RIÊNG (CAFE ĂN VẶT TRẠM KHỞI NGHIỆP)'
)

# 3. BusinessPlanPage.tsx
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/pages/BusinessPlanPage.tsx',
    '// Mặt bằng Số 2 Đường 7A Phước Thiện',
    '// Mặt bằng 36/5E Nguyễn Thị Ngâu Đông Thạnh'
)
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/pages/BusinessPlanPage.tsx',
    'Chi Phí Vận Hành Thực Tế Hàng Tháng (OPEX) tại KP. Phước Thiện',
    'Chi Phí Vận Hành Thực Tế Hàng Tháng (OPEX) tại Đông Thạnh'
)
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/pages/BusinessPlanPage.tsx',
    '1. Chi phí Mặt bằng (Số 2 Đường 7A, Phước Thiện)',
    '1. Chi phí Mặt bằng (36/5E Nguyễn Thị Ngâu, Đông Thạnh)'
)
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/pages/BusinessPlanPage.tsx',
    'Mặt bằng khu dân cư Phước Thiện (Có thể điều chỉnh ở tab Mô phỏng nếu mặt bằng nhà)',
    'Mặt bằng 36/5E Nguyễn Thị Ngâu Đông Thạnh (Có thể điều chỉnh ở tab Mô phỏng nếu mặt bằng nhà)'
)

# 4. appsScriptTemplate.ts
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/lib/appsScriptTemplate.ts',
    'FOOD STATION 7A - Quán Ăn Nhanh Phước Thiện',
    'CAFE ĂN VẶT TRẠM KHỞI NGHIỆP - Đông Thạnh'
)
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/lib/appsScriptTemplate.ts',
    'FOOD STATION 7A (QUÁN AN NHANH PHƯỚC THIỆN)',
    'CAFE ĂN VẶT TRẠM KHỞI NGHIỆP (ĐÔNG THẠNH)'
)
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/lib/appsScriptTemplate.ts',
    'Số 2, Đường 7A, KP. Phước Thiện, P. Long Bình, TP. Thủ Đức',
    '36/5E Nguyễn Thị Ngâu, Trung Đông 8, Xã Đông Thạnh, TP.HCM'
)
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/lib/appsScriptTemplate.ts',
    'QUẢN LÝ QUÁN ĂN NHANH 7A - PHƯỚC THIỆN',
    'QUẢN LÝ CAFE ĂN VẶT TRẠM KHỞI NGHIỆP - ĐÔNG THẠNH'
)
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/lib/appsScriptTemplate.ts',
    'FOOD STATION 7A (PHƯỚC THIỆN)',
    'CAFE ĂN VẶT TRẠM KHỞI NGHIỆP (ĐÔNG THẠNH)'
)
replace_in_file(
    'c:/Users/pc/Desktop/cafe-an-vat-tram-khoi-nghiep/src/lib/appsScriptTemplate.ts',
    'FOOD STATION 7A',
    'CAFE ĂN VẶT TRẠM KHỞI NGHIỆP'
)
print("Finished patching brand info!")
