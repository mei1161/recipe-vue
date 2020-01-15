import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Recipe from '@/components/Recipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:id',
      name: 'Recipe',
      component: Recipe
    }
  ]
})
