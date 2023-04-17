// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"狗咬伤",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"生活中被狗咬伤非常常见，处理不当往往会出现感染，严重的有可能会传染狂犬病。当有人被狗咬伤时，需尽快进行以下识别判断：",
        type:"txt"
      },
      {
        content:"1、询问病情",
        type:"head"
      },
      {
        content:"询问伤者被狗咬伤的部位、时间，以及狗的种类和狗是否在近一年内接种过狂犬疫苗；",
        type:"txt"
      },
      {
        content:"2、检查局部",
        type:"head"
      },
      {
        content:"检查被狗咬伤的伤口大小、深浅，其伤口一般具有对称性，有两个较深的牙印，严重咬伤时可见撕裂状伤口，伤口多不整齐、深浅不等；同时需查看伤口是否有红肿、出血及出血量情况，如果出血量较大，危及生命，需立即按压止血。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/D5/28/5259E3D70CF4C2750B06DB8FA568D528.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"如果被狗咬伤动脉，发生危及生命的大出血，需立即拨打急救电话120。如果未发生大出血，可按照以下步骤进行处理，再及时前往医院就医。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、冲洗",
        type:"head"
      },
      {
        content:"用肥皂水及清水反复交替冲洗患者被咬伤处，至少冲洗15分钟；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/BB/60/A79FD7F7C8E787BB43D31F8C5A3FBB60.gif",
        type:"pic"
      },
      {
        content:"2、消毒",
        type:"head"
      },
      {
        content:"用碘伏或酒精由内向外对伤口及伤口周围进行2遍消毒，需注意伤口较深较大时，不要用酒精对伤口内消毒；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/60/FF/92732EF369BD488A23D4AA7D006560FF.gif",
        type:"pic"
      },
      {
        content:"3、包扎",
        type:"head"
      },
      {
        content:"将纱布覆盖在伤口上，并进行包扎，以免伤口感染。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/92/D8/A9E89A63CFB840EB0E5A84B9295192D8.gif",
        type:"pic"
      },
      {
        content:"完成上述处理后，请尽快前往医院或附近的卫生防疫站就医，由专业的医生判断，是否需要注射狂犬疫苗，需注意狂犬病疫苗应尽早注射。",
        type:"txt"
      },
     
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、日常生活中，避免挑逗和激惹狗，尤其是流浪狗。",
        type:"txt"
      },
      {
        content:"2、万一在路上遇到想攻击你的恶犬，不要慌张，冷静下来，大声呼救，千万不要拔腿就跑。",
        type:"txt"
      },
      {
        content:"3、不幸被狗扑倒在地，这个时候要立刻保护好头颈部，防止被狗攻击这些要害部位。",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、被狗咬伤后，需第一时间冲洗伤口。",
        type:"txt"
      },
      {
        content:"2、禁止用嘴吮吸咬伤处的血液。",
        type:"txt"
      },
      {
        content:"3、无论伤口大小，都应及时前往医院，请医生判断是否需要注射狂犬病疫苗。",
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