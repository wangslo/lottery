<template>
  <div class="container">
    <app-header :leftTitle="leftTitle" :leftTitle2="leftTitle2" :rightTitle="rightTitle"></app-header>
    <div v-for="(forumInfo,idx) in forumInfos" :key="idx">
      <div class="userInfo">
        <div class="user">
          <img :src="forumInfo.headImg" class="headImg"/>
          <div class="user-page">
            <span class="phone">{{forumInfo.phone}}</span>
            <span class="sendTime">{{forumInfo.sendTime}}</span>
          </div>
          <div class="delete" @click="delCollect(idx)">删除</div>
        </div>
      </div>
      <div  @click="goToDetail(forumInfo.id)">
        <p>{{forumInfo.forumText}}</p>
        <img :src="forumInfo.forumImg" class="forumImg"/>
      </div>
      <commentTool :id="forumInfo.id" :isShowComment="isShowComment"></commentTool>
    </div>
    <app-toast v-show="showtoast" :isConfirm="isConfirm" :text="text" :leftText="leftText" :rightText="rightText"></app-toast>
  </div>
</template>
<script>
  import {
    orgModuleApi
  } from '@/api/main'
  import {a, b, c, lotterys} from '../../../static/outImg'
  import AppHeader from '@/components/header'
  import CommentTool from '@/components/utils/commentTool'
  import toast from '../utils/toast'

  export default {
    name: 'MyCollect',
    data() {
      return {
        leftTitle: '我的收藏',
        leftTitle2: '',
        rightTitle: '',
        forumInfos: [],
        showlaoding: true,
        pageNum: 1,
        pageSize: 10,
        isShowComment: true,
        showtoast: false,
        isConfirm: true,
        text: '确认删除此条论坛？',
        leftText: '取消',
        rightText: '确认',
        chooseIdx: ''
      }
    },
    components: {
      'app-header': AppHeader,
      "commentTool": CommentTool,
      "app-toast": toast
    },
    created() {
      window.scrollTo(0,0);
      // 注册scroll事件并监听
      window.addEventListener('scroll', () => {
        if(this.$route.name == 'MyCollect'){
          var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          //判断是否滚动到底部
          if (scrollTop + window.innerHeight + 0>= document.body.offsetHeight) { //0 表示距离底部多少的距离的开始触发loadmore效果
            if(this.showlaoding){
              this.pageNum += 1
              this.showlaoding = false
              this.queryList()
            }
          }
        }
      },true)
      this.queryList()
    },
    methods: {
      delCollect(idx){
        this.showtoast = true
        this.chooseIdx = idx
      },
      doCancel(){
        this.showtoast = false
      },
      doNext(){
        this.forumInfos.splice(this.chooseIdx,1)
        this.showtoast = false
      },
      goToDetail(id) {
        console.log(id)
        this.$router.push({
          name: 'ForumDetail',
          params: {
            id: id
          }
        })
      },
      returnPage(){
        this.$router.push({
          name: 'Personal',
        })
      },
      queryList() {
        console.log(this.pageNum)
        this.forumInfos = [
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
            forumImg: b,
            forumText: '双色球20180019期开奖预测！开奖结果及预告图如下：',
            id: 2
          },
          {
            headImg: lotterys[0].img,
            phone: '152****5212',
            sendTime: '2018-01-02 10:10',
            forumImg: c,
            forumText: '双色球20180019期开奖预测！开奖结果及预告图如下：',
            id: 3
          }
        ]
        var aa = {
          headImg: lotterys[0].img,
          phone: '152****5212',
          sendTime: '2018-01-02 10:10',
          forumImg: b,
          forumText: '双色球20180019期开奖预测！开奖结果及预告图如下：',
          id: 4
        };
        if(!this.showlaoding){
          /*orgModuleApi.loadBanner('').then(res => {
            this.forumInfos.push(res.data)
          })*/
          this.forumInfos.push(aa)
          this.showlaoding = false
        }
      },
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    overflow: scroll;
    margin-top: 96px;
  }
  .userInfo{
    .user{
      display: flex;
      .user-page{
        width: 580px;
      }
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
        width: 170px;
        text-align: right;
        padding-right: 4%;
      }
    }
  }
  .forumImg{
    width: 100%;
  }
</style>
