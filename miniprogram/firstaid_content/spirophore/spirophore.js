// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"人工呼吸",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"人工呼吸，是施救者利用自己的呼吸协助患者进行呼吸的方法，在现场急救中简便、有效。当有人突然倒地时，应立即进行以下识别判断",
        type:"txt"
      },
      {
        content:"1、评估现场",
        type:"head"
      },
      {
        content:"确认现场环境是否安全，确保自己不会受到意外伤害；",
        type:"txt"
      },
      {
        content:"2、判断意识",
        type:"head"
      },
      {
        content:"呼喊并拍打患者肩部，判断其有无意识；",
        type:"txt"
      },
      {
        content:"3、判断生命体征",
        type:"head"
      },
      {
        content:"让患者平躺在平地或硬板上，解开患者上衣，俯耳听患者有无呼吸声，看其胸部有无起伏，触摸其颈动脉有无搏动，以判断患者呼吸及心跳是否正常。",
        type:"txt"
      },
      {
        content:"以上操作要在十秒内完成。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/2D/C4/94B4890F2D849C17F874FEA7351B2DC4.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"若患者意识丧失，且呼吸及心跳停止，立即指定一名现场人员拨打急救电话120，并取得AED。在急救车到来之前，请按照以下方法对患者行心肺复苏术。如果仅一人在现场，在拨打急救电话前，应先对患者进行2分钟心肺复苏。 ",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"对患者进行心肺复苏时，首先，在患者两乳头连线中点处进行30次胸外按压，每次按压深度5-6cm，频率保持在每分钟100-120次，按压时注意胸廓回弹。然后，开放患者呼吸道，并及时清除其口腔分泌物。最后，对患者行人工呼吸。",
        type:"txt"
      },
      {
        content:"1、口对口",
        type:"head"
      },
      {
        content:"施救者一手放在患者前额，并用拇指和食指捏住患者的鼻孔，另一手握住其下巴，使头尽量后仰，保持气道开放状态。然后，施救者深吸一口气，张开口以包住患者的嘴，向患者嘴内连续吹气2次，每次吹气时间为1-1.5秒，若吹气有效，可观察到患者胸廓随吹气而抬起。停止吹气后，松开捏住鼻孔的手，俯耳可听见有气流呼出的声音。",
        type:"txt"
      }, 
      {
        content:"https://file.youlai.cn/cnkfile1/M02/0C/B5/E39158DA3B491E6CEF1861853EB70CB5.gif",
        type:"pic"
      },
      {
        content:"2、口对鼻",
        type:"head"
      },
      {
        content:"当患者有口腔外伤或其他原因致口腔不能打开时，可采用口对鼻人工呼吸，首先施救者使患者呈头后仰的气道开放状态，并用手托住患者下颌使其口唇紧闭。然后施救者深吸一口气，用嘴包住患者鼻部，用力向患者鼻孔内吹气，连续吹气2次。在吹气过程中，观察患者胸部起伏情况，注意避免过度通气和漏气。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/ED/FE/EEB9372A4C16C956CFB72C14D3BEEDFE.gif",
        type:"pic"
      },

      {
        content:"3、口对口鼻",
        type:"head"
      },
      {
        content:"当患者为婴幼儿时，可采用口对口鼻人工呼吸，首先施救者使患儿呈头后仰的气道开放状态，请注意，对患儿行按额抬颌法时，头后仰的角度应比成人略小。然后施救者深吸一口气，张开口以包住患儿的口鼻，向患儿口鼻连续吹气2次。在吹气过程中，观察患儿胸部起伏情况，注意避免过度通气和漏气。",
        type:"txt"
      },

      {
        content:"https://file.youlai.cn/cnkfile1/M02/F9/C3/D35B18B46C4E18AF239C846DB302F9C3.gif",
        type:"pic"
      },

      {
        content:"30次胸外按压和2次人工呼吸为1个循环。每5个循环，检查1次患者呼吸及心跳是否恢复，直到急救人员赶到。",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、做好必要的自我防护，可用呼吸膜、纱布等透气性好的材料覆盖患者口鼻，防止交叉感染；",
        type:"txt"
      },
      {
        content:"2、要检查患者的呼吸道是否通畅，必要时应清除杂物，保持呼吸道通畅；",
        type:"txt"
      },
      {
        content:"3、每次吹气时间为1-1.5秒，吹气量1000毫升左右，以胸廓适当膨起为宜；",
        type:"txt"
      },
      {
        content:"4、每次吹气后，侧头换一下气，并松开捏着鼻翼的手指，然后再进行第2次吹气。",
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