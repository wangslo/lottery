<template>
  <div class="container">
    <app-header :leftTitle="leftTitle" :leftTitle2="leftTitle2" :rightTitle="rightTitle"></app-header>
    <app-forumComment></app-forumComment>
    <app-commentBottom :haveTool="haveTool"></app-commentBottom>
  </div>
</template>
<script>
  import ForumComment from './forumComment'
  import AppHeader from '@/components/header'
  import CommentBottom from '@/components/utils/commentBottom'

  export default {
    name: 'CommentDetail',
    data() {
      return {
        leftTitle: '三楼',
        leftTitle2: '',
        rightTitle: '',
        haveTool: false
      }
    },
    components:{
      'app-header': AppHeader,
      'app-forumComment': ForumComment,
      'app-commentBottom': CommentBottom
    },
    methods: {
      returnPage(){
        this.$router.go(-1)
      },
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    margin-top: 96px;
  }
</style>
