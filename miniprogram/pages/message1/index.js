const DB = wx.cloud.database().collection("with_list");
const _ = wx.cloud.database().command
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		with_list: [], //存在关系列表
        userInfo: {}, //自己的数据
        openId:"",

        navTab: ["通知", "消息"],
        currentNavtab: "0"
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var userInfo = app.globalData.userInfo
		var _this = this;
		// 用自己的openid去查询存在的关系拉取数据渲染
		DB.where(_.or([{
			"userA": userInfo.openId,
		}, {
			"userB": userInfo.openId,
		}])).get({
			success(res) {
				console.log("读取成功",res)
				_this.setData({
					with_list: res.data,
                    userInfo,
                    openId:app.globalData.openId
				})
			},
			fail(res) {
				console.log("读取失败",res)
			}
		})
	},
  chakantongzhi(){
    wx.switchTab({
      url: '../index/index',
    })
  },

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		var _this = this;
		DB.watch({
			onChange: (res) => {
				var userInfo = _this.data.userInfo;
				DB.where(_.or([{
					"userA": userInfo.openId,
				}, {
					"userB": userInfo.openId,
				}])).get({
					success(res) {
						console.log(res)
						_this.setData({
							with_list: res.data,
						})
					},
					fail(res) {
						console.log(res)
					}
				})

			},
			onError(err) {
				console.log("失败")
			}
		})
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

    },
    
    //切换栏目
    switchTab: function(e){
        this.setData({
          currentNavtab: e.currentTarget.dataset.idx
        });
      },
	// 跳转到聊天室
	toSay() {
		wx.navigateTo({
			url: '../contact1/index1',
		})
    },
    
	// 跳转到1v1聊天
	toWith(e) {
		console.log("towith",e.currentTarget.dataset)
		var with_info = e.currentTarget.dataset.data;
        var name = e.currentTarget.dataset.name;
        console.log("name",name)
        app.globalData.Aname = name;
        console.log("Aname",app.globalData.Aname)
		wx.setStorageSync('with_info', with_info)
		wx.navigateTo({
			url: '../contact1/index1?name=' + name,
		})
	}
})