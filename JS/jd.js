// 京东搜索页面优化
// 来源：https://raw.githubusercontent.com/ddgksf2013/Scripts/master/jd_json.js
// 最后更新：2023-03-21

var puimCea1 = JSON["parse"]($response["body"]);
if (
  $request["url"]["indexOf"](
    "hotWords"
  ) !== -1
) {
  puimCea1["hotwords"] = {};
  puimCea1["tabs"] = {};
  delete puimCea1["abver"];
}
if (
  $request["url"]["indexOf"](
    "hotSearchTerms"
  ) !== -1
) {
  puimCea1["topData"]["data"] = {};
  puimCea1["data"] = {};
}
$done({ body: JSON["stringify"](puimCea1) });
