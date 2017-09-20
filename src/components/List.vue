<style scoped>
  /**
  * Created by web17code
  */

</style>

<template>
  <div>
    <!--明细Tool-->
    <div class="toolContent">
      <span>明细</span>
      <span :class="{tool_btn:true,tb_select:isSelect_in}"
            @click="selected_in">
        收入
      </span>
      <span :class="{tool_btn:true,tb_select:isSelect_out}"
            @click="selected_out">
        支出
      </span>
      <DatePicker type="daterange"
                  placement="bottom"
                  format="yyyy/MM/dd"
                  @on-change="getListByTimeChange"
                  placeholder="选择日期"
                  style="width: 200px"></DatePicker>
    </div>
    <!--应用列表-->
    <Table border :columns="columns" :data="dataList" :no-data-text="''"></Table>
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
        dataRange: "",//时间范围
        dataList: [],//列表数据
        isSelect_in:true,
        isSelect_out:true,
        current: 1,//当前页码，初始值为1
        total: 0,//总条数，默认0
      }
    },
    props: {
      Url_getList:{
          default:""
      },
      columns:{
          default:[]
      },
      type:{
          default:"0"
      }
    },
    methods: {
      //获取交易列表
      getList: function (time, shou, zhi) {//获取收支列表
        var that = this;
        this.$http.post(window.getHost + that.Url_getList,
          {
            rows: 10,
            page: that.current,
            type: that.type,
            timeSlot: time,
            payerId: zhi,
            payeeId: shou
          },
          {emulateJSON: true}).then(function (data) {
          this.dataList = data.data.data;
          this.total = data.data.total;
        })
      },
      refreshList:function(){
        //根据选中的状态更新列表
        if (this.isSelect_in && this.isSelect_out) {
          this.getList(this.dataRange, this.nowId, this.nowId)
        } else if (!this.isSelect_in && this.isSelect_out) {
          this.getList(this.dataRange, "", this.nowId)
        } else if (this.isSelect_in && !this.isSelect_out) {
          this.getList(this.dataRange, this.nowId, "")
        }
      },
      //修改收入选中的状态
      selected_in: function () {
        this.isSelect_in = !this.isSelect_in;
        //根据选中的状态更新列表
        if (this.isSelect_in && this.isSelect_out) {
          this.getList(this.dataRange, this.nowId, this.nowId)
        } else if (!this.isSelect_in && this.isSelect_out) {
          this.getList(this.dataRange, "", this.nowId)
        } else if (this.isSelect_in && !this.isSelect_out) {
          this.getList(this.dataRange, this.nowId, "")
        }
      },
      //修改支出选中的状态
      selected_out: function () {
        this.isSelect_out = !this.isSelect_out;
        //根据选中的状态更新列表
        if (this.isSelect_in && this.isSelect_out) {
          this.getList(this.dataRange, this.nowId, this.nowId)
        } else if (!this.isSelect_in && this.isSelect_out) {
          this.getList(this.dataRange, "", this.nowId)
        } else if (this.isSelect_in && !this.isSelect_out) {
          this.getList(this.dataRange, this.nowId, "")
        }
      },
      //修改时间刷新列表
      getListByTimeChange: function (dataRange) {
        var that = this;
        if (dataRange[0] == "") {//清空状态
          this.dataRange = "";
        } else {
          this.dataRange = dataRange[0] + "-" + dataRange[1];
        }
        if (this.isSelect_in && this.isSelect_out) {
          this.getList(this.dataRange, this.nowId, this.nowId)
        } else if (!this.isSelect_in && this.isSelect_out) {
          this.getList(this.dataRange, "", this.nowId)
        } else if (this.isSelect_in && !this.isSelect_out) {
          this.getList(this.dataRange, this.nowId, "")
        }
      },
      skipPage: function (current) {
        this.current = current;
        if (this.isSelect_in && this.isSelect_out) {
          this.getList(this.dataRange, this.nowId, this.nowId)
        } else if (!this.isSelect_in && this.isSelect_out) {
          this.getList(this.dataRange, "", this.nowId)
        } else if (this.isSelect_in && !this.isSelect_out) {
          this.getList(this.dataRange, this.nowId, "")
        }
      },

    },
    created: function () {
      var that = this;
      var shou = this.$route.query.Id;
      var zhi = this.$route.query.Id;
      that.nowId = this.$route.query.Id;
      this.getList("", shou, zhi);
    }
  }
</script>
