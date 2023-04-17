// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"中暑",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"长时间在高温天气或潮湿不通风的环境下作业，大量出汗、饮水不足，容易发生中暑。当有人在高温环境中发生不适时，立即将患者转移到阴凉通风处，并进行以下识别：",
        type:"txt"
      },
      {
        content:"1、症状表现",
        type:"head"
      },
      {
        content:"轻度中暑可有面色潮红或苍白、恶心呕吐、胸闷、头晕、眼花、无力、大汗、四肢麻木等表现；重度中暑除上述症状外，还可有呼吸急促、高热、肌肉痉挛、血压下降、烦躁不安、昏迷，甚至危及生命；",
        type:"txt"
      },
      {
        content:"2、询问病情",
        type:"head"
      },
      {
        content:"若患者意识清醒，询问其之前是否有头晕、头疼、饮水不足、过度疲劳等情况。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/5E/0B/346B8DBD54862B79948546643F4F5E0B.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"如果患者为重度中暑，应立即拨打急救电话120。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、意识清醒",
        type:"head"
      },
      {
        content:"停止活动，在凉爽、通风的环境中休息，帮患者脱去多余的或者紧身的衣物，将湿的凉毛巾放置于患者的头部和躯干部以降温，或将冰袋置于患者的腋下、颈侧和腹股沟处，还可以向患者全身喷洒自来水或直接将其置于浴缸或水盆中；同时让患者饮用富含电解质的饮料，推荐服用果汁、牛奶、蔬菜汁或者口服补液盐等，并密切观察其情况；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/9D/6D/F9D45D70DA4EDA18D1B3F40CA1579D6D.gif",
        type:"pic"
      },
      {
        content:"2、意识丧失",
        type:"head"
      },
      {
        content:"当患者意识丧失时，行物理降温的同时将其翻转至侧卧位，翻转方法为：抬起患者近侧手臂，向上放在头的一侧，将患者远侧胳膊放在近侧脸颊下方，使其远侧腿屈曲，足部置于近侧腿膝关节下方。施救者一只手抓住患者远侧肩头或肘部，另一只手抓住其屈曲的膝盖，同时将其翻转至侧卧位，调整患者头部，使其仰头，调节脸颊下方的手掌位置，使嘴巴低于喉头位置，最后调整患者腿部位置使其稳定，维持这种姿势，并密切观察患者呼吸及脉搏等情况。",
        type:"txt"
      },
      {
        content:"如果患者意识丧失，呼吸停止或呈濒死样呼吸，应立即对其行心肺复苏术（具体可参照心脏骤停急救法），救治时注意使用呼吸膜，用于施救者的自我防护。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/6B/EB/30FCDD2B62F93C00AA7F54150B356BEB.gif",
        type:"pic"
      },
     
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、天气炎热时，不论是否口渴都应及时补充水分；",
        type:"txt"
      },
      {
        content:"2、避免在11：00-15：00时间段内暴露于阳光太久，在阳光下活动时，尽量穿宽松浅色透气衣服，戴宽边遮阳帽，使用防晒霜；",
        type:"txt"
      },
      {
        content:"3、如必须在高温环境中工作，需做好防暑降温工作。",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、饮用纯净水、矿泉水会加重抽搐；如果患者意识不清或昏迷，禁止喂水，以免造成窒息；",
        type:"txt"
      },
      {
        content:"2、严重中暑者可能会发生肌肉不自主的抽搐，发生这种情况不要在病人嘴里放任何东西，不要刻意束缚其抽搐的肢体，可用软物（如床垫等）垫在病人身下。如果发生呕吐，将患者头偏向一侧以确保其呼吸道通畅，防止误吸。",
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