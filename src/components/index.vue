<template>
  <div>
    <app-header :leftTitle="leftTitle" :leftTitle2="leftTitle2" :rightTitle="rightTitle"></app-header>
    <app-banner v-show='isBanner' :listImg="listImg"></app-banner>
    <div class="advr">
      <transition-group tag="ul" enter-active-class="animated fadeInUp"
                        leave-active-class="animated fadeOutUp">
        <li v-show="idx == isCurrent" v-for="(messages,idx) in messageList" :key="idx" :class="['carousel-message']">
          <span class="good">{{messages}}</span>
        </li>
      </transition-group>
    </div>
    <div class="lottery">
      <div class="lotteryContent">
        <ul>
          <li v-show="index != isShow" v-for="(lotterys,index) in lotterysList" :key="index" @click="goToList(lotterys.type)">
            <div class="imgContainer">
              <img :src="lotterys.img"/>
            </div>
            <span>{{lotterys.title}}</span>
          </li>
        </ul>
      </div>
      <div @click="iconClick" class="icon">{{word}}</div>
    </div>
    <div class="forum">
      <h3>热门论坛</h3>
      <app-forum :forumInfos="forumInfos" :htmlStyle="htmlStyle" :isShowComment="isShowComment"></app-forum>
    </div>
  </div>
</template>
<script>
  import {
    orgModuleApi
  } from '@/api/main'
  import Banner from './banner'
  import {a, b, c, lotterys} from '../../static/outImg'
  import Forum from './forum'
  import AppHeader from '@/components/header'

  export default {
    name: 'Index',
    data() {
      return {
        leftTitle: '南国彩票',
        leftTitle2: '',
        rightTitle: '个人中心',
        isBanner: true,
        listImg: [a,b,c],
        messageList: [],
        isCurrent: 0,
        lotterysList: lotterys,
        isShow: 6,
        forumInfos: [
          {
            headImg: lotterys[0].img,
            phone: '152****5212',
            sendTime: '2018-01-02 10:10',
            forumImg: a,
            forumText: '双色球20180019期开奖预测！开奖结果及预告图如下：',
            id: 1
          },
          {
            headImg: lotterys[0].img,
            phone: '152****5212',
            sendTime: '2018-01-02 10:10',
            forumImg: a,
            forumText: '双色球20180019期开奖预测！开奖结果及预告图如下：',
            id: 2
          },
          {
            headImg: lotterys[0].img,
            phone: '152****5212',
            sendTime: '2018-01-02 10:10',
            forumImg: a,
            forumText: '双色球20180019期开奖预测！开奖结果及预告图如下：',
            id: 3
          }
        ],
        htmlStyle: false,
        isShowComment: true
      }
    },
    components: {
      'app-banner': Banner,
      'app-forum': Forum,
      'app-header': AppHeader
    },
    created() {
      window.scrollTo(0,0);
      this.loadBanner();
      this.autoPlay();
    },
    computed:{
      word(){
        if(this.isShow == 6){
          return '更多'
        }else{
          return '收起'
        }
      }
    },
    methods: {
      goToPage(){
        this.$router.push({
          name: 'Personal',
        })
      },
      loadBanner() {
        // console.log("aaasssss")
        /*orgModuleApi.loadBanner('').then(res => {
          this.forumInfos = res.data;
        })*/
      },
      loadForum(){
        /*orgModuleApi.loadForum('').then(res => {
          this.isBanner = true;
        })*/
      },
      autoPlay () {
        this.messageList = this.$store.getters.messageList;
        let length = this.messageList.length;
        if (this.isCurrent >= length) {
          this.isCurrent = 0;
          this.autoPlay();
        } else {
          setTimeout(()=>{
            this.isCurrent++;
            this.autoPlay();
          }, 3000)
        }
      },
      iconClick(){
        if(this.isShow == 6){
          this.isShow = 7
        }else{
          this.isShow = 6
        }
      },
      goToList(type) {
        this.$router.push({
          name: 'ForumList',
          params: {
            type: type
          }
        })
      },
    }
  }
</script>
<style lang="scss">
  .advr {
    height: 30px;
  }
  .carousel-message {
    height: 30px;
    line-height:30px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    /*background: url('../assets/ic_notice.png') 16px center no-repeat rgba(0,0,0,0.6);*/
    background-size:20px 16px;
    border-radius: 30px;
    padding-left:30px;
    position: absolute;
    color:#fff;
    display: -webkit-box;
    -webkit-box-pack: left;
    -webkit-box-align: center;
  }
  .good {
    color:black;
    /*width: 80px;*/
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    display: block;
    height: 30px;
    line-height:30px;
    margin-left: 8px;
  }
  .lottery{
    display: flex;
    flex-direction: column;
    ul{
      list-style: none;
      padding: 0;
      text-align: center;
      li{
        float: left;
        width: 250px;
        margin-bottom: 20px;
        .imgContainer{
          width: 120px;
          height: 120px;
          background: gray;
          border-radius: 50%;
          margin: 0 auto;
          img{
            margin-top: 16px;
          }
        }
        span{
          display: block;
        }
      }
    }
    .icon{
      text-align: center;
    }
  }
</style>
