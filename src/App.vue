<template>
  <div id="app">
    

 <section class="app">
    <headers></headers>
    <section class="main">
       <posts></posts>
    </section>
   
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
  padding-top: 120px;
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


.Nav-brand-logo {
  display: block;
  background-position: -98px -317px;
  background-image: url(./assets/instagram-sprite.png);
  background-repeat: no-repeat;
  height: 35px;
  width: 176px;
  text-indent: -20000%
}
.Post {
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin-bottom: 60px;
}

.Post-user {
  display: flex;
  padding: 16px;
  align-items: center;
}
.Post-user-avatar {
  width: 30px;
  height: 30px;
}

.Post-user-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.Post-user-nickname {
  margin-left: 12px;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
}

.Post-image-bg {
  background-color: #efefef;
}

.Post-image img {
  display: block;
  width: 100%;
  max-height: 900px;
}

.Post-caption {
  padding: 16px 16px;
}
.Post-caption strong {
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
}

.vjs-fade-out {
  display: none;
  visibility: hidden;
  opacity: 0;
}
</style>
