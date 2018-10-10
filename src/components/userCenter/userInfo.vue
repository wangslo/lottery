<template>
  <div class="container">
    <app-header :leftTitle="leftTitle" :leftTitle2="leftTitle2" :rightTitle="rightTitle" :isforbidden="isforbidden"></app-header>
    <div class="nickname-page" v-if="showNickName">
      <span>昵称：{{nickname}}</span>
      <input type="text" placeholder="换个新昵称试试（2—8个字之间）" minlength="2" maxlength="8" ref="nickName" @input="canSave"/>
      <span style="color: red">注意：昵称请勿使用敏感词汇</span>
    </div>
    <div class="user-page" v-else>
      <div class="choose_item head-part" @click="getPhotoPart">
        <div>头像</div>
        <div>
          <div class="face-img" :style="{backgroundImage: 'url(' + faceImg + ')'}"></div>
        </div>
        <div class="icon-inter"></div>
      </div>
      <div class="choose_item name-part" @click="setNick">
        <div>昵称</div>
        <div class="nickname">{{nickname}}</div>
        <div class="icon-inter"></div>
      </div>
      <div class="choose_item sex-part" @click="setSex">
        <div>性别</div>
        <div class="sex">{{sex}}</div>
        <div class="icon-inter"></div>
      </div>
    </div>
    <app-photoAndPick ref="child" v-show="showPhoto"></app-photoAndPick>
    <transition name="pull-up">
      <div class="photo-page" v-show="showPhotos">
        <div>更换头像</div>
        <div @click="getPhoto">拍照</div>
        <div @click="getGalleryImgs">选择一张照片</div>
        <div @click="cancelPhoto">取消</div>
      </div>
    </transition>
    <transition name="pull-up">
      <div class="sex-page" v-show="showSex">
        <div>选择性别</div>
        <div @click="setMan">男</div>
        <div @click="setWoman">女</div>
        <div @click="cancelSex">取消</div>
      </div>
    </transition>
    <app-toast v-show="showtoast" :isConfirm="isConfirm" :text="text" :leftText="leftText" :rightText="rightText" :rightText2="rightText2"></app-toast>
  </div>
</template>
<script>
  import AppHeader from '../header'
  import PhotoAndPick from '../utils/photoAndPick'
  import {orgModuleApi} from '@/api/main'
  import toast from '../utils/toast'
  export default {
    name: 'UserInfo',
    data(){
      return {
        leftTitle: '个人资料',
        leftTitle2: '',
        rightTitle: '保存',
        nickname: '',
        sex: '',
        faceImg: '',
        showPhoto: false,
        showPhotos: false,
        showNickName:false,
        showSex: false,
        isforbidden: {
          'pointer-events': 'none'
        },
        iconChange: false,
        sexChange: false,
        showtoast: false,
        isConfirm: true,
        text: '是否保存修改内容？',
        leftText: '否',
        rightText: '是',
        rightText2: '确认',
      }
    },
    components:{
      'app-header': AppHeader,
      'app-photoAndPick': PhotoAndPick,
      'app-toast': toast,
    },
    created(){
      var user = this.$store.getters.user
      this.faceImg = this.$store.getters.icon
      this.nickname = this.$store.getters.nickname || user
      this.sex = this.$store.getters.sex == 1 ? '男' : '女'
    },
    watch:{
      faceImg(newVal,oldVal){
        if(newVal != this.$store.getters.icon){
          this.iconChange = true
          this.isforbidden = {
            'pointer-events': 'all'
          }
        }else {
          this.isforbidden = {
            'pointer-events': 'none'
          }
        }
      },
      sex(newVal,oldVal){
        var oldSex = this.$store.getters.sex == 1 ? '男' : '女'
        if(newVal != oldSex){
          this.sexChange = true
          this.isforbidden = {
            'pointer-events': 'all'
          }
        }else {
          this.isforbidden = {
            'pointer-events': 'none'
          }
        }
      },
    },
    methods:{
      canSave(){
        if(this.$refs.nickName.value){
          this.isforbidden = {
            'pointer-events': 'all'
          }
        }else {
          this.isforbidden = {
            'pointer-events': 'none'
          }
        }
      },
      setWoman(){
        this.sex = '女'
        this.showSex = false
      },
      setMan(){
        this.sex = '男'
        this.showSex = false
      },
      cancelPhoto(){
        this.showPhotos = false
      },
      cancelSex(){
        this.showSex = false
      },
      getPhotoPart(){
        this.showPhotos = true;
      },
      getPhoto(){
        this.showPhoto = true;
        this.showPhotos = false;
        // this.$refs.child.getImage()
        this.$refs.child.fileClick2()
      },
      getGalleryImgs(){
        this.showPhoto = true;
        this.showPhotos = false;
        // this.$refs.child.galleryImgs()
        this.$refs.child.fileClick()
      },
      childByValue(val){
        this.faceImg = val
      },
      setNick(){
        this.showNickName = true
        this.leftTitle = '昵称'
        this.isforbidden = {
          'pointer-events': 'none'
        }
      },
      doCancel(){
        this.showtoast = false
        this.showNickName = false
        this.leftTitle = '个人资料'
        if(this.sexChange || this.iconChange){
          this.isforbidden = {
            'pointer-events': 'all'
          }
        }else {
          this.isforbidden = {
            'pointer-events': 'none'
          }
        }
      },
      doNext(){
        this.showtoast = false
        this.goToPage()
      },
      returnPage(){
        this.isConfirm = true
        this.text = '是否保存修改内容？'

        if(this.showNickName){
          if(this.$refs.nickName.value){
            this.showtoast = true
          }else {
            this.showNickName = false
            this.leftTitle = '个人资料'
            if(this.sexChange || this.iconChange){
              this.isforbidden = {
                'pointer-events': 'all'
              }
            }else {
              this.isforbidden = {
                'pointer-events': 'none'
              }
            }
          }
        }else {
          this.$router.push({
            name: 'Personal',
          })
        }
      },
      goToPage(){
        var params = ''
        if(this.showNickName){
          // 保存昵称
          this.nickname = this.$refs.nickName.value
          params = "?username=" + this.$store.getters.user +
            "&token=" + this.$store.getters.token +
            "&nickname=" + this.nickname
          orgModuleApi.setinfo(params).then(res => {
            if (res.code == "0") {
              this.$store.commit('SET_NICKNAME', this.nickname)
            }
          }).then(res=>{
            this.showtoast = true
            this.isConfirm = false
            this.text = '保存成功'
            this.$refs.nickName.value = ''
          })
        }else{
          // 保存性别和头像
          var sexData = ''
          params = "?username=" + this.$store.getters.user +
            "&token=" + this.$store.getters.token
          if(this.iconChange){
            params += "&icon=" + this.faceImg
          }
          if(this.sexChange){
            sexData = this.sex == '男' ? 1:2
            params += "&sex=" + sexData
          }
          orgModuleApi.setinfo(params).then(res => {
            if (res.code == "0") {
              this.$store.commit('SET_ICON', this.faceImg)
              this.$store.commit('SET_SEX', sexData)
            }
          }).then(res=>{
            this.showtoast = true
            this.isConfirm = false
            this.text = '保存成功'
          })
        }
      },
      doPrompt(){
        this.showtoast = false
        this.returnPage()
      },
      setSex(){
        if(this.showSex){
          this.showSex = false
        }else {
          this.showSex = true
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    margin-top: 93px;
  }
  .nickname-page{
    display: flex;
    flex-direction: column;
    input{
      width: 55%;
      margin-top: 40px;
      margin-bottom: 40px;
      border: 0;
      outline:none;
      cursor: pointer;
    }
    span:nth-child(1){
      margin-top: 40px;
    }
  }
  .choose_item {
    width: 90%;
    height: 80px;
    margin: 0 auto;
    border-bottom: 1px solid;
    display: flex;
    div{
      margin-top: 20px;
      text-align: right;
      width: 580px;
    }
    div:nth-child(1){
      width: 60px;
    }
    .face-img{
      background-repeat: no-repeat;
      background-size: 60px 60px;
      background-position: center;
      width: 0.8rem;
      height: 0.8rem;
      float: right;
      border: 1px solid;
      border-radius: 50%;
      margin-top: 0px;
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
  .photo-page,
  .sex-page{
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    div{
      width: 600px;
      background: red;
      margin: 0 auto;
      height: 80px;
      line-height: 80px;
    }
    div:nth-child(1){
      border-radius: 10px 10px 0px 0px;
      border-bottom: 2px solid black;
    }
    div:nth-child(2){
      border-bottom: 2px solid black;
    }
    div:nth-child(3){
      border-radius: 0px 0px 10px 10px;
    }
    div:nth-child(4){
      margin-top: 10px;
      border-radius: 10px;
    }
  }
  %common1 {
    opacity: 1;
    -ms-transform: scaleY(1);
    transform: scaleY(1);
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0.1s,
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0.1s;
    -ms-transform-origin: center top;
    transform-origin: center top;
  }
  .pull-up-enter-active,
  .pull-up-leave-active {
    @extend %common1;
    transform-origin: center bottom;
  }
  .pull-up-enter,
  .pull-up-leave-active{
    opacity: 0;
    -ms-transform: scaleY(0);
    transform: scaleY(0);
  }
</style>
