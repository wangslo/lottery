<template>
  <div>
    <div class="container" v-show="haveTool">
      <div class="inputDiv" @click="inputComment">快去发表伟大言论吧！</div>
      <div class="operator" v-show="haveTool">
        <div class="relay" :style="relay" @click="goToDetail"></div>
        <div class="collect" :style="collect"></div>
        <div class="share" :style="share"></div>
      </div>
    </div>
    <div class="container" v-show="!haveTool">
      <div class="inputDiv inputDiv2" @click="inputComment">快去发表伟大言论吧！</div>
      <div class="operator2" @click="inputComment">发表</div>
    </div>
    <div v-show="isComment" class="pannel">
      <input-and-emoji :showPannel="showPannel"></input-and-emoji>
    </div>
  </div>
</template>
<script>
  import {tools} from '../../../static/outImg'
  import InputAndEmoji from './inputAndEmoji'

  export default {
    name: 'CommentBottom',
    props: ['haveTool'],
    data() {
      return {
        tools: tools,
        isComment: false,
        showPannel: true
      }
    },
    components:{
      "input-and-emoji": InputAndEmoji
    },
    created() {
      this.relay = {
        backgroundImage: "url(" + this.tools[1] + ")",
      }
      this.collect = {
        backgroundImage: "url(" + this.tools[4] + ")",
      }
      this.share = {
        backgroundImage: "url(" + this.tools[0] + ")",
      }
    },
    methods: {
      inputComment() {
        this.isComment = true
        if(this.showPannel){
          this.showPannel = false
        }else{
          this.showPannel = true
        }
      },
      goToDetail() {
        this.$router.push({
          name: 'CommentDetail',
          params: {
            id: 2
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
  }
  .inputDiv{
    width: 450px;
    height: 80px;
    float: left;
    text-align: center;
    line-height: 80px;
    background: gray;
    border-radius: 40px;
    margin-left: 20px;
  }
  .operator{
    width: 250px;
    height: 80px;
    position: relative;
    float: right;
    div{
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      float: left;
      background-repeat: no-repeat;
      background-size: 60px;
      background-position: center;
    }
  }
  .inputDiv2{
    width: 620px;
  }
  .operator2{
    width: 100px;
    height: 80px;
    position: relative;
    float: right;
    text-align: center;
    line-height: 80px;
  }
</style>
