<template>
  <div id="app">
    <!-- <bo-nav class='bottom-nav'  v-if='isNavShow'></bo-nav> -->
    <bo-nav class='bottom-nav'   v-if='$route.meta.isNav'></bo-nav>
    <router-view/>
  </div>
</template>

<script>
  import BoNav from '@/components/nav'
  import {mapState} from 'vuex'
export default {
  name: 'App',
  components:{
      BoNav
    },
   computed:{
  ...mapState([
      'isNavShow',
    ])

  },
}
</script>

<style>
#app {
  width: 100%;
    height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.bottom-nav{
 /* position: fixed;
  left: 0;
  width: 100%;
  bottom: 0;*/
}
</style>
