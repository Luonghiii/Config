var obj = JSON.parse($response.body);
const vipa = '/api/subscription/verified';
const vipb = '/api/auth/login';
const vipc = '/api/check-logged';
const vip = {
    "auto_resume_date" : null,
    "status" : "active",
    "account_type" : "patron-annual",
    "cancel_date" : null,
    "start_date" : "2025-11-01T01:01:01.000000Z",
    "expire_date" : "2077-05-29T01:01:01.000000Z"
  };

if ($request.url.indexOf(vipa) != -1){
  obj.data = (vip);
}

if ($request.url.indexOf(vipb) != -1){
  obj.user.subscription = (vip)
  obj.user.account_type = "patron-annual";
}

if ($request.url.indexOf(vipc) != -1){
  obj.subscription = (vip)
  obj.account_type = "patron-annual";
}

$done({body : JSON.stringify(obj)});
