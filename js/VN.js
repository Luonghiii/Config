var luong = JSON.parse($response.body);

luong = {
  "msg": "success",
  "data": [
    {
      "status": 1,
      "is_free_trial": false,
      "active": true,
      "product_identifier": "Product_Auto_Renew_Annual",        
      "enabled_auto_renew": true,                     
      "is_gift_subscription": false,
      "platform": "iOS",
      "billing_date_ms": 1180396800000,
      "original_purchase_date_ms": 1180396800000,
      "start_date_ms": 1180396800000,
      "expires_date_ms": 4092599349000,
      "group_identifier": "20936308",
      "origin_transaction_id": "0000000000"     
    }
  ],
  "code": 1
};

$done({ body: JSON.stringify(luong) });
