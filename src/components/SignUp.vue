<template>
<section class="_9eogl E3X2T">
   <main class ="SCxLW o64aR" role="main">
      <div class="tbpKJ">
         <article class="agXmL">
            <div class ="rgFsT">
               <div class="gr27e">
                  <h1 class="NXVPg Szr5J  coreSpriteLoggedOutWordmark">Instagram</h1>
                  <div class="EPjEi">
                     <div class="HmktE">
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
                     <span class="-Qhn2 _1OSdk"><button class="_5f5mN  jIbKX pm766" @click="SignUp()">Next</button></span>
                     </div>
                  </div>
               </div>

               <div class="gr27e"><p class="izU2O">Have an account? <a href="" @click="goToLogin()">Log in</a></p></div>
            </div>
         </article>
      </div>
   </main>
</section>
</template>


<script>
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants/settings'
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
      },
      goToLogin ()
      {
            this.$router.push('/Login')
      }
           
    }
    
}
</script>

<style>
article, div, footer, header, main, nav, section {
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    border: 0 solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
}
label {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
}

</style>