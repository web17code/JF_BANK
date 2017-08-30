<style scoped>
  .applicationContent {
    width: 23.5%;
    height: 32vh;
    box-sizing: border-box;
    margin-right: 2%;
    margin-bottom: 2vh;
    float: left;
  }

  .applicationContent:nth-of-type(4n) {
    margin-right: 0px;
  }

  .applicationPic {
    height: 19vh;
  }

  .applicationPic img {
    width: 100%;
    height: 100%;
  }

  .applicationTxt {
    height: 11vh;
    border: 1px solid #ddd;
    border-top: none;
  }

  .applicationTxt_1 {
    font-weight: bold;
    font-size: 16px;
    color: #666;
    line-height: 5vh;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .applicationTxt_2 {
    color: #666;
    padding-left: 10px;
    font-size:12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .ApplicationCard {
    width: 150px;
    margin-bottom: 20px;
    background-color: #eee;
    color: #666;
  }
</style>

<template>
  <div>
    <Card class="ApplicationCard" :dis-hover=true>
      <div style="text-align:center">
        <h3>共{{total}}个应用</h3>
      </div>
    </Card>
    <!--应用列表-->
    <div style="overflow: hidden">
      <div class="applicationContent" v-for="item in dataList">
        <div class="applicationPic">
          <img class="" src="../assets/img/logo404.png" alt="">
        </div>
        <div class="applicationTxt">
          <p class="applicationTxt_1">{{item.appName}}</p>
          <p class="applicationTxt_2">{{item.content}}</p>
        </div>
      </div>
    </div>
    <!--分页-->
    <Page :total="total" :current="current"
          :page-size="8"
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
        dataList: [],//列表数据
        current: 1,//当前页码，初始值为1
        total: 0,//总条数，默认0
      }
    },
    props: {},
    methods: {
      getList: function () {
        var that = this;
        this.$http.post(window.getHost + that.Url_getList,
          {rows: 8, page: that.current}, {emulateJSON: true}).then(function (data) {
          this.dataList = data.data.data;
          this.total = data.data.total;
          console.log(this.dataList);
        })
      },
      skipPage: function (current) {
        this.current = current;
        this.getList();
      }
    },
    created: function () {
      this.getList();
    },
    components: {}
  }
</script>
