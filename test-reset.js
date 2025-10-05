// 测试 dailyReset 云函数
wx.cloud.callFunction({
  name: 'dailyReset',
  data: {}
}).then(result => {
  console.log('dailyReset 结果:', result);
}).catch(error => {
  console.log('dailyReset 错误:', error);
});