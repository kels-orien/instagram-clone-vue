<template>
  <div id="app">
    

 <section class="app">
    <headers></headers>
    <posts></posts>
     </section> 
    </div>
     
</template>

<script>
import Headers from './components/Headers'
import Posts from './components/Posts'
export default {
  name: 'App',
  components: {
      Headers,
      Posts
    }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.app {
  background: #fafafaa8;
  min-height: 100vh;
  min-width: 100vh;
}
 .main {
  width: 50%;
  margin: 0 auto;
}
.Nav {
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  -webkit-transition: height 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
  height: 77px;
}

.Nav-menus {
  display: flex;
  flex-direction: row;
  height: 77px;
  /* justify-content: center; */
  width: 70%;
  margin: 0 auto;
  padding: 26px 40px;
}

.Nav-brand {
  /* height: auto; */
}

.Nav-brand-logo {
  display: block;
  background-position: -98px -317px;
  background-image: url(./assets/instagram-sprite.png);
  background-repeat: no-repeat;
  height: 35px;
  width: 176px;
  text-indent: -20000%
}
</style>
