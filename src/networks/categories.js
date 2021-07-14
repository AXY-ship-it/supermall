import {request} from './api'
export function getCategories(){
  return request({
    url:'/category'
  })
}
//分类详情
export function getSubCategory(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey,
    }
  })
}
export function getSubDetail(miniWallKey){
  return request({
  url:'/subcategory/detail',
  params:{
    miniWallKey
  }
  })
}

