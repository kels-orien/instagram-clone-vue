<template>
<section class="_9eogl E3X2T">
   <main class ="SCxLW o64aR" role="main">
      <div class="tbpKJ">
         <article class="agXmL">
            <div class ="rgFsT">
               <div class="gr27e">
                  <h1 class="NXVPg Szr5J  coreSpriteLoggedOutWordmark">Instagram</h1>
                  <div class="EPjEi">
                     <form class="HmktE" method="post">
                     <div class="-MzZI">
                        <div class="_9GP1n">
                           <div class="f0n8F "><label  class="_9nyy2">Email</label>
                              <input class="_2hvTZ pexuQ zyHYP"     v-model="email" aria-label="email" aria-required="true" autocapitalize="off" autocorrect="off" maxlength="75" name="email" type="text" value="">
                           </div>
                           <div class="i24fI"></div>
                        </div>
                     </div>
                     <div class="-MzZI">
                        <div class="_9GP1n">
                           <div class="f0n8F "><label  class="_9nyy2">Fullname</label>
                              <input class="_2hvTZ pexuQ zyHYP"     v-model="fullname" aria-label="email" aria-required="true" autocapitalize="off" autocorrect="off" maxlength="75" name="fullname" type="text" value="">
                           </div>
                           <div class="i24fI"></div>
                        </div>
                     </div>
                     <div class="-MzZI">
                        <div class="_9GP1n">
                           <div class="f0n8F "><label  class="_9nyy2">Username</label>
                              <input class="_2hvTZ pexuQ zyHYP"     v-model="username" aria-label="email" aria-required="true" autocapitalize="off" autocorrect="off" maxlength="75" name="username" type="text" value="">
                           </div>
                           <div class="i24fI"></div>
                        </div>
                     </div>
                     <div class="-MzZI">
                        <div class="_9GP1n   ">
                           <div class="f0n8F "><label  class="_9nyy2">Password</label>
                              <input class="_2hvTZ pexuQ zyHYP" v-model="password" aria-label="Password" aria-required="true" autocapitalize="off" autocorrect="off" name="password" type="password" value="">
                           </div>
                           <div class="i24fI"></div>
                        </div>
                     </div>
                     <span class="-Qhn2 _1OSdk"><button class="_5f5mN  jIbKX pm766" @click="SignUp()" disabled="">Next</button></span>
                     </form>
                  </div>
               </div>
            </div>
         </article>
      </div>
   </main>
</section>
</template>


<script>
 import {CREATE_USER_MUTATION } from '../constants/graphql'
export default {
    name: "SignUp",
    data () {
        return {
        email:"",
        fullname: "",
        username:"",
        password:"",
       }
    },
    methods: {
           SignUp () {
            const { email, fullname, username, password} = this.$data;
            this.$apollo.mutate({
            mutation: CREATE_USER_MUTATION,
            variables: {
              email,
              fullname,
              username,
              password
            }
          }).then((result) => {
            const id = result.data.signinUser.user.id
            const token = result.data.signinUser.token
            this.SaveUserData(id, token)
            this.$router.push({path: '/'})
          }).catch((error) => {
            alert(error)
          })
        },
        SaveUserData (id, token) {
        localStorage.setItem(GC_USER_ID, id)
        localStorage.setItem(GC_AUTH_TOKEN, token)
        this.$root.$data.userId = localStorage.getItem(GC_USER_ID)
      }
           
    }
    
}
</script>