// Photoshop解锁脚本
// 最后修改：2023-09-29

let obj = JSON.parse($response.body);
obj.user.has_premium_access = 'true';
$done({body: JSON.stringify(obj)});
