// pages/zixun_detail/zixun_detail.js
const app1 = getApp()
const util = require("../../utils/util")
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"止血",
    laiyuan:"有来医生",
    mainContent:[
      {
        content:"症状识别",
        type:"head"
      },
      {
        content:"血液从伤口流向体外称为外出血，常见于头部、上肢、下肢等部位，一般需要进行症状识别：",
        type:"txt"
      },
      {
        content:"1、出血情况",
        type:"head"
      },
      {
        content:"询问伤者的致伤部位，观察其伤口大小、深度、出血量及血液颜色。如果血液为鲜红色，且呈喷射状，多为动脉出血；如果血液为暗红色，且呈渗出状，多为静脉出血；",
        type:"txt"
      },
      {
        content:"2、全身情况",
        type:"head"
      },
      {
        content:"当失血量达全身血量20%以上时，可出现脸色苍白、口唇青紫、出冷汗、四肢发凉、烦躁不安或表情淡漠、呼吸急促、心慌气短等休克症状，严重会导致昏迷。",
        type:"txt"
      },  
      {
        content:"120急救",
        type:"head"
      },
      {
        content:"当出现大动脉喷射状出血、头部、腹部或胸部严重的出血性损伤以及持续用力按压10分钟不能止血等情况，施救者需要及时拨打急救电话120，同时密切观察患者的意识、呼吸及脉搏。",
        type:"txt"
      },
      {
        content:"救治方法",
        type:"head"
      },
      {
        content:"当有人头部出血时",
        type:"head"
      },
      {
        content:"1、压迫止血",
        type:"head"
      },
      {
        content:"用干净的毛巾或纱布块压迫伤口5-10分钟；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/CD/A3/FA03C742BB7B8BDCA86E1DD62E00CDA3.gif",
        type:"pic"
      },
      {
        content:"2、指压动脉止血",
        type:"head"
      },
      {
        content:"如仍有出血，可用手指压迫头部单侧，位于耳前方一横指的颞浅动脉，以达到止血目的；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/1D/59/53C521F037EDB8C2A642C75D469B1D59.gif",
        type:"pic"
      },
      {
        content:"3、加压包扎",
        type:"head"
      },
      {
        content:"站在伤者身后，将干净的纱巾或三角巾的顶角对准脑后正中线，底边向内对折约两横指宽，两底角从前额齐眉处经双耳上方拉向枕部，在枕骨下方交叉并压紧顶角，再绕到前额打结，最后将三角巾末端多余的部分塞入包好的三角巾内。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/86/04/A02F0BD669206C42B763157FADE18604.gif",
        type:"pic"
      },
      {
        content:"当有人上肢出血时",
        type:"head"
      },
      {
        content:"1、压迫止血",
        type:"head"
      },
      {
        content:"用干净的毛巾或纱布块压迫伤口5-10分钟；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/A8/2D/1D4AB229A0ACF554129CF1A9C6CBA82D.gif",
        type:"pic"
      },
      {
        content:"2、体位止血法",
        type:"head"
      },
      {
        content:"抬高伤肢，使伤处高于伤者心脏位置，以帮助减缓出血；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/1E/4D/DC9FF863FCF22D8C46B287B232861E4D.gif",
        type:"pic"
      },
      {
        content:"3、加压包扎",
        type:"head"
      },
      {
        content:"用干净的布条或绷带环形加压包扎伤口，松紧度以可插入一根手指为宜；包扎完成后，每隔10分钟检查手指远端血运是否正常；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/50/B0/FA7B2F0601DF8FF05B1150D9B7C450B0.gif",
        type:"pic"
      },
      {
        content:"4、止血带止血",
        type:"head"
      },
      {
        content:"当上述止血无效时，可在上肢中上三分之一处，用宽约5-10cm的布条或三角巾加绞棒捆扎，并用止血带捆扎两圈，不宜过紧或过松，松紧度以手腕桡动脉脉搏刚好消失时为宜，包扎完成后标注捆扎时间。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/76/DE/4E0BA238EAAC7CCCE918DEEA16F076DE.gif",
        type:"pic"
      },
      {
        content:"当有人下肢出血时",
        type:"head"
      },
      {
        content:"1、压迫止血",
        type:"head"
      },
      {
        content:"用干净的毛巾或纱布块压迫伤口5-10分钟；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/BB/7A/FE023C6BBA5A87E9B0C7B023CA1FBB7A.gif",
        type:"pic"
      },
      {
        content:"2、体位止血法",
        type:"head"
      },
      {
        content:"抬高伤肢",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/04/72/90BBAC1D3202C00BC3D77A38E64C0472.gif",
        type:"pic"
      },
      {
        content:"3、加压包扎",
        type:"head"
      },
      {
        content:"用干净的布条或弹力绷带螺旋包扎伤口，不宜过紧或过松，松紧度以伤肢足背动脉脉搏刚好消失为宜；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/5D/15/D23F04C8F52492CBDBDDE99BBC625D15.gif",
        type:"pic"
      },
      {
        content:"4、压迫动脉止血",
        type:"head"
      },
      {
        content:"压迫大腿根部动脉，进行止血；",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/CE/B6/79A95952DBD2D7315DBD3686DA78CEB6.gif",
        type:"pic"
      },
      {
        content:"5、止血带止血",
        type:"head"
      },
      {
        content:"当止血无效时，在大腿中段位置捆扎止血带或布条，标注捆扎时间。",
        type:"txt"
      },
      {
        content:"https://file.youlai.cn/cnkfile1/M02/DA/38/BAC6E2B42F1DB72F0B6CB2B41277DA38.gif",
        type:"pic"
      },
      {
        content:"风险预防",
        type:"head"
      },
      {
        content:"1、使用剪刀、水果刀等锋利器具时，应集中注意力，以免割伤出血；",
        type:"txt"
      },
      {
        content:"2、乘坐交通工具时注意遵守交通规则，做好防护，避免交通意外；",
        type:"txt"
      },
      {
        content:"3、如发现工作区域有暴露的铁皮角、金属丝头、铁钉等尖锐物体，要及时取走，以免伤人；",
        type:"txt"
      },
      {
        content:"特别提示",
        type:"head"
      },
      {
        content:"1、给伤者止血时，应尽量戴上橡胶手套，做好自我防护；",
        type:"txt"
      },
      {
        content:"2、止血后请及时送伤者到正规医疗机构就医；",
        type:"txt"
      },
      {
        content:"3、当伤者大动脉出血时，需第一时间止血。如使用一种止血方法仍无法止血，可联合运用多种止血方法；",
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