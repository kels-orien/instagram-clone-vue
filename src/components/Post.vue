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
        <section class="ltpMr Slqrh">
          <a v-if="!likeState" class="fr66n tiVCN" @click="likePost()"  role="button"><span class="Szr5J coreSpriteHeartOpen ">Like</span></a>
          <a v-else class="fr66n tiVCN"  @click="unlikePost()" role="button"><span class="Szr5J coreSpriteHeart">Like</span></a>
          <a class="_15y0l OV9Wd"  @click="setCommentFocus()" role="button"><span class="Szr5J coreSpriteComment">Comment</span></a>
          <a  v-if="!saveState" class="wmtNn fscHb " @click="savePost()"  role="button" aria-disabled="false"><span class="Szr5J coreSpriteSaveOpen">Save</span></a>
          <a v-else class="wmtNn fscHb " @click="savePost()"  role="button" aria-disabled="false"><span class="Szr5J coreSpriteSave">Save</span></a>
        </section>
        <div v-if="post.likes.length > 0">
          <section class="EDfFK ygqzn">
                                  <div class="HbPOm y9v3U"><a class="zV_Nj" href=""><span>{{ likes }}</span> likes</a></div>
                                 </section>
          </div>
        <div v-if="post.comments.length > 0">
           <comment 
            v-for="comment in post.comments"
            :key="comment.id"
            :comment="comment">
        </comment>
        </div>
        <CreateComment :postId="post.id" :userId="post.postedBy.id"  ref="commentInput">
        </CreateComment>
      </article>
</template>

<script>
import {ALL_POSTS_QUERY, CREATE_LIKE_MUTATION, DELETE_LIKE_MUTATION } from '../constants/graphql'
import { GC_USER_ID} from '../constants/settings'
import CreateComment from './CreateComment';
import Comment from './Comment';
export default {
    name: 'Post',
    props: ['post'],
    data () {
       return {
         likeState:false,
         saveState:false,
         focus:false
       }
    },
     created () {
        console.log("post: ", this.post)
        if (this.post.likes.length > 0) {
           this.likeState = true;
        }
     },
     computed: {
      likes () {
        const likes =  this.post.likes.length;
        return likes
      }
    },
    components: {
        CreateComment,
        Comment
    },
    methods: {
      setCommentFocus () {
           this.$refs.commentInput.focus()
      },
      likePost () {
            this.likeState = true; 
            const postId = this.post.id
            const userId = this.post.postedBy.id

            this.$apollo.mutate({
            mutation: CREATE_LIKE_MUTATION,
            variables: {
                postId,
                userId
            },
            update: (store, {data: { createLike}}) => {
                this.updateStoreAfterLike(store, createLike, postId)
            }
         })
      },
      unlikePost () {
        this.likeState = false;
        if (this.post.likes.length > 0) {
            const userId = localStorage.getItem(GC_USER_ID);
            const userlike = this.post.likes.find(likes => likes.user.id === userId)
            console.log("like: ", userlike)
            const likeId = userlike.id
            this.$apollo.mutate({
            mutation: DELETE_LIKE_MUTATION,
            variables: {
                likeId
            },
            update: (store) => {
                this.updateStoreAfterDelete(store, likeId)
            }
         })
        }
      
      },
      updateStoreAfterLike(store, createLike, postId) {
          const data = store.readQuery({query: ALL_POSTS_QUERY})
            const likedPost = data.allPosts.find(post => post.id === postId)
            console.log("likedPost: ", likedPost)
            console.log("createLike: ", createLike)
            likedPost.likes.push(createLike)
            store.writeQuery({ query: ALL_POSTS_QUERY, data })
        },
        updateStoreAfterDelete(store, likeId) {
          const data = store.readQuery({query: ALL_POSTS_QUERY})
          console.log("Like ID: ", likeId)
          const post = data.allPosts.find(post => post.id === this.post.id)
          
          const removelike = post.likes.filter(like => like.id === likeId);
          console.log("likes removed: " ,removelike);
          post.likes.splice(post.likes.indexOf(removelike), 1)
          console.log("post after splice: ", post)
          store.writeQuery({ query: ALL_POSTS_QUERY, data })
        },
      savePost () {
        //this.saveState === false ? true : false;
        if (this.saveState === false) {
          this.saveState = true;
        }
        else {
          this.saveState = false;
        }
      }
    }
   
}
</script>

<style>

</style>
