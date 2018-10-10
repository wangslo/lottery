<template>
  <div class="comment">
    <div class="userInfo">
      <div class="user" @click="goToDetail">
        <img :src="headImg" class="headImg"/>
        <div>
          <span class="username">{{username}}</span>
          <span class="sendTime">{{sendTime}}</span>
        </div>
      </div>
      <div class="tools">
        <div :style="shareSty" @click="getThumbUp">
          <span>{{comGoodNum}}</span>
        </div>
        <div :style="commentSty" @click="goToDetail">
          <span>{{comNum}}</span>
        </div>
      </div>
    </div>
    <div class="commentConent" @click="goToDetail">
      <p>{{comments}}</p>
    </div>
  </div>
</template>
<script>
  import {
    orgModuleApi
  } from '@/api/main'
  import {lotterys,tools} from '../../../static/outImg'

  export default {
    name: 'ForumComment',
    data() {
      return {
        headImg: '',
        username: '',
        sendTime: '',
        comments: '',
        comGoodNum: 0,
        comNum: 0,
        shareSty: {},
        commentSty: {},
        goodStatus: false,
        tools: tools,
      }
    },
    created() {
      this.initData()
    },
    methods: {
      initData() {
        this.headImg = lotterys[0].img
        this.username = 'BBA'
        this.sendTime = '2018.08.22   10:00'
        this.comments = '哟偶停摆了'
        this.commentSty = {
          backgroundImage: "url(" + this.tools[1] + ")",
        }
        this.shareSty = {
          backgroundImage: "url(" + this.tools[2] + ")",
        }
      },
      getThumbUp() {
        if(!this.goodStatus){
          this.shareSty = {
            backgroundImage: "url(" + this.tools[3] + ")",
          }
          this.goodStatus = true
        }else {
          this.shareSty = {
            backgroundImage: "url(" + this.tools[2] + ")",
          }
          this.goodStatus = false
        }
      },
      goToDetail() {
        this.$router.push({
          name: 'CommentDetail',
          params: {
            id: 1
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .userInfo{
    height: 90px;
    .user{
      display: flex;
      width: 540px;
      float: left;
      img{
        border-radius: 50%;
      }
      span{
        display: block;
      }
      .sendTime{
        margin-top: 20px;
      }
      .delete{
        width: 60px;
      }
    }
  }
  .tools{
    display: flex;
    justify-content: space-around;
    height: 50px;
    width: 200px;
    float: right;
    div{
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-repeat: no-repeat;
      background-size: 30px;
      background-position: left;
    }
  }
  .commentConent{
    margin-left: 88px;
  }
</style>
