var body = $response.body;

// Ẩn banner + thêm premium plan
body = body.replace(/"_isEligibleForFreeTrial":true/g, '"_isEligibleForFreeTrial":false');
body = body.replace(/"_featurePlanType":null/g, '"_featurePlanType":"premium"');

$done({body: body});