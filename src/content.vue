<template>
    <el-row style="{height: 100%}">
      <el-col :span="6">
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
      </el-col>
      <el-col :span="12">
        <div class="header" >
          <Header :phoneCallIn="IDX_01_10_001" :phoneCallout="IDX_01_10_004" :IVRCount="IVRCount" :chatCount="chatCount" :activecc="activecc"/>
        </div>
        <div class="middle">
          <Table/>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="right">
          <div class="top-right">
            <div class="right1">
             <doughnut :dbData="right1" key="qc_right1"/>
             <div class="right1name"><span>{{right1.name}}</span></div>
            </div>
            <div class="right2">
             <Select :activeMap="activeMap" @taggle="taggle"/>
            </div>
          </div>
          <div class="mid-right">
            <div class="right3">
              <pie :dbData="right3" key="qc_right3"/>
            </div>
          </div>
          <div class="down-right">
            <div class="right4">
              <doughnut :dbData="right4" key="qc_right4"/>
              <div class="right4name"><span>{{right4.name}}</span></div>
            </div>
            <div class="right5">
              <doughnut :dbData="right5" key="qc_right5"/>
              <div class="right5name"><span>{{right5.name}}</span></div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    </el-row>
</template>
<style>
.el-col-6 {
    width: 25%;
    height: 100%;
}
.left{
  padding: 0px;
  /*border-right: 2px solid #606060;*/
 /* background-color: #a6b9e4;*/
  width: 100%;
}
.header{
 /* background-color: red;*/
  margin: 0 5px;
  padding: 0cm 0.3cm 0.3cm 0.3cm;
  height:60px;
}
.middle{
    margin: 0 5px;
    padding: 0cm 0.3cm 0.3cm 0.3cm;
    height: 80%;
    /*background-color: red;*/
}
.right{
  /*background-color: black;*/
  
  /*border-left: 2px solid #606060;*/
 /* background-color: #a6b9e4;*/
  width: 100%;
  height: 894px;
}
.top-right{
  padding: 0px;
  height: 30%;
  width: 100%;
}
.mid-right, .down-right{
  padding: 0px;
  height: 40%;
  width: 100%;
}
.down-right{
  height: 30%;
}
.right1name
{
    position: relative;
    top: -1.7cm;
    font-size: 19px;
    left: 2.5cm;
}
.right2{
    position: relative;
    top: -7.9cm;
    right: -7.5cm;
    width: 45%;
}
.right3{
    position: absolute;
    top: 8.2cm;
    right: 1.8cm;
}
.right4, .right5{
    position: absolute;
    top: 15.8cm;
    right: 5.5cm;
}
.right4name, .right5name {
    width: 50%;
    text-align: center;
    position: relative;
    top: -1.7cm;
    left: 1.6cm;
    font-size: 18px;
  }
 .right5{
  right: -0.3cm;
 }
</style>

<script>
import pie from './components/pie'
import mutlipleBarleft2 from './components/mutlipleBarleft2'
import Header from './components/header'
import doughnut from './components/doughnut'
import Table from './components/table'
import tableComponents from './components/tableComponents'
import Select from './components/select'
import element from './components/element'

import {_socket} from ".//socketUtil.js" 
//import _socket from './socketUtil'




export default {
  name: 'App',
  data() {
      return {
        'chatCount': 0,
        'IVRCount': 0,
        //-----------------vdn历史-----------------------
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
        //---------------skill历史------------------------
        'IDX_03_04_002': 0,//skill当天通话次数
        'IDX_03_04_003': 0,//skill当天呼损量
        'IDX_03_05_001': 0,//skill当天接通率
        'IDX_03_06_005': 0,//skill当天平均通话时长
        'IDX_03_06_007': 0,//skill当天最早等待时长
        'IDX_03_06_002': 0,//skill当天平均放弃时长
        //---------------skill实时-------------------------
        'IDX_03_02_001': 0,//skill签入人数
        'IDX_03_02_005': 0,//skill示忙人数
        'IDX_03_02_003': 0,//skill示闲人数
        'IDX_03_02_007': 0, //skill小休人数
        'IDX_03_01_002': 0,//skill排队人数
        'skill_rindex': [],
        //---------------vdn实时---------------------------
        'IDX_01_04_005': 0,//vdn签入人数
        'IDX_01_04_006': 0,//vdn空闲人数
        'IDX_01_04_016': 0,//vdn小休人数
        'IDX_01_04_011': 0,//vdn工作态人数
        'vdn_rindex': [],
        xAxisdate:[],//存储一个月的每一天
        'everyByMonth':[],
        activecc:{"value": "北京呼叫中心", "country": "beijing_1"},//当前选中的机构
        skills:[],//{技能组id:技能组名称}
        activeMap: [
        {"value": "厦门呼叫中心", "country": "beijing_2"}],
        middle:[
          {'heading':'当日实时话务服务数据', 'thead': ['整体来电量','人工接通量','IVR服务量','来电呼损量呼入','来电呼损量呼入','服务接通率']},
        ],
        left1:{
          'key': 'left1',
          'type': 'double',//double or single
          'name': '当月电话统计',
          'legendData': ['来电量','呼损量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [[,18,33,22,55,98], [,20, 65, 78,110,29]]
        },
        left2:{
          'key': 'left2',
          'type': 'double',//double or single
          'name': '当月在线统计',
          'legendData': ['咨询量','呼损量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [[23,78,99,115], [15, 24, 69, 178]]
        },
        left3:{
          'key': 'left3',
          'type': 'single',//double or single
          'name': '当月短信统计',
          'legendData': ['发送量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [[22, 69, 58, 32]]
        },
        left4:{
          'key': 'left4',
          'type': 'single',//double or single
          'name': '当月远程统计',
          'legendData': ['远程量'],
          'color': ['#5793f3', '#d14a61', '#675bba'],
          'seriesData': [[0, 56, 78, 33, 45]]
        },
        right1:{
          'key': 'right1',
          'name': '当月电话接通率',
          'legendData': 98.2,
          'max':'100',
          'min':'60',
          'style': { height: 310 + 'px', width: 320 + 'px', marginTop: 10+'px' }/*,
          'seriesData': [{value:535, name: '电话服务量'},{value:510, name: '在线服务量'},{value:634, name: '短信服务量'},{value:735, name: '远程服务量'}]*/
        },
        /*right2:{
          'key': 'right2',
          'name': '当月电话接通率',
          'legendData': 98.2,
          'max':'100',
          'min':'60',
          'style': { height: 310 + 'px', width: 320 + 'px', marginTop: 10+'px' }
        },*/
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
          'name': '当月呼入接通率',
          'legendData': 98.2,
          'max':'100',
          'min':'60',
          'style': { height: 290 + 'px', width: 260 + 'px', marginTop: 10+'px' }
        },
        right5:{
          'key': 'right5',
          'name': '当月呼出接通率',
          'max':'100',
          'min':'60',
          'legendData': 97.0,
          'style': { height: 290 + 'px', width: 260 + 'px', marginTop: 10+'px' }
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
    'v-element': element,
    doughnut
  },
  created() {
    for(let i=1; i<= this.mGetDate(); i++){
      this.xAxisdate.push(`${i}号`)
      this.everyByMonth.push(0)
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
      this.activecc = item
      _socket.init([item])
      this.listen()
    },
    listen(){
      _socket.getIO().on('vdn_hindex', function(data){
        console.log(`----vdn_hindex data: ${JSON.stringify(data)}`)
      })
      _socket.getIO().on('skill_hindex', function(data){
        console.log(`----skill_hindex data: ${JSON.stringify(data)}`)
      })
      /*{"message":"success","region":"","level":"","retcode":"0","vdn":"","batch":"beijing_1524215315034","yyyyMMdd":"2018420","overtime":1524215335034,"result":[{"id":"2","idxs":[{"id":"IDX_01_04_005","val":"6"},{"id":"IDX_01_04_006","val":"1"},{"id":"IDX_01_04_016","val":"0"},{"id":"IDX_01_04_011","val":"3"}]}]}*/
      _socket.getIO().on('vdn_rindex', function(data){
        /*console.log(`----vdn_rindex data: ${JSON.stringify(data)}`)*/
        this.vdn_rindex = data.result[0].idxs
      })
     /* {"message":"","retcode":"0","result":[{"id":"1","idxs":[{"id":"IDX_03_02_001","val":"6"},{"id":"IDX_03_02_005","val":"1"},{"id":"IDX_03_02_003","val":"1"},{"id":"IDX_03_02_007","val":"0"},{"id":"IDX_03_01_002","val":"0"}]},{"id":"2","idxs":[{"id":"IDX_03_02_001","val":"6"},{"id":"IDX_03_02_005","val":"1"},{"id":"IDX_03_02_003","val":"1"},{"id":"IDX_03_02_007","val":"0"},{"id":"IDX_03_01_002","val":"0"}]},{"id":"3","idxs":[{"id":"IDX_03_02_001","val":"6"},{"id":"IDX_03_02_005","val":"1"},{"id":"IDX_03_02_003","val":"1"},{"id":"IDX_03_02_007","val":"0"},{"id":"IDX_03_01_002","val":"0"}]},{"id":"4","idxs":[{"id":"IDX_03_02_001","val":"6"},{"id":"IDX_03_02_005","val":"1"},{"id":"IDX_03_02_003","val":"1"},{"id":"IDX_03_02_007","val":"0"},{"id":"IDX_03_01_002","val":"0"}]},{"id":"5","idxs":[{"id":"IDX_03_02_001","val":"0"},{"id":"IDX_03_02_005","val":"0"},{"id":"IDX_03_02_003","val":"0"},{"id":"IDX_03_02_007","val":"0"},{"id":"IDX_03_01_002","val":"0"}]}]}*/
      _socket.getIO().on('skill_rindex', function(data){
        /*console.log(`----skill_rindex data: ${JSON.stringify(data)}`)*/
        this.skill_rindex = data.result
      })
    }
  }
}
</script>

