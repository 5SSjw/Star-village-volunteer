// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"晒伤",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"当有人日晒后皮肤出现不适时：",
        type:"txt"
      },
      {
        content:"1、询问病情",
        type:"head"
      },
      {
        content:"当有人日晒后皮肤出现不适时，应询问伤者日晒时长，局部皮肤（头、面、前臂等暴露部位）是否有刺痛、刺痒感，并立即扶伤者脱离暴晒环境，到阴凉通风处休息；",
        type:"txt"
      },
      {
        content:"2、检查局部",
        type:"head"
      },
      {
        content:"观察伤者局部皮肤是否有边界清楚的水肿、红斑、水疱、脱屑、糜烂等表现。全身广泛晒伤时，是否出现畏寒、发热、乏力、头晕、头疼、恶心、呕吐等全身不适症状，若长时间暴晒还可能出现意识模糊、血压下降、心悸或休克。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/2E/92/ADE0AB771F9E401A968E3987A6162E92.gif",
        type:"pic"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、冷敷",
        type:"head"
      },
      {
        content:"立即避开阳光直晒的地方，用凉的湿毛巾或用毛巾包裹冰袋，对晒伤处进行大约20分钟的冷敷，可进行2-3次，有助于缓解晒伤引起的疼痛，冷敷时需注意冰袋禁止直接接触皮肤，避免冻伤；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/E3/91/532E2743C54C51788AB04617EB16E391.gif",
        type:"pic"
      },
      {
        content:"2、补液",
        type:"head"
      },
      {
        content:"给伤者饮用适量盐水或运动饮料，以防止其脱水。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/A9/26/F970280D1838372A0859CF713DB3A926.gif",
        type:"pic"
      },
      {
        content:"经过上述处理，大部分伤者症状可缓解。如果伤者出现皮肤破溃或症状持续不缓解，应立即就医。",
        type:"txt"
      },
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、平时要经常参加户外锻炼，增强皮肤对日晒的耐受能力；",
        type:"txt"
      },
      {
        content:"2、在上午10时到下午14时日光照射最强时，尽量避免户外活动或减少外出活动时间；",
        type:"txt"
      },
      {
        content:"3、进行户外运动或外出时，要避免阳光直晒，适当涂抹防晒霜，常规应用日光保护因子(SPF)15以上的遮光剂，有严重光敏者需用(SPF)30以上的高效遮光剂。也可以采取撑伞、戴宽边帽、穿长袖衣服等措施。",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、避免自行在伤处涂抹药膏、草药、牙膏等物质，以免掩盖伤情，造成感染；",
        type:"txt"
      },
      {
        content:"2、冷敷时禁止让冰袋直接接触皮肤，以免损伤皮肤；",
        type:"txt"
      },
      {
        content:"3、注意局部皮肤清洁卫生，预防细菌感染；",
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