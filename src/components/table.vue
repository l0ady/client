<template>

	<div class="main">
		<div class="panel panel-default">
        <div class="panel-heading">当日实时话务服务数据</div>
        <!-- <div class="panel-body"> -->
          <table class="table table-bordered table-condensed">
          <thead>
              <tr>
              <th>整体来电量</th>
              <th>人工接通量</th>
              <th >IVR服务量</th>
              <th >来电呼损量呼入</th>
              <th >服务接通率</th>
            </tr>
            </thead>
        <tbody>
          <tr>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
          </tr> 
        </tbody>
      </table>
  </div>
  <div class="panel panel-default">
        <div class="panel-heading">当日各技能组服务数据</div>
          <table class="table table-striped table-bordered table-condensed">
          <thead>
              <tr>
              <th></th>
              <th>技能组1</th>
              <th>技能组1</th>
              <th>技能组1</th>
              <th>技能组1</th>
              <th>技能组1</th>
            </tr>
            </thead>
        <tbody>
          <tr>
            <td>当前排队量</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
          </tr> 
          <tr>
            <td>接起量</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
          </tr> 
          <tr>
            <td>呼损量</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
          </tr> 
          <tr>
            <td>接通率</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
          </tr> 
          <tr>
            <td>服务水平</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
          </tr>
          <tr>
            <td>平均通话时长</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
          </tr>
          <tr>
            <td>最早等待时长</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
          </tr> 
          <tr>
            <td>平均放弃时长</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
          </tr> 
        </tbody>
      </table>
  </div>
  <div class="panel panel-default">
        <div class="panel-heading">当日实时在线服务数据</div>
          <table class="table table-bordered table-condensed">
          <thead>
              <tr>
              <th>整体咨询量</th>
              <th>呼损量</th>
              <th>服务接通率</th>
              <th >日人均</th>
              <th >平均处理时长</th>
            </tr>
            </thead>
        <tbody>
          <tr>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
            <td>内容1</td>
          </tr>  
        </tbody>
      </table>
  </div>
	</div>
</template>
<script>
	//import '../assets/css/bootstrap.css'
  /*import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'*/
	

</script>
<style>
  .main{
    margin-left: 0;
  }
	.panel-default {
    	border-color: #ddd;
	}
	.panel {
	    /*margin-bottom: 20px;*/
	    background-color: #fff;
	    border: 1px solid transparent;
	    border-radius: 4px;
	    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
	    box-shadow: 0 1px 1px rgba(0,0,0,.05);
	}
	.panel-default>.panel-heading {
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
}
.panel-heading {
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
	@import 'bootstrap/dist/css/bootstrap.min.css'
</style>