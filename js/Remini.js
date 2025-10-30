
const mapping = {'Remini': ['Preminum'],
}; // danh sách app
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const obj = JSON.parse($response.body);

const subData = {
  "is_sandbox": false,
  "ownership_type": "PURCHASED",
  "expires_date": "2099-09-09T09:09:09Z",
  "original_purchase_date": "2022-09-08T01:04:18Z",
  "purchase_date": "2022-09-08T01:04:17Z",
  "store": "app_store"
};

const entitlementData = {
  "product_identifier": "com.ddgksf2013.premium.yearly",
  "expires_date": "2099-09-09T09:09:09Z",
  "purchase_date": "2022-09-08T01:04:17Z"
};

// khớp app theo User-Agent
const match = Object.keys(mapping).find(k => ua.includes(k));

if (match) {
  const [key, product_id] = mapping[match];
  obj.subscriber.subscriptions[product_id] = subData;
  obj.subscriber.entitlements[key] = entitlementData;
}

$done({ body: JSON.stringify(obj) });