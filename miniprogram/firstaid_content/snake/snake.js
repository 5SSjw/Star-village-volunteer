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
        content:"1、询问病情",
        type:"head"
      },
      {
        content:"当发现有人被蛇咬伤后，首先询问患者被蛇咬伤的部位、时间以及蛇的种类或特征等情况；",
        type:"txt"
      },
      {
        content:"2、检查情况",
        type:"head"
      },
      {
        content:"检查伤者局部伤口形状（有两个针尖样较深的大牙痕多为有毒蛇，呈“. .”型或“/ \”型，有2行或4行锯齿状浅小牙痕多为无毒蛇）、大小、深浅以及伤口周围是否有红肿、出血、瘀斑及血疱等情况，是否迅速扩展、加剧；观察患者全身情况，判断其是否有胸闷、头昏眼花、四肢乏力、呼吸困难，甚至昏迷等症状。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/0C/1F/78AB05D8F1B037F8B057445926D60C1F.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"完成上述检查后，立即拨打急救电话120，并在急救车到来之前，按照以下方法对患者进行施救。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、扎止血带",
        type:"head"
      },
      {
        content:"嘱患者减少活动，保持镇定，并保持伤肢低垂，使伤口低于心脏水平位置；用止血带（避免用细绳或电线来代替止血带，以免勒伤皮肤）或宽约5-10cm的布条在伤口近心端扎紧，松紧度以插进一根手指为宜。包扎完成后须标注时间，为了防止肢体远端因血液循环阻断而发生组织坏死，应每隔15-20分钟放松止血带1-2分钟，待伤口处理后20-30分钟方可解除；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/F3/42/D564EB6D50390274150B2878B945F342.gif",
        type:"pic"
      },
      {
        content:"2、冲洗伤处",
        type:"head"
      },
      {
        content:"用大量生理盐水、自来水或者河水持续冲洗患者被咬伤部位，直到急救人员赶到，如伤口有毒牙残留，应及时挑出，并密切观察患者意识、呼吸及脉搏等情况；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/AF/24/794D6BAFB94E1210DB1BCCA778E2AF24.gif",
        type:"pic"
      },
      {
        content:"3、休克体位",
        type:"head"
      },
      {
        content:"若患者意识不清，但呼吸及脉搏正常，则需将患者安置成平卧位，用背包或衣物将患者的头和胸部垫高20º-30º，下肢垫高15º-20º（若下肢被咬伤，禁止抬高下肢），以防止休克，注意为患者保暖，并将患者头部偏向一侧，以免导致窒息。若患者意识不清，且呼吸及心跳停止，请立即对其行心肺复苏术（具体参照心脏骤停急救法）。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/CC/1F/26C057FA204AB10911133BDACF0DCC1F.gif",
        type:"pic"
      },
     
     
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、禁止用嘴吸吮咬伤处的毒液，可用吸奶器或者拔火罐反复吸出毒液；",
        type:"txt"
      },
      {
        content:"2、当毒蛇与无毒蛇咬伤不易鉴别时，均按照毒蛇咬伤处理；",
        type:"txt"
      },
      {
        content:"3、就医时尽量携带蛇标本或拍摄照片，尽可能提供毒蛇相关信息， 如颜色、花纹、形状等。",
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