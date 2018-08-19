<template>
      <article class="Post">
        <header>
          <div class="Post-user">
            <div class="Post-user__avatar">
              <img :src="post.postedBy.image" :alt="post.postedBy.username" />
            </div>
            <div class="Post-user__username">
              <span>{{post.postedBy.username}}</span> <div>
    </div>
            </div>
          </div>
        </header>
        <div class="Post-image">
          <div class="Post-image__bg">
            <img :alt="post.text" :src="post.image" />
          </div>
        </div>
        <section class="Post-icon">
          <a v-if="!likeState" class="Post-icon__heart" @click="likePost()"  role="button"><span class="Szr5J coreSpriteHeartOpen ">Like</span></a>
          <a v-else class="Post-icon__heart"  @click="unlikePost()" role="button"><span class="Szr5J coreSpriteHeart">Like</span></a>
          <a class="Post-icon__comment"  @click="setCommentFocus()" role="button"><span class="Szr5J coreSpriteComment">Comment</span></a>
          <a  v-if="!saveState" class="Post-icon__save" @click="savePost()"  role="button" aria-disabled="false"><span class="Szr5J coreSpriteSaveOpen">Save</span></a>
          <a v-else class="Post-icon__save" @click="savePost()"  role="button" aria-disabled="false"><span class="Szr5J coreSpriteSave">Save</span></a>
        </section>
        <div v-if="post.likes.length > 0">
          <section class="Post-likes">
              <div class="Post-likes__like"><a class="show"><span>{{ likes }}</span> likes</a></div>
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
.Post-user__avatar {
  width: 30px;
  height: 30px;
}

.Post-user__avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.Post-user__username {
  margin-left: 12px;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
}

.Post-image__bg {
  background-color: #efefef;
}

.Post-image img {
  display: block;
  width: 100%;
  max-height: 900px;
}

.Post-comment {
  padding: 16px 16px;
}
.Post-comment strong {
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
}

.Szr5J {
      display: block;
      overflow: hidden;
      text-indent: 110%;
      white-space: nowrap;
  }


.Post-icon {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
     margin-top: 4px;
     padding-left: 8px;
}

.Post-icon__heart{
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 8px;
    display: inline-block;
}

.Post-icon__comment{
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 8px;
    display: inline-block;
}


.Post-icon__save {
    background-color: transparent;
    border: 0;
    padding: 8px;
    margin-left: auto;
    float: right;
}


.Post-likes {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-bottom: 8px;
}

.Post-likes__like {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    display: block;
}
.show, .show:visited {
    font-weight: 600;
    color: #262626;
}
.coreSpriteHeartOpen {
    background-position: -564px -244px; 
    width: 26px;
    height: 23px;
}

.coreSpriteComment, .coreSpriteHeartOpen, .coreSpriteSaveOpen, .coreSpriteHeart, .coreSpriteSave{
    background-image: url(../assets/instagram-sprite.png);
}
.coreSpriteComment {
    background-position: -566px -113px; 
    height: 24px;
    width: 24px;
}
.coreSpriteSaveOpen {
    background-repeat: no-repeat;
    background-position: -566px -425px;
    height: 24px;
    width: 24px;
}
.coreSpriteSave {
    background-repeat: no-repeat;
    background-position: -131px -552px; 
    width: 24px;
    height: 24px;
}
.coreSpriteHeart {
    background-position: -564px -216px; 
    width: 29px;
    height: 25px;
}
a, a:visited {
    color: #003569;
    text-decoration: none;
}
</style>
