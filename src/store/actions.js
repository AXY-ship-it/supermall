import {request} from '../networks/api'
const actions= {
  getSong({commit},query){
    request({
      url:'/search?keywords='+query
    }).then(res=>{
      commit('updateSong',res.data.result.songs)
      // console.log(typeof res.data.result.songs)
    })
  }
}
export default actions