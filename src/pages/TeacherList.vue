<style scoped>
  /**
  * Created by web17code
  */

</style>

<template>
  <div>
    <div>
      <Row>
        <Col span="3">
        <leftMenu></leftMenu>
        </Col>
        <Col span="21" class="content">
          <button @click="printWindow">btn</button>
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
      printWindow: function () {
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
