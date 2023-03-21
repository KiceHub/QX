// Photoshop解锁脚本
// 最后修改：2023-03-21

let obj = JSON.parse($response.body);
obj.mobileProfile.profileStatus = 'PROFILE_AVAILABLE';
$done({body: JSON.stringify(obj)});
