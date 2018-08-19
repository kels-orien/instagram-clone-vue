<template>
    <div class="eo2As">
         <section class="sH9wk _JgwE">
        <div class="X7cDz">
            <textarea aria-label="Add a comment…" ref="input" placeholder="Add a comment…" @keydown.enter.prevent="saveComment"  v-model="text" class="Ypffh">
            </textarea>
            
            </div>
    </section >
    </div>
   
</template>


<script>
import { ALL_POSTS_QUERY, CREATE_COMMENT_MUTATION } from '../constants/graphql'
import { GC_USER_ID} from '../constants/settings'

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
        focus: function () {
            this.$refs.input.focus()
    },
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
            },
            update: (store, {data: { createComment}}) => {
                this.updateStoreAfterComment(store, createComment, postId)
            }
         })
        this.text = "";
        
      },
      updateStoreAfterComment(store, createComment, postId) {
          const data = store.readQuery({query: ALL_POSTS_QUERY})
            const commentedPost = data.allPosts.find(post => post.id === postId)
            commentedPost.comments.push(createComment)
            store.writeQuery({ query: ALL_POSTS_QUERY, data })
        }
    }
}
</script>

<style>
body, button, input, textarea {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 18px;
}
.eo2As {
      padding: 0 16px;
      padding-top: 0px;
      padding-right: 16px;
      padding-bottom: 0px;
      padding-left: 16px;
  }

   .sH9wk {
      border-top: 1px solid #efefef;
      color: #999;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      font-size: 14px;
      line-height: 18px;
      min-height: 56px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      padding: 16px 0;
  }
  ._JgwE {
      margin-top: 4px;
  }
    .Ypffh {
    background: 0 0;
    border: 0;
    color: #262626;
    font-size: inherit;
    height: 18px;
    max-height: 80px;
    outline: 0;
    padding: 0;
    resize: none;
}
  X7cDz, .Ypffh {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
  }
</style>