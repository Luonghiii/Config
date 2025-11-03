var luong = JSON.parse($response.body);

luong = {
  "msg": "success",
  "data": [
    {
      "status": 1,
      "is_free_trial": false,
      "active": true,
      "product_identifier": "Product_Auto_Renew_Annual_2025_01_11",        
      "enabled_auto_renew": true,                     
      "is_gift_subscription": false,
      "platform": "iOS",
      "billing_date_ms": 1761955200000,
      "original_purchase_date_ms": 1761955200000,
      "start_date_ms": 1761955200000,
      "expires_date_ms": 3389472000000,
      "group_identifier": "20936308",
      "origin_transaction_id": "490000029052007
"     
    }
  ],
  "code": 1
};

$done({ body: JSON.stringify(luong) });