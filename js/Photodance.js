var obj = JSON.parse($response.body);

obj.data = {
  ...obj.data,
  "vip_remain_time" : 3337645200,
  "vip_type" : 1,
  "vip_year" : 1
},

$done({body : JSON.stringify(obj)});