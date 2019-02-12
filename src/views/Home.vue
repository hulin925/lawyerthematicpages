<template>
  <div>
    <!--头部个人信息板块-->
    <header>
      <div class="information clearfix">
        <div class="informationLeft">
          <h2>罗文金 <span>从业年限8年</span></h2>
          <p>四川省泸州市 | 正当律师事务所</p>
        </div>
        <div class="informationRight">
          <span></span>
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
    <nav>
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

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'//导出
  export default{
    name: 'Home',
    computed: mapGetters([
      'navList'//把数据存入state
    ]),
    data(){
      return{
      }
    },
    created() {
      for (let i = 0; i < this.navList.length; i++) {
        if (this.navList[i].routerName == this.$route.name) {
          this.$store.commit('setDecorate', i);
        }
      }
    },
    methods:{
      changeNav(item,index){
        this.$store.commit('setDecorate', index);
        if (item.routerName) {
          this.$router.push({name: item.routerName})
        }
      }
    }
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
    background-color:#33fde3;
    margin-top:20/@r;
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
    left:0;
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
    line-height:80/@r;
    position:relative;
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

</style>
