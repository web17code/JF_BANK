/**
 * Created by web17code on 2017/7/28.
 * 处理不同图标的数据，
 * 每一个都是对应图表的id，具体方法根据给的数据写死的（时间活）
 * 格式：function xx (source,worked){return worked}
 * 参数：source后台数据,worked图表基本配置数据
 * 返回值：worked生成图表的数据
 */
//图例配置
var legend = {
  layout: 'vertical',
  align: 'left',
  verticalAlign: 'top',
  x: 0,
  y: 30,
  floating: true,
  margin: 100,
  squareSymbol: false,
  symbolHeight: 10,
  symbolWidth: 20,
  symbolRadius: 0,
  floating: true,
  borderWidth: 0,
  backgroundColor: ('#fff'),
  shadow: false
}
/*new*/
function TandS_pie_out_1(source, worked, route) {
  worked.title.text = "支出"
  worked.title.style = {"font-size": "14px", "font-weight": "bold"}
  worked.legend = legend;
  worked.series = [];//清空默认的数据
  worked.series[0] = {};
  worked.series[0].name = "支出分布";
  worked.series[0].type = "pie";
  worked.series[0].data = [];//清空默认的数据
  var total = 0;
  for (var i = 0; i < source.length; i++) {
    total += Number(source[i].DEALMONEYSUM)
    worked.series[0].data[i] = [source[i].APPNAME, source[i].DEALMONEYSUM];
  }
  worked.tooltip.pointFormatter = function () {
    return this.name + "支出<b>" + this.y + "</b>金币，占总支出<b>" + ((this.y / total) * 100).toFixed(2) + "%</b><br/>"
  }
  return worked;
}
function TandS_pie_in_2(source, worked, route) {
  worked.title.text = "收入"
  worked.title.style = {"font-size": "14px", "font-weight": "bold"}
  worked.legend = legend;
  worked.series = [];//清空默认的数据
  worked.series[0] = {};
  worked.series[0].name = "收入分布";
  worked.series[0].type = "pie";
  worked.series[0].data = [];//清空默认的数据
  var total = 0;
  for (var i = 0; i < source.length; i++) {
    total += Number(source[i].DEALMONEYSUM)
    worked.series[0].data[i] = [source[i].APPNAME, source[i].DEALMONEYSUM];
  }
  worked.tooltip.pointFormatter = function () {
    return this.name + "收入<b>" + this.y + "</b>金币，占总收入<b>" + ((this.y / total) * 100).toFixed(2) + "%</b><br/>"
  }
  return worked;
}
function AdminIndex_pie_1(source, worked, route) {
  worked.plotOptions.pie.center=["70%","50%"];
  worked.title.text = "总资产分布情况";
  worked.title.style = {"font-size": "14px", "font-weight": "bold","display":"none"}
  worked.legend = legend;
  worked.legend.title = {"text":"总资产分布情况","style":{"font-size": "15px"}};
  worked.series = [];//清空默认的数据
  worked.series[0] = {};
  worked.series[0].name = "收入分布";
  worked.series[0].type = "pie";
  worked.series[0].data = [];//清空默认的数据
  if(source==null){
    return worked;
  }
  var total = source[0].totalAmountType+source[1].totalAmountType+source[2].totalAmountType;
  worked.series[0].data[0] = [source[0].type+"",source[0].totalAmountType];
  worked.series[0].data[1] = [source[1].type+"",source[1].totalAmountType];
  worked.series[0].data[2] = [source[2].type+"",source[2].totalAmountType];
  worked.tooltip.pointFormatter = function () {
    return this.name + "收入<b>" + this.y + "</b>金币，占总收入<b>" + ((this.y / total) * 100).toFixed(2) + "%</b><br/>"
  }
  worked.outTitle = "总资产："+total.toFixed(2)+"金币"
  return worked;
}
function AdminIndex_pie_2(source, worked, route) {
  worked.plotOptions.pie.center=["70%","50%"];
  worked.title.text = "总资产分布情况";
  worked.title.style = {"font-size": "14px", "font-weight": "bold","display":"none"}
  worked.legend = legend;
  worked.legend.title = {"text":"总资产分布情况","style":{"font-size": "15px"}};
  worked.series = [];//清空默认的数据
  worked.series[0] = {};
  worked.series[0].name = "收入分布";
  worked.series[0].type = "pie";
  worked.series[0].data = [];//清空默认的数据
  if(source==null){
    return worked;
  }
/*  var total = source[0].totalAmountType+source[1].totalAmountType+source[2].totalAmountType;
  worked.series[0].data[0] = [source[0].type+"",source[0].gradeName];
  worked.series[0].data[1] = [source[1].type+"",source[1].gradeName];
  worked.series[0].data[2] = [source[2].type+"",source[2].gradeName];*/
  var total = 0;
  for (var i = 0; i < source.length; i++) {
    total += Number(source[i].balanceSum)
    worked.series[0].data[i] = [source[i].gradeName, Number(source[i].balanceSum)];
  }
  worked.tooltip.pointFormatter = function () {
    return this.name + "收入<b>" + this.y + "</b>金币，占总收入<b>" + ((this.y / total) * 100).toFixed(2) + "%</b><br/>"
  }
  worked.outTitle = "教师总资产："+total.toFixed(2)+"金币"
  return worked;
}
function AdminIndex_pie_3(source, worked, route) {
  worked.plotOptions.pie.center=["70%","50%"];
  worked.title.text = "总资产分布情况";
  worked.title.style = {"font-size": "14px", "font-weight": "bold","display":"none"}
  worked.legend = legend;
  worked.legend.title = {"text":"总资产分布情况","style":{"font-size": "15px"}};
  worked.series = [];//清空默认的数据
  worked.series[0] = {};
  worked.series[0].name = "收入分布";
  worked.series[0].type = "pie";
  worked.series[0].data = [];//清空默认的数据
  if(source==null){
    return worked;
  }
  /*  var total = source[0].totalAmountType+source[1].totalAmountType+source[2].totalAmountType;
   worked.series[0].data[0] = [source[0].type+"",source[0].gradeName];
   worked.series[0].data[1] = [source[1].type+"",source[1].gradeName];
   worked.series[0].data[2] = [source[2].type+"",source[2].gradeName];*/
  var total = 0;
  for (var i = 0; i < source.length; i++) {
    total += Number(source[i].balance)
    worked.series[0].data[i] = [source[i].appName, Number(source[i].balance)];
  }
  worked.tooltip.pointFormatter = function () {
    return this.name + "收入<b>" + this.y + "</b>金币，占总收入<b>" + ((this.y / total) * 100).toFixed(2) + "%</b><br/>"
  }
  worked.outTitle = "应用总资产："+total.toFixed(2)+"金币"
  return worked;
}
function AdminIndex_pie_4(source, worked, route) {
  console.log(1111)
  worked.plotOptions.pie.center=["70%","50%"];
  worked.title.text = "总资产分布情况";
  worked.title.style = {"font-size": "14px", "font-weight": "bold","display":"none"}
  worked.legend = legend;
  worked.legend.title = {"text":"总资产分布情况","style":{"font-size": "15px"}};
  worked.series = [];//清空默认的数据
  worked.series[0] = {};
  worked.series[0].name = "收入分布";
  worked.series[0].type = "pie";
  worked.series[0].data = [];//清空默认的数据
  if(source==null){
    return worked;
  }
  /*  var total = source[0].totalAmountType+source[1].totalAmountType+source[2].totalAmountType;
   worked.series[0].data[0] = [source[0].type+"",source[0].gradeName];
   worked.series[0].data[1] = [source[1].type+"",source[1].gradeName];
   worked.series[0].data[2] = [source[2].type+"",source[2].gradeName];*/
  var total = 0;
  for (var i = 0; i < source.length; i++) {
    total += Number(source[i].balanceSum)
    worked.series[0].data[i] = [source[i].gradeName, Number(source[i].balanceSum)];
  }
  worked.tooltip.pointFormatter = function () {
    return this.name + "收入<b>" + this.y + "</b>金币，占总收入<b>" + ((this.y / total) * 100).toFixed(2) + "%</b><br/>"
  }
  worked.outTitle = "学生总资产："+total.toFixed(2)+"金币"
  return worked;
}
var dataProcess = {};
dataProcess.TandS_pie_out_1 = TandS_pie_out_1;
dataProcess.TandS_pie_in_2 = TandS_pie_in_2;
dataProcess.AdminIndex_pie_1 = AdminIndex_pie_1;
dataProcess.AdminIndex_pie_2 = AdminIndex_pie_2;
dataProcess.AdminIndex_pie_3 = AdminIndex_pie_3;
dataProcess.AdminIndex_pie_4 = AdminIndex_pie_4;
export default dataProcess;
//worked.series[0].innerSize = '65%';
//worked.series[0].size = '75%';
//worked.plotOptions.column.colorByPoint=true;//柱子之间不同颜色
//worked.chart.spacing=[50,30,30,30];//图标的内边距
