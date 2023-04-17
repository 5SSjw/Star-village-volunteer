const db = wx.cloud.database()
const _ = db.command
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isClick: false,
    activity_info:"",
    activityId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options._id);
    this.setData({
      activityId: options._id
    })
    this.getActivityList(options._id);
    this.isCollected(options._id);
  },
  haveSave(e) {
    if (!this.data.isClick == true) {
      // let jobData = this.data.jobStorage;
      // jobData.push({
      //   jobid: jobData.length,
      //   id: this.data.job.id
      // })
      // wx.setStorageSync('jobData', jobData);
      wx.showToast({
        title: '已收藏',
      });
    } else {
      wx.showToast({
        title: '已取消收藏',
      });
    }
    this.setData({
      isClick: !this.data.isClick
    })

    //改变isClick之后改变数据库内容
    var actiId = this.data.activityId
    var openid = app.globalData.openId
    if(this.data.isClick){
      this.addCollectionInfo(actiId , openid)
      // console.log("收藏完毕，数据库已更新")
    }
    else{
      this.deletCollectionInfo(actiId , openid)
      // console.log("取消收藏完毕，数据库已更新")
    }
  },

  /**
   * 收藏之后，为数据库添加或者删除数据 
   */ 
  addCollectionInfo(activity_id , user_openId){
    //增加
    db.collection('user_collection')
    .add({
      data: {
        activityId: activity_id,
      },
      success: res=>{
        console.log("添加数据成功",res)
      },
      fail: err=>{
        console.log("添加数据失败",err)
      }
    })
  },
  deletCollectionInfo(activity_id , user_openId){
    //删除
    db.collection('user_collection')
    .where({
      activityId: activity_id,
      _openid: user_openId,
    })
    .remove({
      success:res=>{
        console.log("删除成功",res)
      },
      fail:err=>{
        console.log("删除失败",err)
      }
    })
  },

  getActivityList(activity_id){
    db.collection('store').doc(activity_id)
    .get({
      success:res=>{
        // console.log("a")
        this.setData({
          activity_info:res.data
        })
      }
    })
  },

  /**
   * 判断是否收藏了这个活动
   */
  isCollected(activity_id){
    //首先获取此用户收藏的所有活动
    var openid = app.globalData.openId

    var actList = []
    var iterator,num = 0
    wx.cloud.callFunction({
      name: "findCollectionActivity",
      data: {
        user_openId: openid
      }
    })
    .then(res=>{
      // console.log(res.result.list)
      var tempList = res.result.list
      for(iterator = 0 ; iterator < tempList.length ; iterator ++){
        actList.push(tempList[iterator].activityId)
        if(tempList[iterator].activityId == activity_id){
          this.setData({
            isClick: true
          })
          break
        }
      }
    })
    .catch(err=>{
      console.log(err)
    });
  }
})