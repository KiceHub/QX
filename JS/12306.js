// 铁路12306去广告
// 来源：https://raw.githubusercontent.com/ddgksf2013/Scripts/master/12306.js
// 最后修改：2023-03-21

var obj=JSON.parse($request.body),d={};"0007"==obj.placementNo?(d.materialsList=[{billMaterialsId:"6491",filePath:"d",creativeType:1}],d.advertParam={skipTime:1},d.code="00"):d="G0054"==obj.placementNo?{code:"00",materialsList:[{}]}:{code:"00",message:"无广告返回"},$done({body:JSON.stringify(d)});
