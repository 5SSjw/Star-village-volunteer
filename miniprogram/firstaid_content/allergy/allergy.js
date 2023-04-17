// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"花粉过敏",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"1、症状表现",
        type:"head"
      },
      {
        content:"当发现有人吸入花粉后发生不适或春秋季无明显诱因出现不适时，尽可能的使患者快速脱离过敏环境。观察患者是否有打喷嚏、流清水样鼻涕、咳嗽，皮肤是否有红肿瘙痒和大面积风团、皮疹，以及是否出现呼吸困难、面色惨白，甚至昏迷等表现；",
        type:"txt"
      },
      {
        content:"2、询问病情",
        type:"head"
      },
      {
        content:"询问患者是否有花粉过敏史，是否有鼻、眼、耳、口腔发痒等不适。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/5D/60/ED278E424AC22CA1E85065AE27545D60.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"完成以上检查后，如果患者出现昏迷，呼吸困难，请立即拨打急救电话120，并在急救车到来前对患者进行相应的施救。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、抗过敏",
        type:"head"
      },
      {
        content:"如果患者症状较轻，可以给其服用抗组胺药物，如扑尔敏、氯雷他定、西替利嗪等。如果患者喘憋明显，帮助其使用沙丁胺醇气雾剂，使用方法具体为：用力摇动气雾剂几次后取下瓶盖，嘱咐患者用嘴唇包住气雾剂喷口，让其缓慢深吸气3-5秒，同时按下开关释放药物，让患者屏气10秒，然后慢慢地呼气，至少60秒后再吸第二次。如果患者症状较重时，使患者保持平卧位，将其头偏向一侧，防止呕吐物堵塞气道导致窒息，并清理患者口腔及鼻腔，以保持呼吸道通畅。如果条件允许，及时在患者大腿中部外侧肌注肾上腺素。如果患者症状持续不缓解或加重，应及时就医；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/AA/AC/9A349D52871CADCD026610ED68ACAAAC.gif",
        type:"pic"
      },
      {
        content:"2、测量血压",
        type:"head"
      },
      {
        content:"如果条件允许，及时给患者测量血压，并密切观察血压变化； ",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/95/6E/03E7F04D2BE98F76FE4768202F29956E.gif",
        type:"pic"
      },
      {
        content:"3、休克体位",
        type:"head"
      },
      {
        content:"如果患者收缩压低于80 mmHg，舒张压低于50 mmHg，立即将其安置成休克体位，具体方法为：用背包或衣物将患者的下肢垫高15º-20º，头和胸部垫高20º-30º，并密切观察患者意识、呼吸、脉搏及血压等情况。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/89/56/31A10AA062C9B31147A16107F2EC8956.gif",
        type:"pic"
      },
      {
        content:"如果患者意识丧失，且呼吸停止或濒死样呼吸，应立即对其行心肺复苏术（具体参考心脏骤停急救法）。另外，施救者施救时应注意周围环境安全，在进行人工呼吸时，可使用衣物，或有条件者使用纱布、呼吸膜垫在患者口部，从而进行自我防护。",
        type:"txt"
      },

      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、避免接触花粉，在春秋季节关闭门窗，减少室外花粉的进入；晾晒衣物应尽量在室内，以免沾染花粉；外出时注意防护，佩戴口罩、眼镜等防护用具；",
        type:"txt"
      },
      {
        content:"2、如果已经确诊有花粉过敏症，应在春秋季节到来之前局部应用皮质激素，伴有哮喘者可经口吸入激素或色甘酸钠预防。",
        type:"txt"
      },

      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、如果患者是不明原因引起的季节性过敏，应及早到医院行过敏原检测，明确过敏原；",
        type:"txt"
      },
      {
        content:"2、应用激素类药物时应遵医嘱，不可自行使用；",
        type:"txt"
      },
      {
        content:"3、如果患者有明确过敏原史，应注意避免接触或者做好防护措施。",
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