<template>
  <div class="commentContainer" :class="{twoStyle: !isShowComment}">
    <div class="shareNum" :style="note">
      <span>{{shareNum}}</span>
    </div>
    <div v-show="isShowComment" class="commentNum" :style="note2" @click="goToDetail(id)">
      <span>{{commentNum}}</span>
    </div>
    <div class="goodNum" :style="note3" @click="thumbUp">
      <span>{{goodNum}}</span>
    </div>
  </div>
</template>
<script>
  import {
    orgModuleApi
  } from '@/api/main'
  import {
    setinfo
  } from '@/api/lotteryApi'
  import {tools} from '../../../static/outImg'

  export default {
    name: 'CommentTool',
    props: ['id',"isShowComment"],
    data() {
      return {
        shareNum: 0,
        commentNum: 0,
        goodNum: 0,
        tools: tools,
        note: {},
        note2: {},
        note3: {},
        goodStatus: false,
      }
    },
    watch: {
      id: function (newVal, oldVal) {
        console.log(newVal)
      }
    },
    created(){
      this.initData()
      console.log(">>>" + this.id)
    },
    methods: {
      initData(){
        this.shareNum = 20
        this.commentNum = 20
        this.goodNum = 20
        this.note = {
          backgroundImage: "url(" + this.tools[0] + ")",
        }
        this.note2 = {
          backgroundImage: "url(" + this.tools[1] + ")",
        }
        this.note3 = {
          backgroundImage: "url(" + this.tools[2] + ")",
        }
      },
      thumbUp() {
        if(this.$store.getters.user == ''){
          if(confirm("需要登录")){
            this.$router.push({
              name: 'Login',
            })
          }
        }else {
          if(!this.goodStatus){
            this.note3 = {
              backgroundImage: "url(" + this.tools[3] + ")",
            }
            this.goodStatus = true
          }else {
            this.note3 = {
              backgroundImage: "url(" + this.tools[2] + ")",
            }
            this.goodStatus = false
          }
          var params = {}
          orgModuleApi.setinfo(params).then(res => {
            console.log(res)
            if (res.code == "0") {
              console.log("thumb")
            }
          })
        }
      },
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
<style lang="scss">
  .commentContainer{
    display: flex;
    justify-content: space-around;
    height: 100px;
    margin-top: 20px;
    div{
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-repeat: no-repeat;
      background-size: 30px;
      background-position: left;
    }
  }
  .twoStyle{
    display: block;
    div{
      float: left;
      margin-left: 183px;
    }
  }
</style>
