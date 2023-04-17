const app = getApp()
const db = wx.cloud.database()
const _ = db.command
var user;
var userId;
var users;
var page=1;
Page({
  data: {
    hasUserInfo: false,
    userInfo:{
      // imageurl:"",
      // nickName:"",
      // gender:"",
      // hours:"",
      // integral:"",
    },
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    mode: 1,
    type:'hours',
    hasReachBottom: "lower",
    tabPosition:'',
    userList:[]
  },
  onShareAppMessage: function (options) { },
  onShareTimeline: function (options) { },
  
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function (options) {
    var that = this;
    db.collection('user').where({
      openId: _.eq( app.globalData.openId)
     }).get({
       success:res=>{
         console.log(res.data[0])
         this.setData({
          userInfo:res.data[0]
        })
       }
     })
    // console.log(this.data.userInfo)
     that.getRankList();
  },
  //得到排行榜数据
  getRankList:function(){
      db.collection('user')
      .orderBy(this.data.type,'desc')
      .get({
        success:res=>{
          console.log(res)
          this.setData({
            userList:res.data
          })
          
        }
      })
      
  },
  reachBottom: function(){
    wx.showToast({
      title: '已经到底部啦',
      icon: 'none',
      duration: 1000
    })
  },
  moveTabR: function(){
    var that = this;
    console.log("向左")
    page=1;
    that.setData({
      tabPosition: 'transformR',
      mode: 1,
      type:'hours',
      hasReachBottom: "lower" 
    })
     that.getRankList();
  },
  moveTabL: function () {
    var that = this;
    console.log("向右")
    page=1;
    that.setData({
      tabPosition: 'transformL',
      mode: 2,
      type:'integral',
      hasReachBottom: "lower"
    })
    that.getRankList();
  },
 })