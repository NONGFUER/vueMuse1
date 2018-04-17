import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/gisapp/Home'
import Jipan from '@/gisapp/jipan'
import AddJP from '@/gisapp/AddJP'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/jipan',
      name: 'Jipan',
      component: Jipan
    },
    {
      path: '/addJP',
      name: 'AddJP',
      component: AddJP
    }

  ]
})
