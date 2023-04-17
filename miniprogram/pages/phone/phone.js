// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    elements: [
      // {
      //   title: '紧急联系人',
      //   name: 'contacts',
      //   color: 'pink',
      //   icon: 'phone',
      //   phoneNumber:'155*******'
      // },
      // {
      //   title: '村委会',
      //   name: 'committee',
      //   color: 'orange',
      //   icon: 'phone',
      //   phoneNumber:'155*******'
      // }

      {
        title: '匪警',
        name: 'police',
        color: 'blue',
        icon: 'phone',
        phoneNumber:'110'
      },
      {
        title: '火警',
        name: 'fireman',
        color: 'red',
        icon: 'phone',
        phoneNumber:'119'
      },
      {
        title: '急救中心',
        name: 'ambulance',
        color: 'yellow',
        icon: 'phone',
        phoneNumber:'120'
      },
      {
        title: '道路救援',
        name: 'expressway',
        color: 'green',
        icon: 'phone',
        phoneNumber:'12122'
      },
      {
        title: '森林火警',
        name: 'forest fire',
        color: 'pink',
        icon: 'phone',
        phoneNumber:'95119'
      },
      {
        title: '水上求救',
        name: 'water rescue',
        color: 'orange',
        icon: 'phone',
        phoneNumber:'12395'
      },
      {
        title: '红十字会',
        name: 'the Red Cross',
        color: 'purple',
        icon: 'phone',
        phoneNumber:'999'
      },
      {
        title: '环保投诉',
        name: 'environment',
        color: 'cyan',
        icon: 'phone',
        phoneNumber:'12369'
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  calling(e){
    console.log(e)
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.num,
      success: function () {
          console.log("拨打电话成功！")
      },
      fail: function () {
          console.log("拨打电话失败！")
      }
  })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})