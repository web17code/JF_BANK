<style scoped>
  /**
  * Created by web17code
  * 管理员的首页
  */
  .chartContet{
    width: 49%;
    margin-top: 20px;
    float: left;
    border:1px solid #ddd;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  .chartContet:nth-of-type(odd){
    margin-left: 2%;
  }
</style>
<template>
  <div style="overflow: hidden">
    <Row class="headerRow">
      <Col span="8" class="indexHeaderLeft">
      <div style="overflow: hidden">
        <div class="indexAvatar">
          <img :src="indexInfo.avatarUrl" alt="头像">
        </div>
        <div class="indexInfo">
          <p class="info_name">{{indexInfo.XM}}</p>
          <p class="info_role">{{indexInfo.role}}</p>
        </div>
      </div>
      <!--<div class="indexTotal"><span>{{indexInfo.balance}}&nbsp;</span>金币</div>-->
      </Col>
      <Col span="9" class="indexHeaderRight">
      <router-link
        :to="{path:'/PutOnList',query:{adminName:indexInfo.USERNAME}}">
        <Button type="ghost" style="width:80px;">投放</Button>
      </router-link>
      <router-link :to="{path:'/PutOnDetail',query:{Id:indexInfo.relationId}}">
        <Button type="ghost" style="width:80px;margin-left: 15px;">投放明细</Button>
      </router-link>
      </Col>
    </Row>
    <div class="chartContet" style="margin-top: 30px;">
      <Chart_Block ref="AdminIndex_pie_1"
                   style="float: left;width: 100%;"
                   id="AdminIndex_pie_1"
                   :option="AdminIndex_pie_1"
                   :total="totalMoney"
                   :getchartUrl="Url_getAllChartTotal"
                   :paramsData="paramsData"></Chart_Block>
    </div>
    <div class="chartContet" style="margin-top: 30px;">
      <Chart_Block ref="AdminIndex_pie_2"
                   style="float: left;width: 100%;"
                   id="AdminIndex_pie_2"
                   :option="AdminIndex_pie_2"
                   :getchartUrl="Url_getTeacherTotal"
                   :paramsData="paramsData"></Chart_Block>
    </div>
    <div class="chartContet" style="margin-top: 30px;">
      <Chart_Block ref="AdminIndex_pie_3"
                   style="float: left;width: 100%;"
                   id="AdminIndex_pie_3"
                   :option="AdminIndex_pie_3"
                   :getchartUrl="Url_getAppTotal"
                   :paramsData="paramsData"></Chart_Block>
    </div>
    <div class="chartContet" style="margin-top: 30px;">
      <Chart_Block ref="AdminIndex_pie_4"
                   style="float: left;width: 100%;"
                   id="AdminIndex_pie_4"
                   :option="AdminIndex_pie_4"
                   :getchartUrl="Url_getStudentTotal"
                   :paramsData="paramsData"></Chart_Block>
    </div>
    <!--<div class="chartContet" style="margin-top: 30px;">-->

    <!--</div>-->
    <!--<div class="chartContet">-->

    <!--</div>-->
    <!--<div class="chartContet">-->

    <!--</div>-->
    <!--<div class="chartContet">-->

    <!--</div>-->
  </div>
</template>

<script>
  import options from "../config/highcharts.config.js"//表格基本配置
  import Chart_Block from  "../components/Chart_Block.vue"
  export default {
    data: function () {
      return {
        Url_getIndexInfo: "money/account",//有用，获取首页的信息
        AdminIndex_pie_1: this.utils.deepCopy(options.pie),
        AdminIndex_pie_2: this.utils.deepCopy(options.pie),
        AdminIndex_pie_3: this.utils.deepCopy(options.pie),
        AdminIndex_pie_4: this.utils.deepCopy(options.pie),
        Url_getAllChartTotal:window.getHost + "money/spreadList",//总资产图标接口
        Url_getTeacherTotal:window.getHost + "money/teacher/gradeSum",//教师图表接口
        Url_getAppTotal:window.getHost + "money/appList",//应用图表接口
        Url_getStudentTotal:window.getHost + "money/student/gradeSum",//学生图表接口
        indexInfo: {},
        paramsData:{},
        Url_getAllTotal:"money/spreadTotal",
        totalMoney:""
      }
    },
    props: {},
    methods: {},
    created: function () {
      var that = this;
      /*this.$http.post(window.getHost + that.Url_getAllTotal,{},
        {emulateJSON: true}).then(function (data) {
        that.totalMoney = data.data.data.total;
      })*/
      this.$http.post(window.getHost + that.Url_getIndexInfo, {},
        {emulateJSON: true}).then(function (data) {
        that.indexInfo = data.data.data;
        that.indexInfo.avatarUrl = window.getHost + "static/img/head-man.png"
        if (data.data.data.XBM == "2") {
          that.indexInfo.avatarUrl = window.getHost + "static/img/head-woman.png.png"
        }
        switch (data.data.data.type) {
          case "-1" :
            that.indexInfo.role = "管理员";
            break;
          case "0" :
            that.indexInfo.role = "应用";
            break;
          case "1" :
            that.indexInfo.role = "教师";
            break;
          case "2" :
            that.indexInfo.role = "学生";
            break;
        }
      })
    },
    components: {
      Chart_Block:Chart_Block
    }
  }
</script>
