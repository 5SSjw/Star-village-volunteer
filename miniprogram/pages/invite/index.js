//index.js
//获取应用实例
const app = getApp()
 let username=''
Page({
  data: {
    username: '',
    clientHeight:''
  },
  onLoad(){
    var that=this
    wx.getSystemInfo({ 
      success: function (res) { 
        console.log(res.windowHeight)
          that.setData({ 
              clientHeight:res.windowHeight
        }); 
      } 
    }) 
  },
  //获取输入款内容
  content(e){
    username=e.detail.value
    console.log(username)
  },
  //登录事件
  goadmin(){
    let flag = false  //表示账户是否存在,false为初始值
    if(username=='')
    {
      wx.showToast({
        icon:'none',
        title: '邀请码不能为空',
      })
    }
    else{
      if (username !=='123456' ) {  //判断密码正确与否
                wx.showToast({  //显示密码错误信息
                  title: '验证码错误！！',
                  icon: 'error',
                  duration: 2500
                });
               
    } else {
        wx.showToast({  //显示登录成功信息
            title: '验证成功！！',
                  icon: 'success',
                  duration: 2500
                })
                flag=true;
               wx.navigateTo({
                 url: '/pages/fabu_choose/fabu_choose',
               })
              }
            }
        }

})
 
