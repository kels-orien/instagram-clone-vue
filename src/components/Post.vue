<template>
   
      <article class="Post">
        <header>
          <div class="Post-user">
            <div class="Post-user-avatar">
              <img :src="user.avatar" :alt="user.nickname" />
            </div>
            <div class="Post-user-nickname">
              <span>{{user.nickname}}</span> <div>
      

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
          <strong>{{user.nickname}}</strong> {{post.caption}}
        </div>
      </article>
</template>

<script>
export default {
    name: 'Post',
    props: ['post']
}
</script>

<style scoped>
Post {
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
.Post-user-avatar {
  width: 30px;
  height: 30px;
}

.Post-user-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.Post-user-nickname {
  margin-left: 12px;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
}

.Post-image-bg {
  background-color: #efefef;
}

.Post-image img {
  display: block;
  width: 100%;
  max-height: 900px;
}

.Post-caption {
  padding: 16px 16px;
}
.Post-caption strong {
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
}

.vjs-fade-out {
  display: none;
  visibility: hidden;
  opacity: 0;
}
</style>
