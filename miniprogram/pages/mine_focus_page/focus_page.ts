// // pages/mine_focus_page/focus_page.ts
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     friends: [{img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.xACafg0ra25Aafr0k5i25AHaHt?w=202&h=211&c=7&r=0&o=5&dpr=1.25&pid=1.7' , name: 'liam' , doFocus: 'true' , post: 13 , fans: 100},
//     {img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.xe9pff05Xy0_NSgVgeJd6gAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7' , 
//     name: 'Leng' , doFocus: 'true' , post: 81 , fans: 603},
//     {img: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.iH6CyDb2ocj6nE1IiZQuZwHaJX?w=182&h=230&c=7&r=0&o=5&dpr=1.25&pid=1.7' , 
//     name: '腐团儿' , doFocus: 'true' , post: 1002 , fans: 13254},
//     {img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.GqUPJMQ8hRzdhpIymltR9QAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7' , 
//     name: '莱尼' , doFocus: 'true' , post: 5 , fans: 12},
//     {img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.oTjdSKTP_tURnrig6QqdfAHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7' , 
//     name: '菈妮' , doFocus: 'true' , post: 101 , fans: 1250},
//     {img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.TGtKbITalm6aaUV4mg_-UwAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7' , 
//     name: '甜甜' , doFocus: 'true' , post: 51 , fans: 980}

//   ]
//   },

//   changeState: function (event: any) {
//     var index = event.currentTarget.dataset.index;
//     let temp_doFocus = 'friends[' + index + '].doFocus';
//     this.setData({
//       [temp_doFocus]: ~(this.data.friends[index].doFocus),
//     })
//   },
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad() {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady() {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow() {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide() {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload() {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh() {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom() {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage() {

//   }
// })