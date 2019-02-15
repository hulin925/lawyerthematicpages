<template>
    <div>
      <header class="headerPosition">
        <span @click.stop="$router.go(-1)"><img src="../assets/images/xiangzuo.png" alt=""></span>
        <i>罗文金</i>
      </header>
      <div class="content">
        <div class="numberInfo">
          <p class="clearfix">
            <span>账号信息</span>
          </p>
          <p class="name clearfix">
            <span>昵称</span>
            <i>罗文金</i>
          </p>
          <p class="jianjie clearfix">
            <span>简介</span>
            <i>毕业于复旦大学，2001年加入上海市李国机律师事务所从事专职律师工作至今。擅长于公司业务、
              合同法、房地产法、税法等诉讼与非诉讼业务，兼攻刑事辩护、行政诉讼。
              从业以来成功代理多起争议标的额大、法律关系复杂、具有较大影响的诉讼案件。
              同时担任多家公司的法律顾问。具有丰富的律师实务经验、深厚的法律功底。</i>
          </p>
        </div>
        <div class="border"></div>
        <div class="meInfo">
          <p class="clearfix">
            <span>个人信息</span>
          </p>
          <p class="gander clearfix">
            <span>性别</span>
            <i>男</i>
          </p>
          <p class="location clearfix">
            <span>所在地</span>
            <i>{{province}} {{city}}</i>
          </p>
        </div>
      </div>
      <div class="background"></div>
    </div>
</template>

<script>
    export default {
        name: "MoreData",
      data(){
          return{
            province:'正在定位',
            city:''
          }
      },
      created(){
          let obj=sessionStorage.obj;
          let str=JSON.parse(obj);
          this.province=str.province;
          this.city=str.city;
      }
    }
</script>

<style scoped type="text/less" lang="less">
  @r:30rem;


  .background{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color: #e7e7e7;
  }
  .content{
    top:80/@r;
    position:relative;
    z-index:20;
    background-color:#fff;
    width:100%;
  }
  .content p{
    padding:20/@r;
    border-bottom:1px solid #dbdbdb;
    line-height:40/@r;
  }
  .content span{
    float:left;
    width:18%;
    color:#939393;
  }
  .content i{
    float:left;
    width:82%;
  }
  .border{
    width:100%;
    height:15/@r;
    background-color:#eee;
    border-bottom:1px solid #dbdbdb;
  }
</style>
