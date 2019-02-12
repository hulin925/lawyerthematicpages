<template>
  <div>
    <div class="contents">
      <div class="padding">
        <div class="title clearfix">
          <div class="titleLeft"></div>
          <div class="titleRight">
            <p>罗文金</p>
            <p>02-12</p>
          </div>
        </div>
        <div class="content">
          <h2>男方去世前将财产赠与情人，该赠与行为是否有效？</h2>
          <div>
            <h3>案情简介：男方去世前将财产赠与情人</h3>
            <p>王某女和李某男是多年的夫妻，生有一子一女。
              2006年年初李某男因肝癌晚期卧床不起，王某女一直悉心照料，但由于病情加重，李某男还是于2007年初去世了。
              正在全家人处在失去亲人的悲痛之中的时候，一个姓孙的女士，拿着一份李某男生前做了公证的遗嘱，
              来向王某女讨要李某男的抚恤金、住房公积金和住房补贴金，对于孙某王某女并不陌生，她是李某男生前的情人，
              在李某男肝癌住院前的一段时间里，李某男一直和这个孙某同居。最方争执不下，最终闹到了法庭，要求孙某返还遗嘱财产。</p>
            <h3>法院判决：赠与无效</h3>
            <p>法院经过调查取证证明了李某男生前与孙某长期同居，而王某女一直忠于夫妻感情，且在李某男住院期间一直悉心照料履行了夫妻扶助义务。
              遗赠属于民事法律行为，民事法律行为是当事人实现自己权利，处分自己权益的意思自治行为。当事人的意思表示一旦作出就成立生效，
              但遗赠人行使遗赠权不得违背法律的规定。且根据《中华人民共和国民法通则》第七条的规定，民事行为不得违反公共秩序和社会公德，
              违反者其行为无效。李某男与王某女系结婚多年的夫妻，无论从社会道德角度，还是从《婚姻法》的规定来讲，均应相互扶助、互相忠实、互相尊重。
              人民法院经审理后认为，该赠与有违善良风俗，判定无效，支持了王某女的诉讼请求。</p>
            <h3>律师说法：</h3>
            <p>李某男与孙某之间是遗赠法律关系；李某男与王某女之间的财产属于夫妻共同财产。抓住这两条基本法律关系脉络，
              本案的诉讼思路是：1、要回财产的前提是公证遗嘱被撤销。2、公证遗嘱被撤销的前提是遗嘱的内容违反法律规定。3、
              李某男所立之遗嘱违反民法的公序良俗原则。在实际操作中，应当对公证遗嘱的每一项进行具体分析：第一，抚恤金不属于李某男的个人财产。
              因为抚恤金是死者单位对死者直系亲属的抚慰。李某男死后的抚恤金不是其个人财产，不属遗赠财产的范围，故李某男对抚恤金的处置无效。
              第二，住房公积金、住房补贴金系李某男与王某女夫妻关系存续期间所得的夫妻共同财产，
              按照《中华人民共和国继承法》第十六条和司法部《遗嘱公证细则》第二条之规定，
              遗嘱人生前在法律允许的范围内，只能按照法律规定的方式处分其个人财产。遗赠人李某男在立遗嘱时未经共有人王某女同意，
              单独对夫妻共同财产进行处分，
              侵犯了王某女的合法权益，其无权处分部分未经王某女追认应属无效。第三，李某男立遗嘱的行为违反了社会公德。
              李某男长期与孙某同居，其行为违反了《婚姻法》第二条规定的一夫一妻的婚姻制度和第三条禁止有配偶者与他人同居以及第四条夫妻应当互相忠实、
              互相尊重的法律规定，是一种违法行为。
              综上，公证遗赠人李某男的遗赠行为违反了法律规定和公序良俗，损害了社会公德，破坏了公共秩序，属于无效行为，
              法院最终支持了王某女的诉讼请求。胜败关键经过公证的遗嘱，如果发现违反法律的情况，也是可以撤销的。</p>
          </div>
        </div>
      </div>
      <div class="comment">
        <div>
          <img src="../assets/images/zhuanfa.png" alt="">
          <span>37</span>
        </div>
        <div>
          <img src="../assets/images/pinglun.png" alt="">
          <span>1254</span>
        </div>
        <div>
          <img src="../assets/images/dianzan.png" alt="">
          <span>45</span>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CaseList"
    }
</script>

<style scoped type="text/less" lang="less">
  @r:30rem;
  section{
    width:100%;
  }
  .padding{
    padding:20/@r;
    border-bottom:1px solid #dbdbdb;
  }
  .contents{
    border-bottom:1px solid #dbdbdb;
    margin-bottom:20/@r;
  }
  .title{
    height:80/@r;
  }
  .titleLeft{
    float:left;
    width:80/@r;
    height:80/@r;
    background-color:#b09dfe;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .titleRight{
    float:left;
    line-height:40/@r;
    margin-left:30/@r;
  }
  .content{
    line-height:40/@r;
  }
  .content h2{
    padding:20/@r 0;
    line-height:40/@r;
    font-size:32/@r;
    font-weight:bold;
  }
  .content h3{
    line-height:40/@r;
    font-size:30/@r;
    font-weight:bold;
  }
  .comment{
    height:80/@r;
    padding:15/@r 0;
    border-bottom:1px solid #dbdbdb;
    display:flex;
    justify-content:space-around;
    color:#515151;
    line-height:50/@r;
  }
  .comment img{
    width:50/@r;
    height:50/@r;
  }
  .line{
    height:15/@r;
    background-color:#eee;
  }
</style>
