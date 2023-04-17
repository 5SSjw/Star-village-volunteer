// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"海姆立克法",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"气道被异物堵塞在生活中并不少见，常导致患者无法进行呼吸，因缺氧而意外窒息死亡。当有人被异物堵塞气道时，应立即进行以下识别判断：",
        type:"txt"
      },
      {
        content:"1、症状表现",
        type:"head"
      },
      {
        content:"立即观察患者是否有面色潮红、口唇、甲床青紫，不能呼吸以及用双手抓住颈部等气道梗阻窘迫表现；",
        type:"txt"
      },
      {
        content:"2、询问病情",
        type:"head"
      },
      {
        content:"同时询问患者，以确定其是否被异物噎住，并判断患者能否发声；若不能发声，则为气道完全梗阻。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/CD/27/F6A930BA382E59FE9566E6CC6160CD27.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"完成上述检查后，立即指定一名现场人员拨打急救电话120。在征得患者或其监护人同意后，请按照以下方法对患者进行施救。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、当患者为婴儿时",
        type:"head"
      },
      {
        content:"首先，施救者一只手固定住患儿头部，将其面部朝下，保持头低脚高，用另一只手掌根部连续叩击肩胛骨连线中点处5次。然后，将患儿翻转成面部朝上，保持头低脚高，检查有无异物排出；如未发现异物，立即用中指和食指按压患儿两乳头连线中点处5次。反复交替操作上述两个步骤，直到异物排出。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/D4/B2/2CCE1AC6013362801CF80599179DD4B2.gif",
        type:"pic"
      },
      {
        content:"2、当患者为一岁以上的儿童或成人时",
        type:"head"
      },
      {
        content:"若患者意识清醒，可以站立时，首先让患者站立，施救者站在患者身后，儿童身高较矮者，施救者可跪在其身后，然后施救者一条腿在前，插入患者两腿之间呈弓步，另一条腿在后伸直，双臂环抱患者腰部，使其上身前倾。最后施救者一只手握拳，拳眼放在患者脐上两横指上方，另一只手包住拳头，并连续、快速、用力向患者的后上方冲击，直到异物吐出。若患者意识不清或站立位不便于施救时，可让患者平躺，首先开放患者的呼吸道，然后施救者骑跨在患者大腿外侧，一手以掌根按压脐上两横指的部位，两手掌交叉重叠，连续、快速、用力向患者的后上方冲击，直到异物排出。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/92/64/1D93215CCC9EB0F856AB28ECA7839264.gif",
        type:"pic"
      },
      {
        content:"3、当患者为孕妇或肥胖者时",
        type:"head"
      },
      {
        content:"让患者站立，施救者站在患者身后，双臂环抱患者胸部，一只手握拳，拳眼置于胸骨下半部分，另一只手包住拳头，然后连续、快速、用力向患者的胸部后方冲击，直到异物排出。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/10/BA/A537661C443BB9D735151E73666B10BA.gif",
        type:"pic"
      },
      {
        content:"4、当自己被异物堵塞气道，且四周无人时",
        type:"head"
      },
      {
        content:"患者可进行自救，一只手握拳，拳眼置于脐上两横指上方，另一只手包住拳头，双手急速冲击性地、向内上方压迫自己的腹部，反复有节奏、有力地进行。或稍稍弯下腰，靠在一固定物体上(如桌子边缘、椅背、扶手栏杆等)，用物体边缘压迫自己的上腹部，快速向上冲击，重复进行上述操作，直至异物排出。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/0A/F2/324459A307878C9E452CD395D0F50AF2.gif",
        type:"pic"
      },
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、进餐时确保注意力集中，禁止进餐时说话和大笑；",
        type:"txt"
      },
      {
        content:"2、进餐时，不要着急，细嚼慢咽；",
        type:"txt"
      },
      {
        content:"3、尤其是对于儿童，要看管并叮嘱他们不要随便将细小物品放入口中。",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、不管异物是否取出，都要及时到医院就诊；",
        type:"txt"
      },
      {
        content:"2、不要给患者喂食任何东西，尤其是希望用水将异物顺下去的做法是错误的；",
        type:"txt"
      },
      {
        content:"3、行海姆立克法，需征求患者或其监护人的同意。",
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