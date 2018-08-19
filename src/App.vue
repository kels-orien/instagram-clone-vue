<template>
  <div id="app">
 <router-view></router-view>
    </div>
     
</template>

<script>
import Headers from './components/Headers'
import Posts from './components/Posts'
import Login from './components/Login'
export default {
  name: 'App',
  components: {
      Headers,
      Posts,
      Login
    }
}
</script>

<style>



</style>
