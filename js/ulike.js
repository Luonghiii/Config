var obj = JSON.parse($response.body);

obj.data.list = [{
  "product_id": "beauty_subscription_year",
  "expire_time": 9999999999999,
  "is_valid": true,
  "premium_status": "ACTIVE",
  "auto_renew": true
}];

$done({body: JSON.stringify(obj)});
