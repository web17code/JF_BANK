<style scoped>
  /**
  * Created by web17code
  */

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
    <!--页头的模态框投放@on-ok="ok"@on-cancel="cancel"num.toFixed(2)-->
    <Modal
      v-model="showModalOut"
      @on-ok="sendOutNum"
      title="投放">
      投放金额：
      <InputNumber v-model="OutNum"
                   :min="0"
                   @on-change="changeOutNum"></InputNumber>
      <br>
      投放备注：
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
    <List ref="List"
          :Url_getList="Url_getList"
          :columns="columns" :type="0"></List>
  </div>
</template>

<script>
  import List from "../components/List.vue"
  export default {
    data: function () {
      return {
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
            title: '应用资产（金币）',
            key: 'balance'
          }
        ],
        Url_getList: "order/list",
        Url_acountInfo: "money/account",
        Url_sendNum: "money/deliveryRecycling",
        now_name: this.$route.query.name,//应用名称
        AccountInfo: {},//应用的基本信息
        showModalOut: false,//模态框显隐
        showModalIn: false,//模态框显隐
        OutNum: 0,
        InNum: 0,
        sendNumContent: ""
      }
    },
    props: {},
    methods: {
      getAccountInfo: function () {
        var that = this;
        this.$http.post(window.getHost + that.Url_acountInfo,
          {relationId: that.$route.query.Id, type: 0},
          {emulateJSON: true}).then(function (data) {
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
              type: 1,//回款填1
              accountType: 0,//賬戶類型0应用、1教师、2学生
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
            accountType: 0,//賬戶類型0应用、1教师、2学生
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
      }
    },
    created: function () {
      this.getAccountInfo();
    },
    components: {
      List:List
    }
  }
</script>
