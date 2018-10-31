<template>
  <div class="home">
    <add-goods></add-goods>
    <gods-list></gods-list>
  </div>
</template>

<script>
import AddGoods from "./AddGoods.vue"
import GoodsList from "./GoodsList.vue"

export default {
  name: 'Home',
  components:{
    'add-goods':AddGoods,
    'gods-list':GoodsList
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
