<style scoped>
  /**
  * Created by web17code
  * 管理员的首页
  */
</style>
<template>
  <div>
    <Row class="headerRow">
      <Col span="8" class="indexHeaderLeft">
      <div style="overflow: hidden">
        <div class="indexAvatar">
          <img :src="indexInfo.avatarUrl" alt="头像">
        </div>
        <div class="indexInfo">
          <p class="info_name">{{indexInfo.USERNAME}}</p>
          <p class="info_role">{{indexInfo.role}}</p>
        </div>
      </div>
      <div class="indexTotal"><span>{{indexInfo.balance}}&nbsp;</span>金币</div>
      </Col>
      <Col span="10" class="indexHeaderRight">
      <router-link
        :to="{path:'/PutOnList',query:{adminName:indexInfo.USERNAME}}">
        <Button type="ghost" style="width:80px;">投放</Button>
      </router-link>
      <router-link :to="{path:'/PutOnDetail',query:{Id:indexInfo.relationId}}">
        <Button type="ghost" style="width:80px;margin-left: 15px;">投放明细</Button>
      </router-link>
      </Col>
    </Row>
  </div>
</template>

<script>
  import options from "../config/highcharts.config.js"//表格基本配置
  export default {
    data: function () {
      return {
        AdminIndex_line_1: this.utils.deepCopy(options.pie),
        Url_getIndexInfo: "money/account",
        indexInfo: {}
      }
    },
    props: {},
    methods: {},
    created: function () {
      var that = this;
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
    }
  }
</script>
