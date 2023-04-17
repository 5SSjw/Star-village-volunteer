// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"呕血",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"当发现有人咯血或呕血时，可按以下方法进行识别",
        type:"txt"
      },
      {
        content:"1、询问病情",
        type:"head"
      },
      {
        content:"询问患者是否有慢性肺部疾病、消化道疾病以及是否长期服用硫酸氢氯吡格雷、华法林等药物，在呕血或咯血之前是否有恶心、呕吐、腹痛、腹胀及胸闷、气短、咳嗽、咳痰等症状；",
        type:"txt"
      },
      {
        content:"2、症状表现",
        type:"head"
      },
      {
        content:"观察患者咯出或呕出的血量及颜色（咯血颜色多为鲜红色，小量呕血为咖啡色，大量呕血也可呈鲜红色），是否伴有面色苍白、出冷汗等表现，并检查患者呼吸、脉搏及血压是否正常。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/39/BC/BB843B534B40134C1B377DD7BE9439BC.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"对于咯血或呕血的患者，应尽快就近就医。若患者出现意识不清，呼吸、心跳停止时，应立即行心肺复苏术，并呼喊他人拨打急救电话120（若身旁无人，可利用免提功能拨打急救电话），救助伤者直至医护人员赶到。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、前倾位",
        type:"head"
      },
      {
        content:"如果患者意识清醒，让患者处于前倾位端坐，方便将血液咯出或呕出，以防血液堵住呼吸道引起窒息；同时安抚患者情绪，消除其恐惧心理。如果患者虚弱不能坐稳，施救者可站于患者侧后方，用双手从患者腋下穿过，辅助患者维持身体前倾位；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/D0/A6/58662EE2D79808B5628ECA25AA8AD0A6.gif",
        type:"pic"
      },
      {
        content:"2、侧卧位",
        type:"head"
      },
      {
        content:"如果患者意识不清，但有呼吸及心跳，则将其翻转至侧卧位。使患者远侧一腿屈曲，足部置于近侧腿膝关节下方，抬起患者远侧胳膊，放在近侧脸颊下方，并将其近侧手臂向上屈曲放置。施救者一只手抓住患者远侧肩头或肘部，另一只手抓住患者屈曲的膝盖，同时将其翻转至侧卧位，然后调整腿部位置使其稳定，调整脸颊下方的手掌位置，保障患者嘴巴低于患者喉头位置。维持这种姿势，并密切观察患者呼吸情况；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/AD/98/4104778E657550A249A6D4790065AD98.gif",
        type:"pic"
      },

      {
        content:"如果患者出现意识不清，且呼吸及心跳停止，应立即行心肺复苏术，具体请参照心脏骤停急救法。",
        type:"txt"
      },
    
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、积极治疗感染性疾病，积极防治应激性溃疡、急性胃肠炎等的发生；",
        type:"txt"
      },
      {
        content:"2、注意劳逸结合，避免过度疲劳；",
        type:"txt"
      },
      {
        content:"3、注意饮食清淡，避免辛辣刺激，戒烟限酒；",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、患者呕血或咯血时，禁止给患者喂食任何东西；",
        type:"txt"
      },
      {
        content:"2、如果患者正在服用阿司匹林或华法林等抗凝药，应立即停用；",
        type:"txt"
      },
      {
        content:"3、咯血应避免使用强镇咳剂，以免因镇咳导致出血不能及时咳出体外而窒息；",
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