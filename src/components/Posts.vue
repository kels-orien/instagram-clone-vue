<template>
<section class="app">
    <headers></headers>
    <section class="main">
       <h4 v-if="loading">Loading...</h4>
        <post
         v-for="post in allPosts"
         :key="post.id"
         :post="post">
         </post>
    </section>
   
     </section> 
</template>

<script> 
import Post from './Post';
import  {ALL_POSTS_QUERY} from '../constants/graphql';
import {GC_USER_ID} from '../constants/settings'
import Headers from './Headers';

export default {
    name: 'Posts',
    data () {
        return {
            loading: 0,
        }
    },
     created () {
        if (localStorage.getItem(GC_USER_ID)=== null)
        {
            this.$router.push({path: '/login'})
        }
    },
    components: {
        Post,
        Headers
    },
    apollo: {
        allPosts : {
             query:ALL_POSTS_QUERY
        }
       
    }
}
</script>

<style>
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

body, button, input, textarea {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 18px;
}
</style>


