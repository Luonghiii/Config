var obj = JSON.parse($response.body);

    obj = {
  "vip_expires_date": 3393619200,
  "message": "success",
}

$done({body : JSON.stringify(obj)});