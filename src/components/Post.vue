<template>
   
      <article class="Post">
        <header>
          <div class="Post-user">
            <div class="Post-user-avatar">
              <img :src="post.postedBy.image" :alt="post.postedBy.username" />
            </div>
            <div class="Post-user-nickname">
              <span>{{post.postedBy.username}}</span> <div>
      

    </div>
            </div>
          </div>
        </header>
        <div class="Post-image">
          <div class="Post-image-bg">
            <img :alt="post.text" :src="post.image" />
          </div>
        </div>
        <div class="Post-caption">
          <strong>{{post.postedBy.username}}</strong> {{post.text}}
        </div>
        <CreateComment :postId="post.id" :userId="post.postedBy.id">
        </CreateComment>
      </article>
</template>

<script>
import CreateComment from './CreateComment';
 import { GC_USER_ID} from '../constants/settings'
 import { ALL_POSTS_QUERY, CREATE_COMMENT_MUTATION } from '../constants/graphql'
export default {
    name: 'Post',
    props: ['post'],
    components: {
        CreateComment
    },
    methods: {
      saveComment () {
        console.log("comment", this.text);
        console.log("comment", this.postId);
         console.log("comment", this.userId);
        const {text} = this.$data
        const userId = this.userId
        const postId = this.postId
        this.$apollo.mutate({
            mutation: CREATE_COMMENT_MUTATION,
            variables: {
                text,
                postId,
                userId
            },
            update: (store,{data: { createComment}}) => {
                this.updateStoreAfterComment(store, createComment, postId)
            }
         })
        this.text = "";
        
      },
      updateStoreAfterComment(store, createComment, postId) {
          const data = store.readQuery({query: ALL_POSTS_QUERY})

            const commentedPost = data.allPosts.find(post => post.id === postId)
            commentedPost.comments = createComment.post.comments
            store.writeQuery({ query: ALL_POSTS_QUERY, data })
        }
       
    }
}
</script>

<style>

</style>
