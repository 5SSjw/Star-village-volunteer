// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"哮喘",
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
        content:"当患者突然出现呼气性呼吸困难、咳嗽、胸闷、气促、说话不连贯、面色苍白或青紫等表现时，首先询问患者是否有哮喘病史；",
        type:"txt"
      },
      {
        content:"2、查体",
        type:"head"
      },
      {
        content:"患者吸气时，检查其胸骨上窝、锁骨上窝和肋间隙是否出现明显凹陷。如果气道梗阻进一步加重，可出现胸廓膨隆、心动过速、血压下降、奇脉（吸气时脉搏减弱或消失）、烦躁不安、意识障碍等。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/28/45/F6A54B96EEFFCE4E38C7917CE5DF2845.gif",
        type:"pic"
      },
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"当施救者检查发现患者出现以上表现时，应立即给患者使用其随身携带的药物；如果患者出现意识不清、呼吸及心跳停止时，应立即行心肺复苏术，并呼喊他人拨打急救电话120(若身旁无人，可利用免提功能拨打急救电话)，救助患者直至医护人员赶到。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"1、半坐位",
        type:"head"
      },
      {
        content:"让患者保持半卧位，缓解呼吸困难，并安抚其情绪，切记不要给患者喂水、喂饭，以免阻塞呼吸道，发生窒息；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/E5/4C/1337561321D73BC5D9AE76BDAEF5E54C.gif",
        type:"pic"
      },
      {
        content:"2、应用药物",
        type:"head"
      },
      {
        content:"让患者含住自己随身携带的沙丁胺醇喷雾剂喷口，在深吸气时喷1-2喷，一般可以迅速缓解呼吸困难；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/84/CA/95FEB23479098E660542D006409184CA.gif",
        type:"pic"
      },
      {
        content:"3、吸氧",
        type:"head"
      },
      {
        content:"如果有条件，可以给患者吸氧，可用鼻导管或面罩进行充分湿化的氧疗，以2-4升/分为宜；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/55/08/B681404D14B4AA79F879961D33DA5508.gif",
        type:"pic"
      },
      {
        content:"4、心肺复苏",
        type:"head"
      },
      {
        content:"当患者出现呼吸、心跳停止时，请立即拨打急救电话120，并对其行心肺复苏术，具体参照心脏骤停急救法。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/8F/1D/9BFF8A4BA2E7248D84FECF93A3828F1D.gif",
        type:"pic"
      },
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、部分患者可找到引起哮喘发作的变应原或其他非特异刺激因素，应脱离并避免这些危险因素，比如患者有食物过敏史，在饮食上需加以注意，避免食用鱼、虾、蛋等易引起过敏的食物；",
        type:"txt"
      },
      {
        content:"2、哮喘患者平时应注意加减衣物，适当锻炼身体，避免因受凉、感冒及接触过敏原而加重病情；",
        type:"txt"
      },
      {
        content:"3、有干咳、呼吸紧迫感、连打喷嚏、流泪等哮喘发作先兆时，应立即就医；",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、哮喘发作时做好心理护理，帮助患者克服紧张、焦虑和不安情绪，以减轻哮喘症状；",
        type:"txt"
      },
      {
        content:"2、患者烦躁不安时，不能应用地西泮等镇静药物，以避免抑制呼吸；",
        type:"txt"
      },
      {
        content:"3、夜间及凌晨哮喘急性发作时，患者及家属应注意护理，将急救药物置于触手可及之处；",
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