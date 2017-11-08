<template>
  <div id="view-movie">
    <h1>Status</h1>
    <ul>
      <li>{{ count }}</li>
    </ul>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <p>
      <button>Square</button>
    </p>
  </div>
</template>

<script>
// import ajax from '@/util/ajax'
import { mapState } from 'Vuex'
export default {
  name: 'movie',
  data () {
    return {
      localCount: 0
    }
  },
  mounted () {
    console.log('status mounted')
  },
  computed: mapState({
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 60px;
}
</style>
