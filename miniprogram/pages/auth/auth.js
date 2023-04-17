const app = getApp()
const db = wx.cloud.database()
const _ = db.command
Page({

  data: {

  },


  onLoad() {
    wx.cloud.callFunction({
        name:"getOpenID",
        success(res){
            console.log(res)
            app.globalData.openId = res.result.openid
            console.log("获取我的openid成功", app.globalData.openId)
            db.collection('user').where({
              openId: _.eq( app.globalData.openId)
             }).get({
               success:res=>{
                 console.log(res)
                 if(res.data.length!=0){
                  console.log("a")
                  app.globalData.isIndb=true
                 }else{
                  app.globalData.isIndb=false
                 }
               }
             })
        }
    })
  },
  getInfo(){
    wx.getUserProfile({
      desc:'获取用户必要信息',
      success(res){
        console.log("授权成功",res)
        app.globalData.userInfo = res.userInfo
        console.log("获取全局用户信息成功", app.globalData.userInfo)
        if(app.globalData.isIndb==false){
          db.collection('user').add({
            // data 字段表示需新增的 JSON 数据
            data: {
              gender:app.globalData.userInfo.gender,
              nickname:app.globalData.userInfo.nickName,
              imageurl:app.globalData.userInfo.avatarUrl,
              hours:0,
              integral:0,
              rank:1,
              openId:app.globalData.openId
            },
            success(res) {
              // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
              console.log(res)
            }
          })
        }else{
          console.log("已经在数据库里了")
          db.collection("user").where({
            openId:app.globalData.openId
          }).update({
            data:{
              nickname:app.globalData.userInfo.nickName,
              imageurl:app.globalData.userInfo.avatarUrl
            }
          }).then(res=>{
            console.log(res)
          })
          
        }
        wx.switchTab({
          url:"../index/index",
          success(){
            wx.showToast({
              title:"授权成功！"
            })
          }
        })
      }
    })

  }
  
})