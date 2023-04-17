// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'cloud1-2gdhip8y9d4f0c42',
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {

  // console.log(event.user_openId)

  return await db.collection("user_collection")
  .aggregate()
  .match({
    _openid: event.user_openId
  })
  .lookup({
    from: 'store',
    localField: 'activityId',
    foreignField: '_id',
    as: 'collectionActivityList',
  })
  .end()
}