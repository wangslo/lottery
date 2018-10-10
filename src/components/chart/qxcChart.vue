<template>
  <div class="chart-container">
    <div class="wrap">
      <div class="trend" id="trendBox">
        <table class="chartTable" id="chartBody">
          <thead>
            <tr>
              <th width="70" id="imgSort" rowspan="2"><strong>期号</strong></th>
              <th rowspan="2" class="bd"></th>
              <th rowspan="2">开奖号码</th>
              <th rowspan="2" class="bd"></th>
              <th colspan="10" width="209">第一位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">第二位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">第三位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">第四位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">第五位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">第六位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">第七位</th>
            </tr>
            <tr>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
            </tr>
          </thead>
          <tbody id="chartData">
            <tr v-for="(data,idx) in datas" :key="idx">
              <td>{{data.date}}</td>
              <td :kjhm="data.date" class="bd"></td>
              <td class="c_ba2636">{{data.award}}</td>
              <td class="bd"></td>
              <td v-for="(one_list,idx) in data.one_list" :key="'one-'+idx"
                  :class="one_list.class">
                {{one_list.num}}
              </td>
              <td class="bd"></td>
              <td v-for="(two_list,idx) in data.two_list" :key="'two-'+idx"
                  :class="two_list.class">
                {{two_list.num}}
              </td>
              <td class="bd"></td>
              <td v-for="(three_list,idx) in data.three_list" :key="'three-'+idx"
                  :class="three_list.class">
                {{three_list.num}}
              </td>
              <td class="bd"></td>
              <td v-for="(four_list,idx) in data.four_list" :key="'four-'+idx"
                  :class="four_list.class">
                {{four_list.num}}
              </td>
              <td class="bd"></td>
              <td v-for="(five_list,idx) in data.five_list" :key="'five-'+idx"
                  :class="five_list.class">
                {{five_list.num}}
              </td>
              <td class="bd"></td>
              <td v-for="(six_list,idx) in data.six_list" :key="'six-'+idx"
                  :class="six_list.class">
                {{six_list.num}}
              </td>
              <td class="bd"></td>
              <td v-for="(seven_list,idx) in data.seven_list" :key="'seven-'+idx"
                  :class="seven_list.class">
                {{seven_list.num}}
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
              <th colspan="10" width="209">第一位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">第二位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">第三位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">第四位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">第五位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">第六位</th>
              <th class="bd" rowspan="2"></th>
              <th colspan="10" width="209">第七位</th>
            </tr>
            <tr>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
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
              <td class="bd"></td>
              <td v-for="(allCount,idx) in four_all.all_count" :key="'four-all-count-'+idx">
                {{allCount}}
              </td>
              <td class="bd"></td>
              <td v-for="(allCount,idx) in five_all.all_count" :key="'five-all-count-'+idx">
                {{allCount}}
              </td>
              <td class="bd"></td>
              <td v-for="(allCount,idx) in six_all.all_count" :key="'sxi-all-count-'+idx">
                {{allCount}}
              </td>
              <td class="bd"></td>
              <td v-for="(allCount,idx) in seven_all.all_count" :key="'seven-all-count-'+idx">
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
              <td class="bd"></td>
              <td v-for="(averageOmission,idx) in four_all.average_omission" :key="'four-averageOmission-'+idx">
                {{averageOmission}}
              </td>
              <td class="bd"></td>
              <td v-for="(averageOmission,idx) in five_all.average_omission" :key="'five-averageOmission-'+idx">
                {{averageOmission}}
              </td>
              <td class="bd"></td>
              <td v-for="(averageOmission,idx) in six_all.average_omission" :key="'sxi-averageOmission-'+idx">
                {{averageOmission}}
              </td>
              <td class="bd"></td>
              <td v-for="(averageOmission,idx) in seven_all.average_omission" :key="'seven-averageOmission-'+idx">
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
              <td class="bd"></td>
              <td v-for="(maxOmission,idx) in four_all.max_omission" :key="'four-maxOmission-'+idx">
                {{maxOmission}}
              </td>
              <td class="bd"></td>
              <td v-for="(maxOmission,idx) in five_all.max_omission" :key="'five-maxOmission-'+idx">
                {{maxOmission}}
              </td>
              <td class="bd"></td>
              <td v-for="(maxOmission,idx) in six_all.max_omission" :key="'sxi-maxOmission-'+idx">
                {{maxOmission}}
              </td>
              <td class="bd"></td>
              <td v-for="(maxOmission,idx) in seven_all.max_omission" :key="'seven-maxOmission-'+idx">
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
              <td class="bd"></td>
              <td v-for="(maxConnect,idx) in four_all.max_connect" :key="'four-maxConnect-'+idx">
                {{maxConnect}}
              </td>
              <td class="bd"></td>
              <td v-for="(maxConnect,idx) in five_all.max_connect" :key="'five-maxConnect-'+idx">
                {{maxConnect}}
              </td>
              <td class="bd"></td>
              <td v-for="(maxConnect,idx) in six_all.max_connect" :key="'sxi-maxConnect-'+idx">
                {{maxConnect}}
              </td>
              <td class="bd"></td>
              <td v-for="(maxConnect,idx) in seven_all.max_connect" :key="'seven-maxConnect-'+idx">
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
    name: 'QxcChart',
    data() {
      return {
        datas: [],
        one_all: [],
        two_all: [],
        threes_all: [],
        four_all: [],
        five_all: [],
        six_all: [],
        seven_all: [],
        LOADING: false
      }
    },
    components:{
      loading
    },
    created(){
      this.getqxcData()
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
      async getqxcData(){
        var _this = this
        this.LOADING = true
        await orgModuleApi.getqxcData().then(res => {
          if (res.code == "0") {
            _this.datas = res.data.list
            _this.one_all = res.data.one_all
            _this.two_all = res.data.two_all
            _this.threes_all = res.data.threes_all
            _this.four_all = res.data.four_all
            _this.five_all = res.data.five_all
            _this.six_all = res.data.six_all
            _this.seven_all = res.data.seven_all
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
