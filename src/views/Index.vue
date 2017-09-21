<template>
  <div id="view-index">
    <ul class="quick-nav">
      <li><a href="#">影院热映</a></li>
      <li><a href="#">我的</a></li>
      <li><a href="#">豆瓣时间</a></li>
      <li><a href="#">使用豆瓣APP</a></li>
    </ul>
    <section id="recommend-feed">

    </section>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
#view-index {
  margin: 0 18px;
  -webkit-text-size-adjust: 100%;
}
.quick-nav {
  overflow: hidden;
  margin: 20.0025px 0 0 0;
  padding-top: 6px;
}
ul {
  list-style: none;
}
.quick-nav>li {
  float: left;
  width: 50%;
  padding: 3px;
  box-sizing: border-box;
  font-size: 15px;
}
.quick-nav>li>a {
  background-color: #f6f6f6;
  color: #494949;
  display: block;
  text-align: center;
  line-height: 20px;
  padding: 12px 0;
  border-radius: 2px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
#recommend-feed {
  margin-right: -18px;
  margin-left: -18px;
  margin-top: 2px;
  min-height: 480px;
  color: #494949;
  -webkit-text-size-adjust: 100%;
  background: #f3f3f3;
}
</style>
