<template>
  <div class="container">
    <app-header :leftTitle="leftTitle" :leftTitle2="leftTitle2" :rightTitle="rightTitle"></app-header>
    <app-forum :forumInfos="forumInfos" :htmlStyle="htmlStyle" :isShowComment="isShowComment"></app-forum>
    <h3>全部评论</h3>
    <app-forumComment></app-forumComment>
    <app-commentBottom :haveTool="haveTool"></app-commentBottom>
  </div>
</template>
<script>
  import {
    orgModuleApi
  } from '@/api/main'
  import {a, b, c, lotterys} from '../../../static/outImg'
  import Forum from '../forum'
  import AppHeader from '@/components/header'
  import ForumComment from './forumComment'
  import CommentBottom from '@/components/utils/commentBottom'

  export default {
    name: 'ForumDetail',
    data() {
      return {
        leftTitle: '',
        leftTitle2: '',
        rightTitle: '···',
        forumInfos: [],
        htmlStyle: false,
        showlaoding: true,
        id: this.$route.params.id,
        isShowComment: false,
        haveTool: true
      }
    },
    components: {
      'app-forum': Forum,
      'app-header': AppHeader,
      'app-forumComment': ForumComment,
      'app-commentBottom': CommentBottom
    },
    created() {
      window.scrollTo(0,0);
      this.queryList()
    },
    methods: {
      goToPage(){
        this.$router.push({
          name: 'Personal',
        })
      },
      returnPage(){
        this.$router.go(-1)
      },
      queryList() {
        this.forumInfos = [
            {
              headImg: lotterys[0].img,
              phone: '152****5212',
              sendTime: '2018-01-02 10:10',
              forumImg: a,
              forumText: '双色球20180019期开奖预测！开奖结果及预告图如下：',
              id: this.id
            }
          ]
        /*orgModuleApi.loadBanner('').then(res => {
          this.forumInfos.push(res.data)
        })*/
      },
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    margin-top: 96px;
  }
</style>
