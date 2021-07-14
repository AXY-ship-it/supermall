import {  request } from "./api";
export function getHome(){
  return request({
    url:'/home/multidata'
  })
}

export function getHomegoods(type,page){
   return request({
     url:'/home/data',
     //get请求方式带的参数形式
     params:{
       type,
       page
     }
   })
}
//歌单分类
export function getCatlist(){
   return request({
     url:'/playlist/catlist'
   })
}
//热门歌单分类
export function getHot(){
  return request({
    url:'/playlist/hot'
  })
}
//获取歌单详情
export function getDetails(){
  return request({
    url:'/playlist/detail'
  })
}
//歌单详情动态
// 说明 : 调用后可获取歌单详情动态部分,如评论数,是否收藏,播放数
export function getDynamic(){
  return request({
    url:'/playlist/detail/dynamic'
  })
}
//获取音乐URL
export function getsongUrl(){
  return request({
    url:'/song/url'
  })
}
//调用此接口 , 可获取 banner( 轮播图 ) 数据
export function getBanner(){
  return request({
    url:'/banner'
  })
}
