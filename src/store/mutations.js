const mutations= {
  addCart(state,payload){
    //第二种方法，参照视频写的
    //let oldproduct=null
    // for(let item of state.cartShops){
    //   if(item.iid===payload.iid){
    //     oldproduct=item  //指向的存储地址一样
    //   }
    // }
    // if(oldproduct){
    //   oldproduct.count++
    // }
    // else{
    //   state.cartShops.push(payload)
    // }
    let oldShop=state.cartShops.filter((item)=>{
      return item.iid==payload.iid
    })
    if(oldShop.length){
      oldShop[0].count++
    }
    else{
      state.cartShops.push(payload)
    }
    
    console.log(state.cartShops)
  },
  add(state,iid){
    let oldShop=state.cartShops.filter((item)=>{
      return item.iid==iid
    })
    if(oldShop.length){
      oldShop[0].count++
    }
  },
  des(state,iid){
    let oldShop=state.cartShops.filter((item)=>{
      return item.iid==iid
    })
    if(oldShop.length){
      if(oldShop[0].count>1){
        oldShop[0].count--
      }
    }
  }
}
export default  mutations