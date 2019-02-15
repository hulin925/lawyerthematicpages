<template>
  <div>
    <!--头部个人信息板块-->
    <header ref="headerHeight">
      <div class="information clearfix">
        <div class="informationLeft">
          <h2>罗文金 <span>从业年限8年</span></h2>
          <p>{{province+LocationCity}} | 正当律师事务所</p>
        </div>
        <div class="informationRight">
          <span><img src="../assets/images/lvshi.jpg" alt=""></span>
        </div>
      </div>
      <div class="special clearfix">
        <span>婚姻家事</span>
        <span>交通事故</span>
        <span>劳动用工</span>
      </div>
      <div class="follow">
        <span>关注 261</span> |
        <span>粉丝 1541</span>
      </div>
    </header>

    <!--导航区域-->
    <nav ref="navs" :class="searchBarFixed == true ? 'position' :''">
      <div
        v-for="item,index in navList"
        @click.stop="changeNav(item,index)"
        :class="{active:item.active}"
      >{{item.name}}</div>
    </nav>

    <section>
      <div class="border"></div>
      <router-view/>
    </section>

    <div class="downloadApp" @click.stop="download">
      <span>都翻到这了，就下载个法务云吧~</span>
    </div>

    <div class="openApp" @click.stop="download">
      <span>打开APP查看更多详情</span>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'//导出
  import BMap from 'BMap'
  export default{
    name: 'Home',
    computed: mapGetters([
      'navList'//把数据存入state
    ]),
    data(){
      return{
        searchBarFixed:false,
        LocationCity:"正在定位",    //给渲染层定义一个初始值
        province:""
      }
    },
    created() {
      for (let i = 0; i < this.navList.length; i++) {
        if (this.navList[i].routerName == this.$route.name) {
          this.$store.commit('setDecorate', i);
        }
      }

    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll);
      this.city()    //触发获取城市方法
  },
    methods:{
      changeNav(item,index){
        this.$store.commit('setDecorate', index);
        if (item.routerName) {
          this.$router.push({name: item.routerName})
        }
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(scrollTop)
        var offsetTop = this.$refs.headerHeight.offsetHeight;
        if (scrollTop > offsetTop) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }
      },
      city(){    //定义获取城市方法
        const geolocation = new BMap.Geolocation();
        var _this = this
        geolocation.getCurrentPosition(function getinfo(position){
          let city = position.address.city;             //获取城市信息
          let province = position.address.province;    //获取省份信息
          _this.LocationCity = city;
          _this.province=province;
          let obj={
            province,
            city
          }
          let str=JSON.stringify(obj);
          sessionStorage.obj=str;
        }, function(e) {
          _this.LocationCity = "定位失败"
        }, {provider: 'baidu'});
      }
    },
    destroyed () {//当离开页面
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
</script>

<style scoped type="text/less" lang="less">
  @r:30rem;

  /*头部个人信息*/
  header{
    width:100%;
    background-color:#4d59fb;
    color:#fff;
    height:350/@r;
    padding:10/@r 40/@r;
  }
  .information{
    padding-bottom:20/@r;
  }
  .informationLeft{
    float:left;
  }
  .informationLeft h2{
    font-size:35/@r;
    line-height:80/@r;
  }
  h2 span{
    font-size:28/@r;
  }
  .informationRight{
    float:right;
  }
  .informationRight span{
    display: block;
    width:120/@r;
    height:120/@r;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-top:20/@r;
    overflow: hidden;
  }
  .informationRight img{
    width:100%;
    height:100%;
  }
  .special{
    padding-bottom:70/@r;
    width:100%;
  }
  .special span{
    float:left;
    line-height:35/@r;
    padding:0 20/@r;
    border:1px solid #dbdbdb;
    -webkit-border-radius: 20/@r;
    -moz-border-radius: 20/@r;
    border-radius: 20/@r;
    margin-right:10/@r;
  }


  /*导航区域*/
  .position{
    position:fixed;
    top:0;
    z-index:999;
  }
  nav{
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:0 200/@r;
    border-bottom:1px solid #dbdbdb;
    background-color:#fff;
    color:#7d7878;
  }
  nav div{
    line-height:90/@r;
    position:relative;
    font-size:32/@r;
  }
  nav div.active:before{
    position:absolute;
    content:'';
    width:70%;
    height:6/@r;
    background-color:red;
    border-radius:5/@r;
    left:50%;
    bottom:8/@r;
    transform:translateX(-50%);
  }
  nav div.active{
    color:#444;
  }
  .border{
    width:100%;
    height:30/@r;
    background-color:#eee;
    border-bottom:1px solid #dbdbdb;
  }

  .downloadApp{
    margin:20/@r 0;
    background-color:#727cff;
    color:#fff;
    line-height:80/@r;
    font-size:32/@r;
    text-align:center;
  }
  .openApp{
    background-color:#ff3232;
    color:#fff;
    width:95%;
    margin:20/@r auto;
    line-height:80/@r;
    font-size:32/@r;
    text-align:center;
    -webkit-border-radius: 30/@r;
    -moz-border-radius: 30/@r;
    border-radius: 30/@r;

  }

</style>
