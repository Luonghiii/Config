(function () {
  if (typeof $response === "undefined" || !$response.body) {
    $done({});
    return;
  }

  try {
    let obj = JSON.parse($response.body);
    
    // Sử dụng số (number) thay vì chuỗi (string) cho timestamp để tương thích tốt hơn
    // 4070908800000 tương đương với năm 2099
    const expiryTime = 4070908800000;

    obj.data = {
      ...obj.data, // Giữ lại các field cũ nếu có
      active_sub_type: 2,
      account_type: 1,
      sub_type_name: "Gia hạn tự động",
      active_sub_order_id: "7069961436604422668",
      trial_period_invalid_time: "",
      current_order_invalid_time: String(expiryTime),
      active_order_id: "7069961436340181123",
      limit_type: 0,
      active_sub_type_name: "Gia hạn tự động",
      use_vip: true,
      have_valid_contract: true,
      derive_type_name: "Thành viên Thông thường",
      derive_type: 1,
      in_trial_period: false,
      is_vip: true,
      membership: {
        id: "4",
        display_name: "Thành viên Wink",
        level: 1,
        level_name: "Thành viên Thông thường"
      },
      active_promotion_status_list: [2],
      sub_type: 2,
      account_id: "1230010086",
      invalid_time: String(expiryTime + 100000), // Cho lớn hơn valid một chút
      valid_time: 1546992000000, // Để ngày bắt đầu cũ cho hợp lệ
      active_product_id: "0",
      active_promotion_status: 2,
      show_renew_flag: true
    };

    $done({ body: JSON.stringify(obj) });
  } catch (err) {
    console.log("Wink Fix Error: " + err);
    $done({ body: $response.body });
  }
})();
