<style scoped>
    /**
    * Created by web17code
    */
</style>

<template>
    <div>
      <List ref="List"
            :Url_getList="Url_getList"
            :columns="columns" :type="-1"></List>
    </div>
</template>

<script>
    import List from "../components/List.vue"
    export default {
        data: function () {
            return {
              Url_getList: "order/list",
              columns: [
                {
                  align: "center",
                  title: '应用资产（金币）',
                  key: 'balance'
                },
                {
                  align: "center",
                  title: '时间',
                  key: 'createData'

                },
                {
                  align: "center",
                  title: '资金流动（金币）',
                  render: function (createE, params) {
                    var that = this;
                    var data = params.row;
                    var isIn, isOut
                    return createE('p', {},
                      [
                        createE('span', {class: {tptxt: true}}, (data.paymentType + " ")),
                        createE('span', {
                          class: {
                            m_inTxt: data.paymentType == "收入" ? true : false,
                            m_outTxt: data.paymentType == "支出" ? true : false
                          }
                        }, (data.paymentType == "收入" ? "+" : "-") + data.dealMoney)])
                  }
                },
                {
                  align: "center",
                  title: '详情',
                  key: 'content'
                }
              ],
            }
        },
        methods: {},
        created: function () {
        },
        components: {
            List:List
        }
    }
</script>
