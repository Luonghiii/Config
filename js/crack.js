/***********************************

> ScriptName: Revenuecat Subscribe 
> Author: Luonghiii
> Thời gian cập nhật: 2025-10-29
> Lưu ý: Việc mở khóa chỉ là tạm thời và việc mua hàng không phải là vĩnh viễn
> Lưu ý: 📣 Đối với một số ứng dụng không hoạt động, vui lòng hạ cấp, tìm giải pháp thay thế hoặc mua hỗ trợ.
> Lưu ý: Vui lòng  dẫn nguồn khi trích dẫn. Cảm ơn sự hợp tác của bạn!
# ========Danh sách các app mở khóa======== #
https://appraven.net/collection/210188962

[rewrite_local]
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://gist.githubusercontent.com/Luonghiii/9f4a8a796a8974e40fbf1d3640e295b6/raw/crack.js
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts|subscribers) url script-request-header https://raw.githubusercontent.com/Luonghiii/Config/refs/heads/main/js/deleteheader.js
***********************************/
const mapping = {
  '1Blocker': ['premium'],
  '1LemonKeepAccounts/': ['vip'],
  'Accountit/': ['spenditPlus','DesignTech.SIA.Spendit.Plus.Lifetime'],
  'AI%20Art%20Generator/': ['Unlimited Access'],
  'Airmail': ['Airmail Premium'],
  'alcohol.tracker': ['pro','drinklog_lifetime'],
  'Alpenglow': ['newPro'],
  'andyworks-calculator': ['patron'],
  'Anybox': ['pro'],
  'Aphrodite': ['all'],
  'apollo': ['all'],
  'APTV': ['pro'],
  'audiomack': ['Premium1'],
  'AudioPlayer': ['Pro'],
  'Aula/': ['Pro access'],
  'Awesome%20Habits': ['premium'],
  'BlackBox': ['plus','app.filmnoir.appstore.purchases.lifetime'],
  'Blackout/': ['premium','blackout_299_lt'],
  'Blurer': ['paid_access'],
  'Budget%20Flow': ['full_access','com.fabian.hasse.haushaltsbuch.upgrade.combined'],
  'Budgetify/': ['premium','budgetify_3999_lt'],
  'card/': ['vip'],
  'CardPhoto': ['premium'],
  'ChatGPTApp': ['Advanced'],
  'Chronicling/': ['Premium'],
  'CircleTime/': ['Premium'],
  'com.dison.diary': ['vip'],
  'Cookie': ['allaccess','app.ft.Bookkeeping.lifetime'],
  'CountDuck': ['premium', 'Lifetime'],
  'CPUMonitor': ['Pro'],
  'Currency': ['plus'],
  'Currency-Converter/': ['pro'],
  'Darkroom': ['co.bergen.Darkroom.entitlement.allToolsAndFilters'],
  'DayPoem': ['Pro Lifetime'],
  'DecibelMeter/': ['Premium'],
  'Decision': ['com.nixwang.decision.entitlements.pro'],
  'Dedupe/': ['Pro','com.curiouscreatorsco.Dedupe.pro.lifetime.notrial.39_99'],
  'Duplete/': ['Pro'],
  'Echo': ['PLUS'],
  'Email%20Me': ['premium'],
  'Emphasis/': ['premium'],
  'EraseIt/': ['ProVersionLifeTime'],
  'Everlog': ['premium'],
  'FaceMa/': ['Pro access'],
  'fastdiet': ['premium'],
  'Fiery': ['premium'],
  'Fileball': ['filebox_pro'],
  'Fin': ['premium', 'com.circles.fin.premium.yearly'],
  'FinancialNote': ['category'],
  'Focused%20Work': ['Pro'],
  'FoJiCam/': ['ProVersionLifeTime'],
  'FormScanner/': ['Pro','formscanner_lifetime'],
  'G%20E%20I%20S%20T': ['memorado_premium'],
  'GBA/': ['xGBA.pro'],
  'Gear': ['pro', 'com.gear.app.yearly'],
  'GetFace': ['Pro access'],
  'GoodThing/': ['pro','goodhappens_basic_year'],
  'GoToSleep': ['Pro'],
  'Grain/': ['gold','lifetimeMembership'],
  'Grow': ['grow.pro', 'grow_lifetime'],
  'Happy%3ADays': ['pro', 'happy_999_lifetime'],
  'Haushaltsbuch': ['full_access','com.fabian.hasse.haushaltsbuch.upgrade.combined'],
  'HTTPBot': ['pro'],
  'ImageX': ['imagex.pro.ios', 'imagex.pro.ios.lifetime'],
  'intervalFlow': ['All Access','wodtimer_lf_free'],
  'iplayTV/': ['com.ll.btplayer.12'],
  'IPTVUltra': ['premium'],
  'iRead': ['vip'],
  'jinduoduo_calculator': ['jinduoduoapp','mobile_vip'],
  'jizhi': ['jizhi_vip'],
  'Journal_iOS/': ['PRO'],
  'kegel': ['kegel_pro'],
  'Ledger': ['Pro', 'com.lifetime.pro'],
  'LemonKeepAccounts/': ['VIP','lm_1_1month'],
  'LiveWallpaper': ['Pro access'],
  'Locket': ['Gold'],
  'LockFlow/': ['unlimited_access'],
  'LUTCamera': ['ProVersion', 'com.uzero.funforcam.monthlysub'],
  'mark_cup/': ['premiun'],
  'Medication%20List/': ['Premium'],
  'MetadataEditor': ['unlimited_access'],
  'MindBreathYoga/': ['lifetimeusa'],
  'mizframa': ['premium', 'mf_20_lifetime2'],
  'money_manager': ['premium'],
  'MoneyThings': ['Premium'],
  'MOZE': ['premium'],
  'multitimer_app': ['premium','timus_lt'],
  'MusicBox/': ['Premium','musicbox_2999_lifetime'],
  'MusicMate': ['premium','mm_lifetime_68_premium'],
  'My%20Jump%20Lab': ['lifetime'],
  'My%20Tim': ['Pro'],
  'MyThings': ['pro','xyz.jiaolong.MyThings.pro.infinity'],
  'nbcamera/': ['patron','com.andyworks.camera.yearlyPatron'],
  'NeatNook/': ['com.neatnook.pro','com.neatnook.pro.forever'],
  'Notedrafts': ['pro_entitlement'],
  'Noto': ['pro'],
  'Ochi': ['Pro'],
  'OffScreen': ['Entitlement.Pro'],
  'One4Wall': ['lifetime', 'lifetime_key'],
  'OneBox': ['all'],
  'OneWidget': ['allaccess'],
  'Ooga/': ['Ooga'],
  'Overdue': ['Pro'],
  'Paku': ['pro'],
  'PastePal': ['premium'],
  'PDF%20Viewer': ['sub.pro'],
  'PDF_convertor/': ['VIP', 'com.pdf.convertor.forever'],
  'pdfai_app/': ['premium'],
  'Percento': ['premium'],
  'Period%20Calendar': ['Premium','com.lbrc.PeriodCalendar.premium.yearly'],
  'Photom': ['premium', 'pixelmator_photo_pro_subscription_v1_pro_offer'],
  'PhotoMark/': ['Pro', 'com.photo.mark.forever'],
  'Photomator': ['pixelmator_photo_pro_access'],
  'Photon/': ['photon.paid','photon.bundle.yearly'],
  'PhotoRoom': ['business'],
  'Pillow': ['premium'],
  'PinPaper': ['allaccess'],
  'Planny': ['premium'],
  'Pomodoro': ['Plus','com.MINE.PomodoroTimer.plus.yearly'],
  'Precious/': ['Pro'],
  'ProCamera': ['private_lightbox_entitlement&amp;amp;san_fran_entitlement&amp;amp;pro_camera_up_entitlement&amp;amp;procamera_full_entitlement','com.cocologics.ProCamera.Up.Yearly'],
  'Project%20Delta/': ['rc_entitlement_obscura_ultra'],
  'QingLong': ['Premium'],
  'Rats%20Project': ['PandaTracker_Premiumv2','monthly_subscription_discount_idv3'],
  'reader': ['vip2','com.valo.reader.vip2.year'],
  'Rec/': ['rec.paid','rec.paid.onetime'],
  'Record2Text/': ['Pro access'],
  'Reels%20Editor': ['Unlimited Access'],
  'Reflix': ['com.magicgroot.reflix.entitlements','com.magicgroot.reflix.subs.lifetime'],
  'ScannerPro': ['plus'],
  'ScientificCalculator': ['premium','com.simpleinnovation.calculator.ai.premium.yearly.base'],
  'ScreenRecordCase/': ['Premium'],
  'server_bee': ['Pro'],
  'SharkSMS': ['VIP','com.lixkit.diary.permanent_68'],
  'ShellBean/': ['pro','com.ningle.shellbean.subscription.year'],
  'simple-': ['patron'],
  'SimpleScan/': ['premium', 'com.atlantia.SimpleScan.Purchases.Lifetime'],
  'SleepMaster/': ['premium','sm_14999_lifetime'],
  'Spark': ['premium'],
  'Spektr': ['premium'],
  'StepUp/': ['premiun'],
  'streaks': ['patron'],
  'streamer/': ['Premium'],
  'Stress': ['StressWatch Pro'],
  'Subtracky': ['premium','premium_subtracky_lifetime'],
  'Tangerine': ['Premium'],
  'Taskbit/': ['Pro'],
  'Tasks': ['Pro'],
  'tiimo': ['full_access'],
  'timetrack.io': ['atimelogger-premium-plus'],
  'To%20Me/': ['Premium'],
  'Today%20App/': ['Premium', 'TodayApp_Lifetime'],
  'totowallet': ['all', 'com.ziheng.totowallet.yearly'],
  'TouchRetouchBasic': ['premium'],
  'Unfold': ['REDUCED_PRO_YEARLY','UNFOLD_PRO_YEARLY'],
  'universal/': ['Premium','remotetv.yearly.07'],
  'UTC': ['Entitlement.Pro'],
  'vibes': ['patron'],
  'VSCO': ['membership'],
  'Wake%20Music': ['premium','com.OfflineMusic.www.lifetime198'],
  'WhiteCloud': ['allaccess','wc_pro_1y'],
  'widget_art': ['all'],
  'WidgetCat': ['MiaoWidgetPro'],
  'WidgetSmith': ['Premium'],
  'Wozi': ['wozi_pro_2023'],
  'Yosum/': ['Premium'],
  'YzyFit/': ['pro', 'yzyfit_lft_v2'],
  '%E4%BA%8B%E7%BA%BF': ['pro','xyz.jiaolong.eventline.pro.lifetime'],
  '%E5%85%83%E6%B0%94%E8%AE%A1%E6%97%B6': ['plus'],
  '%E6%9F%A5%E5%A6%86%E5%A6%86': ['Pro access'],
  '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE': ['pro'],
  '%E7%BE%8E%E5%A6%86%E6%97%A5%E5%8E%86': ['Pro access'],
  '%E8%A8%80%E5%A4%96%E7%AD%86%E8%A8%98/': ['Premium'],
  '%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0': ['Entitlement.Pro'],
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
};

// Kiểm tra nếu không phải môi trường Surge/Quantumult X/Loon/Shadowrocket thì thoát
if (!(typeof $task !== 'undefined' && typeof $task.fetch === 'string' || 
      typeof $httpClient !== 'undefined' || 
      typeof $rocket !== 'undefined')) {
    $done({});
}

// Lấy User-Agent từ request
var ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

// Parse response body
var obj = JSON.parse($response.body);

// Set request_date
obj.request_date = '2100-01-01T01:01:01Z';

// Tạo object subscription info
var luonghii = {
    'is_sandbox': false,
    'ownership_type': 'PURCHASED',
    'billing_issues_detected_at': null,
    'period_type': 'normal',
    'expires_date': '2100-01-01T01:01:01Z',
    'grace_period_expires_date': null,
    'unsubscribe_detected_at': null,
    'original_purchase_date': '2025-11-01T01:01:01Z',
    'purchase_date': '2025-11-01T01:01:01Z',
    'store': 'app_store'
};

// Tạo object entitlement info
var luonghiii = {
    'grace_period_expires_date': null,
    'purchase_date': '2025-11-01T01:01:01Z',
    'product_identifier': 'com.luonghii.premium.yearly',
    'expires_date': '2100-01-01T01:01:01Z'
};

// Tìm kiếm trong mapping dựa trên User-Agent
const match = Object.keys(mapping).find(key => ua.includes(key));

if (match) {
    const [key, product_id] = mapping[match];
    
    if (product_id) {
        luonghiii.product_identifier = product_id;
        obj.subscriber.subscriptions[product_id] = luonghii;
    } else {
        obj.subscriber.subscriptions['com.luonghii.premium.yearly'] = luonghii;
    }
    
    obj.subscriber.entitlements = {};
    
    // Xử lý nhiều entitlement (cách nhau bởi &)
    if (key.includes('&')) {
        let parts = key.split('&');
        parts.forEach(part => {
            obj.subscriber.entitlements[part] = luonghiii;
        });
    } else {
        obj.subscriber.entitlements[key] = luonghiii;
    }
} else {
    // Trường hợp mặc định
    obj.subscriber.subscriptions['com.luonghii.premium.yearly'] = luonghii;
    obj.subscriber.entitlements['pro'] = luonghiii;
}

console.log(' Xin chúc mừng, bạn đã mở khóa thành công.');

$done({'body': JSON.stringify(obj)});

[mitm]
hostname=api.revenuecat.com, api.rc-backup.com
