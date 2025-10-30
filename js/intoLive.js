// MOCK receipt for DEVELOPMENT only
// Use only in local/dev builds. Remove before shipping.

var devMockReceipt = {
  "receipt": {
    "receipt_type": "Production",
    "bundle_id": "me.imgbase.intolive",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1761782400000",          // 2025-10-30T00:00:00Z
        "transaction_id": "17617824000001234",
        "original_transaction_id": "17041104000001234",
        "product_id": "me.imgbase.intolive.proSubYearly",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1704110400000" // 2024-01-01T12:00:00Z (example)
      }
    ],
    "application_version": "6",
    "original_purchase_date_ms": "1704110400000",
    "original_application_version": "6"
  },
  "environment": "Production",
  "pending_renewal_info": [
    {
      "product_id": "me.imgbase.intolive.proSubYearly",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1761782400000",
      "expires_date": "2100-06-06 06:06:06 Etc/GMT",
      "expires_date_pst": "2100-06-05 23:06:06 America/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "17617824000001234",
      "is_trial_period": "false",
      "original_transaction_id": "17041104000001234",
      "product_id": "me.imgbase.intolive.proSubYearly",
      "original_purchase_date_ms": "1704110400000",
      "expires_date_ms": "4115945166000"
    }
  ]
};

$done({ body: JSON.stringify(devMockReceipt) });