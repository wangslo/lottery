<template>
  <div class="pannel" v-show="show">
    <div class="fade" @click="hiddenPannel"></div>
    <div class="input-pannel">
      <div class="textArea" contenteditable id="inputDiv" @input="numChange">
      </div>
      <span class="num">{{num}}/400</span>
      <div class="pannel-box">
        <div class="icon-face" :style="iconFace" @click="showEmoji"></div>
        <div class="publish" @click="submitComment">发表</div>
        <div class="emoji-box" v-show="isEmoji">
          <app-emoji @select="selectEmoji"></app-emoji>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {tools} from '../../../static/outImg'
  import Emoji from './emoji'
  import {emoji} from "../../utils/emoji";

  export default {
    name: 'InputAndEmoji',
    props: ['showPannel'],
    data() {
      return {
        tools:tools,
        isEmoji: false,
        num:0,
        show: this.showPannel,
        text: ''
      }
    },
    components: {
      'app-emoji': Emoji
    },
    created() {
      this.iconFace = {
        backgroundImage: "url(" + this.tools[5] + ")",
      }
    },
    watch: {
      showPannel: function (newVal, oldVal) {
        this.show = true;
      }
    },
    methods:{
      showEmoji() {
        if (!this.isEmoji) {
          this.isEmoji = true
        }else {
          this.isEmoji = false
        }
      },
      selectEmoji (code) {
        inputDiv.innerHTML += emoji(code)
      },
      submitComment(){
        var inputDiv = document.getElementById('inputDiv')
        this.show = false
      },
      numChange() {
        var inputDiv = document.getElementById('inputDiv')
        if(inputDiv.innerText.length > 400){
          this.num = 400
        }else{
          this.num = inputDiv.innerText.length;
        }

        if(inputDiv.innerText.length == 400){
          this.text = inputDiv.innerHTML;
        }
        if(inputDiv.innerText.length > 400){
          inputDiv.innerHTML = this.text
        }
      },
      hiddenPannel(){
        this.show = false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .pannel{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(0,0,0,.6);
    .fade{
      width: 100%;
      height: 100%;
    }
    .input-pannel {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 300px;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 99;
      background: #ffffff;
      .textArea{
        width: 80%;
        height: 60%;
        margin: 0 auto;
        border: 1px solid black;
        text-align: left;
        overflow: scroll;
      }
      .pannel-box{
        width: 100%;
        height: 25%;
        margin: 0 auto;
        .icon-face{
          width: 40px;
          height: 40px;
          margin-top: 10px;
          float: left;
          margin-left: 10%;
        }
        .publish{
          width: 100px;
          height: 40px;
          float: right;
          margin-top: 10px;
          text-align: center;
          line-height: 40px;
          background: grey;
          margin-right: 10%;
        }
      }
      .emoji-box{
        padding-top: 40px;
      }
      .num{
        margin-top: -40px;
        display: block;
        margin-bottom: 40px;
        width: 80%;
        text-align: right;
        margin-left: 9%;
      }
    }
  }
</style>
