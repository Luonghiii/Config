var obj = JSON.parse($response.body);

if (obj && obj.data && obj.data.subscribing === false) {
  obj.data = {
    ...obj.data,
    "yearlyConversion": true,
    "eligible": true,
    "productId": "subscription_yearly",
    "expireTime": "3389446800000
    "subscribing": true
  };
}

$done({ body: JSON.stringify(obj) });
