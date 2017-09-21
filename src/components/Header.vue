<template>
  <div class="com-header">
    <div class="header-main">
      <a href="/"><h1>豆瓣</h1></a>
      <nav>
        <ul>
          <li><a href="/movie" style="color: #2384E8;">电影</a></li>
          <li><a href="/book" style="color: #9F7860;">图书</a></li>
          <li><a href="/status" style="color: #E4A813;">广播</a></li>
          <li><a href="/group" style="color: #2AB8CC;">小组</a></li>
        </ul>
        <span></span>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style>
.com-header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  background: #fff;
}
.header-main {
  border-bottom: 0.9975px solid #f3f3f3;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 18px;  
  background: #ffffff;
  height: 47.0025px;
  box-sizing: border-box;
  display: -webkit-box;
  display: flex;
}
.header-main>a {
  font-size: 0;
}
.com-header a {
    text-decoration: none;
}
.header-main>* {
    white-space: nowrap;
}
a {
    color: #42bd56;
    text-decoration: none;
}
.header-main h1 {
    margin: 0;
    padding: 0;
    color: #00b600;
    font-size: 0;
    background: url(../assets/logo.png) no-repeat;
    background-size: cover;
    height: 21.9975px;
    width: 45.9975px;
    display: inline-block;
}
.header-main nav>* {
    vertical-align: middle;
}
.header-main nav>*, .header-main nav li {
    display: inline-block;
}
.com-header li, .com-header ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.header-main nav li {
    font-size: 15px;
    margin-right: 19px;
}
.header-main nav span {
    font-size: 0;
    background: url(../assets/search.png) no-repeat;
    background-size: cover;
    width: 24.57143px;
    height: 18.28571px;
    margin-top: 4px;
    position: relative;
}
</style>
