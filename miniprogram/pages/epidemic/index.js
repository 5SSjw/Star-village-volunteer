// pages/epidemic/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      bg_color:"118deg, #ffd000 0%, #57E9F2 68%, #ffd000 17%",
      epidemic:[]
    },
    tapEpidemic(e){
      console.log(e)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that = this
      console.log("epidemic数据库读取")
      wx.cloud.database().collection("epidemic").get({
          success(res){
              console.log(res)
              that.setData({
                  epidemic:res.data
              })
          }
      })
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
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
  
    }
  })