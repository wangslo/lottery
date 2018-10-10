<template>
  <div class="container">
    <app-header :leftTitle="leftTitle" :leftTitle2="leftTitle2" :rightTitle="rightTitle"></app-header>
    <div class="login-page">
      <div class="input-phone">
        <input type="text" placeholder="请输入手机号" maxlength="11" @input="checkTel" id="telNum"/>
      </div>
      <div class="agreement-part">
        <span>注册即表示同意南国彩票相关</span>
        <span class="agreement">《用户协议和隐私条款》</span>
      </div>
      <div class="tag"><span v-show="wrongTag">手机号格式不正确，请重新输入！</span></div>
      <div class="message-button" @click="getMsg" style="pointer-events: none;">获取验证码</div>
      <div class="tag2">未注册手机验证后自动登录</div>
    </div>
  </div>
</template>
<script>
  import AppHeader from '@/components/header'
  import {
    orgModuleApi
  } from '@/api/main'

  export default {
    name: 'Login',
    data() {
      return {
        leftTitle: '登录',
        leftTitle2: '',
        rightTitle: '',
        valiCode: '验证码',
        wrongTag: false
      }
    },
    components:{
      'app-header': AppHeader,
    },
    methods: {
      returnPage(){
        this.$router.push({
          name: 'Personal',
        })
      },
      checkTel(){
        var phone = $('#telNum').val();
        if(phone.length == 11){
          var pattern = /^1(3|4|5|7|8)\d{9}$/;
          if(!pattern.test(phone)){
            this.wrongTag = true
          }else {
            this.wrongTag = false
            $(".message-button").css("pointer-events","all")
          }
        }else {
          this.wrongTag = false
        }
      },
      getMsg() {
        localStorage.setItem('telphone',$('#telNum').val())

        // 获取验证码
        try{
          var data = {
            mobile_num: $('#telNum').val()
          }
          orgModuleApi.sendmessage(data).then(res => {
            if(res.code == 0){
              console.log(res.data);
              this.$router.push({
                name: 'MsgLogin',
              })
            }
          })
        }catch (e) {
          console.log("请求失败")
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    margin-top: 93px;
    .login-page{
      width: 90%;
      margin: 0 auto;
      padding-top: 100px;
      text-align: center;
      .input-phone{
        width: 90%;
        border: 0px;
        border-bottom: 1px solid;
        text-align: center;
        margin: 0 auto;
        padding-bottom: 20px;
        input{
          border: 0px;
          outline:none;
          cursor: pointer;
        }
      }
      .agreement-part{
        font-size: 24px;
        margin-top: 40px;
        .agreement{
          color:blue;
        }
      }
      .tag{
        color: red;
        margin-top: 40px;
        height: 40px;
      }
      .message-button{
        height: 60px;
        background: #f0f0f0;
        line-height: 60px;
        margin-top: 220px;
      }
      .tag2{
        margin-top: 20px;
      }
    }
  }
</style>
