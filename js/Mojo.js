var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "pro":{
              "expires_date":"2077-05-29T01:01:01Z",
              "product_identifier":"video.mojo.pro.yearly",
              "purchase_date":"2007-05-29T01:01:01Z"
      }
  },
  
obj.subscriber.subscriptions ={
      "video.mojo.pro.yearly":{
              "billing_issues_detected_at":null,
              "expires_date":"2077-05-29T01:01:01Z",
              "is_sandbox":false,
              "original_purchase_date":"2007-05-29T01:01:01Z",
              "period_type":"normal",
              "purchase_date":"2007-05-29T01:01:01Z",
              "store":"app_store",
              "unsubscribe_detected_at":null
      }
  }

body = JSON.stringify(obj);
$done({body});