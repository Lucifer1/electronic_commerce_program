import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import("views/home/Home.vue")
const Category = () => import("views/category/Category.vue")
const Profile = () => import("views/profile/Profile.vue")
const Shop = () => import("views/shop/Shop.vue")

Vue.use(VueRouter)

/**
 * vue-router 3.1版本，在路由跳转的时候两次push的path地址相同时会报错
 * 这里是解决办法，重写push或replace方法
 */
const routerPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return routerPush.call(this, location).catch(error=> error)
}

const routes = [
  {
    path: "/",
    redirect: "/Home"
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/shop",
    component: Shop,
  },
]

export default new VueRouter({
  routes,
  mode: 'history',
})
