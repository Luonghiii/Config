var obj = JSON.parse($response.body);

// Set tất cả giá thành 0đ và bỏ trial
obj.data.price_list.forEach(item => {
  item.total_amount = 0;
  item.price_tips = "0";
  item.can_trial = true;
  item.trial_tips = "Miễn phí vĩnh viễn";
});

obj.data.unauto_price_list.forEach(item => {
  item.total_amount = 0;
  item.price_tips = "0";
});

$done({body: JSON.stringify(obj)});
