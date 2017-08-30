<style scoped>
  /*
  本页面只是用来做登陆后的跳转作用
  */
</style>

<template></template>

<script>
  export default {
    data: function () {
      return {}
    },
    beforeCreate : function () {//根据用户的类别进行页面跳转
      switch (0) {
        case 0 : this.$router.push('P_Home');break;
        case 1 : this.$router.push('P_Login');break;
        case 2 : this.$router.push('404');break;
        case 3 : this.$router.push('/');break;
        case 4 : this.$router.push('/');break;
      }
    }
  }
</script>
