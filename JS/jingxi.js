// 京喜净化
// 来源：https://raw.githubusercontent.com/ddgksf2013/Scripts/master/startup.js
// 最后修改：2023-03-21

let obj=JSON.parse($response.body);
/*京喜APP*/
if (/^https?:\/\/api\.m\.jd\.com\/api\?functionId=delivery_show/.test($request.url)) { 
    obj.data.materialList.startTime=3667476800000;
    obj.data.materialList.endTime  =3667908800000;
}
$done({body:JSON.stringify(obj)});
