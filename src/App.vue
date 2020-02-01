<template>
  <div id="app">
    <router-view />
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar";

  export default {
    name: 'app',
    components: {
      MainTabBar,
    }
  }
</script>

<style>
  @import "assets/css/base.css";

  .main-tab-bar{
    position: absolute;
    z-index: 9;
  }

</style>
