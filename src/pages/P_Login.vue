<style scoped>
  /**
  * 登录页
  */
</style>

<!--<template>
  <div>
    <Input v-model="value" placeholder="用户名" style="width: 300px"></Input>
    <Input v-model="value" placeholder="密码" style="width: 300px"></Input>
  </div>-->
<template>
  <div>
    <h2 style="margin-top: 100px;">欢迎登陆积分银行</h2>
    <Form ref="login" :model="formItem" :label-width="100" style="width: 500px;padding-top: 100px;margin: 0 auto;">
      <Form-item label="用户名" prop="userName">
        <Input v-model="formItem.userName" placeholder="请输入" style="width: 300px"></Input>
      </Form-item>
      <Form-item label="密码" prop="pwd">
        <Input v-model="formItem.pwd" placeholder="请输入" style="width: 300px" type="password"></Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit()">提交</Button>
        <Button type="ghost" @click="resetData('login')" style="margin-left: 8px">取消</Button>
      </Form-item>
    </Form>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        formItem: {
          userName: "",
          pwd: ""
        }
      }
    },

    methods: {
      handleSubmit: function () {
        var that = this;
        this.$http.post(window.getHost + "login",{
          "username": this.formItem.userName,
          "password": this.formItem.pwd
        } ,{emulateJSON:true}).then(function (data) {
          if(data.data.status==200){
            alert("登录成功")
          }else{
            alert("登录失败")
          }
        })
      },
      resetData: function (name) {
        this.$refs[name].resetFields();
      }
    }
  }
  //username=Bill&password=Gates
  //{emulateJSON:true}
  ////{headers:{"content-type":"application/x-www-form-urlencoded"}}
</script>
