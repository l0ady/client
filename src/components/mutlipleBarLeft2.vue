<template>
	<div class="column">
		<div class="main" :id="this.dbData.key"></div>
	</div>
</template>


<script>
//http://echarts.baidu.com/examples/editor.html?c=bar1
import echarts from 'echarts'
export default {
	props: {
		dbData: {
			type: Object,
			required: true
		},
		xAxisdate:{
			type: Array,
			required: true
		}
	},
	methods: {
	},
	mounted() {
	let options = {
	    title : {
	        text: this.dbData.name/*,
	        subtext: '纯属虚构'*/
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data: this.dbData.legendData
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            /*dataView : {show: true, readOnly: false},*/
	            magicType : {show: true, type: ['line', 'bar']}/*,
	            restore : {show: true},
	            saveAsImage : {show: true}*/
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : this.xAxisdate//日期
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name: this.dbData.legendData[0],
	            type:'bar',
	            data: this.dbData.seriesData[0]
	        }
	    ]
	};
	if(this.dbData.type === 'double'){
		options.series.push({
            'name': this.dbData.legendData[1],
            'type':'bar',
            'data': this.dbData.seriesData[1]
        })
	}
	this.myChart = echarts.init(document.getElementById(this.dbData.key));
	this.myChart.setOption(options);
	//this._init()
	}
}
</script>

<style scoped>
.column .main{
	margin-top: 10px;
	height: 216px;
	margin-bottom: 5px;
}
</style>