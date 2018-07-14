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

        return {
            allUsers: userData.users,
            allPosts: userData.posts
        }
        
    },
    components: {
        Post
    }
}
</script>


