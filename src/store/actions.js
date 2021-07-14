
const actions= {
  addCart({commit,state},payload){
    return new Promise((resolve,reject)=>{
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
      commit('addCounter',oldShop)
      resolve('商品数量+1')
      reject("111")
    }
    else{
      commit('addToCart',payload)
      resolve('添加新商品')
    }
    })
  },
  add({commit,state},iid){
    let oldShop=state.cartShops.filter((item)=>{
      return item.iid==iid
    })
    if(oldShop){
      commit('addCounter',oldShop)
    }
  },
  des({commit,state},iid){
    let oldShop=state.cartShops.filter((item)=>{
      return item.iid==iid
    })
    if(oldShop.length){
      if(oldShop[0].count>1){
        commit('desCounter',oldShop)
      }
    }
  },
  checkTog({state,commit},iid){
    let oldShop=state.cartShops.filter((item)=>{
      return item.iid==iid
    })
    if(oldShop.length){
      commit('isCheck',oldShop)
    }
  },
  checkAll({commit,state}){
    let oldShop=state.cartShops.find((item)=>item.isCheck===false)
    if(oldShop){
      commit('checkAllShop')
    }
    else{
      commit('notCheckAll')
    }
  }
}
export default actions