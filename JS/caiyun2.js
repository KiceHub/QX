// 彩云VIP解锁脚本
// 来源：https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/caiyun.js
// 最后修改：2024-09-02

const url = $request.url;
const isQuanX = typeof $task !== "undefined";
let header = $request.headers;

if (typeof $response === "undefined") {
  ;
} else {
  let obj = JSON.parse($response.body);
  if (url.includes("/api.caiyunapp.com/v1/activity")) {
    if (url.includes("&type_id=A03&")) {
      // 底栏控制项目 主页图标 天气助手 彩云ai
      if (obj?.interval) {
        obj.interval = 2592000; // 30天===2592000秒
      }
      if (obj?.activities?.length > 0) {
        for (let item of obj.activities) {
          if (item?.name && item?.type && item?.feature) {
            item.feature = false;
          }
        }
      }
    } else {
      // 其他请求
      obj = { status: "ok", activities: [{ items: [] }] };
    }
  } else if (url.includes("/api/v1/user_detail")) {
    if (obj?.vip_info?.svip) {
      if (obj?.vip_info?.svip) {
        obj.vip_info.svip.is_auto_renewal = true;
        obj.vip_info.svip.expires_time = "4102415999";
      }
    }
  } else if (url.includes("/wrapper.cyapi.cn/v1/activity")) {
    // 彩云推广
    if (["&type_id=A03&"]?.includes(url)) {
      // 天气助手 彩云ai
      if (obj?.interval) {
        obj.interval = 2592000; // 30天===2592000秒
      }
      if (obj?.activities?.length > 0) {
        obj.activities = [];
      }
    } else {
      // 其他请求
      obj = { status: "ok", activities: [{ items: [] }] };
    }
  } else if (url.includes("/v1/vip_info")) {
    // 我的页面
    if (obj.vip) {
      obj.vip.expires_time = "4102415999";
    }
    if (obj.svip) {
      obj.svip.expires_time = "4102415999";
    }
  } else if (url.includes("/v2/user")) {
    // 我的页面
    if (obj?.result) {
      obj.result.svip_given = 730;
      obj.result.is_phone_verified = true;
      obj.result.is_xy_vip = true;
      obj.result.vip_expired_at = 4102415999.16;
      obj.result.is_vip = true;
      obj.result.xy_svip_expire = 4102415999.16;
      if (obj?.result?.wt) {
        if (obj.result.wt.vip) {
          obj.result.wt.vip.enabled = true;
          obj.result.wt.vip.expired_at = 4102415999.16;
          obj.result.wt.vip.svip_expired_at = 4102415999.16;
        }
        obj.result.wt.svip_given = 730;
      }
      obj.result.is_primary = true;
      obj.result.xy_vip_expire = 4102415999.16;
      obj.result.svip_expired_at = 4102415999.16;
      obj.result.vip_type = "s";
    }
  }
  $done({ body: JSON.stringify(obj) });
}

function compareVersions(t, r) {
  const e = t.split(".").map(Number);
  const n = r.split(".").map(Number);
  for (let t = 0; t < Math.max(e.length, n.length); t++) {
    const r = e[t] || 0;
    const i = n[t] || 0;
    if (r > i) return 1;
    if (r < i) return -1;
  }
  return 0;
}
