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

textarea {
    -webkit-appearance: textarea;
    background-color: white;
    -webkit-rtl-ordering: logical;
    flex-direction: column;
    resize: auto;
    cursor: text;
    white-space: pre-wrap;
    word-wrap: break-word;
    border-width: 1px;
    border-style: solid;
    border-color: initial;
    border-image: initial;
    padding: 2px;
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

.Ypffh {
    background: 0 0;
    border: 0;
    color: #262626;
    font-size: inherit;
    height: 18px;
    max-height: 80px;
    outline: 0;
    padding: 0;
    resize: none;
}
input, textarea, select, button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 400 13.3333px Arial;
}
.X7cDz, .Ypffh {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
.L_LMM ._JgwE {
    padding-right: 26px;
}
.sH9wk {
    border-top: 1px solid #efefef;
    color: #999;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 14px;
    line-height: 18px;
    min-height: 56px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 16px 0;
}
._JgwE {
    margin-top: 4px;
}

.eo2As {
    padding: 0 16px;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
}
</style>
