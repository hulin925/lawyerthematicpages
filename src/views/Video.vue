<template>
  <div>
    <div class="content">

      <div class="videos">
        <video
          class="video"
          poster="../assets/images/bg.png"
          playsinline="true"
          x-webkit-airplay="true"
          x5-playsinline="true"
          webkit-playsinline="true"
          x5-video-player-type="h5"
          controls
        >
          <source src="http://img.tukuppt.com/video_show/2418175/00/02/22/5b52e01dad564.mp4" type="video/mp4">
        </video>
      </div>

      <div class="videos">
        <video
          class="video"
          poster="../assets/images/bg.png"
          playsinline="true"
          x-webkit-airplay="true"
          x5-playsinline="true"
          webkit-playsinline="true"
          x5-video-player-type="h5"
          controls
        >
          <source src="http://img.tukuppt.com/video_show/2418175/00/02/11/5b513990504a8_10s.mp4" type="video/mp4">
        </video>
      </div>

    </div>



    <!--<div class="videos">-->
      <!--<video-->
        <!--class="video"-->
        <!--poster="../assets/images/bg.png"-->
        <!--playsinline="true"-->
        <!--x-webkit-airplay="true"-->
        <!--x5-playsinline="true"-->
        <!--webkit-playsinline="true"-->
        <!--x5-video-player-type="h5"-->
        <!--controls-->
      <!--&gt;-->
        <!--<source src="http://img.tukuppt.com/video_show/2418175/00/02/24/5b5334eb9f0f5_10s.mp4" type="video/mp4">-->
      <!--</video>-->
    <!--</div>-->
    <!--<div class="videos">-->
      <!--<video-->
        <!--class="video"-->
        <!--poster="../assets/images/bg.png"-->
        <!--playsinline="true"-->
        <!--x-webkit-airplay="true"-->
        <!--x5-playsinline="true"-->
        <!--webkit-playsinline="true"-->
        <!--x5-video-player-type="h5"-->
        <!--controls-->
      <!--&gt;-->
        <!--<source src="http://img.tukuppt.com/video_show/2629112/00/02/13/5b5175e398be3_10s.mp4" type="video/mp4">-->
      <!--</video>-->
    <!--</div>-->
    <!--<div class="videos">-->
      <!--<video-->
        <!--class="video"-->
        <!--poster="../assets/images/bg.png"-->
        <!--playsinline="true"-->
        <!--x-webkit-airplay="true"-->
        <!--x5-playsinline="true"-->
        <!--webkit-playsinline="true"-->
        <!--x5-video-player-type="h5"-->
        <!--controls-->
      <!--&gt;-->
        <!--<source src="http://img.tukuppt.com/video_show/2405179/00/01/69/5b4864b9ee350_10s.mp4" type="video/mp4">-->
      <!--</video>-->
    <!--</div>-->
    <!--<div class="videos">-->
      <!--<video-->
        <!--class="video"-->
        <!--poster="../assets/images/bg.png"-->
        <!--playsinline="true"-->
        <!--x-webkit-airplay="true"-->
        <!--x5-playsinline="true"-->
        <!--webkit-playsinline="true"-->
        <!--x5-video-player-type="h5"-->
        <!--controls-->
      <!--&gt;-->
        <!--<source src="http://img.tukuppt.com/video_show/2418175/00/01/86/5b4b96e10ed2f_10s.mp4" type="video/mp4">-->
      <!--</video>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "Video"

  }
</script>

<style scoped type="text/less" lang="less">
  @r: 30rem;

  /*.videos {
    width: 100%;
    padding: 50/@r;
  }*/

  /*video {*/
    /*width: 100%;*/
  /*}*/
  .videos{
    width:100%;
    padding:20/@r;
  }
  video{
    width:100%;
  }
  .content{
    width:100%;
    display:flex;
    justify-content:space-between;
  }

</style>
