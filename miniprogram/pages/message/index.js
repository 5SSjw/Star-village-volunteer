//logs.js

Page({
  data: {
    navTab: ["机构", "个人"],
    currentNavtab: "0"
  },

  onLoad: function () {

  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },

  toSay() {
		wx.navigateTo({
			url: '../contact/index',
		})
  },

  toSay1() {
		wx.navigateTo({
			url: '../contact/index1',
		})
  },
  
  //打开对话
  toChat(e) {
		console.log(e.currentTarget.dataset)
		var with_info = e.currentTarget.dataset.data;

		var name = e.currentTarget.dataset.name;
		wx.setStorageSync('with_info', with_info)
		wx.navigateTo({
      //url: '../with/index?name=' + name,
      url: '../contact/index1',
		})
  }
  
})
