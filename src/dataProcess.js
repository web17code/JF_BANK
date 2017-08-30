/**
 * Created by web17code .
 * 处理不同图表的数据，
 * 每一个都是对应图表的id，具体方法根据给的数据写死
 * 格式：function xx (source,worked){return worked}
 * 参数：source后台数据,worked图表基本配置数据
 * 返回值：worked生成图表的数据
 */
//图例配置
var legend = {
  layout: 'vertical',
  align: 'right',
  verticalAlign: 'top',
  x: 0,
  y: 0,
  floating: true,
  borderWidth: 1,
  backgroundColor: ('#FFFFFF'),
  shadow: true
}
//机构信息的stu1_pie 学生数据图标1，饼图
function stu1_pie(source,worked,route){
  return worked;
}

var dataProcess={};
dataProcess.stu1_pie = stu1_pie;
export default dataProcess;
//worked.series[0].innerSize = '65%';
//worked.series[0].size = '75%';
//worked.plotOptions.column.colorByPoint=true;//柱子之间不同颜色
//worked.chart.spacing=[50,30,30,30];//图标的内边距
