// C_ulike_merge_premium.js
var obj = {};
try {
  obj = JSON.parse($response.body || '{}');
} catch (e) {
  obj = {};
}

// Ensure data exists
obj.data = obj.data || {};

// Set / override subscription fields for dev testing
obj.data.authkey = obj.data.authkey || "DEV_AUTHKEY_123";
obj.data.subscription = {
  is_sandbox: true,
  ownership_type: "PURCHASED",
  product_id: "beauty_subscription_year",
  purchase_date: "2025-11-01T00:00:00Z",
  expires_date: "2099-01-01T00:00:00Z",
  period_type: "normal",
  in_trial: false,
  auto_renewal: true
};

// Optionally ensure price_list exists (you can modify amounts)
obj.data.price_list = obj.data.price_list && obj.data.price_list.length
  ? obj.data.price_list
  : [
      {
        product_id: "beauty_subscription_year",
        total_amount: 399000,
        currency_code: "VND",
        price_tips: "399,000",
        subscribe_cycle: 12,
        cycle_unit: "MONTH"
      }
    ];

// update top-level fields a bit for clarity
obj.ret = "0";
obj.errmsg = "success";
obj.systime = obj.systime || Date.now().toString();
obj.log_id = obj.log_id || ("DEV-MOCK-" + Math.floor(Math.random()*100000));

$done({ body: JSON.stringify(obj) });
