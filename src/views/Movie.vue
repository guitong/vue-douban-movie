<template>
  <div id="view-movie">
    <list-box
      v-bind="theater"
    >
    </list-box>
    <list-box
      v-bind="coming"
    >
    </list-box>
    <list-box
      v-bind="top"
    >
    </list-box>
    <!-- footer -->
    <download-app></download-app>
  </div>
</template>

<script>
import ajax from '@/util/ajax'
import listBox from '@/components/List'
import Footer from '@/components/Footer'
export default {
  name: 'movie',
  data () {
    return {
      theater: {
        category: '影院热映',
        movieList: []
      },
      coming: {
        category: '即将上映',
        movieList: []
      },
      top: {
        category: 'Top250',
        movieList: []
      }
    }
  },
  methods: {
    test (str) {
      console.log(str)
    }
  },
  created () {
    ajax('GET', '/v2/movie/in_theaters')
      .then(
        (res) => {
          let dataList = res.subjects
          this.theater.movieList = dataList
        },
        (err) => { console.log(err) }
      )
    ajax('GET', '/v2/movie/coming_soon')
      .then(
        (res) => {
          let dataList = res.subjects
          this.coming.movieList = dataList
        },
        (err) => { console.log(err) }
      )
    ajax('GET', '/v2/movie/top250', {start: 0, count: 10})
      .then(
        (res) => {
          let dataList = res.subjects
          this.top.movieList = dataList
        },
        (err) => { console.log(err) }
      )
  },
  mounted () {
    // console.log('mounted')
  },
  components: {
    'list-box': listBox,
    'download-app': Footer
  }
}
</script>

<style scoped>
h1 {
  margin-top: 60px;
}
</style>
