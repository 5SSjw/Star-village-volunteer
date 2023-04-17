//app.js
App({
  onLaunch: function() {

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    /*
     * -----------------
     * 启动时更新
     * 马上应用最新版本
     */
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })
    /*
     * -----------------
     */



    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        /* 
         * 上传代码时，需将 env 值手动改为 release 环境
         * release 环境 id: release-xmrj4
         *   test  环境 id: test-wajhw
         */
        env: "cloud1-2gdhip8y9d4f0c42",
        "navigationStyle": "custom",
        traceUser: true,
      })
      console.log("wx.cloud.init success!")
    }

    // 登录，换取 openid
    wx.getStorage({
      key: 'login',
      success: res => {
        this.globalData.openid = res.data
        console.log("wx.getStorage of openid success: ", this.globalData.openid)
      },
      fail: res => {
        console.log("openid not found!")
        this.getOpenid()
      }
    })
    // this.globalData.openid = wx.getStorageSync("openid")

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res)

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    
  },

  getOpenid: function() {
    console.log("getOpenid in app.js called.")
    // 调用云函数
    wx.cloud.callFunction({
      name: 'getOpenID',
      data: {},
      success: res => {
        console.log('[云函数] [getOpenID] res: ', res)
        console.log('[云函数] [getOpenID] res.result.openid: ', res.result.openid)
        this.globalData.openid = res.result.openid
        wx.setStorage({
          key: 'openid',
          data: res.result.openid,
        })
      },
      fail: err => {
        // console.log("调用 login 云函数失败！", err)
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },

  globalData: {
    userInfo: undefined,

    openid: undefined,
    logged: false,

    wgs84: undefined,
    gcj02: undefined,

    openId:"",
    Aname:""
  }
})




// // app.js
// App({
//   onLaunch: function () {
//     if (!wx.cloud) {
//       console.error('请使用 2.2.3 或以上的基础库以使用云能力');
//     } else {
//       wx.cloud.init({
//         // env 参数说明：
//         //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
//         //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
//         //   如不填则使用默认环境（第一个创建的环境）
//         env:'cloud1-2gdhip8y9d4f0c42',
//         "navigationStyle": "custom",
//         traceUser: true,
//       });
//     }
//     this.globalData = {
//       userInfo:undefined,
//       openId:"",
//       Aname:""
//     };
//   }
// });