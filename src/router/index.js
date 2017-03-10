import Vue from 'vue'
import Router from 'vue-router'

const Login = resolve => require(['../components/Login.vue'], resolve)
const Seats = resolve => require(['../components/Seats.vue'], resolve)
const Register = resolve => require(['../components/Register.vue'], resolve)
const Payment = resolve => require(['../components/Payment.vue'], resolve)
const checkOrder = resolve => require(['../components/checkOrder.vue'], resolve)
const orderDetail = resolve => require(['../components/orderDetail.vue'], resolve)

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
    },
    {
      path: '/payment/',
      name: 'payment',
      component: Payment
    },
    {
      path: '/',
      name:'index',
      component:Register
    }
  ]
})
