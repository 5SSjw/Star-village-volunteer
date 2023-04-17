// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"心肺复苏",
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
        content:"确认现场及周边环境安全，避免二次伤害的发生；",
        type:"txt"
      },
      {
        content:"2、判断意识",
        type:"head"
      },
      {
        content:"拍打患者肩部并大声呼叫（例如，先生先生您怎么了），观察患者有无应答；",
        type:"txt"
      },
      {
        content:"3、判断生命体征",
        type:"head"
      },
      {
        content:"听呼吸看胸廓，观察患者有无呼吸和胸廓起伏；在喉结旁两横指或颈部正中旁三横指处，用食指和中指两指触摸颈动脉，观察有无搏动。以上操作要在10秒内完成。",
        type:"txt"
      },
      {
        content:"如发现患者出现意识丧失，且无呼吸无脉搏，应立即实施心肺复苏术。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/4C/73/65736B890599A3A608157AFF33644C73.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"遇到这种情况不要慌张，立即进行以下处理。大声呼喊旁人帮忙拨打急救电话120，并设法取得AED（自动体外除颤器）； 若旁边无人时，需先对患者行心肺复苏术，与此同时拨打急救电话120，电话可开免提，以避免影响心肺复苏术的操作。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、胸外按压",
        type:"head"
      },
      {
        content:"（1）放置患者于平整硬地面",
        type:"head"
      },
      {
        content:"将患者放置于平整硬地面上，呈仰卧位，其目的是为了保证进行胸外按压时，有足够按压深度；",
        type:"txt"
      },
      {
        content:"（2）跪立在患者一侧，两膝分开",
        type:"head"
      },
      {
        content:"（3）开始胸外按压，找准正确按压点，保证按压力量、速度和深度",
        type:"head"
      },
      {
        content:"找准正确按压点：找准患者两乳头连线的中点部位（胸骨中下段），右手（或左手）掌根紧贴患者胸部中点，双手交叉重叠，右手（或左手）五指翘起，双臂伸直；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/66/2C/E6B61AB49236031DF953207E86E3662C.gif",
        type:"pic"
      },
      {
        content:"保证按压力量、速度和深度。利用上身力量，用力按压30次，速度至少保证100-120次/分，按压深度至少5-6厘米。按压过程中，掌根部不可离开胸壁，以免引起按压位置波动，而发生肋骨骨折。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/CF/95/CE30FEDD0601314295ABD084B3C9CF95.gif",
        type:"pic"
      },
      {
        content:"2、开放气道",
        type:"head"
      },
      {
        content:"按压胸部后，开放气道及清理口鼻分泌物",
        type:"txt"
      },
      {
        content:"仰头抬/举颏法开放气道。用一只手放置在患者前额，并向下压迫，另一只手放在颏部（下巴），并向上提起，头部后仰，使双侧鼻孔朝正上方即可；",
        type:"txt"
      },
      {
        content:"清理口腔分泌物。将患者头偏向一侧，看患者口腔是否有分泌物，并进行清理；如有活动假牙，需摘除。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/E5/A4/E45BEDF7363D6741742BDC38AEDEE5A4.gif",
        type:"pic"
      },
      {
        content:"3、人工呼吸",
        type:"head"
      },
      {
        content:"进行口对口人工呼吸前，一定要保证自身安全，在患者口部放置呼吸膜进行隔离，若无呼吸膜，可以用纱布、手帕、一次性口罩等透气性强的物品代替，但不能用卫生纸巾这类遇水即碎物品代替。用手捏住患者鼻翼两侧，用嘴完全包裹住患者嘴部，吹气两次。每次吹气时，需注意观察胸廓起伏，保证有效吹气，并松开紧捏患者鼻翼的手指；每次吹气，应持续1-2秒，不宜时间过长，也不可吹气量过大。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/63/32/B3645DCDA7CDFA93B881A32AE8726332.gif",
        type:"pic"
      },
      {
        content:":注：以上步骤按照30:2的比例，重复进行胸外按压和人工呼吸，直到医护人员赶到",
        type:"txt"
      },
      {
        content:"30次胸外按压和2次人工呼吸为一个循环，每5个循环检查一次患者呼吸、脉搏是否恢复，直到医护人员到场。当进行一定时间感到疲累时，及时换人持续进行，确保按压深度及力度。",
        type:"txt"
      },
      {
        content:"4、AED使用",
        type:"head"
      },
      {
        content:"当取得AED(自动体外除颤器)后，打开AED电源，按照AED语音提示，进行操作；",
        type:"txt"
      },
      {
        content:"根据电极片上的标识，将一个贴在右胸上部，另一个贴在左侧乳头外缘（可根据AED上的图片指示贴）；",
        type:"txt"
      },
      {
        content:"离开患者并按下心电分析键，如提示室颤，按下电击按钮；",
        type:"txt"
      },
      {
        content:"如果一次除颤后未恢复有效心率，立即进行5个循环心肺复苏，直至专业医护人员赶到。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/2A/C4/61EEB55531F67422818CF77564772AC4.gif",
        type:"pic"
      },
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、保持良好的饮食习惯，避免营养过剩或营养不良；",
        type:"txt"
      },
      {
        content:"2、冬天外出要注意保暖，以免着凉而发生心脑血管意外",
        type:"txt"
      },
      {
        content:"3、避免过度劳累，保持情绪稳定和心理平衡，减少冠心病急性发作的诱因",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、进行心肺复苏前，一定要保持冷静，判断清楚患者情况后，再行心肺复苏，不要盲目操作；",
        type:"txt"
      },
      {
        content:"2、人工呼吸时，注意避免漏气。",
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