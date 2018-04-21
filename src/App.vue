<template>
  <!-- <div id="app" class="monitor_content">
    <div class="header" >
      <Header :phoneCallIn="IDX_01_10_001" :phoneCallout="IDX_01_10_004" :IVRCount="IVRCount" :chatCount="chatCount"/>
    </div>
    <div class="left">
      <div class="left1">
        <mutlipleBarleft2 :dbData="left1" :xAxisdate="xAxisdate" key="qc_left1"/>
      </div>
      <div class="left2">
        <mutlipleBarleft2 :dbData="left2" :xAxisdate="xAxisdate" key="qc_left2"/>
      </div>
      <div class="left3">
        <mutlipleBarleft2 :dbData="left3" :xAxisdate="xAxisdate" key="qc_left3"/>
      </div>
      <div class="left4">
        <mutlipleBarleft2 :dbData="left4" :xAxisdate="xAxisdate" key="qc_left3"/>
      </div>
    </div>
    <div class="middle">
      <Table/>
    </div>
    <div class="right">
      <div class="right1">
       <doughnut :dbData="right1" key="qc_right1"/>
      </div>
      <div class="right2">
       <Select :activeMap="activeMap" @taggle="taggle"/>
      </div>
      <div class="right3">
        <pie :dbData="right3" key="qc_right3"/>
      </div>
      <div class="right4">
        <doughnut :dbData="right4" key="qc_right4"/>
      </div>
      <div class="right5">
        <doughnut :dbData="right5" key="qc_right5"/>
      </div>
    </div>
  </div> -->
  <!-- <el-container>
  <el-aside>
    <el-row>
      
    <div class="left">
      <div class="left1">
        <mutlipleBarleft2 :dbData="left1" :xAxisdate="xAxisdate" key="qc_left1"/>
      </div>
      <div class="left2">
        <mutlipleBarleft2 :dbData="left2" :xAxisdate="xAxisdate" key="qc_left2"/>
      </div>
      <div class="left3">
        <mutlipleBarleft2 :dbData="left3" :xAxisdate="xAxisdate" key="qc_left3"/>
      </div>
      <div class="left4">
        <mutlipleBarleft2 :dbData="left4" :xAxisdate="xAxisdate" key="qc_left3"/>
      </div>
    </div>
  </el-aside>
  <el-container>
    <el-main>Main</el-main>
  </el-container>
</el-container> -->
    <div class="content">
    <div class="left"></div>
    <div class="middle"></div>
    <div class="right">
      <div class="right1"></div>
      <div class="right3"></div>
      <div class="right2"></div>
    </div>
  </div>
</template>
<script>
import pie from './components/pie'
import mutlipleBarleft2 from './components/mutlipleBarleft2'
import Header from './components/header'
import doughnut from './components/doughnut'
import Table from './components/table'
import tableComponents from './components/tableComponents'
import Select from './components/select'
import layout from './components/layout'
import content from './content'

import {_socket} from ".//socketUtil.js" 
//import _socket from './socketUtil'




export default {
  name: 'App',
  data() {
      return {
        'chatCount': 0,
        'IVRCount': 0,
        'IDX_01_10_001': 10,//当月呼入数
        'IDX_01_10_002': 7,//呼入接通数
        'IDX_01_10_004': 30,//外呼数
        'IDX_01_10_005': 22,//外呼接通数
        'IDX_01_10_006': 0,//外呼接通率
        'IDX_01_02_001': 0,//当天呼入总数
        'IDX_01_02_002': 0,//当天呼入接起量
        'IDX_01_03_002': 0, //当天呼出量
        'IDX_01_08_001': 0,//vdn当日30分钟总呼入
        'IDX_01_08_002': 0,//vdn当日30分钟呼入接通
        'IDX_01_08_003': 0,//vdn当日30分钟总呼入接通率
        xAxisdate:[],//存储一个月的每一天
        activeMap: [{"value": "厦门呼叫中心", "country": "beijing_2"}],
        left1:{
          'key': 'left1',
          'type': 'double',//double or single
          'name': '当月电话统计',
          'legendData': ['来电量','呼损量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3], [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]]
        },
        left2:{
          'key': 'left2',
          'type': 'double',//double or single
          'name': '当月在线统计',
          'legendData': ['咨询量','呼损量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [[3.0, 1.9, 9.0, 2.2, 25.6, 76.0, 10.6, 12.2, 32.6, 20.0, 6.4, 1.3], [22.0, 52.9, 19.0, 2.4, 28.7, 76.0, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]]
        },
        left3:{
          'key': 'left3',
          'type': 'single',//double or single
          'name': '当月短信统计',
          'legendData': ['发送量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [[10, 120, 800]]
        },
        left4:{
          'key': 'left4',
          'type': 'single',//double or single
          'name': '当月远程统计',
          'legendData': ['远程量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [[100, 20, 620]]
        },
        right1:{
          'key': 'right1',
          'type': 'single',//double or single
          'name': '当月整体服务情况占比',
          'legendData': ['电话服务量', '在线服务量','短信服务量','远程服务量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [{value:535, name: '电话服务量'},{value:510, name: '在线服务量'},{value:634, name: '短信服务量'},{value:735, name: '远程服务量'}]
        },
        right2:{
          'key': 'right2',
          'type': 'single',//double or single
          'name': '当月整体服务情况占比',
          'legendData': ['电话服务量', '在线服务量','短信服务量','远程服务量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [{value:535, name: '电话服务量'},{value:510, name: '在线服务量'},{value:634, name: '短信服务量'},{value:735, name: '远程服务量'}]
        },
        right3:{
          'key': 'right3',
          'type': 'single',//double or single
          'name': '当月整体服务情况占比',
          'legendData': ['电话服务量', '在线服务量','短信服务量','远程服务量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [{value:535, name: '电话服务量'},{value:510, name: '在线服务量'},{value:634, name: '短信服务量'},{value:735, name: '远程服务量'}]
        },
        right4:{
          'key': 'right4',
          'type': 'single',//double or single
          'name': '当月整体服务情况占比',
          'legendData': ['电话服务量', '在线服务量','短信服务量','远程服务量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [{value:535, name: '电话服务量'},{value:510, name: '在线服务量'},{value:634, name: '短信服务量'},{value:735, name: '远程服务量'}]
        },
        right5:{
          'key': 'right5',
          'type': 'single',//double or single
          'name': '当月整体服务情况占比',
          'legendData': ['电话服务量', '在线服务量','短信服务量','远程服务量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [{value:535, name: '电话服务量'},{value:510, name: '在线服务量'},{value:634, name: '短信服务量'},{value:735, name: '远程服务量'}]
        }
      }
    },
  components: {
    //mutlipleBarleft1,
    mutlipleBarleft2,
    Header,
    pie,
    tableComponents,
    Table,
    Select,
    layout,
    'v-content': content,
    doughnut
  },
  created() {
    for(let i=1; i<= this.mGetDate(); i++){
      this.xAxisdate.push(`${i}号`)
    }
    
  },
  computed: {
    combine(key){
      
    }
  },
  mounted() {
    _socket.init(this.activeMap)
    this.listen()
  },
  methods:{
    mGetDate(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var d = new Date(year, month, 0);
        return d.getDate();
    },
    taggle(item){
      _socket._close()
      _socket.init([item])
      this.listen()
    },
    listen(){
      _socket.getIO().on('vdn_hindex', function(data){
        console.log(`----vdn_hindex data: ${JSON.stringify(data)}`)
      })
    }
  }
}
</script>
<style>
html, body{
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
    }
    .content{
      width: 100%;
      height: 100%;
      /*background: url('../../bg.jpg');*/
    }
    .left,.right{
        margin-top: 13px;
        width: 28%;
        height: 97%;
        opacity:0.3;
        box-shadow: 10px 10px 5px #888888;
    }
    .left{
      margin-left: 10px;
        float: left;
        background: #c1c1c1;
    }
    .right{
      margin-right: 10px;
      float: right;
    }
    .middle{
      margin-top: 13px;
        width: 42%;
        height: 97%;
        background: #b9b9a4;
        position: absolute;
        left: 29%;
        opacity:0.2;
    }
    .right1,.right2,.right3{
        width: 100%;
        height: 33.3%;
        background: #cccc;
    }
/*html,body,.content{
  padding: 10px;
  height: 100%;
  width: 100%;
}
.monitro_color{
    color: #A39FA0;
}
el-row{
  box-sizing: border-box;
  height: 100%;
}*/
/*@import 'bootstrap/dist/css/bootstrap.min.css'
@import 'bootstrap-vue/dist/bootstrap-vue.css'*/
/*#app{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 930px;
}

.header{
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  left: 556px;
}
.monitor_content .left, .monitor_content .right{
  background: #fdf3f3;
  width: 28%;
  height: 930px;
}
.monitor_content .left{
  position:absolute;
  top: 10px;
  left: 10px;
}
.monitor_content .right{
  position:absolute;
  top: 10px;
  right: 10px;
}
.monitor_content .right .right1, .monitor_content .right .right4, .monitor_content .right .right5{
    position: absolute;
    top: -30px;
}
.monitor_content .right .right1{
  right: 240px;
  top: -50px;
}

.monitor_content .right .right2{
  height: 200px;
  width: 200px;
  position: absolute;
  right: 10px;
  top: 29px;
}
.monitor_content .right .right4{
  top:580px;
  right: 240px;
}
.monitor_content .right .right5{
  top:580px;
  right: -25px;
}
.monitor_content .right .right3{
  position: absolute;
  top:260px;
}
.monitor_content .middle{
    position: absolute;
    top: 80px;
    left: 556px;
    border-style: solid;
    border-width: 1px;
    border-color: #e2e2e2;
    border-radius: 5px;
    width: 42%;
    height: 893px;
}*/
</style>

