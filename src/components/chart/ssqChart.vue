<template>
  <div class="chart-container">
    <div class="wrap">
      <div class="trend" id="trendBox">
        <table class="chartTable" id="chartBody">
          <thead>
          <tr>
            <th width="84" rowspan="2"><strong>期号</strong></th>
            <th colspan="11">一区</th>
            <th colspan="11">二区</th>
            <th colspan="11">三区</th>
            <th colspan="16">蓝球</th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
            <th>17</th>
            <th>18</th>
            <th>19</th>
            <th>20</th>
            <th>21</th>
            <th>22</th>
            <th>23</th>
            <th>24</th>
            <th>25</th>
            <th>26</th>
            <th>27</th>
            <th>28</th>
            <th>29</th>
            <th>30</th>
            <th>31</th>
            <th>32</th>
            <th>33</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
          </tr>
          </thead>
          <tbody id="chartData">
            <tr v-for="(data,idx) in datas" :key="idx">
              <td>{{data.date}}</td>
              <td v-for="(redlist,idx) in data.red_list" :key="'red-'+idx"
                  :class="redlist.class">
                {{redlist.num}}
              </td>
              <td v-for="(blue_list,idx) in data.blue_list" :key="'blue-'+idx"
                  :class="blue_list.class">
                {{blue_list.num}}
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
            <th width="84" rowspan="2"><strong>数据统计</strong></th>
            <th colspan="11">一区</th>
            <th colspan="11">二区</th>
            <th colspan="11">三区</th>
            <th colspan="16">蓝球</th>
          </tr>
          <tr>
            <th width="23">1</th>
            <th width="23">2</th>
            <th width="23">3</th>
            <th width="23">4</th>
            <th width="23">5</th>
            <th width="23">6</th>
            <th width="23">7</th>
            <th width="23">8</th>
            <th width="23">9</th>
            <th width="23">10</th>
            <th width="23">11</th>
            <th width="23">12</th>
            <th width="23">13</th>
            <th width="23">14</th>
            <th width="23">15</th>
            <th width="23">16</th>
            <th width="23">17</th>
            <th width="23">18</th>
            <th width="23">19</th>
            <th width="23">20</th>
            <th width="23">21</th>
            <th width="23">22</th>
            <th width="23">23</th>
            <th width="23">24</th>
            <th width="23">25</th>
            <th width="23">26</th>
            <th width="23">27</th>
            <th width="23">28</th>
            <th width="23">29</th>
            <th width="23">30</th>
            <th width="23">31</th>
            <th width="23">32</th>
            <th width="23">33</th>
            <th width="23">1</th>
            <th width="23">2</th>
            <th width="23">3</th>
            <th width="23">4</th>
            <th width="23">5</th>
            <th width="23">6</th>
            <th width="23">7</th>
            <th width="23">8</th>
            <th width="23">9</th>
            <th width="23">10</th>
            <th width="23">11</th>
            <th width="23">12</th>
            <th width="23">13</th>
            <th width="23">14</th>
            <th width="23">15</th>
            <th width="23">16</th>
          </tr>
          </thead>
          <tbody id="currentData" style="">
            <tr>
              <td class="" title='出现总次数' width="120px">出现总次数</td>
              <td v-for="(red_count,idx) in red_all.all_count" :key="'red-all-count-'+idx">
                {{red_count}}
              </td>
              <td v-for="(blue_count,idx) in blue_all.all_count" :key="'blue-all-count-'+idx">
                {{blue_count}}
              </td>
            </tr>
            <tr>
              <td class="" title='平均遗漏值'>平均遗漏值</td>
              <td v-for="(red_count,idx) in red_all.average_omission" :key="'red-average-omission-'+idx">
                {{red_count}}
              </td>
              <td v-for="(blue_count,idx) in blue_all.average_omission" :key="'blue-average-omission-'+idx">
                {{blue_count}}
              </td>
            </tr>
            <tr>
              <td class="" title='最大遗漏值'>最大遗漏值</td>
              <td v-for="(red_count,idx) in red_all.max_omission" :key="'red-max-omission-'+idx">
                {{red_count}}
              </td>
              <td v-for="(blue_count,idx) in blue_all.max_omission" :key="'blue-max-omission-'+idx">
                {{blue_count}}
              </td>
            </tr>
            <tr>
              <td class="" title='最大连出值'>最大连出值</td>
              <td v-for="(red_count,idx) in red_all.max_connect" :key="'red-max-connect-'+idx">
                {{red_count}}
              </td>
              <td v-for="(blue_count,idx) in blue_all.max_connect" :key="'blue-max-connect-'+idx">
                {{blue_count}}
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
    name: 'SsqChart',
    data() {
      return {
        datas: [],
        blue_all:[],
        red_all:[],
        LOADING: false
      }
    },
    components:{
      loading
    },
    created(){
      this.getssqData()
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
      async getssqData(){
        var _this = this
        this.LOADING = true
        await orgModuleApi.getssqData().then(res => {
          if (res.code == "0") {
            _this.datas = res.data.list
            _this.blue_all = res.data.blue_all
            _this.red_all = res.data.red_all
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
