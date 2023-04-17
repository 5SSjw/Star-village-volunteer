// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"触电",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
     
      {
        content:"1、评估现场",
        type:"head"
      },
      {
        content:"当发现触电时，如果附近有电闸，应立即关闭电闸，使触电者脱离电源；如果电闸较远，应立即用不导电的干木棍或干竹竿将电源线拨开。（重点提示：此方法只适用于干燥环境下施救）",
        type:"txt"
      },
      {
        content:"2、判断意识",
        type:"head"
      },
      {
        content:"触电后轻者会出现精神紧张、面色苍白、表情呆滞、呼吸及心跳加速，严重者会出现抽搐、昏迷、心脏停搏和呼吸停止。施救者需要呼喊触电者，判断其有无意识，同时检查其是否有伤口，如有伤口，请参考烧伤急救法进行处理。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/32/AC/71407632571605424D8698D68CDA32AC.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"当施救者检查发现触电者出现抽搐、意识不清、呼吸及心跳停止时，应立即拨打急救电话120，同时对其行心肺复苏术，直至医护人员赶到。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、观察病情",
        type:"head"
      },
      {
        content:"当触电者意识清醒，且呼吸及脉搏正常时，让其就地平卧休息，同时密切观察触电者意识、呼吸及脉搏等情况。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/60/16/17E7AA2BFF3BC93BD7C151AA24B16016.gif",
        type:"pic"
      },
      {
        content:"2、侧卧",
        type:"head"
      },
      {
        content:"当触电者意识不清，但呼吸及脉搏正常时，需要将触电者翻转至侧卧位。以右侧卧位为例，抬起触电者右胳膊，放在头的一侧，将其左手放在右肩上，左腿屈曲，施救者双手分别放在触电者左肩及左膝，翻转其至右侧卧位。翻转后需注意观察触电者意识、呼吸及脉搏等情况，如触电者口腔有分泌物，应及时处理，防止窒息。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/C9/CB/9A83D934D3C2BB6A27EA7B53B2E8C9CB.gif",
        type:"pic"
      },
      {
        content:"3、心肺复苏",
        type:"head"
      },
      {
        content:"当触电者出现意识不清，且呼吸及脉搏停止时，应立即对其行心肺复苏术，并拨打急救电话120，直到医护人员赶到。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/97/34/46F36BB1C8644C6FEFB2D78F1B169734.gif",
        type:"pic"
      },
    
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、了解用电常识，定期对所用电器和线路进行检修；",
        type:"txt"
      },
      {
        content:"2、避免用潮湿的手或布触碰电器外壳、电线、插头等；",
        type:"txt"
      },
      {
        content:"3、雷雨天气，从事室外工作者，切勿站在高处、在田野上走动或在树下避雨，不能接触天线、水管或金属装置。",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、禁止徒手拨开电源线或在未切断电源的情况下接触触电者；",
        type:"txt"
      },
      {
        content:"2、如果触电者是被高压电击伤，施救者需要在安全地带，等待彻底断电后才能接近触电者；",
        type:"txt"
      },
      {
        content:"3、如果触电者是从高空坠落，尽量不要移动触电者；",
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