<template>
   
      <div class="Post-caption">
          <strong>{{comment.postedBy.username}}</strong> {{comment.text}}
        </div>
</template>

<script>
export default {
    name: 'Comment',
    props: ['comment'],
}
</script>

<style>

</style>