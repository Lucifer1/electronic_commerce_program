<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper class="home-swiper" :banners="banners"></home-swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import HomeSwiper from 'views/home/childComps/HomeSwiper'

  import {getHomeData, getGoodsData} from "network/home";

  export default {
    name: "home",
    components: {
      NavBar,
      HomeSwiper,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
      }
    },
    created() {
      this.getMultiData()

      this.getGoodsData('pop')
      this.getGoodsData('new')
      this.getGoodsData('sell')
    },
    methods: {
      getMultiData() {
        getHomeData().then(res => {
          this.banners = res.data.banner.list;
          console.log(this.banners);
          this.recommends = res.data.recommend.list;
        })
      },
      getGoodsData(type) {
        const page = this.goods[type].page + 1

        getGoodsData(type, page).then(res => {
          // 将网络请求得到都数组塞到 定义的新数组中 保留数据
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // 完成上拉加载更多
          // this.$refs.scroll.finishPullUp()
        })
      },

      swiperImageLoad() {
      }
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
    padding-top: 44px;
  }

  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background-color: var(--color-tint);
    color: #ffffff;

    z-index: 9;
  }

  .home-swiper {
    width: 100%
  }
</style>
