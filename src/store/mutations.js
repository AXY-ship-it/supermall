const mutations= {
  //尽量让mutations里面的函数实现单一功能，如果要实现比较复杂的操作，则在actions里面进行操作
  addCounter(state,oldShop){
    oldShop[0].count++
  },
  addToCart(state,payload){
    state.cartShops.push(payload)
  },
  desCounter(state,oldShop){
    oldShop[0].count--
  },
  isCheck(state,oldShop){
    oldShop[0].isCheck=!oldShop[0].isCheck
  },
  checkAllShop(state){
    for(let item of state.cartShops){
      console.log(item)
      item.isCheck=true
    }
  },
  notCheckAll(state){
    for(let item of state.cartShops){
      item.isCheck=false
    }
  }
}
export default  mutations