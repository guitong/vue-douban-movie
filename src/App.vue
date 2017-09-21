<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header-box></header-box>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'app',
  components: {
    'header-box': Header
  }
}
</script>

<style>
* {margin: 0;padding: 0;}
h2 {
  color: #aaa;
  margin: 0 0 15px;
  font-size: 15px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  padding-top: 47.0025px;
  margin: 0 auto;
}
body {
  margin: 0;
  color: #111;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial,sans-serif;
  position: relative;
  text-align: center;
}
a {
  text-decoration: none;
}
</style>
