export default{
  setDecorate(state,id){//改变state数据
    state.navList =  state.navList.map((item,index)=>{
      if(index==id){
        item.active = true
        return item
      }else{
        item.active = false
        return item
      }
    })
  }

}
