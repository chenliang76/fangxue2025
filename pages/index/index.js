Page({
  onLoad: function () {
      const isLoggedIn = wx.getStorageSync('isLoggedIn');
      if (!isLoggedIn) {
          wx.navigateTo({
              url: '/pages/login/login'
          });
      }
  },
  data: {
      grades: [
          {
              grade: 1,
              chineseGrade: '一',
              classes: [
                  { name: '一（1）班', selected: false },
                  { name: '一（2）班', selected: false },
                  { name: '一（3）班', selected: false },
                  { name: '一（4）班', selected: false },
                  { name: '一（5）班', selected: false },
                  { name: '一（6）班', selected: false },
                  { name: '一（7）班', selected: false }
              ]
          },
          {
              grade: 2,
              chineseGrade: '二',
              classes: [
                  { name: '二（1）班', selected: false },
                  { name: '二（2）班', selected: false },
                  { name: '二（3）班', selected: false },
                  { name: '二（4）班', selected: false },
                  { name: '二（5）班', selected: false },
                  { name: '二（6）班', selected: false },
                  { name: '二（7）班', selected: false },
                  { name: '二（8）班', selected: false },
                  { name: '二（9）班', selected: false }
              ]
          },
          {
              grade: 3,
              chineseGrade: '三',
              classes: [
                  { name: '三（1）班', selected: false },
                  { name: '三（2）班', selected: false },
                  { name: '三（3）班', selected: false },
                  { name: '三（4）班', selected: false },
                  { name: '三（5）班', selected: false },
                  { name: '三（6）班', selected: false },
                  { name: '三（7）班', selected: false },
                  { name: '三（8）班', selected: false }
              ]
          },
          {
              grade: 4,
              chineseGrade: '四',
              classes: [
                  { name: '四（1）班', selected: false },
                  { name: '四（2）班', selected: false },
                  { name: '四（3）班', selected: false },
                  { name: '四（4）班', selected: false },
                  { name: '四（5）班', selected: false },
                  { name: '四（6）班', selected: false },
                  { name: '四（7）班', selected: false }
              ]
          },
          {
              grade: 5,
              chineseGrade: '五',
              classes: [
                  { name: '五（1）班', selected: false },
                  { name: '五（2）班', selected: false },
                  { name: '五（3）班', selected: false },
                  { name: '五（4）班', selected: false },
                  { name: '五（5）班', selected: false },
                  { name: '五（6）班', selected: false },
                  { name: '五（7）班', selected: false }
              ]
          },
          {
              grade: 6,
              chineseGrade: '六',
              classes: [
                  { name: '六（1）班', selected: false },
                  { name: '六（2）班', selected: false },
                  { name: '六（3）班', selected: false },
                  { name: '六（4）班', selected: false },
                  { name: '六（5）班', selected: false },
                  { name: '六（6）班', selected: false }
              ]
          }
      ]
  },
  selectClass: function (e) {
      const gradeIndex = e.currentTarget.dataset.gradeIndex;
      const classIndex = e.currentTarget.dataset.classIndex;
      const grades = this.data.grades;
      grades[gradeIndex].classes[classIndex].selected = !grades[gradeIndex].classes[classIndex].selected;
      this.setData({
          grades: grades
      });
  }
})