<template>
  <div class="container">
    <div class="header">
      <div class="left-back" id="close" @click="returnPage"><span>返回</span></div>
      <div class="center">
        <span v-for='(item,index) in items' @click="toggle(index)" :class='{active:index===number}'>{{item}}</span>
      </div>
      <span class="right" @click="goToPage">发布论坛</span>
    </div>
    <app-forum v-if="pageToggle" :forumInfos="forumInfos" :htmlStyle="htmlStyle" :isShowComment="isShowComment"></app-forum>
    <div v-else>
      <app-ssqchart v-if="chartType == 'ssq'"></app-ssqchart>
      <app-dltchart v-if="chartType == 'dlt'"></app-dltchart>
      <app-qlcchart v-if="chartType == 'qlc'"></app-qlcchart>
      <app-plschart v-if="chartType == 'pls'"></app-plschart>
      <app-plwchart v-if="chartType == 'plw'"></app-plwchart>
      <app-qxcchart v-if="chartType == 'qxc'"></app-qxcchart>
      <app-fc3dchart v-if="chartType == 'fc3d'"></app-fc3dchart>
    </div>
  </div>
</template>
<script>
  import {
    orgModuleApi
  } from '@/api/main'
  import {a, b, c, lotterys} from '../../../static/outImg'
  import Forum from '../forum'
  import SsqChart from '../chart/ssqChart'
  import DltChart from '../chart/dltChart'
  import QlcChart from '../chart/qlcChart'
  import PlsChart from '../chart/plsChart'
  import PlwChart from '../chart/plwChart'
  import QxcChart from '../chart/qxcChart'
  import Fc3dChart from '../chart/fc3dChart'

  export default {
    name: 'ForumList',
    data() {
      return {
        number: 0,
        items:['论坛','走势图'],
        forumInfos: [],
        htmlStyle: false,
        showlaoding: true,
        chartType: this.$route.params.type,
        pageNum: 1,
        pageSize: 10,
        isShowComment: true,
        pageToggle: true,
      }
    },
    components: {
      'app-forum': Forum,
      'app-ssqchart': SsqChart,
      'app-dltchart': DltChart,
      'app-qlcchart': QlcChart,
      'app-plschart': PlsChart,
      'app-plwchart': PlwChart,
      'app-qxcchart': QxcChart,
      'app-fc3dchart': Fc3dChart,
    },
    created() {
      window.scrollTo(0,0);
      // 注册scroll事件并监听
      window.addEventListener('scroll', () => {
        if(this.$route.name == 'ForumList'){
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
      toggle(index) {
        this.number= index;
        if(index == 0){
          this.pageToggle = true
        }else if(index == 1){
          this.pageToggle = false
        }
      },
      goToPage(){
        this.$router.push({
          name: 'ReleaseForums',
        })
      },
      returnPage(){
        this.$router.push({
          name: 'Index',
        })
      },
      queryList() {
        console.log(this.pageNum)
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
              forumImg: b,
              forumText: '双色球20180019期开奖预测！开奖结果及预告图如下：',
              id: 2
            },
            {
              headImg: lotterys[0].img,
              phone: '152****5212',
              sendTime: '2018-01-02 10:10',
              forumImg: c,
              forumText: '双色球20180019期开奖预测！开奖结果及预告图如下：',
              id: 3
            }
          ]
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
</style>
