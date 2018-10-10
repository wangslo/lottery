<template>
  <div class="container">
    <app-header :leftTitle="leftTitle" :leftTitle2="leftTitle2" :rightTitle="rightTitle"></app-header>
    <div class="msg-pannel">
      <span v-for='(item,index) in items' @click="toggle(index)" :class='{active:index===number}'>{{item}}</span>
    </div>
    <div class="msg-content">
      <div class="msg-icon"></div>
      <div class="msg-concrete">
        <span>{{happendTime}}</span>
        <div v-if="systemStatus">
          <span>{{otherName}}</span>
          <span v-show="msgStatus">赞了您的帖子</span>
          <span v-show="!msgStatus">评论了您的帖子</span>
          <span>{{yourCode}}</span>
          <span v-show="!msgStatus" class="comment">{{comment}}</span>
        </div>
        <div v-else>
          <span style="display: block;">通知</span>
          <span>{{systemMsg}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AppHeader from '@/components/header'
  export default {
    name: 'MyMessage',
    data(){
      return {
        leftTitle: '消息',
        leftTitle2: '',
        rightTitle: '',
        msgStatus: true,
        happendTime: '2018/09/06    18:00:00',
        otherName:'歌唱de沙小哥哥',
        yourCode:'大乐透1241预测',
        comment:'找我，带你中大奖..',
        number: 0,
        items:['被赞','被评论','系统通知'],
        systemStatus: true,
        systemMsg: '因系统升级，9月6日晚间22:00至9月7日凌晨4点暂停论坛功能，谢谢您的配合。'
      }
    },
    components:{
      'app-header': AppHeader,
    },
    created(){

    },
    methods:{
      returnPage(){
        this.$router.push({
          name: 'Personal',
        })
      },
      toggle(index) {
        this.number= index;
        if(index == 1){
          this.msgStatus = false
          this.systemStatus = true
        }else if(index == 0){
          this.msgStatus = true
          this.systemStatus = true
        }else if(index == 2){
          this.systemStatus = false
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    margin-top: 93px;
    .msg-pannel{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: 80px;
      line-height: 80px;
      background: gray;
      color: aliceblue;
      .active{
        border-bottom: 1px solid red;
        color: red;
      }
    }
    .msg-content{
      .msg-icon{
        width: 80px;
        height: 80px;
        border: 1px solid;
        float: left;
      }
      .msg-concrete{
        width: 630px;
        float: left;
        margin-left: 20px;
        .comment{
          display: block;
        }
      }
    }

  }
</style>
