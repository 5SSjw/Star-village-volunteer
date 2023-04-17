// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"蝎蜇伤",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"蝎子在中国分布较广，以陕西、甘肃、宁夏较多，穴居，喜栖于岩隙与墙缝中，雨天常潜出，藏于衣物内，夜间出来活动。一旦被其蜇伤(以手指蜇伤为例)，可通过以下步骤进行识别判断：",
        type:"txt"
      },
      {
        content:"1、询问病情",
        type:"head"
      },
      {
        content:"询问伤者是否有头痛、头晕、发热、腹痛等不适，蜇伤处是否有剧烈疼痛感；",
        type:"txt"
      },
      {
        content:"2、症状表现",
        type:"head"
      },
      {
        content:"检查蜇伤处是否有尾针残留，皮肤是否有水疱、红肿、皮温升高等表现。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/17/3A/A7BC939A11B9D91982405C12CB85173A.gif",
        type:"pic"
      },
    
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、绑扎止血带",
        type:"head"
      },
      {
        content:"可用橡皮筋在伤指根部进行捆扎，以防止毒素扩散。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/AD/B8/D326AD46757A05A5EBB12E0FDB69ADB8.gif",
        type:"pic"
      },
      {
        content:"2、去除毒刺",
        type:"head"
      },
      {
        content:"若有尾针残留，用镊子夹住靠近皮肤部位的尾针，将其去除。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/5A/00/EDAE22029204D141BF2C266334835A00.gif",
        type:"pic"
      },
      {
        content:"3、局部冲洗",
        type:"head"
      },
      {
        content:"立即用清水冲洗伤口及伤口周围，再用肥皂水或5%碳酸氢钠溶液冲洗伤口后，用清水将肥皂水或5%碳酸氢钠残液冲洗干净，而后用碘伏对伤口及伤口周围进行2次消毒。处理完成后，及时松开橡皮筋。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/26/9E/C3C5CB53FA5C3AC8DB8180749553269E.gif",
        type:"pic"
      },
      {
        content:"4、局部冰敷",
        type:"head"
      },
      {
        content:"用毛巾包裹冰袋冷敷蜇伤处，以减轻肿胀及疼痛。冷敷时需注意：冰袋不能直接接触皮肤。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/FF/F6/ACDCD4DFFC6B598914A0D1CD2286FFF6.gif",
        type:"pic"
      },
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、在野外郊游或露营时选择相对安全的环境，避免到植被茂密、阴凉的山洞等人迹稀少之处；",
        type:"txt"
      },
      {
        content:"2、在野外活动时，要穿长裤、长袜、高帮鞋，防止被蜇伤；",
        type:"txt"
      },
      {
        content:"3、在阴暗潮湿的环境中工作，要加强个人防护，如穿长衣、长裤，戴帽子手套等。",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、禁止用嘴吸吮蜇伤处的毒液，也不要抓挠蜇伤处皮肤；",
        type:"txt"
      },
      {
        content:"2、若有尾针残留，去除尾针时禁止挤压毒囊；",
        type:"txt"
      },
      {
        content:"3、就医时尽量携带蝎标本或拍摄的蝎照片。",
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