<style scoped>
  .layout {
    border: 0px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout .content {
    min-height: 92vh;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 80vh;
    margin:10px 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 20px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #fff;
  }

  .layout-header {
    height: 8vh;
    line-height: 8vh;
    font-size: 20px;
    background: #91e8e1;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    text-align: center;
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }
  /*添加线*/
  .r_content{
    position: relative;
  }
  .r_content:after{
    background-color: #ddd;
    position: absolute;
    width: 1px;
    bottom: 0;
    top: 0;
    left: -1px;
    content: "";
  }
</style>
<template>
  <div class="layout">
    <div class="layout-header">
      <!--<i-button type="text" @click="toggleClick">-->
      <!--<Icon type="navicon" size="32"></Icon>-->
      <!--</i-button>-->
      积分银行前台界面
    </div>
    <Row type="flex" class="content">
      <i-col span="3" class="layout-menu-left">
        <leftMenu></leftMenu>
      </i-col>
      <i-col span="21" class="r_content">
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item >积分银行</Breadcrumb-item>
            <Breadcrumb-item >{{$route.name[1]}}</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </div>
        <div class="layout-copy">
          2011-2016 &copy; TalkingData
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  import leftMenu from "./components/leftMenu.vue"
  export default {
    data () {
      return {}
    },
    computed: {},
    methods: {
      goRouter: function (name) {
        this.$router.push({path: name})
        //this.$router.push({path: name, query: {user: "zhuhj"}})
        //this.$router.push({path: name, params:{user: "zhuhj"}})
      }
    },
    components: {
      leftMenu: leftMenu
    }
  }
</script>
