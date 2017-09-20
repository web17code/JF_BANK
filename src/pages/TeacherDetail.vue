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
          <Button type="ghost" class="div2_btn" @click="showModalOutMethod">
            &nbsp;&nbsp;投放&nbsp;&nbsp;&nbsp;
          </Button>
          <Button type="ghost" class="div2_btn" @click="showModalInMethod">
            &nbsp;&nbsp;回款&nbsp;&nbsp;
          </Button>
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
    <List ref="List"
          v-show="isShowList"
          :Url_getList="Url_getList"
          :columns="columns" :type="1"></List>
    <!--页头的模态框投放@on-ok="ok"@on-cancel="cancel"num.toFixed(2)-->
    <Modal
      v-model="showModalOut"
      @on-ok="sendOutNum"
      title="投放">
      请输入投放金额：
      <InputNumber v-model="OutNum"
                   :min="0"
                   @on-change="changeOutNum"></InputNumber>
      <br>
      回款备注：
      <Input style="width:70%;margin-top:10px;"
             v-model="sendNumContent"></Input>
    </Modal>
    <!--页头的模态框回款-->
    <Modal
      v-model="showModalIn"
      @on-ok="sendInNum"
      title="回款">回款金额：
      <InputNumber v-model="InNum"
                   :min="0"
                   @on-change="changeInNum"></InputNumber>
      <br>
      回款备注：
      <Input style="width:70%;margin-top:10px;"
             v-model="sendNumContent"></Input>

    </Modal>
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
          SFDL: "1"
        },
        showModalOut: false,//模态框显隐
        showModalIn: false,//模态框显隐
        OutNum: 0,
        InNum: 0,
        sendNumContent: "",
        AccountInfo:{},
        now_name: "",
        Url_acountInfo: "money/account",
        Url_getList: "order/list",
        Url_sendNum: "money/deliveryRecycling",
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
        ],
      }
    },
    props: {},
    methods: {
      getAccountInfo: function () {
        var that = this;
        this.$http.post(window.getHost + that.Url_acountInfo,
          {relationId: that.$route.query.Id, type: 1},
          {emulateJSON: true}).then(function (data) {
              console.log()
          that.AccountInfo = data.data.data;
        })
      },
      //显示模态框——回款
      showModalInMethod: function () {
        this.sendNumContent = "";
        this.showModalIn = true;
      },
      //显示模态框——投放
      showModalOutMethod: function () {
        this.sendNumContent = "";
        this.showModalOut = true;
      },
      changeOutNum: function (num) {
        this.OutNum = parseFloat(num.toFixed(2));
      },
      changeInNum: function (num) {
        this.InNum = parseFloat(num.toFixed(2));
      },
      sendInNum: function () {
        var that = this;
        this.$http.post(window.getHost + that.Url_sendNum,
          {
            type: 1,//投放填0
            accountType: 1,//賬戶類型0应用、1教师、2学生
            relationId: that.$route.query.Id,
            balance: that.InNum,
            content: that.sendNumContent
          },
          {emulateJSON: true})
          .then(
            function (data) {
              this.$Message.info(data.data.msg)
              that.getAccountInfo();
              that.$refs.List.refreshList();
            }
          )
      },
      sendOutNum: function () {
        var that = this;
        this.$http.post(window.getHost + that.Url_sendNum,
          {
            type: 0,//投放填0
            accountType: 1,//賬戶類型0应用、1教师、2学生
            relationId: that.$route.query.Id,
            balance: that.OutNum,
            content: that.sendNumContent
          },
          {emulateJSON: true})
          .then(
            function (data) {
              this.$Message.info(data.data.msg)
              that.getAccountInfo();
              that.$refs.List.refreshList();
            }
          )
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
      this.paramsData.GUID = this.$route.query.Id;
      this.paramsData.SFDL = "1";
      this.now_name = this.$route.query.name;
      this.getAccountInfo();
    },
    components: {
      List: List,
      chart_title_query: chart_title_query
    }
  }
</script>
