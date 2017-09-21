<template>
  <div class="list-box">
    <header class="box-header">
      <h2>{{ category }}</h2>
      <a href="#">更多</a>
    </header>
    <div class="box-content">
      <ul class="row items">
        <li
          class="item item__movie"
          v-for="movie in movieList"
          :key="movie.id"
        >
          <a href="/movie/subject/25808075?refer=home">
            <div class="item-poster"
              :style="getImgUrl(movie.images.small)"
            >
            </div>
            <span class="item-title">{{ movie.title }}</span>
            <div class="item-rating">
              <div class="rank">
                <span class="rating-stars" data-rating="3.5">
                  <span class="rating-star" :class="[getStars(movie.rating.stars)[0] ? 'rating-star-small-full' : 'rating-star-small-gray']"></span>
                  <span class="rating-star" :class="[getStars(movie.rating.stars)[1] ? 'rating-star-small-full' : 'rating-star-small-gray']"></span>
                  <span class="rating-star" :class="[getStars(movie.rating.stars)[2] ? 'rating-star-small-full' : 'rating-star-small-gray']"></span>
                  <span class="rating-star" :class="[getStars(movie.rating.stars)[3] ? 'rating-star-small-full' : 'rating-star-small-gray']"></span>
                  <span class="rating-star" :class="[getStars(movie.rating.stars)[4] ? 'rating-star-small-full' : 'rating-star-small-gray']"></span>
                </span>
                <span>{{ movie.rating.average }}</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listBox',
  props: ['category', 'movieList'],
  data () {
    return {
      name: '影院热映',
      stars: [0, 0, 0, 0, 0]
    }
  },
  methods: {
    getImgUrl (url) {
      return 'background-image: url(' + url + '?imageView2/0/q/80/w/9999/h/400/format/jpg)'
    },
    getStars (star = '00') {
      star = Number(star.split('')[0])
      let starList = this.stars.map((el, index) => {
        return index < star
      })
      return starList
    },
    // 过滤评分为0的电影
    notEmpty (movieList) {
      return movieList.filter((movie) => {
        return movie.rating.average !== 0
      })
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>

<style scoped>
.list-box:first-child {
  padding-top: 10px;
}
.list-box {
  margin: 0;
  overflow: hidden;
  background-color: #fff;
}
.list-box {
  text-align: left;
}
.box-header {
  padding: 0 1.12rem;
}
.list-box h2 {
  display: inline-block;
  min-width: 4em;
  margin-bottom: 0;
  font-size: 18px;
  color: #111;
  padding-left: 0;
  padding-bottom: 0;
  font-size: 1.06rem;
}
.list-box header a {
  float: right;
  font-size: .9rem;
  line-height: 1.5rem;
}
.box-content {
  margin-bottom: -1.12rem;
}
.row {
  border-bottom: 1px solid #F2F2F2;
  padding: 15px 0 43px 0;
}
.items {
  font-size: 0;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.item:first-child {
  margin-left: 1.12rem;
}
.item {
  margin-left: 0.48rem;
}
.item {
  display: inline-block;
  vertical-align: top;
  width: 100px;
  text-align: center;
}
.items>* {
  font-size: .94rem;
  white-space: normal;
}
.item-poster {
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  height:142px;
}
.item a {
  color: #111;
}
.item:not(.item__celebrity) .item-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item__movie .item-title {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.item-title {
  display: block;
  margin-top: .6rem;
  line-height: .94rem;
}
.item-rating {
  color: #aaa;
  line-height: .94rem;
  margin-top: .3rem;
  font-size: .72rem;
}
.rating-stars {
  display: inline-block;
  vertical-align: middle;
}
.rating-stars .rating-star {
  display: inline-block;
  margin-right: 1px;
  background-color: transparent;
  background-repeat: no-repeat;
}
.rating-star-small-gray {
  background-image: url(../assets/star-gray.png);
}
.rating-star-small-full {
  background-image: url(../assets/ministar.png);
}
.rating-star-small-full, .rating-star-small-half, .rating-star-small-gray {
  width: 10px;
  height: 10px;
  background-size: 10px 10px;
}
</style>
