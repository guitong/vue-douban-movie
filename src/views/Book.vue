<template>
  <div id="view-movie">
    <h1>Books</h1>
  </div>
</template>

<script>
import ajax from '@/util/ajax'
import XDate from 'xdate'
export default {
  name: 'movie',
  mounted () {
    console.log('book mounted')
    let data = {}
    let param = {}
    param.busInfo = encodeURI(JSON.stringify(data))
    param.appKey = 'C2F9BEBCE8DD3CEDFF8016A4B8248FF5'
    param.sign = 'C15F529FEE267A8ED31696F8DDE50321'
    param.timeStamp = new XDate().toString('yyyyMMddhhmmss')
    ajax('POST', '/itemRest/category/query', param)
      .then(
        (res) => { console.log(res) }
      )
  }
}
</script>

<style scoped>
h1 {
  margin-top: 60px;
}
</style>
