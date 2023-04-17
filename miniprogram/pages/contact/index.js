// pages/contact/contact.js
const app = getApp();
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';

  msgList = [{
      speaker: 'server',
      contentType: 'text',
      content: '这里是东北大学志愿者协会，欢迎咨询本次活动的相关信息！'
    },
    {
      speaker: 'customer',
      contentType: 'text',
      content: '具体几点开始呢？'
    },
    {
      speaker: 'server',
      contentType: 'text',
      content: '5月5日下午三点开始哦'
    }
  ]
  that.setData({
    msgList,
    inputVal
  })
}

/**
 * 计算msg总高度
 */
// function calScrollHeight(that, keyHeight) {
//   var query = wx.createSelectorQuery();
//   query.select('.scrollMsg').boundingClientRect(function(rect) {
//   }).exec();
// }

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isTabs: '',
		isOn: false,
    scrollHeight: '100vh',
    inputBottom: 0,

    
		scrollTop: 0,
		into: '',
    Height: '',
		info: {}, //自己的openid
		user_value: '',
		info_list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    initData(this);
    this.setData({
      //cusHeadIcon: app.globalData.userInfo.avatarUrl,
    });
  },


  /**
   * 获取聚焦
   */
  focus: function(e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function(e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  sendClick: function(e) {
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: e.detail.value
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });
  },



  // 上传图片
  upload(){
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log("选择图片成功",tempFilePaths)
        that.uploadImg(tempFilePaths[0])
      }
    })
  },
  
  /*uploadImg(fileUrl: any){
    wx.cloud.uploadFile({
      cloudPath: new Date().getTime()+'.png', // 上传至云端的路径
      filePath: fileUrl, // 小程序临时文件路径
      success: res => {
        // 返回文件 ID
        console.log(res.fileID)
        this.setData({
          imgURL:res.fileID
        })
      },
      fail: console.error
    })
  },*/

  uploadVideo(){
    wx.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 60,  //视频时长，单位秒
      camera: 'back',
      success(res) {
        console.log("选择视频成功",res.tempFilePath)
        wx.cloud.uploadFile({
          cloudPath: "视频.mp4", // 上传至云端的路径
          filePath: res.tempFilePath, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log("视频上传成功",res.fileID)
          },
          fail: console.error
        })
      }
    })
  },



  pictureClick: function(e) {
    msgList.push({
      speaker: 'customer',
      contentType: 'picture',
      content: e.detail.value
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });
  },

  photoClick: function(e) {
    msgList.push({
      speaker: 'customer',
      contentType: 'photo',
      content: e.detail.value
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });
  },



  //上传文件
  onUpload(){
    let that =this;
    let headers = {
       'Content-Type': "multipart/form-data"
    };
    wx.chooseMessageFile({
        success: function (res) {				       					
        that.tempFilePaths = res.tempFiles[0].path
        that.filename = res.tempFiles[0].name
       },				
    });			
  },
  
  //将保存在微信暂存区的文件上传到你项目的保存地址
  submitUpload(){
     uni.uploadFile({
     url: '',//这里的url是你项目文件上传的接口
     filePath: this.tempFilePaths,//这是你上传文件到微信暂存区的 路径
     name: 'file',
      //这里也是为小程序在真机测试校验协议时能够被通过，
      //你可以直接在 data里面定义这个变量，上面那个方法里面的headers可以不定义。
      header:{
         ...headers
      },
      //这个是上传文件 需要的参数，具体看你们项目接口需要提交的参数
      formData: {
          file_mis_id:this.contractList.mis_id,
        file_name:this.filename
      },
      success (res){
         const data = res.data
         if(res.statusCode==200){
          uni.showToast({
              title: '上传成功', 
              icon: "success"
            })						 
         }else{
           uni.showToast({
            title: '上传失败', 
               icon: "none"
           })
         }
      }
    })
  },
  
  fileClick: function(e) {
    msgList.push({
      speaker: 'customer',
      contentType: 'file',
      content: e.detail.value
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });
  },

  onReady: function () {
		var _this = this;
		DB.watch({
			onChange: (res) => {
				// console.log(res.docs)
				_this.setData({
					info_list: res.docs,
					into: res.docs[res.docs.length - 1]._id
				})
			},
			onError(err) {
				console.log("失败")
			}
		})
	},

  onFeatures() {
		if (this.data.isOn == false) {
			this.setData({
				isTabs: "features",
				isOn: true,
				Height: this.data.Height + 130
			})
			//this.onReady()

		} else if (this.data.isOn) {
			if (this.data.isTabs == 'emoji') {
				this.setData({
					isTabs: 'features',
				})
				//this.onReady()
			} else {
				this.setData({
					isOn: false,
					Height: this.data.Height + 130
				})
				//this.onReady()
			}

		}
  },
  
  /**
   * 退回上一页
   */
  toBackClick: function() {
    wx.navigateTo({
			url: '../message/index',
		})
  }
}) 

