<style scoped>
  .chatBaseStyle {
    height: 280px;
    /*padding-left: 5px;*/
    /*padding-right: 5px;*/
    /*padding-bottom: 5px;*/
    /*padding-top: 20px;*/
    /*background: #fff;*/
    /*border: 1px solid #d1dbe5;*/
    /*border-top: none;*/
  }
  .chartBlock {
    padding: 0px 15px;
  }
  .chartBlockTitle {
    height:40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    color: #333;
  }
  .chartBlockTitle_txt{
    font-weight: bold;
    font-size: 16px;
  }
/*  {
    position: relative;
    top: -3px;
  }*/
</style>

<template>
  <div class="chartBlock">
    <div class="chartBlockTitle">
      <span class="chartBlockTitle_txt">{{title}}</span>
      <DatePicker type="date"
                  placement="bottom-end"
                  @on-change="refreshChartByTime"
                  placeholder="选择日期"
                  style="width: 110px;float: right;position: relative;top:7px;"
                  size="small"></DatePicker>
    </div>
    <div :id="id" :option="option" class="chatBaseStyle"></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts';//引入图表库
  import dataProcess from '../utils/dataProcess.js';//引入后台数据处理方法
  export default{
    name: 'chatbase',
    data:function(){
        return {
            title:"总资产"
        }
    },
    props: {
      id: {//图标的id
        type: String
      },
      paramsData: {
        type: Object,
        default: {}
      },
      option: {//图表的基本配置
        type: Object
      },
      getchartUrl: {//图表数据请求路径
        type: String,
        default: ""
      }
    },
    mounted: function () {
      this.refreshChart();
    },
    methods: {
      refreshChart: function () {
        var that = this;
        if (that.getchartUrl != "") {
          this.$http.post(that.getchartUrl, that.paramsData,
            {emulateJSON: true}).then(function (data) {
            //处理数据
            var data = data.data.data;
            var worked = dataProcess[that.id](data, that.option, that.$route);
            that.title = worked.outTitle;
            new Highcharts.chart(that.id, worked);
          })
        }
      },
      refreshChartByTime:function(e){
        var that = this;
        console.log(e)
        that.paramsData.lessTime = e;
        var that = this;
        if (that.getchartUrl != "") {
          this.$http.post(that.getchartUrl, that.paramsData,
            {emulateJSON: true}).then(function (data) {
            //处理数据
            console.log(data)
            var data = data.data.data;
            var worked = dataProcess[that.id](data, that.option, that.$route);
            that.title = worked.outTitle;
            new Highcharts.chart(that.id, worked);
          })
        }
      }
    }
  }
</script>
