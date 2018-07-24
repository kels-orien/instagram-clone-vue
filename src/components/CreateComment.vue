<template>
    <div class="eo2As">
         <section class="sH9wk _JgwE">
        <form class="X7cDz">
            <textarea aria-label="Add a comment…" placeholder="Add a comment…" @keydown.enter.prevent="saveComment"  v-model="text" class="Ypffh">
            </textarea>
            
            </form>
    </section >
    </div>
   
</template>


<script>
import { CREATE_COMMENT_MUTATION } from './constants/graphql'

export default {
    name: 'CreateComment',
    props: ['postId', 'userId'],
    data () {
        return {
            loading: 0,
            text:""
        }
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
            }
         })
        this.text = "";
        
      }
    }
}
</script>
