<template>
	<div class="pie">
		<div class="main" :id="this.dbData.key" ></div>
	</div>
</template>


<script>
//http://echarts.baidu.com/examples/editor.html?c=pie-rich-text
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
    title: {
        text: this.dbData.name,
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    /*legend: {
        //orient: 'vertical',
        //top: 'middle',
        bottom: 1,
        right: 'auto',
        padding:20,
        data: this.dbData.legendData
    },*/
    series : [
        {
            type: 'pie',
            radius : '55%',
            center: ['50%', '45%'],
            selectedMode: 'single',
            data: this.dbData.seriesData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 25,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
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
.pie .main{
	height: 350px;
	width: 409px;
}
</style>