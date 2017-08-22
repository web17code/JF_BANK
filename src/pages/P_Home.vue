<style scoped>
  /**
  * Created by web17code on 2017/7/12.
  */

</style>

<template>
  <div>
    <Row>
      <Col span="4"><leftMenu></leftMenu></Col>
      <Col span="20" class="content">
        hello world!!
      </Col>
    </Row>
  </div>
</template>

<script>
  import leftMenu from "../components/leftMenu.vue"
  export default {
    data: function () {
      return {}
    },
    components: {
      leftMenu: leftMenu
    }
  }
</script>
