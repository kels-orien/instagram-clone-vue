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
          <a class="fr66n tiVCN" href="#" role="button"><span class="Szr5J coreSpriteHeartOpen ">Like</span></a>
          <a class="_15y0l OV9Wd" href="#" role="button"><span class="Szr5J coreSpriteComment">Comment</span></a>
          <a class="wmtNn fscHb " href="#" role="button" aria-disabled="false"><span class="Szr5J coreSpriteSaveOpen   ">Save</span></a>
        </section>
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
