<template>
  <div class="chart-container">
    <div class="wrap">
      <div class="trend" id="trendBox">
        <table class="chartTable" id="chartBody">
          <thead>
            <tr>
              <th width="70" id="imgSort" class="sort_top" rowspan="2"><strong>期号</strong></th>
              <th rowspan="2" class="bd"></th>
              <th colspan="10" width="209">百位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">十位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">个位</th>
            </tr>
            <tr>
              <th class="w20">0</th>
              <th class="w20">1</th>
              <th class="w20">2</th>
              <th class="w20">3</th>
              <th class="w20">4</th>
              <th class="w20">5</th>
              <th class="w20">6</th>
              <th class="w20">7</th>
              <th class="w20">8</th>
              <th class="w20">9</th>
              <th class="w20">0</th>
              <th class="w20">1</th>
              <th class="w20">2</th>
              <th class="w20">3</th>
              <th class="w20">4</th>
              <th class="w20">5</th>
              <th class="w20">6</th>
              <th class="w20">7</th>
              <th class="w20">8</th>
              <th class="w20">9</th>
              <th class="w20">0</th>
              <th class="w20">1</th>
              <th class="w20">2</th>
              <th class="w20">3</th>
              <th class="w20">4</th>
              <th class="w20">5</th>
              <th class="w20">6</th>
              <th class="w20">7</th>
              <th class="w20">8</th>
              <th class="w20">9</th>
            </tr>
          </thead>
          <tbody id="chartData">
            <tr v-for="(data,idx) in datas" :key="idx">
              <td>{{data.date}}</td>
              <td class="bd"></td>
              <td v-for="(hundredsList,idx) in data.hundreds_list" :key="'hundreds-'+idx"
                  :class="hundredsList.class">
                {{hundredsList.num}}
              </td>
              <td class="bd"></td>
              <td v-for="(tens_list,idx) in data.tens_list" :key="'tens-'+idx"
                  :class="tens_list.class">
                {{tens_list.num}}
              </td>
              <td class="bd"></td>
              <td v-for="(ones_list,idx) in data.ones_list" :key="'one-'+idx"
                  :class="ones_list.class">
                {{ones_list.num}}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="dataAnalysisBox">
          <strong>数据分析</strong>
        </div>
        <!--数据统计部分 beign-->
        <table class="staticTable">
          <thead>
          <tr>
            <th rowspan="2"><strong>统计类型</strong></th>
            <th rowspan="2" class="bd"></th>
            <th colspan="10" width="209">百位</th>
            <th class="bd" rowspan="2"></th>
            <th colspan="10" width="209">十位</th>
            <th class="bd" rowspan="2"></th>
            <th colspan="10" width="209">个位</th>
          </tr>
          <tr>
            <th class="w20">0</th>
            <th class="w20">1</th>
            <th class="w20">2</th>
            <th class="w20">3</th>
            <th class="w20">4</th>
            <th class="w20">5</th>
            <th class="w20">6</th>
            <th class="w20">7</th>
            <th class="w20">8</th>
            <th class="w20">9</th>
            <th class="w20">0</th>
            <th class="w20">1</th>
            <th class="w20">2</th>
            <th class="w20">3</th>
            <th class="w20">4</th>
            <th class="w20">5</th>
            <th class="w20">6</th>
            <th class="w20">7</th>
            <th class="w20">8</th>
            <th class="w20">9</th>
            <th class="w20">0</th>
            <th class="w20">1</th>
            <th class="w20">2</th>
            <th class="w20">3</th>
            <th class="w20">4</th>
            <th class="w20">5</th>
            <th class="w20">6</th>
            <th class="w20">7</th>
            <th class="w20">8</th>
            <th class="w20">9</th>
          </tr>
          </thead>
          <tbody id="currentData" style="">
          <tr>
            <td class="" title='出现总次数' width="120px">出现总次数</td>
            <td class="bd"></td>
            <td v-for="(allCount,idx) in hundreds_all.all_count" :key="'one-all-count-'+idx">
              {{allCount}}
            </td>
            <td class="bd"></td>
            <td v-for="(allCount,idx) in tens_all.all_count" :key="'two-all-count-'+idx">
              {{allCount}}
            </td>
            <td class="bd"></td>
            <td v-for="(allCount,idx) in ones_all.all_count" :key="'threes-all-count-'+idx">
              {{allCount}}
            </td>
          </tr>
          <tr>
            <td class="" title='平均遗漏值'>平均遗漏值</td>
            <td class="bd"></td>
            <td v-for="(averageOmission,idx) in hundreds_all.average_omission" :key="'one-averageOmission-'+idx">
              {{averageOmission}}
            </td>
            <td class="bd"></td>
            <td v-for="(averageOmission,idx) in tens_all.average_omission" :key="'two-averageOmission-'+idx">
              {{averageOmission}}
            </td>
            <td class="bd"></td>
            <td v-for="(averageOmission,idx) in ones_all.average_omission" :key="'threes-averageOmission-'+idx">
              {{averageOmission}}
            </td>
          </tr>
          <tr>
            <td class="" title='最大遗漏值'>最大遗漏值</td>
            <td class="bd"></td>
            <td v-for="(maxOmission,idx) in hundreds_all.max_omission" :key="'one-maxOmission-'+idx">
              {{maxOmission}}
            </td>
            <td class="bd"></td>
            <td v-for="(maxOmission,idx) in tens_all.max_omission" :key="'two-maxOmission-'+idx">
              {{maxOmission}}
            </td>
            <td class="bd"></td>
            <td v-for="(maxOmission,idx) in ones_all.max_omission" :key="'threes-maxOmission-'+idx">
              {{maxOmission}}
            </td>
          </tr>
          <tr>
            <td class="" title='最大连出值'>最大连出值</td>
            <td class="bd"></td>
            <td v-for="(maxConnect,idx) in hundreds_all.max_connect" :key="'one-maxConnect-'+idx">
              {{maxConnect}}
            </td>
            <td class="bd"></td>
            <td v-for="(maxConnect,idx) in tens_all.max_connect" :key="'two-maxConnect-'+idx">
              {{maxConnect}}
            </td>
            <td class="bd"></td>
            <td v-for="(maxConnect,idx) in ones_all.max_connect" :key="'threes-maxConnect-'+idx">
              {{maxConnect}}
            </td>
          </tr>
          </tbody>
        </table>
        <!--数据统计部分 end-->
      </div>
      <!--画线及相关 begin-->
      <div id="chartLine">
      </div>
      <!--画线及相关 end-->
    </div>
    <loading v-if='LOADING'/>
  </div>
</template>
<script>
  import {orgModuleApi} from '@/api/main'
  import loading from '../utils/loading'

  export default {
    name: 'PlsChart',
    data() {
      return {
        datas: [],
        ones_all: [],
        tens_all: [],
        hundreds_all: [],
        LOADING: false
      }
    },
    components:{
      loading
    },
    created(){
      this.getplsData()
    },
    watch:{
      datas: function() {
        var _this = this
        this.$nextTick(function(){
          _this.trendInit()
        })
      }
    },
    methods:{
      async getplsData(){
        var _this = this
        this.LOADING = true
        await orgModuleApi.getplsData().then(res => {
          if (res.code == "0") {
            _this.datas = res.data.list
            _this.ones_all = res.data.ones_all
            _this.tens_all = res.data.tens_all
            _this.hundreds_all = res.data.hundreds_all
          }
        }).then(res => {
          this.LOADING = false
        }).catch(err => {
          $('.wrap').html('网络异常，暂无数据')
        })
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/charts.css";
  .chart-container{
    position: absolute;
    width: 750px;
    height: 1238px;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    .wrap{
      position: absolute; top: 0; left: 0;
    }
  }
</style>
