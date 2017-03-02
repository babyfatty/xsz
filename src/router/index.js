import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login.vue'
import Seats from 'components/Seats.vue'
import Register from 'components/Register.vue'
import Payment from 'components/Payment.vue'
import checkOrder from 'components/CheckOrder.vue'
import orderDetail from 'components/OrderDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/seats',
      name: 'seats',
      component: Seats
    },
    {
      path: '/checkorder/',
      name: 'checkorder',
      component: checkOrder
    },
    {
      path: '/orderdetail/',
      name: 'orderdetail',
      component: orderDetail
    }
  ]
})
