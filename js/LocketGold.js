const mapping = {
  'Locket': ['Gold']
};

const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const obj = JSON.parse($response.body);

// ===== Bảo vệ lỗi null =====
obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

// ===== Thông báo cho user =====
obj.Attention = "🎉 Chúc mừng bạn! Vui lòng KHÔNG bán hoặc chia sẻ script này – By Luonghiii";

// ===== Subscription giả (mô phỏng giao dịch App Store) =====
const Locket = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2100-10-10T00:00:00Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2025-11-01T00:00:00Z",
  purchase_date: "2025-11-01T00:00:00Z",
  store: "app_store"
};

// ===== Entitlement giả =====
const Gold = {
  grace_period_expires_date: null,
  purchase_date: "2025-11-01T00:00:00Z",
  product_identifier: "com.Locket.premium.yearly",
  expires_date: "2100-10-10T00:00:00Z"
};

// ===== Tìm app phù hợp theo User-Agent =====
const match = Object.keys(mapping).find(key => ua.includes(key));

if (match) {
  // mapping[match] = [entitlementName, subscriptionKey?]
  const [entitlementName, subscriptionKey] = mapping[match];

  if (subscriptionKey) {
    // Có subscriptionKey → dùng nó để ghi vào subscriptions
    Gold.product_identifier = subscriptionKey;
    obj.subscriber.subscriptions[subscriptionKey] = Locket;
  } else {
    // Không có → dùng ID mặc định
    obj.subscriber.subscriptions["com.Locket.premium.yearly"] = Locket;
  }

  // Gán entitlement tương ứng
  obj.subscriber.entitlements[entitlementName] = Gold;

} else {
  // fallback nếu UA không khớp
  obj.subscriber.subscriptions["com.Locket.premium.yearly"] = Locket;
  obj.subscriber.entitlements.pro = Gold;
}

// ===== Trả response đã chỉnh sửa =====
$done({ body: JSON.stringify(obj) });