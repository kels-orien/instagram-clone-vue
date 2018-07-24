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
export default {
    name: 'Post',
    props: ['post'],
    components: {
        CreateComment
    },
}
</script>

<style>

</style>
