<template>
  <div class="container">
    <app-header :leftTitle="leftTitle" :leftTitle2="leftTitle2" :rightTitle="rightTitle"></app-header>
    <div class="login-page">
      <div class="tag1">验证码已发送至{{telphone}}</div>
      <security-code></security-code>
      <div class="tag"><span v-show="wrongTag">验证码不正确，请重新输入！</span></div>
      <div class="code">
        <div v-if="btnHide">{{valiCode}}</div>
        <div v-else @click="sendmessage">{{valiCode}}</div>
      </div>
      <div class="login-button" style="pointer-events: none;" @click="loginwithmessage">登录</div>
    </div>
  </div>
</template>
<script>
  import AppHeader from '@/components/header'
  import {
    orgModuleApi
  } from '@/api/main'
  import Code from './code'
  export default {
    name: 'MsgLogin',
    data() {
      return {
        leftTitle: '请输入验证码',
        leftTitle2: '',
        rightTitle: '',
        valiCode: '',
        wrongTag: false,
        btnHide: false,
        telphone: '',
        num: 60,
        timer: '',
        sms_code: '',
      }
    },
    components:{
      'app-header': AppHeader,
      'security-code': Code
    },
    created(){
      this.telphone = localStorage.getItem('telphone')
    },
    mounted(){
      this.codeTimer()
    },
    methods: {
      returnPage(){
        this.$router.push({
          name: 'Login',
        })
      },
      checkCode(val) {
        if(val.length == 6){
          $(".login-button").css("pointer-events","all")
          $(".login-button").css("background","red")
          this.sms_code = val
        }else {
          $(".login-button").css("pointer-events","none")
          $(".login-button").css("background","#f0f0f0")
        }
      },
      codeTimer() { //计时器
        var _this = this;
        var num = _this.num;
        _this.timer = setInterval(function() {
          _this.valiCode = num + "s后可重新获取验证码";
          num--;
          if (num < 0) {
            clearInterval(_this.timer);
            _this.valiCode = "重新发送短信验证码";
            _this.btnHide = false;
            num = 60;
          }
        }, 1000);
      },
      sendmessage() {
        var _this = this
        // 获取验证码
        var data = {
          mobile_num: localStorage.getItem('telphone')
        }
        orgModuleApi.sendmessage(data).then(res => {
          if(res.code == 0){
            this.btnHide = true;
            _this.num = 60
            _this.codeTimer()
          }else if(res.code == 2){
            this.btnHide = true;
            _this.num = res.data.need_seconds
            _this.codeTimer()
          }
        })
      },
      loginwithmessage() {
        var sms_code = '';
        console.log(this.sms_code)
        var userInfo = {
          mobile_num: localStorage.getItem('telphone'),
          sms_code: this.sms_code
        }
        var _this = this
        this.$store.dispatch('loginWithMessage',userInfo).then(() => {
          if(_this.$store.getters.code == 0){
            this.$router.push({
              name: 'Personal',
            })
          }else{
            clearInterval(_this.timer);
            _this.valiCode = "重新发送短信验证码";
            _this.btnHide = false;
            _this.num = 60;
          }
        }).catch((err) => {
          console.log('请求失败')
        })
      },
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    margin-top: 93px;
    .login-page{
      width: 80%;
      margin: 0 auto;
      padding-top: 100px;
      text-align: center;
      .tag{
        color: red;
        margin-top: 40px;
        height: 40px;
      }
      .code{
        margin-top: 40px;
        height: 40px;
      }
      .login-button{
        height: 60px;
        background: #f0f0f0;
        line-height: 60px;
        margin-top: 220px;
      }
    }
  }
</style>
