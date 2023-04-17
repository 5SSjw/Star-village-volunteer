// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zixun_info:"",
    mainContent: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      console.log(options._id)
      this.getActivityList(options._id)
      
  },

  getActivityList(zixun_id){
    db.collection('zixun').doc(zixun_id)
    .get({
      success:res=>{
        // console.log("a")
        console.log(res.data)
        res.data.time = util.formatTime(new Date(res.data.time))
        this.setData({
          zixun_info:res.data
        })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})