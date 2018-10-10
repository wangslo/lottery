<template>
  <div class="header">
    <div class="left-back" id="close" @click="back"><span>返回</span></div>
    <div class="center">
      <span class="left_title">{{leftTitle}}</span>
      <span v-show="leftTitle2" class="left_title2">{{leftTitle2}}</span>
    </div>
    <span class="right" @click="goToPage" :style="isforbidden">{{rightTitle}}</span>
  </div>
</template>
<script>
  export default {
    name: 'AppHeader',
    props: ["leftTitle","leftTitle2","rightTitle",'isforbidden'],
    data(){
      return {
      }
    },
    methods:{
      back(){
        this.$parent.returnPage()
      },
      goToPage(){
        this.$parent.goToPage()
      },
    }
  }
</script>
