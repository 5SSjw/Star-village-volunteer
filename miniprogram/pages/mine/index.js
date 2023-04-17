const app = getApp()
const db = wx.cloud.database()
const _ = db.command
Page({
  data: {
    score: 1000,
    timeLen: 50,
    grade: 2,
    faceIMG:"",
    nickName:""
  },
  //options(Object)
  onLoad: function(options){
    db.collection('user').where({
      openId: _.eq( app.globalData.openId)
     }).get({
       success:res=>{
         console.log(res.data[0])
         this.setData({
          score: res.data[0].integral,
          timeLen: res.data[0].hours,
          grade: res.data[0].rank,
        })
       }
     })
    this.setData({
      faceIMG:app.globalData.userInfo.avatarUrl,
      nickName:app.globalData.userInfo.nickName
    })
  },
  // onRefresh:function(){
  //   //导航条加载动画
  //   wx.showNavigationBarLoading()
  //   //loading 提示框
  //   wx.showLoading({
  //     title: 'Loading...',
  //   })
  //   console.log("下拉刷新啦");
  //   setTimeout(function () {
  //     wx.hideLoading();
  //     wx.hideNavigationBarLoading();
  //     //停止下拉刷新
  //     wx.stopPullDownRefresh();
  //   }, 1000)
  // },
  add: function () {
    wx.navigateTo({
      // url: '../search2/search2',
      url: '../invite/index',
    })
  },
  focus: function () {
    wx.navigateTo({
      url: '../mine_focus_page/focus_page',
    })
  },
  collection: function () {
    wx.navigateTo({
      url: '../mine_collection_page/collection_page',
    })
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  },

  toGradePage() {
    //页面跳转到
    wx.navigateTo({
      url: '../mine_grade_page/grade_page'
    })
  },

  toTimePage() {
    wx.navigateTo({
      url: '../mine_time_page/time_page'
    })
  },

  toScorePage() {
    wx.navigateTo({
      url: '../mine_score_page/score_page'
    })
  },

  toPrizePage() {
    wx.navigateTo({
      url: '../mine_prize_page/prize_page'
    })
  },

  toAboutPage() {
    wx.navigateTo({
      url: '../mine_about_page/index'
    })
  }

});