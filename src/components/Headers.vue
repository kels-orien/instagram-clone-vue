<template>
  <nav class="Nav">
     <div class="Nav-menus">
        <div class="Nav-brand">
            <a class="Nav-brand-logo" href="">
                Instagram
             </a>
        </div>
     </div>
</nav>     
</template>

<script>
export default {
  name: 'Headers'
}
</script>
<style>
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
  background-repeat: no-repeat;
  height: 35px;
  width: 176px;
  text-indent: -20000%;
  background-image: url(../assets/instagram-sprite.png);
}
</style>