import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/PokemonTcgView'
const PokeDetails = () => import('../views/PokeDetailsView')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: { name: 'pokemonTcgView' }
  },
  {
    path: '/home',
    name: 'pokemonTcgView',
    component: Home
  },
  {
    path: '/pokemon/:pokename/:pokeid',
    name: 'pokemonDetailsView',
    component: PokeDetails
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'pokemonTcgView' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
