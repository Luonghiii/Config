// B_ulike_full_premium.js
var obj = {};
try {
  obj = JSON.parse($response.body || '{}');
} catch (e) {
  obj = {};
}

// Replace whole payload with a clean mock that UI expects
var mock = {
  "ret": "0",
  "errmsg": "success",
  "systime": Date.now().toString(),
  "log_id": "DEV-MOCK-" + Math.floor(Math.random()*100000),
  "response": "{\"has_more\":false,\"next_cursor\":0,\"list\":[],\"authkey\":\"DEV_AUTHKEY_123\"}",
  "sign": "DEV_SIGN",
  "data": {
    "has_more": false,
    "next_cursor": 0,
    "list": [],
    "authkey": "DEV_AUTHKEY_123",
    "subscription": {
      "is_sandbox": true,
      "ownership_type": "PURCHASED",
      "product_id": "beauty_subscription_year",
      "purchase_date": "2025-11-01T00:00:00Z",
      "expires_date": "2099-01-01T00:00:00Z",
      "period_type": "normal",
      "in_trial": false,
      "auto_renewal": true
    },
    "price_list": [
      {
        "product_id": "beauty_subscription_year",
        "total_amount": 399000,
        "currency_code": "VND",
        "price_tips": "399,000",
        "subscribe_cycle": 12,
        "cycle_unit": "MONTH"
      }
    ],
    "default_product_id": "beauty_subscription_year"
  }
};

$done({ body: JSON.stringify(mock) });
