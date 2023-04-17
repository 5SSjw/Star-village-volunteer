const app1 = getApp()
const util = require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zixunList:[],
    openid:""
  },
  onLoad(){
    var that = this
    wx.cloud.database().collection("zixun").orderBy('time','desc').get({
      success(res){
        console.log('查询成功',res)
        //格式化时间
        var list = res.data
        for(var j in list){
          list[j].time =util.formatTime(new Date(list[j].time))
        }
        that.setData({
          zixunList:list
        })
        console.log(that.data.zixunList)
      }
    })

    // wx.cloud.callFunction({
    //   name:"getOpenID",
    //   success(res){
    //     console.log("获取openid成功：",res.result.openid);
        
    //   }
    // })
  },

  onRefresh:function(){
    //导航条加载动画
    wx.showNavigationBarLoading()
    //loading 提示框
    wx.showLoading({
      title: 'Loading...',
    })
    console.log("下拉刷新啦");
    setTimeout(function () {
      wx.hideLoading();
      wx.hideNavigationBarLoading();
      //停止下拉刷新
      wx.stopPullDownRefresh();
    }, 500)
  },
  onPullDownRefresh(){
    this.onRefresh();
    console.log('我下拉刷新了');
    // 重置数组
    this.setData({
      zixunList: []
    })
    // 发送请求
    this.getList() //请求当前页面数据
    },

    getList(){
      // 请求数据后
      var that = this
      wx.cloud.database().collection("zixun").orderBy('time','desc').get({
        success(res){
          console.log('查询成功',res)
          //格式化时间
          var list = res.data
          for(var j in list){
            list[j].time =util.formatTime(new Date(list[j].time))
          }
          that.setData({
            zixunList:list
          })
          console.log(that.data.zixunList)
        }
      })
          // 关闭下拉刷新的窗口
        wx.stopPullDownRefresh()
    },

    onShareAppMessage(event){
      console.log(event)
      return{
        title:"",
        imageURL:"",
        path:""
      }
    },
})