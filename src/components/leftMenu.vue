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
  .menu_icon {
    position: relative;
    bottom: -2px;
  }
</style>
<template>
  <Row>
    <i-col :span="24">
      <Menu :active-name="$route.name[0]"
            theme="light" width="auto" mode="vertical"
            @on-select="gorouter"
            v-for="menu in MenuData" :key="menu.menuUrl">
        <Menu-item :name="menu.menuUrl"
                   style="padding:0;padding-left:15px;line-height: 50px;">
          <Icon :type="menu.menuIcon" :size="20" color="#585E62"
                class="menu_icon"></Icon>
          <span style="">{{menu.menuName}}</span>
        </Menu-item>
      </Menu>
    </i-col>
  </Row>
</template>
<script>
  export default {
    data: function () {
      return {
        MenuData: window.MenuData
      }
    },
    created: function () {
      //先从window.MenuData数组获取，若window.MenuData[0].name==initMenu,请求菜单
      if (window.MenuData[0].menuName != "initMenu") {
        return true;
      } else {
        //获取菜单数据，并存到window中
        this.$http.get(window.getHost + 'menu/userMenu').then(
          function (data) {
            this.MenuData = window.MenuData = data.data.data;
          })
      }
    },
    methods: {
      gorouter: function (name) {
        //this.$nextTick(function(){this.isnew=true})//重建组件
        this.$router.push(name);//路由跳转
      }
    }
  }
</script>
