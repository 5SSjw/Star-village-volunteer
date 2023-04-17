const db = wx.cloud.database()
Page({
  data: {
    swiperList:[
      {
        "image_src": "https://636c-cloud1-2gdhip8y9d4f0c42-1311633996.tcb.qcloud.la/9RGVB%5DR%24GDB%7BK%7D0%7BN%405Y6LS.jpg?sign=48a93ebe35c5f942315344c0d1b16304&t=1664590551",
        "open_type": "navigate",
        "goods_id": 129,
        "navigator_url": "/pages/goods_detail/main?goods_id=129"
      },
      {
        "image_src": "https://636c-cloud1-2gdhip8y9d4f0c42-1311633996.tcb.qcloud.la/N%7DX3KK337WFP_MFWJEINBHD.jpg?sign=98bf910b17d5f3ff88a1f5ab9a988268&t=1664590623",
        "open_type": "navigate",
        "goods_id": 395,
        "navigator_url": "/pages/goods_detail/main?goods_id=395"
      },

      {
        "image_src": "https://636c-cloud1-2gdhip8y9d4f0c42-1311633996.tcb.qcloud.la/QDV4RL69%7DJSI%5D%24R5%248))OMA.jpg?sign=2da8e13d2e1f9c50d500eed933544152&t=1664596023",
        "open_type": "navigate",
        "goods_id": 38,
        "navigator_url": "/pages/goods_detail/main?goods_id=38"
      }
    ],
    cateList:[
      {
        "name": "志愿活动",
        "image_src": "https://636c-cloud1-2gdhip8y9d4f0c42-1311633996.tcb.qcloud.la/activity.png?sign=2a0035728c8eb9d9876bb17cbaf1521a&t=1664585074",
        "open_type": "switchTab",
        "navigator_url": "/pages/activity/index"
      },
      {
        "name": "爱心榜",
        "image_src": "https://636c-cloud1-2gdhip8y9d4f0c42-1311633996.tcb.qcloud.la/rank.png?sign=2021b275ac6aed9aa765cf0614440bc9&t=1664585089",
        "open_type": "switchTab",
        "navigator_url": "/pages/rank/index"
      },
      {
        "name": "抗疫通道",
        "image_src": "https://636c-cloud1-2gdhip8y9d4f0c42-1311633996.tcb.qcloud.la/%E5%B0%B1%E5%8C%BB%E9%80%9A%E9%81%93.png?sign=011034bb96b69dea7ae7a5fd8a5ae343&t=1664585099",
        "open_type": "switchTab",
        "navigator_url": "/pages/epidemic/index"
      },
      {
        "name": "安全指南",
        "image_src": "https://636c-cloud1-2gdhip8y9d4f0c42-1311633996.tcb.qcloud.la/%E5%AE%89%E5%85%A8%E6%8C%87%E5%8D%97.png?sign=ae7906ba297e22dc9a023b78a9b75426&t=1658934675",
        // "image_src": "https://636c-cloud1-4gem7fr950020315-1311023162.tcb.qcloud.la/%E5%AE%89%E5%85%A8%E7%9F%A5%E8%AF%86%20(1).png?sign=6d10dd16d4037979f46ec4319b4407b2&t=1658820027",
        "open_type": "switchTab",
        "navigator_url": "/pages/safe_guide/safe_guide"
      },
      {
        "name": "志愿足迹",
        "image_src": "https://636c-cloud1-2gdhip8y9d4f0c42-1311633996.tcb.qcloud.la/%E5%BF%97%E6%84%BF%E8%B6%B3%E8%BF%B9.png?sign=7c4453aa405fa195b5b2eb7cb7b21511&t=1658934911",
        "open_type": "switchTab",
        "navigator_url": "/pages/footprints/footprints"
      },
      {
        "name": "星村社区",
        "image_src": "https://636c-cloud1-2gdhip8y9d4f0c42-1311633996.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA.png?sign=012a2ca662e796c4422a611721bf3702&t=1664585111",
        "open_type": "switchTab",
        "navigator_url": "/pages/community/community"
      },
    ],
    bg_color:"118deg, #ffd000 0%, #57E9F2 68%, #ffd000 17%",
    // img="../../images/xiaozhixie.png",
    activityList:[]
  },
  onLoad: function (options) {
    this.getActivityList();
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
  search(){
      wx.navigateTo({
        url: '../search/search',
      })
  },
  qiandao(){
    console.log("跳转签到界面")
    wx.navigateTo({
      url:"../signin/index"
    })
  },
/**
   * 页面相关事件处理函数--监听用户下拉动作
   */
 onPullDownRefresh:function(){
  this.onRefresh();
  this.getActivityList();
  },
  getActivityList(){
    db.collection('store')
    .get({
      success:res=>{
        this.setData({
          activityList:res.data
        })
      }
    })
  },
  showMore(e) {
    wx.navigateTo({
      url: "../activity/index",
    })
  }
});
  