// ulike-purchase.js
var obj = {};
try {
  obj = JSON.parse($response.body || '{}');
} catch (e) {
  obj = {};
}

// Ensure data structure
obj.ret = "0";
obj.errmsg = "success";
obj.systime = obj.systime || Date.now().toString();
obj.log_id = obj.log_id || "FAKE_" + Date.now();

obj.data = obj.data || {};
obj.data.has_more = false;
obj.data.next_cursor = 0;
obj.data.authkey = obj.data.authkey || "7ada8f7f363f517bd9ebb8eef7d2486c";

// Fake premium subscription
obj.data.list = [{
  "product_id": "beauty_subscription_year",
  "expire_time": 9999999999999,
  "is_valid": true,
  "purchase_time": Date.now(),
  "order_id": "FAKE_ORDER_" + Date.now()
}];

$done({body: JSON.stringify(obj)});
