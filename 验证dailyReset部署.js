// 验证 dailyReset 云函数是否部署成功
// 在小程序开发者工具控制台运行

console.log('=== 验证 dailyReset 云函数部署状态 ===');

// 测试云函数调用
wx.cloud.callFunction({
  name: 'dailyReset',
  data: {}
}).then(result => {
  console.log('✅ dailyReset 云函数部署成功！');
  console.log('执行结果:', result.result);
  
  if (result.result && result.result.success) {
    console.log('✅ 云函数逻辑正常工作');
    console.log('重置的班级数量:', result.result.message);
  } else {
    console.log('⚠️ 云函数执行有问题:', result.result);
  }
}).catch(error => {
  console.log('❌ dailyReset 云函数未部署或部署失败');
  console.log('错误信息:', error);
  
  if (error.errCode === -1) {
    console.log('🔧 解决方案：');
    console.log('1. 右键 cloudfunctions/dailyReset 文件夹');
    console.log('2. 选择"创建并部署：云端安装依赖"');
    console.log('3. 等待部署完成后重新测试');
  }
});

console.log('=== 测试完成 ===');