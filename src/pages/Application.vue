<style scoped>
</style>

<template>
  <div>

    <!--应用列表-->
    <Table border :columns="columns" :data="dataList"></Table>
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
      var that = this;
      return {
        Url_getList: "app/list",//请求应用中心的链接
        dataList: [],//列表数据
        current: 1,//当前页码，初始值为1
        total: 0,//总条数，默认0
        //列头项
        columns: [
          {
            title: '应用名称',
            key: 'appName'
          },
          {
            title: '创建时间',
            key: 'createDate'
          },
          {
            title: '总资产',
            key: 'menuUrl'
          },
          {
            title: '操作',
            align: 'center',//<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
            render: (h, params) => {
              return h('router-link', {
                props: {
                  to: { path: 'ApplicationDetail', query: { Id: params.row.appId }},
                }
              }, '查看详情');
            }
          },
        ],
      }
    },
    props: {},
    methods: {
      getList: function () {
        var that = this;
        this.$http.post(window.getHost + that.Url_getList,
          {rows: 10, page: that.current}, {emulateJSON: true}).then(function (data) {
          this.dataList = data.data.data;
          this.total = data.data.total;
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
