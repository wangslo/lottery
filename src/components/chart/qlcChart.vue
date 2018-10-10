<template>
  <div class="chart-container">
    <div class="wrap">
      <div class="trend" id="trendBox">
        <table class="chartTable" id="chartBody">
          <thead>
            <tr>
              <th width="100" id="imgSort" rowspan="2"><strong>期号</strong></th>
              <th class="bd"></th>
              <th class="w22">01</th>
              <th class="w22">02</th>
              <th class="w22">03</th>
              <th class="w22">04</th>
              <th class="w22">05</th>
              <th class="w22">06</th>
              <th class="w22">07</th>
              <th class="w22">08</th>
              <th class="w22">09</th>
              <th class="w22">10</th>
              <th class="bd"></th>
              <th class="w22">11</th>
              <th class="w22">12</th>
              <th class="w22">13</th>
              <th class="w22">14</th>
              <th class="w22">15</th>
              <th class="w22">16</th>
              <th class="w22">17</th>
              <th class="w22">18</th>
              <th class="w22">19</th>
              <th class="w22">20</th>
              <th class="bd"></th>
              <th class="w22">21</th>
              <th class="w22">22</th>
              <th class="w22">23</th>
              <th class="w22">24</th>
              <th class="w22">25</th>
              <th class="w22">26</th>
              <th class="w22">27</th>
              <th class="w22">28</th>
              <th class="w22">29</th>
              <th class="w22">30</th>
            </tr>
          </thead>
          <tbody id="chartData">
            <tr v-for="(data,idx) in datas" :key="idx">
              <td>{{data.date}}</td>
              <td :kjhm="data.date" class="bd"></td>
              <td v-for="(onelist,idx) in data.one_list" :key="'one-'+idx"
                  :class="onelist.class">
                {{onelist.num}}
              </td>
              <td class="bd"></td>
              <td v-for="(twolist,idx) in data.two_list" :key="'two-'+idx"
                  :class="twolist.class">
                {{twolist.num}}
              </td>
              <td class="bd"></td>
              <td v-for="(three_list,idx) in data.three_list" :key="'three-'+idx"
                  :class="three_list.class">
                {{three_list.num}}
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
            <th width="100"><strong>统计类型</strong></th>
            <th class="bd"></th>
            <th class="w22">01</th>
            <th class="w22">02</th>
            <th class="w22">03</th>
            <th class="w22">04</th>
            <th class="w22">05</th>
            <th class="w22">06</th>
            <th class="w22">07</th>
            <th class="w22">08</th>
            <th class="w22">09</th>
            <th class="w22">10</th>
            <th class="bd"></th>
            <th class="w22">11</th>
            <th class="w22">12</th>
            <th class="w22">13</th>
            <th class="w22">14</th>
            <th class="w22">15</th>
            <th class="w22">16</th>
            <th class="w22">17</th>
            <th class="w22">18</th>
            <th class="w22">19</th>
            <th class="w22">20</th>
            <th class="bd"></th>
            <th class="w22">21</th>
            <th class="w22">22</th>
            <th class="w22">23</th>
            <th class="w22">24</th>
            <th class="w22">25</th>
            <th class="w22">26</th>
            <th class="w22">27</th>
            <th class="w22">28</th>
            <th class="w22">29</th>
            <th class="w22">30</th>
          </tr>
          </thead>
          <tbody id="currentData" style="">
          <tr>
            <td class="" title='出现总次数' width="120px">出现总次数</td>
            <td class="bd"></td>
            <td v-for="(allCount,idx) in one_all.all_count" :key="'one-all-count-'+idx">
              {{allCount}}
            </td>
            <td class="bd"></td>
            <td v-for="(allCount,idx) in two_all.all_count" :key="'two-all-count-'+idx">
              {{allCount}}
            </td>
            <td class="bd"></td>
            <td v-for="(allCount,idx) in threes_all.all_count" :key="'threes-all-count-'+idx">
              {{allCount}}
            </td>
          </tr>
          <tr>
            <td class="" title='平均遗漏值'>平均遗漏值</td>
            <td class="bd"></td>
            <td v-for="(averageOmission,idx) in one_all.average_omission" :key="'one-averageOmission-'+idx">
              {{averageOmission}}
            </td>
            <td class="bd"></td>
            <td v-for="(averageOmission,idx) in two_all.average_omission" :key="'two-averageOmission-'+idx">
              {{averageOmission}}
            </td>
            <td class="bd"></td>
            <td v-for="(averageOmission,idx) in threes_all.average_omission" :key="'threes-averageOmission-'+idx">
              {{averageOmission}}
            </td>
          </tr>
          <tr>
            <td class="" title='最大遗漏值'>最大遗漏值</td>
            <td class="bd"></td>
            <td v-for="(maxOmission,idx) in one_all.max_omission" :key="'one-maxOmission-'+idx">
              {{maxOmission}}
            </td>
            <td class="bd"></td>
            <td v-for="(maxOmission,idx) in two_all.max_omission" :key="'two-maxOmission-'+idx">
              {{maxOmission}}
            </td>
            <td class="bd"></td>
            <td v-for="(maxOmission,idx) in threes_all.max_omission" :key="'threes-maxOmission-'+idx">
              {{maxOmission}}
            </td>
          </tr>
          <tr>
            <td class="" title='最大连出值'>最大连出值</td>
            <td class="bd"></td>
            <td v-for="(maxConnect,idx) in one_all.max_connect" :key="'one-maxConnect-'+idx">
              {{maxConnect}}
            </td>
            <td class="bd"></td>
            <td v-for="(maxConnect,idx) in two_all.max_connect" :key="'two-maxConnect-'+idx">
              {{maxConnect}}
            </td>
            <td class="bd"></td>
            <td v-for="(maxConnect,idx) in threes_all.max_connect" :key="'threes-maxConnect-'+idx">
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
    name: 'QlcChart',
    data() {
      return {
        datas: [],
        one_all: [],
        two_all: [],
        threes_all: [],
        LOADING: false
      }
    },
    components:{
      loading
    },
    created(){
      this.getqlcData()
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
      async getqlcData(){
        var _this = this
        this.LOADING = true
        await orgModuleApi.getqlcData().then(res => {
          if (res.code == "0") {
            _this.datas = res.data.list
            _this.one_all = res.data.one_all
            _this.two_all = res.data.two_all
            _this.threes_all = res.data.three_all
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
