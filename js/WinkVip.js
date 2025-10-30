(function () {
  if (typeof $response === "undefined" || !$response.body) {
    $done({});
    return;
  }

  try {
    var Luonghiii = $response.body;
    var Obj = JSON.parse(Luonghiii);
    var LuongNguyen = "1180396800000";

    Obj.data = {
      active_sub_type: 2,
      account_type: 1,
      sub_type_name: "Gia hạn tự động",
      active_sub_order_id: "7069961436604422668",
      trial_period_invalid_time: "",
      current_order_invalid_time: LuongNguyen,
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
      invalid_time: LuongNguyen,
      valid_time: LuongNguyen,
      active_product_id: "0",
      active_promotion_status: 2,
      show_renew_flag: true
    };

    $done({ body: JSON.stringify(Obj) });
  } catch (loi) {
    $done({ body: $response.body });
  }
})();