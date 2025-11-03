var obj = JSON.parse($response.body);
const times = Date.now();

obj.result = {
    "products": [
        {
            "managed": true,
            "status": "ACTIVE",
            "startDate": times,
            "productId": "com.campmobile.snow.subscribe.oneyear",
            "expireDate": 3389472000000
        }
    ],
    "tickets": [
        {
            "managed": true,
            "status": "ACTIVE",
            "startDate": times,
            "productId": "com.campmobile.snow.subscribe.oneyear",
            "expireDate": 3389472000000
        }
    ],
    "activated": true
};

console.log("Congratulation");

$done({ body: JSON.stringify(obj) });
