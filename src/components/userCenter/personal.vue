<template>
  <div class="container">
    <app-header :leftTitle="leftTitle" :leftTitle2="leftTitle2" :rightTitle="rightTitle"></app-header>
    <div class="choose_item userInfo" @click="goToLogin">
      <div class="face-img" :style="iconStyle"></div>
      <div class="user-status logined" v-if="isLogin">
        <span>{{telPhone}}</span>
      </div>
      <div class="user-status" v-else>
        <span>未登录</span>
        <span>登录后可以发布论坛、评论</span>
      </div>
      <div class="icon-inter"></div>
    </div>
    <div class="choose_item message" @click="goToMyMessage">
      <div class="icon-img" :style="{backgroundImage: 'url(' + personal_icon[0] + ')'}"></div>
      <div class="text">消息</div>
      <div class="icon-inter"></div>
    </div>
    <div class="choose_item myCollect" @click="goToMyCollect">
      <div class="icon-img" :style="{backgroundImage: 'url(' + personal_icon[1] + ')'}"></div>
      <div class="text">我的收藏</div>
      <div class="icon-inter"></div>
    </div>
    <div class="choose_item myForum" @click="goToMyForum">
      <div class="icon-img" :style="{backgroundImage: 'url(' + personal_icon[2] + ')'}"></div>
      <div class="text">我的论坛</div>
      <div class="icon-inter"></div>
    </div>
    <div class="choose_item question" @click="goToQuestion">
      <div class="icon-img" :style="{backgroundImage: 'url(' + personal_icon[3] + ')'}"></div>
      <div class="text">意见反馈</div>
      <div class="icon-inter"></div>
    </div>
  </div>
</template>
<script>
  import AppHeader from '@/components/header'
  import {personal_icon} from '../../../static/outImg'

  export default {
    name: 'Personal',
    data() {
      return {
        leftTitle: '个人中心',
        leftTitle2: '',
        rightTitle: '',
        personal_icon:personal_icon,
        isLogin: false,
        iconStyle: {}
        // telPhone: ''
      }
    },
    created() {
      var userinfo = this.$store.getters.user

      if(userinfo != ''){
        this.isLogin = true
        this.telPhone = this.$store.getters.nickname || userinfo

        this.iconStyle = {
          'background': 'url('+ this.$store.getters.icon +')',
          'background-size': '100% 100%',
          'background-repeat': 'no-repeat'
        }
      }
    },
    components:{
      'app-header': AppHeader,
    },
    methods: {
      goToLogin(){
        if(this.isLogin){
          this.$router.push({
            name: 'UserInfo',
            params:{
              id: 1
            }
          })
        }else {
          this.$router.push({
            name: 'Login',
          })
        }
      },
      goToMyForum(){
        this.$router.push({
          name: 'MyForum',
        })
      },
      goToQuestion(){
        this.$router.push({
          name: 'Question',
        })
      },
      goToMyMessage(){
        this.$router.push({
          name: 'MyMessage',
        })
      },
      goToMyCollect(){
        this.$router.push({
          name: 'MyCollect',
        })
      },
      returnPage(){
        this.$router.push({
          name: 'Index',
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    margin-top: 93px;
  }
  .choose_item{
    width: 90%;
    height: 80px;
    margin: 0 auto;
    border-bottom: 1px solid;
    div{
      margin-top: 20px;
    }
    .icon-img{
      width: 40px;
      height: 40px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      float: left;
      margin-right: 40px;
    }
    .text{
      float: left;
    }
    .icon-inter{
      background: url("../../../static/img/persional/icon-inter.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 20px;
      height: 40px;
      float: right;
    }
  }
  .userInfo{
    height: 240px;
    div{
      margin-top: 80px;
    }
    .icon-inter{
      height: 80px;
      width: 40px;
    }
    .face-img{
      float: left;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid;
      margin-right: 40px;
    }
    .user-status{
      height: 80px;
      line-height: 40px;
      float: left;
      span{
        display: block;
      }
    }
    .logined{
      line-height: 80px;
    }
  }
</style>
