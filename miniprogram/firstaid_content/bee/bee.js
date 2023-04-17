// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"蜂蜇伤",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"当有人被蜂蜇伤后，可以通过以下症状进行识别：",
        type:"txt"
      },
      {
        content:"1、局部红肿",
        type:"head"
      },
      {
        content:"蜇伤处出现局部的红肿热痛，且伴有瘙痒；",
        type:"txt"
      },
      {
        content:"2、头晕",
        type:"head"
      },
      {
        content:"严重者可出现全身大面积皮疹、头晕、头痛、呼吸困难全身症状。如果患者出现意识不清时，请参考心肺复苏进行识别。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/B8/60/1DBD54DB6A640CBA8117AFA1136BB860.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"当患者多处被蜇伤，并出现头晕、头痛、呼吸困难等全身症状时，请立即就近就医；当患者出现意识不清，甚至呼吸和心跳停止等情况时，请立即对其进行心肺复苏，并大声呼喊旁人，帮忙拨打急救电话120。如果四周无人，可在做心肺复苏术的同时，利用电话免提功能，拨打急救电话120，以免影响对患者进行施救。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"一、如果患者意识清醒，请按照以下步骤对其进行施救：",
        type:"head"
      },
      {
        content:"1、捆扎",
        type:"head"
      },
      {
        content:"在蜇伤处靠近心脏侧一横掌处（即蜇伤部位上方四指宽处，约10cm）进行环形捆扎，捆扎物不宜过紧过细。捆扎时要注意，每15分钟松开1分钟，且捆扎总时长不超过2小时。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/10/EA/6CDD0440A4691ECABC5C0436FC5310EA.gif",
        type:"pic"
      },
      {
        content:"2、挑刺",
        type:"head"
      },
      {
        content:"仔细检查患者被蜇伤处是否有残留的毒刺或毒腺，如果有可用针挑出或用卡刮出。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/02/57/B617855408E6A48A24505ED062440257.gif",
        type:"pic"
      },
      {
        content:"3、局部冲洗伤口",
        type:"head"
      },
      {
        content:"对患者伤处进行针对性清洗，如果是被蜜蜂蜇伤，因其毒液为酸性，所以建议用碱性的肥皂水清洗；如果是被马蜂蜇伤，因其毒液为碱性，所以用食醋清洗并湿敷。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/F7/0C/0FB9E4868F4967FD9756CFA8AC5AF70C.gif",
        type:"pic"
      },
      {
        content:"二、如果患者意识丧失，且呼吸心跳停止，应立即行心肺复苏术，并拨打急救电话120。",
        type:"head"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/A2/F5/89CB7F25EA6781D02CBD0DE0A4C2A2F5.gif",
        type:"pic"
      },
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、野外作业时注意留心观察，避免在蜂巢附近活动；",
        type:"txt"
      },
      {
        content:"2、去野外尽量穿长袖衣裤，并戴帽子；避免深色、毛织品或表面粗糙的衣帽；",
        type:"txt"
      },
      {
        content:"3、在野外避免使用香味浓郁的化妆品，可适当涂抹防止蚊虫叮咬药物。",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、被蜂群攻击时，建议不要试图逃跑或反击，以免引起蜂群更多的攻击，应就地蹲下，用衣物遮盖裸露部位，耐心等待蜂群攻击平息后再离开；",
        type:"txt"
      },
      {
        content:"2、挑刮毒刺或毒腺时，禁止挤压，以免造成局部症状加重；",
        type:"txt"
      },
      {
        content:"3、被蜇伤后应及时注意观察，并进行有效处理，防止过敏反应发生，如有不适，应立即就近就医。",
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