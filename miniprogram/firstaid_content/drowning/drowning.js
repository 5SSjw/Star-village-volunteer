// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"溺水",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"当发现有人溺水被救上岸后：",
        type:"txt"
      },
      {
        content:"1、判断意识",
        type:"head"
      },
      {
        content:"拍打溺水者双肩，并大声呼喊，判断其意识是否清醒。若溺水者意识清醒，轻者可有呛咳、呼吸急促，重者可有面部青紫、肿胀、口腔和鼻腔充满泡沫和污泥、四肢冰凉等，若溺水者意识丧失，应立即呼喊他人拨打急救电话120，并就近取得AED；",
        type:"txt"
      },
      {
        content:"2、判断呼吸",
        type:"head"
      },
      {
        content:"观察溺水者胸廓是否有起伏，以判断其是否有呼吸。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/24/BE/24B31F8C93158E9DB32B79ADF1E924BE.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"当发现有人溺水时，应立即拨打急救电话120。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、意识丧失",
        type:"head"
      },
      {
        content:"如溺水者意识丧失，需立即按照以下步骤对其进行救治。",
        type:"txt"
      },
      {
        content:"（1）开放气道。施救者跪在溺水者一侧，一手压前额，一手提下颌，打开气道，清除溺水者口鼻中的泥沙、水草、假牙等异物；",
        type:"txt"
      },
      {
        content:"（2）人工呼吸。在呼吸道通畅的前提下，施救者用拇指和食指捏紧溺水者的鼻孔，嘴唇包住溺水者嘴唇，连续吹气2-5次（吹气1秒钟，放松1秒钟）。在进行人工呼吸时，施救者可使用衣物，有条件者可使用纱布、呼吸膜垫在患者口部，以便保护施救者；",
        type:"txt"
      },
      {
        content:"（3）胸外按压。手掌根部放在两乳头连线中点，胸骨中下段，两手腕部重叠，十指交叉、相扣，两臂垂直，用身体重量向下压至少5厘米，不超过6厘米。每分钟按压100-120次，按压30次后进行口对口人工呼吸2次。重复上述操作，每5个循环检查1次溺水者呼吸、意识是否恢复，直至急救人员赶到。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/AC/A2/CDD39BB2BAA59A2EE98F67444100ACA2.gif",
        type:"pic"
      },
      {
        content:"2、意识清醒",
        type:"head"
      },
      {
        content:"安抚溺水者，安置其保持较为舒适的体位；守在溺水者身旁，密切观察其生命体征，直至急救人员赶到。如有条件，可为溺水者脱下湿衣物，盖上干净衣物以保暖。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/4B/38/2AF53072E3CCDDA3D7F218A8E08C4B38.gif",
        type:"pic"
      },
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、未成年人应在成人带领下游泳，不要独自在河边、山塘边及其他环境不熟悉的地方游泳；",
        type:"txt"
      },
      {
        content:"2、在游泳前要做适当的准备活动，以防抽筋；",
        type:"txt"
      },
      {
        content:"3、游泳前应考虑身体状况，太饱、太饿或过度疲劳时不要游泳；",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、如果发现有人溺水，首先应确保自身安全，不要轻易下水救援，因为如果没有进行专门训练，非常危险；",
        type:"txt"
      },
      {
        content:"2、对被救上岸的溺水者，切勿控水，且会耽误心肺复苏实施的时间，还可能由于胃内容物反流造成窒息，增加死亡几率；",
        type:"txt"
      },
      {
        content:"3、如溺水者没有呼吸，应尽快为其提供人工通气解决缺氧问题。",
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