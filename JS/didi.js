// 滴滴出行
// 来源：https://raw.githubusercontent.com/jizhi0520/QX/main/didi.js
// 最后修改：2023-04-15

let obj=JSON.parse($response.body);
obj.data.sections = obj.data.sections.filter(item => ["center_v2", "head_v2", "core_function"].includes(item.sectionId));
$done({body: JSON.stringify(obj)});
