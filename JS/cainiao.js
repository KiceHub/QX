// 菜鸟净化脚本
// 来源：https://raw.githubusercontent.com/ddgksf2013/Scripts/master/cainiao_json.js
// 最后修改：2023-03-21

var d=JSON.parse($response.body);-1!=$request.url.indexOf("mtop.cainiao.nbpresentation.protocol.homepage.get.cn")?d.data?.result?.dataList?.length>0&&(d.data.result.dataList=d.data.result.dataList.filter(d=>"big_banner_area_v870"!=d.type)):-1!=$request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.mshow")?(d.data["1308"]&&delete d.data["1308"],d.data["1275"]&&delete d.data["1275"]):-1!=$request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.index.cn")?d.data?.result&&(d.data.result=[{}]):-1!=$request.url.indexOf("mtop.cainiao.adkeyword")&&d.data?.result?.adHotKeywords&&(d.data.result.adHotKeywords=[]);var body=JSON.stringify(d);$done({body});
