<template>
   
      <article class="Post">
        <header>
          <div class="Post-user">
            <div class="Post-user-avatar">
              <img :src="post.user.avatar" :alt="post.user.nickname" />
            </div>
            <div class="Post-user-nickname">
              <span>{{post.user.nickname}}</span> <div>
      

    </div>
            </div>
          </div>
        </header>
        <div class="Post-image">
          <div class="Post-image-bg">
            <img :alt="post.caption" :src="post.image" />
          </div>
        </div>
        <div class="Post-caption">
          <strong>{{post.user.nickname}}</strong> {{post.caption}}
        </div>
      </article>
</template>

<script>
export default {
    name: 'Post',
    props: ['post']
}
</script>

<style>

</style>
