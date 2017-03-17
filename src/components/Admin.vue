<template>
	<div class="table-responsive">
		<table class="table table-striped">
		  <thead>
	        <tr>
	          <th>姓名</th>
	          <th>报名课程</th>
	          <th>付款金额</th>
	          <th>邮寄地址</th>
	          <th>下单时间</th>
	          <th>订单号</th>
	        </tr>
	      </thead>
<!-- 		<div v-for="order in orders">
			{{order}}
		</div> -->
			<tbody>
				<tr v-for="order in orders">
					<td>
						{{order.uname}}
					</td>
					<td>
						{{order.chosen}}
					</td>
					<td>
						{{order.amount}}
					</td>
					<td>
						{{JSON.parse(order.adress).name}}，{{JSON.parse(order.adress).tel}}，
						{{JSON.parse(order.adress).city}}市{{JSON.parse(order.adress).district}}区，
						{{JSON.parse(order.adress).detail}}
					</td>
					<td>
						<span>{{new Date(order.createdAt).getFullYear()}}</span>/<span>{{new Date(order.createdAt).getMonth()+1}}</span>/<span>{{new Date(order.createdAt).getDate()}}</span>-<span>{{new Date(order.createdAt).getHours()>9?new Date(order.createdAt).getHours():"0"+new Date(order.createdAt).getHours()}}</span>:<span>{{new Date(order.createdAt).getMinutes()>9?new Date(order.createdAt).getMinutes():"0"+new Date(order.createdAt).getMinutes()}}</span>:<span>{{new Date(order.createdAt).getSeconds()>9?new Date(order.createdAt).getSeconds():"0"+new Date(order.createdAt).getSeconds()}}</span>
					</td>
					<td>
						{{order.transID}}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default {
	  name: 'admin',
	  data () {
	  	return{
	  		orders:[]
	  	}
	  },
	  mounted(){
	  	this.$http.get('http://xesfun.com/xsz/api/viewOrders').then((res)=>{
	  		this.orders = res.data
	  	})
	  }
	}
</script>
<style scoped>
	
</style>