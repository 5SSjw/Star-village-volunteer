// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"胸痛",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"当有人突发剧烈胸痛时：",
        type:"txt"
      },
      {
        content:"1、询问病情",
        type:"head"
      },
      {
        content:"询问患者胸痛的性质，如部位、范围、持续时间等，疼痛有无放射至肩部、面颊及下颌、颈部、背部、上肢或上腹部，是否有冠心病、糖尿病、高血压、高血脂等病史；发作前是否有劳累、激动、暴饮暴食、寒冷刺激、吸烟、大量饮酒等情况；",
        type:"txt"
      },
      {
        content:"2、检查身体",
        type:"head"
      },
      {
        content:"观察患者是否有面色苍白、大汗淋漓、四肢湿冷、口唇青紫、呼吸困难及咯血等症状，并检查患者脉搏是否正常。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/3E/04/0B2C642272AB3C036E1B7A29F3B73E04.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"当患者出现胸痛时，应立即拨打急救电话120，无论胸痛是否缓解，均需至医院就诊。",
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
        content:"当胸痛患者意识清醒时，需按照以下步骤对患者进行救治。",
        type:"txt"
      },
      {
        content:"（1）安抚患者情绪，使其保持镇静，并嘱其在原地坐下安静休息，若有呼吸困难可取半卧位，千万不能自行移动，以免导致猝死。如条件允许，可给予患者吸氧；",
        type:"txt"
      },
      {
        content:"（2）为患者测量血压。如果患者血压不低，且有冠心病病史，帮助其舌下含服硝酸甘油，5分钟一次，最多3次。切记，血压低的患者不可服用硝酸甘油，如发生急性下壁心肌梗死；在明确急性心肌梗死的情况下，可给患者尽快嚼服阿司匹林300毫克；",
        type:"txt"
      },
      {
        content:"（3）保持呼吸道通畅，如有呼吸困难及咯血，使病人头偏向一侧。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/7A/C1/9F72C8155C341278B8676F7ED7CD7AC1.gif",
        type:"pic"
      },
      {
        content:"2、意识丧失",
        type:"head"
      },
      {
        content:"如果患者意识丧失，且呼吸停止或呈濒死样呼吸，应立即对其行心肺复苏术，具体请参照心脏骤停急救法，在施救过程中注意使用呼吸膜，用于施救者的自我防护。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/29/65/C9F681E8F71D0417A479B42475ED2965.gif",
        type:"pic"
      },
     
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、有冠心病病史的患者，应随身携带阿司匹林、硝酸甘油等药物；",
        type:"txt"
      },
      {
        content:"2、冠心病患者应注意保持心情愉快、开朗，避免过度劳累，戒烟戒酒。",
        type:"txt"
      },

      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、救治时尽量不给患者喂食水，可能会增加心肌的耗氧量，加重病情；",
        type:"txt"
      },
      {
        content:"2、无论胸痛是否缓解，都要让患者到医院检查，以明确病因；",
        type:"txt"
      },
      {
        content:"3、就诊时，患者需携带身份证、既往病历等就诊资料及正在服用的药物等；",
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