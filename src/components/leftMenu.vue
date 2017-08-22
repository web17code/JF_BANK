<style scoped>
  /*
    菜单组件要传递需要的值
    activeName:不必须，活动的当前菜单，
  */
  /*  .layout{
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
    }
    .layout-breadcrumb{
      padding: 10px 15px 0;
    }
    .layout-content{
      min-height: 200px;
      margin: 15px;
      overflow: hidden;
      background: #fff;
      border-radius: 4px;
    }
    .layout-content-main{
      padding: 10px;
    }
    .layout-copy{
      text-align: center;
      padding: 10px 0 20px;
      color: #9ea7b4;
    }
    .layout-menu-left{
      background: #464c5b;
    }
    .layout-header{
      height: 60px;
      background: #fff;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
      width: 90%;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      margin: 15px auto;
    }
    .layout-ceiling-main a{
      color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
      display: none;
    }
    .ivu-col{
      transition: width .2s ease-in-out;
    }*/
</style>
<template>
  <Row>
    <i-col :span="24">
      <Menu active-name="1" theme="light" width="auto" mode="vertical" @on-select="gorouter">
        <Menu-item name="1">
          <span>选项 1</span>
        </Menu-item>
        <Menu-item name="P_Login">
          <span>登录</span>
        </Menu-item>
        <Menu-item name="3">
          <span>选项 3</span>
        </Menu-item>
      </Menu>
    </i-col>
  </Row>
</template>
<script>
  export default {
    data () {
      return {
        spanLeft: 5,
        spanRight: 19
      }
    },
    props: {
      activeName: {
        default: "",
      }
    },
    methods: {
      gorouter: function (name) {
        //this.$nextTick(function(){this.isnew=true})//重建组件
        console.log(name);
        this.$router.push(name);//路由跳转
      }
    }
  }
</script>
