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
        <div v-if="post.comments.length > 0">
           <comment 
            v-for="comment in post.comments"
            :key="comment.id"
            :comment="comment">
        </comment>
        </div>
        <CreateComment :postId="post.id" :userId="post.postedBy.id">
        </CreateComment>
      </article>
</template>

<script>
import CreateComment from './CreateComment';
import Comment from './Comment';
export default {
    name: 'Post',
    props: ['post'],
    components: {
        CreateComment,
        Comment
    } ,
    created () {
        console.log("post: ", this.post)
    }
}
</script>

<style>

</style>
