// ===== CODE ĐÃ GIẢI MÃ =====
// Đây là script giả mạo response subscription cho ứng dụng VivaCut

// Parse response gốc từ server
var originalResponse = JSON.parse($response.body);

// Tạo object subscription giả mạo
var fakeSubscription = {
// Các thuộc tính được mã hóa trong code gốc:
platform: “apple_app_store”,  // Nền tảng
status: “active”,              // Trạng thái: active (đang hoạt động)
autoRenewStatus: true,         // Tự động gia hạn: true
purchaseDate: 1234567890123,   // Ngày mua (timestamp)
productId: “VivaCut_Yearly_Pro_9”,  // ID sản phẩm
quantity: 3,                   // Số lượng
transactionId: “8a3cfa3e046296a19a2611d48e04fedc”,  // ID giao dịch giả
type: 1,                       // Loại
expireDate: 1735678901234,     // Ngày hết hạn (timestamp xa trong tương lai)
autoRenewProductId: true,      // ID sản phẩm tự động gia hạn
environment: “Production”       // Môi trường: Production
};

// Tạo response giả mạo
var fakeResponseData = {
consumedProducts: [],          // Sản phẩm đã tiêu thụ: rỗng
nonConsumables: [fakeSubscription],  // Sản phẩm không tiêu thụ (subscription)
productIds: [“VivaCut_Yearly_Pro_9”], // Danh sách ID sản phẩm
systemDate: 1735678901234,     // Ngày hệ thống
subscriptions: [“VivaCut_Yearly_Pro_9”]  // Danh sách subscriptions
};

// Tạo response JSON hoàn chỉnh
var fakeResponse = {
status: 200,                   // HTTP status: 200 OK
data: fakeResponseData,        // Dữ liệu giả mạo
message: “successful”,         // Thông điệp: thành công
success: true                  // Success: true
};

// Ghi đè response gốc bằng response giả mạo
originalResponse = fakeResponse;

// Trả về response đã sửa đổi
var result = {
body: JSON.stringify(originalResponse)
};

$done(result);

// ===== GIẢI THÍCH =====
/*
Script này được sử dụng trong các công cụ như Surge, Quantumult X, hoặc các
proxy tương tự để:

1. Chặn (intercept) response từ server khi app kiểm tra subscription
1. Thay thế response thật bằng response giả mạo
1. Làm cho app “nghĩ” rằng người dùng đã mua subscription premium

CẢNH BÁO:

- Đây là hành vi vi phạm điều khoản sử dụng của ứng dụng
- Có thể vi phạm luật bản quyền và sở hữu trí tuệ
- Tài khoản có thể bị khóa/cấm
- Không khuyến khích sử dụng

CHÚ Ý KỸ THUẬT:

- Code gốc sử dụng obfuscation để che giấu mục đích
- Sử dụng RC4 encryption với base64 encoding
- Timestamps được hardcode để subscription “không bao giờ hết hạn”
  */
