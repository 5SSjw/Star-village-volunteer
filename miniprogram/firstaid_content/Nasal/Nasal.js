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
        content:"当有人鼻腔内进入异物时：",
        type:"txt"
      },
      {
        content:"1、询问病情",
        type:"head"
      },
      {
        content:"当有人鼻腔内进入异物时，首先询问患者，明确鼻腔内异物的种类和形状（圆润或尖锐）、质地（硬或软），以及异物进入的时间；",
        type:"txt"
      },
      {
        content:"2、检查局部",
        type:"head"
      },
      {
        content:"询问基本情况后，用手电筒照射患者患侧鼻腔，观察鼻腔内是否能看到异物，是否有分泌物及其颜色、性质、有无异味等。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/8C/92/0825D6D9D4A472D970F786B65EAD8C92.gif",
        type:"pic"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、擤鼻",
        type:"head"
      },
      {
        content:"嘱患者低头，用手指按住健侧鼻孔，用嘴吸气后，再用鼻子用力吹气，看能否将异物排出；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/19/84/52BC220D6174BF547A3BCEF868C21984.gif",
        type:"pic"
      },
      {
        content:"2、诱发喷嚏",
        type:"head"
      },
      {
        content:"若擤鼻方法无效，可以嘱患者用干净细长棉絮或羽毛放入健侧鼻孔轻轻转动，并嘱其低头，诱发喷嚏，促使异物排出；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/9D/C8/E64757EE677C729565BF7053A5249DC8.gif",
        type:"pic"
      },
      {
        content:"3、趋光法",
        type:"head"
      },
      {
        content:"若进入鼻腔内的异物是小飞虫或其他活物时，可用手电筒照射患者患侧鼻孔，让其用嘴吸气，再用鼻子轻呼气。利用小飞虫的趋光性，诱使其自行爬出。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/48/1F/96D07BE9307AA55D032E1843DF70481F.gif",
        type:"pic"
      },
      {
        content:"如果上述方法均无效，或鼻腔被锋利异物刺穿，请立即前往医院就医。",
        type:"txt"
      },
  
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、若异物处于鼻腔深处或完全堵塞，特别是圆形异物时，避免自行挖鼻或用镊子夹取，以免导致异物进入鼻腔越来越深，应立即送往医院治疗；",
        type:"txt"
      },
      {
        content:"2、3岁以下儿童不宜使用上述方法，可能会导致异物吸入气道引起窒息，应立即就医；",
        type:"txt"
      },
      {
        content:"3、异物取出后可用生理盐水冲洗鼻腔，避免发生炎症。",
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