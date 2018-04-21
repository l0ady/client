<template>
	<div class="doughnut">
		<div class="main" :id="this.dbData.key" :style="this.dbData.style"></div>
	</div>
</template>


<script>
//http://echarts.baidu.com/examples/editor.html?c=gauge
import echarts from 'echarts'
export default {
	props: {
		dbData: {
			type: Object,
			required: true
		}
	},
	methods: {
	},
	mounted() {
	let options = {
	    tooltip : {
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    detail:{
        	fontSize: 11,
    	},
	    series: [
	        {
	            name: this.dbData.name,
	            type: 'gauge',
	            min: this.dbData.min,
	            max: this.dbData.max,
	            detail: {formatter:'{value}%'},
	            data: [{value: this.dbData.legendData}]
	        }
	    ]
	};
	this.myChart = echarts.init(document.getElementById(this.dbData.key));
	this.myChart.setOption(options);
	//this._init()
	}
}
</script>

<style scoped>
/*.doughnut .main{
	height: 320px;
    width: 330px;
    margin-top: 10px;
}*/ 
/*.gaugeTitle{
	position: relative;
	left: 10px;
    top: -65px;
    font-size: 18px;
    font-weight: 700;
    width: 310px;
    text-align: center;

}*/
</style>