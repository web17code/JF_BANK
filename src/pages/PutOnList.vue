<style scoped>
  /**
  * Created by web17code
  */

</style>

<template>
  <div>
    <!--投放列表-->
    <Table border
           :columns="columns"
           :data="dataList" :disabled-hover="true"
           :no-data-text="''"></Table>

    <!--分页-->
    <Page :total="total" :current="current"
          :page-size="10"
          @on-change="skipPage"
          show-elevator show-total
          class="pageCss"></Page>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        Url_getList: "app/list",//请求应用中心的链接
        Url_sendPutOnNum: "money/deliveryRecycling",
        dataList: [],//列表数据
        current: 1,//当前页码，初始值为1
        total: 0,//总条数，默认0
        columns: [
          {
            title: '应用名称',
            key: 'appName'
          },
          {
            title: '应用资产（金币）',
            key: 'money'
          },
          {
            align: "center",
            width: 200,
            title: '投放操作（金币）',
            render: (h, params) => {
              var params = params;
              return h("div", {
                style: {
                  float: "left",
                  margin: "0 auto",
                  overflow: "hidden",
                }
              }, [
                h("input", {
                  class: {
                    "ivu-input": true,
                  },
                  attrs: {
                    id: "input" + params.row.appId,
                    placeholder: "请输入数字"
                  },
                  style: {
                    float: "left",
                    width: "100px",
                    display: "block"
                  }
                }),
                h("Button", {
                  style: {
                    width: "57px",
                    "margin-left": "5px",
                    float: "left",
                    display: "block"
                  },
                  props: {
                    type: "primary"
                  },
                  on: {
                    click: () => {
                      this.sendPutOnNum(params);
                    }
                  }
                }, "确定")])
            }
          }]
      }
    },
    props: {},
    methods: {
      sendPutOnNum: function (params) {
        var that = this;
        console.log("input" + params.row.appId);
        var num = document.getElementById("input" + params.row.appId).value;
        var content;
        console.log(params)
        if(num==""){
          this.$Message.error("输入不允许为空");
          return false;
        }
        if (Number(num) + "" === "NaN") {
          this.$Message.error("请输入数字");
          document.getElementById("input" + params.row.appId).value = "";
          return false;
        } else if(Number(num)<=0){
          this.$Message.error("请输入数字大于零");
          document.getElementById("input" + params.row.appId).value = "";
          return false;
        }else{
          content = "管理员" + that.$route.query.adminName + "给" + params.row.appName + "投放了" + Number(num).toFixed(2) + "金币";
          this.$http.post(window.getHost + that.Url_sendPutOnNum,
            {
              relationId: params.row.appId,
              accountType: 0,
              type: 0,
              balance: Number(num).toFixed(2),
              content: content,
              rewardType: ""
            },
            {emulateJSON: true}).then(function (data) {
              if(data.data.status==200){
                  this.$Message.success("投放金币成功");
                  that.getAppList();
              }else{
                this.$Message.error("投放金币成功");
              }
          })
          document.getElementById("input" + params.row.appId).value = "";
        }
      },
      //获取应用列表
      getAppList: function () {
        var that = this;
        this.$http.post(window.getHost + that.Url_getList,
          {rows: 10, page: that.current}, {emulateJSON: true}).then(function (data) {
          this.dataList = data.data.data;
          this.total = data.data.total;
        })
      },
      skipPage: function (current) {
        this.current = current;
        this.getAppList();
      }
    },
    created: function () {
      this.getAppList();
    },
    mounted: function () {
    },
    components: {}
  }
</script>
<!--function () {
                      var that =this;
                      var num = document.getElementById("input" + params.row.id).value;
                      console.log(Number(num)==NaN)
                      console.log(that)
                      if (Number(num)==NaN) {
                        that.$Message.info("傻吊，输入数字啊");
                        return false;
                      }
                      alert(num);
                      document.getElementById("input" + params.row.id).value = "";
                    }-->
