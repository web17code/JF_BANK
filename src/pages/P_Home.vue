<style scoped>
  /**
  * Created by web17code on 2017/7/12.
  */

</style>

<template>
  <div>
    <Row>
      <Col span="24" class="content">
      hello world!!
      </Col>
    </Row>
  </div>
</template>

<script>
  //import Highcharts from 'highcharts';//引入图表库
  //import dataProcess from '../utils/dataProcess';//引入后台数据处理方法
  import leftMenu from "../components/leftMenu.vue"
  export default {
    data: function () {
      return {}
    },
    mounted: function () {
      this.$http.post(window.getHost + "list", {}).then()
    },
    components: {
      leftMenu: leftMenu
    }
  }
</script>
