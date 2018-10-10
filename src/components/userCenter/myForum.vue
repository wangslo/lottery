<template>
  <div class="container">
    <app-header :leftTitle="leftTitle" :leftTitle2="leftTitle2" :rightTitle="rightTitle"></app-header>
    <div class="app-forum" v-for="(year,idx) in forumYears" :key="idx">
      <div v-show="year != 2018">{{year}}</div>
      <div v-for="(forumInfo,idx) in forumInfos" :key="idx">
        <div v-if="forumInfo.sendTime.indexOf(year) == 0">
          <div class="userInfo">
            <div class="user">
              <div class="user-page">
                <span class="sendTime day">{{forumInfo.sendTime.split('-')[2].split(' ')[0]}}</span>
                <span class="sendTime month">{{forumInfo.sendTime.split('-')[1]}}</span>
              </div>
              <div class="delete" @click="delForum(idx)">删除</div>
            </div>
          </div>
          <div class="forum-part" @click="goToDetail(forumInfo.id)">
            <p>{{forumInfo.forumText}}</p>
            <img :src="forumInfo.forumImg" class="forumImg"/>
          </div>
          <commentTool :id="forumInfo.id" :isShowComment="isShowComment"></commentTool>
        </div>
      </div>
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
    name: 'MyForum',
    data() {
      return {
        leftTitle: '我的论坛',
        leftTitle2: '',
        rightTitle: '',
        forumYears: [],
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
        if(this.$route.name == 'MyForum'){
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
      delForum(idx){
        this.showtoast = true
        this.chooseIdx = idx
      },
      doCancel(){
        this.showtoast = false
      },
      doNext(){
        this.forumInfos.splice(this.chooseIdx,1)
        var _this = this
        _this.forumYears = []
        this.forumInfos.map(function(value,index){
          var year = value.sendTime.split('-')[0]
          if(_this.forumYears.indexOf(year) == -1){
            _this.forumYears.push(year)
          }
        })
        this.showtoast = false
        // this.queryList()
      },
      goToDetail(id) {
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
            forumImg: a,
            forumText: '双色球20180019期开奖预测！开奖结果及预告图如下：',
            id: 1
          },
          {
            headImg: lotterys[0].img,
            phone: '152****5212',
            sendTime: '2016-01-02 10:10',
            forumImg: b,
            forumText: '双色球20180019期开奖预测！开奖结果及预告图如下：',
            id: 2
          },
          {
            headImg: lotterys[0].img,
            phone: '152****5212',
            sendTime: '2017-01-02 10:10',
            forumImg: c,
            forumText: '双色球20180019期开奖预测！开奖结果及预告图如下：',
            id: 3
          }
        ]
        var _this = this
        this.forumInfos.map(function(value,index){
          var year = value.sendTime.split('-')[0]
          if(_this.forumYears.indexOf(year) == -1){
            _this.forumYears.push(year)
          }
        })
        this.forumYears = this.forumYears.sort(function (x,y) {
          return y-x;
        })
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
      img{
        border-radius: 50%;
      }
      .user-page{
        width: 580px;
      }
      .sendTime{
        margin-top: 20px;
      }
      .day{
        font-size: 32px;
      }
      .month{
        font-size: 24px;
      }
      .delete{
        width: 170px;
        text-align: right;
        padding-right: 4%;
      }
    }
  }
  .forum-part{
    padding-left: 6%;
    padding-right: 4%;
  }
  .commentContainer{
    padding-left: 6%;
    padding-right: 4%;
  }
  .forumImg{
    width: 100%;
  }
</style>
