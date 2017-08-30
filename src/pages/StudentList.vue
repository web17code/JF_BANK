<style scoped>
  /**
  * Created by web17code
  */

</style>

<template>
  <div>
    <div>
      <Row>
        <Col span="24" class="content">
        <button @click="printWindow">学生  btn</button>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
  import leftMenu from "../components/leftMenu.vue"
  export default {
    data: function () {
      return {}
    },
    props: {},
    methods: {
      printWindow:function () {
        console.log(window)
      }
    },
    created: function () {
    },
    mounted: function () {
    },
    components: {
      leftMenu: leftMenu
    }
  }
</script>
