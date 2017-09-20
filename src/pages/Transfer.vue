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
    //35CA5893A35A72D6E0531404900A164B學生
    //46F7EF47-9285-4E72-929D-010B1FC1E073教師
    //825e62d2eab64325b03d8f4d0b067ae8管理員
    beforeCreate: function () {//根据用户的类别进行页面跳转
      this.$http.get(window.getHost + "user/getType",
        {params: {userId: "46F7EF47-9285-4E72-929D-010B1FC1E073"}})
        .then(function (data) {
          var type = data.data.data.SFDL + '';
          switch (type) {
            case "-1" :
              this.$router.push('AdminIndex');
              break;
            case "1" :
              this.$router.push('userCount');
              break;
            case "2" :
              this.$router.push('userCount');
              break;
            default :
              this.$router.push('404');
              break;
          }
        })
    }
  }
</script>
