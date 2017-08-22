<style scoped>
    /**
    * Created by web17code on 2017/7/12.
    */

</style>

<template>
    <div>
        <childcomponents :age="age"></childcomponents>
    </div>
</template>

<script>
    import ChildComponents from './ChildComponents.vue'
    export default {
        data: function () {
            return {}
        },
        props: {
            age: {
                 /*type: String,//Number,Boolean,Function,Object,Array,Symbol
            default: "",
            required: true,
            validator: function (value) {
                return value > 10
            }*/
        }
    },
        method: {
        method1: function ()
            {

      }
    },
        created: function ()
        {

    },
    mounted:
        function () {

    },
    components

        : {
            childcomponents: ChildComponents
    }
  }
</
    script>
