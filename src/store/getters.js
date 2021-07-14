// import mutations from "./mutations";
const getters= {
  cartLength(state){
    return state.cartShops.length
  },
  cartShops(state){
    return state.cartShops
  },
  accountLength(state){
     return state.cartShops.filter((item)=>item.isCheck).length
  },
  account(state){
    let checkShop=state.cartShops.filter((item)=>item.isCheck)
    //方法二：数组求和arr.reduce((prevalue,item)=>{})
    //return checkShop.reduce((total,item)=>{return item.price*item.count},initialValue(一般为0))
    let accountNum=0
    if(checkShop.length){
      for(let item of checkShop){
        accountNum+=item.price.substring(1)*item.count
      }
    }
    return accountNum.toFixed(2)
  }
}
export default  getters