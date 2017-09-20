<style scoped>
  /**
  * Created by web17code
  */

</style>

<template>
  <div>
    <div style="overflow:hidden;margin-bottom: 10px;">
      <Button type="primary"
              icon="ios-search"
              style="float:right;"
              @click="getList">搜索</Button>
      <Input v-model="userName"
             placeholder="按用户名搜索"
             style="width:150px;float:right;margin-right:15px;"></Input>
      <Input v-model="userSn"
             placeholder="按姓名搜索"
             style="width:150px;float:right;margin-right:15px;"></Input>
    </div>
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
  import List from "../components/List.vue"
  export default {
    data: function () {
      return {
        userSn:"",
        userName:"",
        Url_getList: "user/list",//请求应用中心的链接
        dataList: [],//列表数据
        current: 1,//当前页码，初始值为1
        total: 0,//总条数，默认0
        //列头项
        columns: [
          {
            title: '教师名称',
            key: 'userSn'
          },
          {
            title: '用户名',
            key: 'userName'
          },
          {
            title: '类别',
            render:(h, params) => {
                return "教师"
            }
          },
          {
            title: '账户资金（金币）',
            key: 'balance'
          },
          {
            title: '操作',
            align: 'center',
            render: (h, params) => {
              return h('router-link', {
                props: {
                  to: { path: 'TeacherDetail',
                    query: {
                      Id: params.row.userPk,
                      name:params.row.userSn
                    }
                  },
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
          {
            rows: 10,
            page: that.current,
            type:1,
            userSn:that.userSn.trim(),
            userName:that.userName.trim()
          }, {emulateJSON: true}).then(function (data) {
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
    components: {
      List:List
    }
  }
</script>
