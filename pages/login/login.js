Page({
  data: {
      phone: '',
      validPhones: ['18942167377', '13900139000'] // 内部已有的号码列表
  },
  onPhoneInput: function (e) {
      this.setData({
          phone: e.detail.value
      });
  },
  onLogin: function () {
      const { phone, validPhones } = this.data;
      if (validPhones.includes(phone)) {
          wx.setStorageSync('isLoggedIn', true); // 存储登录状态
          wx.navigateTo({
              url: '/pages/index/index'
          });
      } else {
          wx.showToast({
              title: '无效的手机号',
              icon: 'none'
          });
      }
  }
})