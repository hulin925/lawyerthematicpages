
import BMap from 'BMap'
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
  },

  city(state){    //定义获取城市方法
    const geolocation = new BMap.Geolocation();
    console.log(geolocation,11)
    var _this = this
    geolocation.getCurrentPosition(function getinfo(position){
      let city = position.address.city;             //获取城市信息
      let province = position.address.province;    //获取省份信息
      state.LocationCity = city;
      state.province=province;
      console.log(state.LocationCity,state.province)
    }, function(e) {
      _this.LocationCity = "定位失败"
    }, {provider: 'baidu'});
  }


}
