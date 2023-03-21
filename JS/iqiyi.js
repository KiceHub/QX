// 爱奇艺净化脚本
// 来源：https://raw.githubusercontent.com/ddgksf2013/Scripts/master/iqiyi_open_ads.js
// 最后修改：2023-3-21

let obj=JSON.parse($response.body);delete obj.adSlots,$done({body:JSON.stringify(obj)}
