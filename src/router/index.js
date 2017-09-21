import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Movie from '@/views/Movie'
import Book from '@/views/Book'
import Status from '@/views/Status'
import Group from '@/views/Group'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/index', name: 'Index', component: Index },
    { path: '/movie', name: 'Movie', component: Movie },
    { path: '/book', name: 'Book', component: Book },
    { path: '/status', name: 'Status', component: Status },
    { path: '/group', name: 'Group', component: Group },
    { path: '/', redirect: '/index' }
  ]
})
