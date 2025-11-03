var obj = JSON.parse($response.body);
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
const times = Date.now();

const id = "com.campmobile.snow.subscribe.oneyear";

if (ua && ua.toLowerCase().startsWith("iphoneapp.snow".toLowerCase())) {

        obj.result = {
        "products": [
            {
                "managed": true,
                "status": "ACTIVE",
                "startDate": times,
                "productId": list[key].id,
                "expireDate": 3389472000000
            }
        ],
        "tickets": [
            {
                "managed": true,
                "status": "ACTIVE",
                "startDate": times,
                "productId": list[key].id,
                "expireDate": 3389472000000
            }
        ],
        "activated": true
        };
        console.log("Congratulation");
        break;
    }
}

$done({ body: JSON.stringify(obj) });