import {request} from './api'
export function getDetails(iid){
      return request({
        url:'/detail',
        params:{
          iid
        }
      })
}
//获取商品信息
export class Goods{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.services=services
    this.realPrice=itemInfo.realPrice
  }
}
export class Shop{
  constructor(shopInfo){
    this.logo=shopInfo.shopLogo
    this.cGoods=shopInfo.cGoods
    this.name=shopInfo.name
    this.fans=shopInfo.cFans
    this.cSells=shopInfo.cSells
    this.score=shopInfo.score
    this.goodsCount=shopInfo.goodsCount
  }
}
export class DetailInfo{
  constructor(detailInfo){
    this.desc=detailInfo.desc
    this.detailImage=detailInfo.detailImage
  }
}
export function getRecommend(item_id){
  return request({
    url:'/recommend',
    params:{
      item_id
    }
  })
}
