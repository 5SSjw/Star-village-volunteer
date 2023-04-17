// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"低血糖",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"低血糖的识别主要分以下两步：",
        type:"txt"
      },
      {
        content:"1、询问病情",
        type:"head"
      },
      {
        content:"询问并观察患者是否有饥饿、乏力、出汗、心慌、面色苍白等情况；严重低血糖可出现精神不集中、思维和言语迟钝、头晕、嗜睡、抽搐，甚至昏迷等；",
        type:"txt"
      },
      {
        content:"2、测量血糖",
        type:"head"
      },
      {
        content:"用血糖测量仪为患者测量血糖，若测得血糖值低于2.8mmol/L，则可诊断为低血糖。如果是糖尿病患者在治疗期间，测量血糖值低于3.9mmol/L，即可诊断为低血糖。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/0E/DB/E7CD63F3B0528904033D0D828F2A0EDB.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"若发现患者出现意识不清或昏迷时，应立即拨打急救电话120；如果患者呼吸、心跳停止，应立即行心肺复苏术，并呼喊他人拨打急救电话120(若身旁无人，可利用免提功能拨打急救电话)，救助患者直至医护人员赶到。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"当患者意识清醒时",
        type:"head"
      },
      {
        content:"1、防止摔伤",
        type:"head"
      },
      {
        content:"扶患者到相对安全且舒适的地方坐下休息，防止其摔伤或出现其他意外情况；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/CB/52/60038FEAB3B4470951922575755ECB52.gif",
        type:"pic"
      },
      {
        content:"2、补充糖分",
        type:"head"
      },
      {
        content:"给患者食用含糖的食物或饮料，如：果汁、糖水、甜面包等。注意避免进食过快，以免引起呛咳，大多数患者进食含糖食物或饮料后，其低血糖症状可自行缓解；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/2B/12/8362139FB07CBB88415D702AB2BC2B12.gif",
        type:"pic"
      },
      {
        content:"当患者意识不清，但有呼吸及心跳时",
        type:"head"
      },
      {
        content:"3、侧卧",
        type:"head"
      },
      {
        content:"可将患者翻转至侧卧位，避免呕吐物引起窒息。以右侧卧位为例：施救者位于患者右侧，抬起患者右上肢放于患者头部右侧，然后将其左手放于右肩，同时使患者左腿屈曲，施救者双手分别放于患者左肩及左膝，翻转患者至右侧卧位，动作要缓慢轻柔，翻转后注意为患者保暖，并密切观察其意识、呼吸及脉搏等情况；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/10/C0/E1974758106E4CA9F20FC28C961810C0.gif",
        type:"pic"
      },
      {
        content:"当患者意识不清，且呼吸、心跳停止时",
        type:"head"
      },
      {
        content:"4、心肺复苏",
        type:"head"
      },
      {
        content:"如果患者意识不清，且呼吸、心跳停止，立即对其行心肺复苏术。施救者要注意自我防护，口对口人工呼吸时注意使用呼吸膜，避免交叉感染。（具体操作及注意事项参照心脏骤停急救法）",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/F1/E6/AD11D67EB2CF8D50CA99536D7F52F1E6.gif",
        type:"pic"
      },
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、日常生活中注意三餐规律、营养均衡，避免空腹时进行跑步、爬楼梯等剧烈活动；",
        type:"txt"
      },
      {
        content:"2、对于糖尿病患者，日常应进行血糖监测，明确降糖药物治疗情况(尤其是胰岛素的剂量、饮食和运动与血糖的关系)，不能擅自加减药量或停药，以免引起血糖波动；",
        type:"txt"
      },
      {
        content:"3、日常体检或产检时，关注空腹血糖值，如果空腹血糖值过低，及时到医院内分泌科就诊。",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、禁止强行喂食。如果患者出现意识不清，禁止强行给其喂食，以免发生窒息；",
        type:"txt"
      },
      {
        content:"2、合理用药。如果糖尿病患者发生了低血糖，嘱咐其不要因恐慌而减少或停用胰岛素；",
        type:"txt"
      },
      {
        content:"3、积极预防。若糖尿病患者有过低血糖的病史，一定要随身携带含糖食物，避免低血糖的发生。",
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