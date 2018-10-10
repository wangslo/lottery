<template>
  <div class="app-forum">
    <div v-for="(forumInfo,idx) in forumInfos" :key="idx">
      <div class="userInfo">
        <div class="user">
          <img :src="forumInfo.headImg" class="headImg"/>
          <div class="user-page">
            <span class="phone">{{forumInfo.phone}}</span>
            <span class="sendTime">{{forumInfo.sendTime}}</span>
          </div>
          <div class="delete" v-show="htmlStyle">删除</div>
        </div>
      </div>
      <div  @click="goToDetail(forumInfo.id)">
        <p>{{forumInfo.forumText}}</p>
        <img :src="forumInfo.forumImg" class="forumImg"/>
      </div>
      <commentTool :id="forumInfo.id" :isShowComment="isShowComment"></commentTool>
    </div>
  </div>
</template>

<script>
  import CommentTool from '@/components/utils/commentTool'

  export default {
    name: 'Forum',
    props: ['htmlStyle','forumInfos','isShowComment'],
    data() {
      return {
      }
    },
    components: {
      "commentTool": CommentTool
    },
    watch: {
      htmlStyle: function(newVal, oldVal) {
        console.log(newVal);
        localStorage.setItem("htmlStyle", newVal)
      }
    },
    methods: {
      goToDetail(id) {
        console.log(id)
        this.$router.push({
          name: 'ForumDetail',
          params: {
            id: id
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
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
