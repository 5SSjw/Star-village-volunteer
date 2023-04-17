//Page Object
const db = wx.cloud.database()
const _ = db.command
Page({
    data: {
      //左侧菜单的数据
      leftMenuList:["助农","助学","助老","助残","助弱","环保"],
      //右侧的商品的数据
      rightContent:[],
      //被点击的左侧菜单
      currentIndex:0,
      //右侧内容的滚动条距离底部的距离
      scrollTop: 0,
      bg_color:"118deg, #ffd000 0%, #57E9F2 68%, #ffd000 17%",
    },
    //接口返回的数据
    // Cates:[
    //     {
    //         "cat_id": 1,
    //         "cat_name": "助学项目",
    //         "cat_pid": 0,
    //         "cat_level": 0,
    //         "cat_deleted": false,
    //         "cat_icon": "/full/none.jpg",
    //         "children":[
    //             {
    //                 "activity_id": 57444,
    //                 "title": "课外辅导",
    //                 "host":"东北大学",
    //                 "max_num": 25,
    //                 "address":"小西门",
    //                 "ddl": "2022.10.1",
    //                 "activity_big_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg",
    //                 "activity_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg",
    //                 "add_time": 1516663280,
    //                 "upd_time": 1516663280,
    //                 "summarize": "这是一个非常好的活动，对吧， 哈哈哈哈哈哈哈哈哈哈哈哈充字数呵呵呵呵呵呵呵呵呵",
    //                 "is_promote": false,
    //                 "time_range":"2022.8.1-2022.9.20"
    //               },
    //               {
    //                 "activity_id": 57444,
    //                 "title": "课外辅导",
    //                 "host":"东北大学",
    //                 "max_num": 25,
    //                 "address":"小西门",
    //                 "ddl": "2022.10.1",
    //                 "activity_big_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg",
    //                 "activity_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg",
    //                 "add_time": 1516663280,
    //                 "upd_time": 1516663280,
    //                 "summarize": "这是一个非常好的活动，对吧， 哈哈哈哈哈哈哈哈哈哈哈哈充字数呵呵呵呵呵呵呵呵呵",
    //                 "is_promote": false,
    //                 "time_range":"2022.8.1-2022.9.20"
    //               },                {
    //                 "activity_id": 57444,
    //                 "title": "课外辅导",
    //                 "host":"东北大学",
    //                 "max_num": 25,
    //                 "address":"小西门",
    //                 "ddl": "2022.10.1",
    //                 "activity_big_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg",
    //                 "activity_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg",
    //                 "add_time": 1516663280,
    //                 "upd_time": 1516663280,
    //                 "summarize": "这是一个非常好的活动，对吧， 哈哈哈哈哈哈哈哈哈哈哈哈充字数呵呵呵呵呵呵呵呵呵",
    //                 "is_promote": false,
    //                 "time_range":"2022.8.1-2022.9.20"
    //               },                {
    //                 "activity_id": 57444,
    //                 "title": "课外辅导",
    //                 "host":"东北大学",
    //                 "max_num": 25,
    //                 "address":"小西门",
    //                 "ddl": "2022.10.1",
    //                 "activity_big_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg",
    //                 "activity_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg",
    //                 "add_time": 1516663280,
    //                 "upd_time": 1516663280,
    //                 "summarize": "这是一个非常好的活动，对吧， 哈哈哈哈哈哈哈哈哈哈哈哈充字数呵呵呵呵呵呵呵呵呵",
    //                 "is_promote": false,
    //                 "time_range":"2022.8.1-2022.9.20"
    //               }
    //         ]
            
    //     },
    //     {
    //         "cat_id": 2,
    //         "cat_name": "助农项目",
    //         "cat_pid": 0,
    //         "cat_level": 0,
    //         "cat_deleted": false,
    //         "cat_icon": "/full/none.jpg",
    //         "children":[
    //             {
    //                 "activity_id": 57444,
    //                 "title": "助力耕地",
    //                 "host":"东北大学",
    //                 "type":"助农",
    //                 "max_num": 25,
    //                 "address":"小西门",
    //                 "ddl": "2022.10.1",
    //                 "activity_big_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg",
    //                 "activity_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg",
    //                 "summarize": "这是一个非常好的活动，对吧， 哈哈哈哈哈哈哈哈哈哈哈哈充字数哈哈哈哈哈哈哈哈哈哈",
    //                 "is_promote": false,
    //                 "time_range":"2022.8.1-2022.9.20"
    //               },
    //               {
    //                 "activity_id": 57444,
    //                 "title": "助力耕地",
    //                 "host":"东北大学",
    //                 "type":"助农",
    //                 "max_num": 25,
    //                 "address":"小西门",
    //                 "ddl": "2022.10.1",
    //                 "activity_big_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg",
    //                 "activity_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg",
    //                 "summarize": "这是一个非常好的活动，对吧， 哈哈哈哈哈哈哈哈哈哈哈哈充字数哈哈哈哈哈哈哈哈哈哈",
    //                 "is_promote": false,
    //                 "time_range":"2022.8.1-2022.9.20"
    //               },
    //               {
    //                 "activity_id": 57444,
    //                 "title": "助力耕地",
    //                 "host":"东北大学",
    //                 "type":"助农",
    //                 "max_num": 25,
    //                 "address":"小西门",
    //                 "ddl": "2022.10.1",
    //                 "activity_big_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg",
    //                 "activity_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg",
    //                 "summarize": "这是一个非常好的活动，对吧， 哈哈哈哈哈哈哈哈哈哈哈哈充字数哈哈哈哈哈哈哈哈哈哈",
    //                 "is_promote": false,
    //                 "time_range":"2022.8.1-2022.9.20"
    //               },
    //               {
    //                 "activity_id": 57444,
    //                 "title": "助力耕地",
    //                 "host":"东北大学",
    //                 "type":"助农",
    //                 "max_num": 25,
    //                 "address":"小西门",
    //                 "ddl": "2022.10.1",
    //                 "activity_big_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg",
    //                 "activity_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg",
    //                 "summarize": "这是一个非常好的活动，对吧， 哈哈哈哈哈哈哈哈哈哈哈哈充字数哈哈哈哈哈哈哈哈哈哈",
    //                 "is_promote": false,
    //                 "time_range":"2022.8.1-2022.9.20"
    //               }
    //         ]
            
    //     }
    // ],
    //options(Object)
    onLoad: function(options){
   //构造初始右侧的活动数据
    this.getActivityList("0");

    },
    getActivityList(type){
      db.collection('store').where({
       type: _.eq(type)
      })
      .get({
        success:res=>{
          this.setData({
            rightContent:res.data
          })
        }
      })
    },
    handleItemTap(e){
        const {index} =e.currentTarget.dataset;
        this.getActivityList(index+"");
            //构造右侧的商品数据
        this.setData({
               currentIndex:index,
               scrollTop:0
          })
        }
    })