//index.js

const app = getApp()
const util = require('../../utils/util.js')
const QQMapWX = require('../../utils/qqmap-wx-jssdk1/qqmap-wx-jssdk.min.js')

var qqmapsdk = new QQMapWX({
  key: '3FOBZ-ZWAC4-5WHUK-XF4HT-PGGKV-TBB3Q'
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    // openid: undefined,
    // logged: false,

    // wgs84: undefined,
    // gcj02: undefined,

    // longitude: undefined,
    // latitude: undefined,

    // name: undefined,
    // address: undefined,
    date: undefined,
    formatedDate: undefined,

    hasLocation: false,
    location_details: undefined

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      // console.log("1")
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        // console.log("2")
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  getUserInfo: function(e) {
    console.log(e)
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      console.log("初次授权 e.detail.userInfo: ", e.detail.userInfo)
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })

      this.uploadUserInfo()

      // if (!app.globalData.openid) {
      //   getOpenid()
      // }

      // 冗余调用一次 wx.getUserInfo()，确保云开发控制台—>运营分析->用户访问列表中出现用户详细信息。
      wx.getUserInfo({
        success: res => {
          console.log("初次授权 wx.getUserInfo: ", res.userInfo)
        }
      })

    } else {
      wx.showToast({
        icon: "none",
        title: '登录失败，请重试'
      })
    }
  },

  uploadUserInfo: function() {
    const db = wx.cloud.database()
    db.collection("users")
      .where({
        _openid: app.globalData.openid,
      })
      .get()
      .then(res => {
        // console.log("res.data: ", res.data)
        if (!res.data.length) {
          db.collection('users').add({
            data: {
              userInfo: this.data.userInfo,
              formatedDate: util.formatTime(new Date),
              date: Date()
            },
            success: res => {
              console.log('微信登录信息上传成功', res)
            },
            fail: err => {
              console.error('[数据库] [新增记录] 失败：', err)
            }
          })
        } else {
          console.log("userInfo already exists in cloud database.", res)
        }
      })
      .catch(err => {
        console.error(err)
      })

  },

  updateUserInfo: function() {
    const db = wx.cloud.database()

    db.collection("users")
      .where({
        _openid: app.globalData.openid,
      })
      .get()
      .then(res => {
        if (!res.data.length) {
          db.collection('users').add({
            data: {
              userInfo: this.data.userInfo,
              formatedDate: util.formatTime(new Date),
              date: Date()
            },
            success: res => {
              console.log('微信登录信息上传成功', res)
            },
            fail: err => {
              console.error('[数据库] [新增记录] 失败：', err)
            }
          })
        // } if( res.data[0].userInfo != this.data.userInfo ) {
        } else if (!isObjectValueEqual(res.data[0].userInfo, this.data.userInfo)) {
          console.log("userInfo already exists in cloud database, but out of date, ready to update...", res)
          console.log("____this.data.userInfo", this.data.userInfo)
          console.log("____res.data[0].userInfo", res.data[0].userInfo)

          db.collection('users')
            .doc(res.data[0]._id)
            .update({
              data: {
                userInfo: this.data.userInfo,
                formatedDate: util.formatTime(new Date),
                date: Date()
              },
              success: res => {
                console.log('微信登录信息更新成功', res)
              },
              fail: err => {
                console.error('[数据库] [更新记录] 失败：', err)
              }
            })
        } else {
          console.log("the most updated userInfo already exists in cloud database.", res)
        }
      })
      .catch(err => {
        console.error(err)
      })
  },

  // getOpenid: function() {
  //   // 调用云函数
  //   wx.cloud.callFunction({
  //     name: 'login',
  //     data: {},
  //     success: res => {
  //       console.log('[云函数] [login] user openid: ', res.result.openid)
  //       app.globalData.openid = res.result.openid
  //       wx.setStorage({
  //         key: 'openid',
  //         data: res.result.openid,
  //       })
  //     },
  //     fail: err => {
  //       console.error('[云函数] [login] 调用失败', err)
  //     }
  //   })
  // },

  chooseLocation: function(e) {
    wx.chooseLocation({
      success: res => {
        this.setData({
          location_details: {
            location: {
              lat: res.latitude,
              lng: res.longitude,
            },
            address: res.address,
            formatted_addresses: {
              recommend: res.name
            }
          },

          hasLocation: true,
          formatedDate: util.formatTime(new Date),
          date: Date()
          // date: Date.now()
        })
      },
    })
  },

  mark: function(e) {
    // this.data.wgs84 = app.globalData.wgs84
    // this.data.gcj02 = app.globalData.gcj02

    const db = wx.cloud.database()
    db.collection('marks').add({
      data: {
        wgs84: app.globalData.wgs84,
        gcj02: app.globalData.gcj02,
        location_details: this.data.location_details,
        date: this.data.date,
        formatedDate: this.data.formatedDate,
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({})

        // wx.showToast({
        //   title: '打卡成功',
        // })
        
        wx.navigateTo({
          url: 'success/success'
        })
        
        // console.log('[数据库] [新增记录] 成功，记录: ', res)
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '打卡失败，请联系夏龙飞'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },

  getAddress: function(e) {
    var _this = this;

    qqmapsdk.reverseGeocoder({
      get_poi: 1, //是否返回周边POI列表：1.返回；0不返回(默认),非必须参数
      success: function(res) { //成功后的回调
        console.log("getAddress: ", res);
        var res = res.result;

        _this.setData({ //设置markers属性和地图位置poi，将结果在地图展示
          location_details: res,
          hasLocation: true,
          formatedDate: util.formatTime(new Date),
          date: Date()
        });
      },
      fail: function(error) {
        console.error(error);
      },
      complete: function(res) {
        console.log(res);
      }
    })

    // 获取wgs84坐标
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: res => {
        console.log("Location-wgs84", res)
        app.globalData.wgs84 = res
        // this.setData({
        //   wgs84: res
        // })
      },
      fail: function(res) {},
      complete: function(res) {},
    })

    // 获取gcj02坐标
    wx.getLocation({
      type: 'gcj02',
      altitude: true,
      success: res => {
        console.log("Location-gcj02", res)
        app.globalData.gcj02 = res
        // this.setData({
        //   gcj02: res
        // })
      },
      fail: function(res) {},
      complete: function(res) {},
    })

    // 更新服务器上保存的用户信息（如果有必要）
    this.updateUserInfo()
  },
  signinrecord(){
    wx.navigateTo({
      url:"../footprints/footprints"
    })
  }

})

function isObjectValueEqual(a, b) {
  // Of course, we can do it use for in 
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}