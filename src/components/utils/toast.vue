<template>
  <div class="container">
    <div class="pannel">
      <div class="top-part">
        <span>{{text}}</span>
        <span>{{text2}}</span>
      </div>
      <div class="bottom-part" v-if="isConfirm">
        <div class="left" @click="doCancel">{{leftText}}</div>
        <div class="right" @click="doNext">{{rightText}}</div>
      </div>
      <div class="bottom-part" v-else>
        <div class="right2" @click="doPrompt">{{rightText2}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'toast',
    props: ['isConfirm','text','text2','leftText','rightText','rightText2'],
    data() {
      return {
        /*isConfirm: false,
        text: '提交成功，',
        text2: '非常感谢你提出的意见！',
        leftText: '',
        rightText: '',
        rightText2: '确认',*/
      }
    },
    methods:{
      doCancel(){
        this.$parent.doCancel()
      },
      doNext(){
        this.$parent.doNext()
      },
      doPrompt(){
        this.$parent.doPrompt()
      },
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .pannel{
    width: 500px;
    height: 300px;
    margin: 400px auto;
    background: #ffffff;
    border: 1px solid;
    border-radius: 10px;
    .top-part{
      text-align: center;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .bottom-part{
      height: 100px;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      div{
        width: 100px;
        height: 50px;
        color: #ffffff;
        line-height: 50px;
        text-align: center;
        margin-top: 25px;
      }
      .left{
        background: #686868;
      }
      .right,.right2{
        background: red;
      }
      .right2{
        width: 300px;
        border-radius: 10px;
      }
    }
  }
</style>
