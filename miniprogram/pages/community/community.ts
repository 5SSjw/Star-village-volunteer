// const app1 = getApp()
// const util = require("../../utils/util")
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     actionsList:[],
//     openid:""
//   },
//   onLoad(){
//     var that = this
//     wx.cloud.database().collection("actions").orderBy('time','desc').get({
//       success(res){
//         console.log('查询成功',res)
//         //格式化时间
//         var list = res.data
//         for(var j in list){
//           list[j].time =util.formatTime(new Date(list[j].time))
//         }
//         that.setData({
//           actionsList:list
//         })
//         console.log(that.data.actionsList)
//       }
//     })

//     // wx.cloud.callFunction({
//     //   name:"getOpenID",
//     //   success(res){
//     //     console.log("获取openid成功：",res.result.openid);
        
//     //   }
//     // })
//   },
//   fabiao(){
//       console.log("跳转发表界面")
//       wx.navigateTo({
//         url:"../share/share"
//       })
//     },

    
//     onPullDownRefresh(){
//       console.log('我下拉刷新了');
//     // 重置数组
//     this.setData({
//       actionsList: []
//     })
//     // 发送请求
//     this.getList() //请求当前页面数据
//     },

//     getList(){
//       // 请求数据后
//       var that = this
//       wx.cloud.database().collection("actions").orderBy('time','desc').get({
//         success(res){
//           console.log('查询成功',res)
//           //格式化时间
//           var list = res.data
//           for(var j in list){
//             list[j].time =util.formatTime(new Date(list[j].time))
//           }
//           that.setData({
//             actionsList:list
//           })
//           console.log(that.data.actionsList)
//         }
//       })
//           // 关闭下拉刷新的窗口
//         wx.stopPullDownRefresh()
//     },

//     onShareAppMessage(event){
//       console.log(event)
//       return{
//         title:"",
//         imageURL:"",
//         path:""
//       }
//     }

    
// })