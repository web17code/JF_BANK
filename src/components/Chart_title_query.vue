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
</style>

<template>
  <div class="chatsConent Sshadow">
    <div :id="id" :option="option" class="chatBaseStyle"></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts';//引入图表库
  import dataProcess from '../utils/dataProcess.js';//引入后台数据处理方法
  export default{
    name: 'chatbase',
    props: {
      id: {//图标的id
        type: String
      },
      paramsData:{
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
      console.log(this.getchartUrl)
      var that = this;
      if (this.getchartUrl != "") {
        this.$http.post(that.getchartUrl, that.paramsData,
          {emulateJSON: true}).then(function (data) {
          //处理数据
          console.log(data)
          var data = data.data.data;
          var worked = dataProcess[this.id](data, this.option, this.$route);
          new Highcharts.chart(this.id, worked);
        })
      }
    }
  }
</script>
