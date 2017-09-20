<style scoped>
  /**
  * Created by web17code
  */
  .chartBlock {
    padding: 10px 20px;
    border: 1px solid #E9EAEC;
    overflow: hidden;
  }

  .chartBlockTitle {
    padding-bottom: 5px;
    border-bottom: 1px solid #E9EAEC;
    color: #333;
    font-weight: bold;
    font-size: 22px;
  }
</style>

<template>
  <div>
    <!--页头-->
    <div class="detail_header">
      <div class="header_left">
        <p class="p1_title">{{now_name}}总资产</p>
        <div class="div2">
          <p class="div2_p1">
            {{AccountInfo.balance}}<span class="div2_span1">&nbsp;金币</span>
          </p>
        </div>
        <p class="p3">
          <span class="txt">收入</span>
          <span class="m_in">{{AccountInfo.payeeSum}}</span>
          <span class="txt" style="margin-left:10px;">支出</span>
          <span class="m_out">{{AccountInfo.payerSum}}</span>
        </p>
      </div>
      <div class="header_right">
      </div>
    </div>
    <!--列表-->
    <div style="position:relative;">
      <Button style="position: absolute;bottom: -41px;right: 20px;" @click="changeShowList">{{showBtnTxt}}</Button>
    </div>
    <List v-show="isShowList"
          ref="List"
          :Url_getList="Url_getList"
          :columns="columns" :type="2"></List>
    <!--图表-->
    <div class="chartBlock" v-show="!isShowList">
      <div class="chartBlockTitle">收入/支出比例</div>
      <chart_title_query style="float: left;width: 50%;"
                         id="TandS_pie_out_1"
                         :option="TandS_pie_out_1"
                         :getchartUrl="getchartUrl_out"
                         :paramsData="paramsData"></chart_title_query>
      <chart_title_query style="float: left;width: 50%;"
                         id="TandS_pie_in_2"
                         :option="TandS_pie_in_2"
                         :getchartUrl="getchartUrl_in"
                         :paramsData="paramsData"></chart_title_query>
      <div style="float: left;width: 50%;text-align: center;color: #333;font-size: 14px;margin-top: -20px;">支出</div>
      <div style="float: left;width: 50%;text-align: center;color: #333;font-size: 14px;margin-top: -20px;">收入</div>
    </div>
  </div>
</template>

<script>
  import List from "../components/List.vue"
  import options from "../config/highcharts.config.js"//表格基本配置
  import chart_title_query from  "../components/Chart_title_query.vue"
  export default {
    data: function () {
      return {
        showBtnTxt:"图表分析",
        isShowList: true,
        getchartUrl_out: window.getHost + "order/userPayerList",
        getchartUrl_in: window.getHost + "order/userPayeeList",
        TandS_pie_out_1: this.utils.deepCopy(options.pie),
        TandS_pie_in_2: this.utils.deepCopy(options.pie),
        paramsData: {
          GUID: this.$route.query.Id,
          SFDL: "2"
        },
        AccountInfo: {},
        now_name: "",
        Url_acountInfo: "money/account",
        Url_getList: "order/list",
        columns: [
          {
            align: "center",
            title: '时间',
            key: 'createData'
          },
          {
            align: "center",
            title: '资金流动（金币）',
            render: function (createE, params) {
              var that = this;
              var data = params.row;
              var isIn, isOut
              return createE('p', {},
                [
                  createE('span', {class: {tptxt: true}}, (data.paymentType + " ")),
                  createE('span', {
                    class: {
                      m_inTxt: data.paymentType == "收入" ? true : false,
                      m_outTxt: data.paymentType == "支出" ? true : false
                    }
                  }, (data.paymentType == "收入" ? "+" : "-") + data.dealMoney)])
            }
          },
          {
            align: "center",
            title: '详情',
            key: 'content'
          },
          {
            align: "center",
            title: '总资产（金币）',
            key: 'balance'
          }
        ]
      }
    },
    props: {},
    methods: {
      getAccountInfo: function () {
        var that = this;
        this.$http.post(window.getHost + that.Url_acountInfo,
          {relationId: that.$route.query.Id, type: 1},
          {emulateJSON: true}).then(function (data) {
          that.AccountInfo = data.data.data;
        })
      },
      changeShowList: function () {
        this.isShowList = !this.isShowList;
        if(!this.isShowList){
          this.showBtnTxt = "列表明细"
        }else{
          this.showBtnTxt = "图表分析"
        }
      }
    },
    created: function () {
      this.now_name = this.$route.query.name;
      this.getAccountInfo();
    },
    components: {
      List: List,
      chart_title_query: chart_title_query
    }
  }
</script>
