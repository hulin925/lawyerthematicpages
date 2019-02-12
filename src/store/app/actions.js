export default {
  // setData(store,data){
  //   return new Promise((resolve,reject)=>{
  //     axios.post('/api/TradeGood/GetTravelPageL',JSON.stringify(data),{
  //       headers:{
  //         'Content-type': 'application/x-www-form-urlencoded'
  //       }
  //     })
  //       .then(res=>{
  //         var data=res.data;
  //         console.log(data)
  //         if(Number(data.resultcode)==200){
  //           store.commit('initData',data.data);
  //           resolve();
  //         }else{
  //           reject(data.resultcontent);
  //         }
  //     })
  //   })
  // },
  //获取预约
  getMakeUrl(store,formData){
    return new Promise((relove, reject) => {
      axios.post('http://jz.sanhedao.com.cn/index.php/Index/getlink', formData)
        .then(data => {
          let res = data.data;
          console.log(res)
          if (Number(res.code) == 10000) {
            relove(res.data)
          } else {
            reject(data.msg)
          }
        })
    })
  }
}
