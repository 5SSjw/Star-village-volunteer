const app = getApp()
// 获取数据库
const DB = wx.cloud.database().collection("chat_record");
const _ = wx.cloud.database().command
Page({

  data: {
    userInfo: {}, //自己的数据
    with_info: {}, //关系数据
    info: {}, //自己的openid
    info_list: [],

    openId:"",
    isTabs: '',
    isOn: false,
    scrollTop: 0,
    into: '',
    Height: '',
    user_value: '',
    emoji_list: [{
      name: '[微笑]',
      imgSrc: '../../images/emoji/1.png'
    }, {
      name: '[大哭]',
      imgSrc: '../../images/emoji/2.png'
    }, {
      name: '[开心]',
      imgSrc: '../../images/emoji/3.png'
    }, {
      name: '[可爱]',
      imgSrc: '../../images/emoji/4.png'
    }, {
      name: '[面无表情]',
      imgSrc: '../../images/emoji/5.png'
    }, {
      name: '[难过]',
      imgSrc: '../../images/emoji/6.png'
    }, {
      name: '[蛇]',
      imgSrc: '../../images/emoji/7.png'
    }, {
      name: '[狐狸]',
      imgSrc: '../../images/emoji/8.png'
    }, {
      name: '[老虎]',
      imgSrc: '../../images/emoji/9.png'
    }, {
      name: '[蜜蜂]',
      imgSrc: '../../images/emoji/10.png'
    }, {
      name: '[狮子]',
      imgSrc: '../../images/emoji/11.png'
    }, {
      name: '[长颈鹿]',
      imgSrc: '../../images/emoji/12.png'
    }, {
      name: '[树叶]',
      imgSrc: '../../images/emoji/13.png'
    }, {
      name: '[植物]',
      imgSrc: '../../images/emoji/14.png'
    }, ]
  },

  // 输入事件
  input_value(e) {
    // console.log(e.detail.value)
    this.setData({
      user_value: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
    console.log(options.name)
    wx.setNavigationBarTitle({
      title: options.name
    })

    var info_list=[]
    DB.where({
        Aname: options.name
      }).get({
        success: function (res) {
          console.log('[云函数] 返回数据结果: ', res.data)
            _this.setData({
                info_list: res.data         
            })
        },
        fail: err => {
          console.error('[云函数] 返回数据结果 调用失败', err)
        }
      })
      console.log("info_list数据",info_list)

    var with_info = wx.getStorageSync('with_info')
    var userInfo = app.globalData.userInfo
    //console.log("他的信息",with_info)
    //console.log("我的信息",userInfo)
    this.setData({
      with_info,
      userInfo,
      openId:app.globalData.openId
    })

    var _this = this;
    const query = wx.createSelectorQuery()
    query.select('.page2').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      // console.log(res)
      _this.setData({
        Height: res[1].scrollHeight,
      })
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    var _this = this;
    var with_info = _this.data.with_info;
    var withIdA = with_info.userA + with_info.userB;
    var withIdB = with_info.userB + with_info.userA;
    const watcher = DB.watch({
      onChange: (res) => {
        if (res) {
          DB.where({
            withId: _.eq(withIdA).or(_.eq(withIdB))
          }).get({
            success(res) {
              console.log(res)
              _this.setData({
                info_list: res.data,
                into: res.data[res.data.length - 1]._id
              })
            },
            fail(res) {
              console.log(res)
            }
          })
        }
      },
      onError(err) {
        console.log("失败")
      }
    })
  },


  
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // this.watcher.close()
    wx.removeStorageSync('with_info')
  },

  // 关闭所有tab框
  offEmoji() {
    if (this.data.isOn == true) {
      this.setData({
        isOn: false,
        Height: this.data.Height + 130
      })
      this.onReady()
    }
  },

  // 点击表情包区域
  onEmoji() {
    if (this.data.isOn == false) {
      this.setData({
        isTabs: 'emoji',
        isOn: true,
        Height: this.data.Height - 130
      })
      this.onReady()
    } else if (this.data.isOn) {
      if (this.data.isTabs == "features") {
        this.setData({
          isTabs: 'emoji',
        })
        this.onReady()
      } else {
        this.setData({
          isOn: false,
          Height: this.data.Height + 130
        })
        this.onReady()
      }
    }
  },

  // 发送事件
  snedtTo() {
    var _this = this;
    if (!this.data.user_value) {
        return false;
      }
    var with_info = _this.data.with_info;
    var userA =_this.data.with_info.userA;
    var withId = with_info.userA + with_info.userB;
    var valueInfo = {};
    valueInfo = {
      "AavatarUrl": with_info.AavatarUrl, //对方头像
      "BavatarUrl": with_info.BavatarUrl, //自己头像
      "Aname": with_info.Aname, //对方昵称
      "Bname": with_info.Bname, //自己昵称
      "withId": withId,
      'value': _this.data.user_value, //聊天内容
      "sendUserId": app.globalData.openId //创建者的ID
      //"sendUserId": _this.data.userInfo.openId //创建者的ID
    }
    DB.add({
      data: valueInfo,
      success(res) {
        console.log(res)
        _this.setData({
          user_value: ''
        })
      }
    })
  },

  // 发送表情包
  sendEmoji(e) {
    // sconsole.log(e)
    var src = e.currentTarget.dataset.src;
    var _this = this;
    // 拿缓存数据
    var userInfo = _this.data.userInfo;
    var with_info = _this.data.with_info;
    var withId = with_info.userA + with_info.userB;
    var valueInfo = {};
    valueInfo = {
      "AavatarUrl": with_info.AavatarUrl, //对方头像
      "BavatarUrl": with_info.BavatarUrl, //自己头像
      "Aname": with_info.Aname, //对方昵称
      "Bname": with_info.Bname, //自己昵称
      "withId": withId,
      "sendUserId": app.globalData.openId,//创建者的ID
      "emoji": src, //消息内容
    }
    DB.add({
      data: valueInfo,
      success(res) {
      }
    })
  },

  onFeatures() {
    if (this.data.isOn == false) {
        this.setData({
            isTabs: "features",
            isOn: true,
            Height: this.data.Height - 130
        })
        this.onReady()

    } else if (this.data.isOn) {
        if (this.data.isTabs == 'emoji') {
            this.setData({
                isTabs: 'features',
            })
            this.onReady()
        } else {
            this.setData({
                isOn: false,
                Height: this.data.Height + 130
            })
            this.onReady()
        }
    }
  },
})