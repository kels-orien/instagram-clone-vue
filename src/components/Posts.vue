<template>
    <div>
        <post
         v-for="post in allPosts"
         :key="post.id"
         :post="post">
         </post>
        </div>
</template>

<script>
import Post from './Post';
import  {userData} from '../graphql';
export default {
    name: 'Posts',
    data () {
          localStorage.setItem('users', userData.users);
        return {
            allUsers: userData.users,
            allPosts: userData.posts,
            User:{}
        }
    },
    
    components: {
        Post
    }
}
</script>



