import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Home = () => import("views/home/Home.vue")
const Category = () => import("views/category/Category.vue")
const Shop = () => import("views/shop/Shop.vue")
const Profile = () => import("views/profile/Profile.vue")

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shop",
    component: Shop
  },
  {
    path: "/profile",
    component: Profile
  }
]

export default new VueRouter({
  routes,
  mode: "history"
})
