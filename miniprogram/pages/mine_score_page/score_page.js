// pages/score_page/score_page.js
const app = getApp()
const db = wx.cloud.database()
const _ = db.command
Page({
  /**
   * 页面的初始数据
   */
  data: {
    score: 0,
    nickName: '',
    headPor: '',
    navbar: ['收入','支出'],
    currentTab: 0,
    faceIMG: '',
    nickName: '',
    swiperList: [{
      name: '志愿家教',
      id: 0,
      type: 'image',
      url: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.h-UOLaQH7OKQESW1b5ATdgHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      info_detail: '“家教志愿者活动”，希望通过此次志愿活动帮助农村正处于成长阶段的儿童提高学习兴趣，掌握正确的学习方法，适当引导他们树立正确的人生价值观，同时增强参与者的社会实践能力，丰富生活，展现自我风采，了解和服务社会。同时还能很好积累自己的工作和社会经验，培养锻炼自己的能力。',
      hour: 4
    }, {
      name: '志愿家政',
      id: 1,
      type: 'image',
      url: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.JR4RDtJgCsEUdD5ON75GYAHaLG?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      info_detail: '“志愿家政”，希望通过此次志愿活动帮助农村生活不便的村民，从他们生活上的点点滴滴，为他们',
      hour: 6
    }, {
      name: '学雷锋志愿农活',
      id: 2,
      type: 'image',
      url: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.guhv9dkwNP1iBQ9ZSgaccgHaKd?w=182&h=257&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      info_detail: '“学雷锋志愿农活”，希望通过此次志愿活动帮助农村农夫，志愿者参与到实际的农活中去，为农民们减轻',
      hour: 3
    }, {
      name: '老人爱心陪伴',
      id: 3,
      type: 'image',
      url: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.5bUTwFBQYxlAMHrS5GBS-gAAAA?w=182&h=324&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      info_detail: '“老人爱心陪伴”，希望通过此次志愿活动帮助农村中的孤寡老人，需要志愿者聆听老人讲他们年轻时的故事，陪老人出去嗮太阳，',
      hour: 8
    }, {
      name: '学校打扫',
      id: 4,
      type: 'image',
      url: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.8LAaYtPOwt86LeMqByCAmgAAAA?w=176&h=265&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      info_detail: '“学校打扫”，希望通过此次志愿活动帮助农村学校的打扫工作，具体包括打扫教室，食堂座位9999',
      hour: 2
    }, {
      name: '卫生所志愿服务',
      id: 5,
      type: 'image',
      url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.u0SsFBakEzYEwUsffvVEhwHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      info_detail: '“卫生所志愿服务”，希望通过此次志愿活动帮助农村卫生所的工作人员减轻工作压力，具体包括000',
      hour: 5
    }]
  },

  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  toTimePage: function() {
    wx.navigateTo({
      url: '../mine_time_page/time_page',
    })
  },

  toCommunityPage: function() {
    wx.switchTab({
      url: '../community/community',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('user').where({
      openId: _.eq( app.globalData.openId)
     }).get({
       success:res=>{
         console.log(res.data[0])
         this.setData({
          score:res.data[0].integral
        })
       }
     })
    this.setData({
      faceIMG: app.globalData.userInfo.avatarUrl,
      nickName: app.globalData.userInfo.nickName
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