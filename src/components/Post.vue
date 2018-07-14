<template>
    <div>
      ({{post.image}}) {{post.caption}} 

    </div>
</template>

<script>
export default {
    name: 'Post',
    props: ['post']
}
</script>

<style scoped>

</style>
