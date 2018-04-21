<template>
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
<style scoped>
	html, body{
			padding: 0;
			margin: 0;
			width: 100%;
			height: 100%;
		}
		.content{
			width: 100%;
			height: 100%;
			background-image: url(./ChMkJ1d2O0WIMAXYAAlR9ZT3T_8AATIkgLHn_wACVIN764.jpg);
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
</style>