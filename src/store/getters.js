// import mutations from "./mutations";
const getters= {
  demo(state){
      return age=> state.student.filter(s=>s.age>age)
  }

}
export default  getters