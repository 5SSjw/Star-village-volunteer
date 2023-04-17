// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"腿抽筋",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"腿部着凉、剧烈运动、劳累等情况下，都容易诱发腿抽筋。当有人突发腿抽筋时，以小腿为例，症状识别如下：",
        type:"txt"
      },
      {
        content:"1、肌肉僵硬",
        type:"head"
      },
      {
        content:"先让伤者立即停止运动，观察伤者腿部是否有肌肉突然收缩，抽筋部位肌肉是否僵硬；",
        type:"txt"
      },
      {
        content:"2、痉挛性疼痛",
        type:"head"
      },
      {
        content:"检查伤者是否有牵扯样或痉挛性疼痛。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/95/A3/593EBDCBAF0288B579FFA4138F5F95A3.gif",
        type:"pic"
      },
     
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、补液",
        type:"head"
      },
      {
        content:"让伤者立即停止运动，避免肌肉发生严重损伤，然后喝适量的淡盐水或运动饮料，补充运动丢失的电解质和水分；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/4F/B0/4C7125857A95B80EC5F86CDB4F484FB0.gif",
        type:"pic"
      },
      {
        content:"2、拉伸",
        type:"head"
      },
      {
        content:"将伤者脚向小腿前部掰，使踝关节与小腿呈小于90度角，并保持1-2分钟；如果伤者是脚掌抽筋，将脚趾向脚背方向掰，并保持1-2分钟；如果是大腿抽筋，将大腿和膝盖弯曲，使大腿紧贴腹部，而后让伤者双手环抱膝部，反复进行蹬踏动作，并保持1-2分钟；  ",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/3F/3F/7EE348A6FD07912454145669CC623F3F.gif",
        type:"pic"
      },
      {
        content:"3、冷热敷",
        type:"head"
      },
      {
        content:"用冷毛巾和热毛巾交替外敷抽筋部位，或轻柔地按摩抽筋部位，改善肌肉供血，以缓解肌肉疼痛。如果抽筋反复发作，应及早就近就医。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/83/0F/8B9ADF561FFA90CFDB8F0A575ACA830F.gif",
        type:"pic"
      },
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、平足或其他身体构造问题，容易引起腿抽筋，应选择合适的鞋子，减少发生几率；",
        type:"txt"
      },
      {
        content:"2、睡眠时避免将被子捂得过紧，仰卧的时候过紧的被子可能压住足部，使腓肠肌和足底肌肉紧绷，容易发生肌肉痉挛；",
        type:"txt"
      },
      {
        content:"3、在运动前做好拉伸肌肉的工作，可以将足前部放置于台阶上，慢慢下压脚跟，使脚跟位置低于阶梯位置，该方法可拉伸小腿后侧肌肉；",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、当发生腿抽筋时，禁止伤者继续活动，以免发生更严重的肌肉损伤；",
        type:"txt"
      },
      {
        content:"2、禁止剧烈捶打、按揉抽筋部位；",
        type:"txt"
      },
      {
        content:"3、嘱咐伤者平常进行腿部拉伸时，不要过于剧烈，以免造成肌肉损伤。",
        type:"txt"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      
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