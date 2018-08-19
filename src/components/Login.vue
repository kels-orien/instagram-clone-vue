<template>
<section class="Login">
   <main class="Login__form" role="main" >
            <h1 class="Login__form--logo  LoggedOutWordmark">Instagram</h1>
         <div class ="Login__form--input">
            <input  class ="Login__form--input-field"  v-model="email" type="text" required/>
            <span class="floating-label">Email</span> 
         </div>
         <div class ="Login__form--input">
            <input  class ="Login__form--input-field" v-model="password" type="password" required/>
            <span class="floating-label">Password</span> 
          </div>
            <div class ="Login__form--button">
                  <span></span>
                  <button class="Login__form--button-1" @click="login()">Log in</button>
            </div>
   </main>
</section>
</template>

<script>
 import {SIGNIN_USER_MUTATION } from '../constants/graphql'
 import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants/settings'
export default {
    name:"Login",
    data () {
        return {
            email:"",
            password:""
        }
    },
    methods: {
        login() {
            const { email, password } = this.$data
            this.$apollo.mutate({
            mutation: SIGNIN_USER_MUTATION,
            variables: {
              email,
              password
            }
          }).then((result) => {
            const id = result.data.signinUser.user.id
            const token = result.data.signinUser.token
            this.saveUserData(id, token)
            this.$router.push({path: '/'})
          }).catch((error) => {
            alert(error)
          })
        },
        saveUserData (id, token) {
            localStorage.setItem(GC_USER_ID, id)
            localStorage.setItem(GC_AUTH_TOKEN, token)
            this.$root.$data.userId = localStorage.getItem(GC_USER_ID)
        }
    }
}
</script>

<style>
 
* {
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
  }
  
  
body {
    margin: 0;
    padding: 0;
  }

  body, button, input, textarea {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 12px;
    background-color: #fafafa;
}
.Login {
    min-height: 100%;
    overflow: hidden;
    box-sizing:border-box;
    padding-top: 150px;
    padding-bottom:150px;
    width: 100%;
}
.Login__form {
    background-color: #ffffff;
    margin: 0 auto;
    width: 350px;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    padding: 10px 0;
}
.Login__form--input {
    height: 40px;
    margin: 0 40px 6px;
}

.Login__form--input-field {
    margin-bottom:20px;
    border-radius: 4px;   
    font-size: 16px;
    border: 1px solid #efefef;
    background: #fafafa;
    min-height: 100%;
    -webkit-appearance: none;
    padding-left: 8px;
    width: 100%;
}

.floating-label {
    position: absolute;
    pointer-events: none;
    left: 20px;
    top: 12px;
    transition: 0.2s ease all;
    color:#999;
  }

input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label{
  top: 1px;
  bottom:4px;
  left: 20px;
  font-size: 10px;
  opacity: 1;
}

.Login__form--button {
    margin: 8px 40px;
}

.Login__form--button-1 {
    -webkit-appearance: none;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
    outline: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: 100%; 
    background: #3897f0;
    border-color: #3897f0;
    color: #fff; 
}

.Login__form--logo {
    display: block;
    overflow: hidden;
    text-indent: 110%;
    white-space: nowrap;
       margin: 22px auto 12px;
}
.LoggedOutWordmark  {
    background-repeat: no-repeat;
    background-image: url(../assets/instagram-sprite.png);
    background-position: -99px -264px; 
    width: 174px;
    height: 51px;
}

input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background:#999 !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
}

article, div, footer, header, main, nav, section {
    /* -webkit-box-align: stretch; */
    /* -webkit-align-items: stretch; */
    -ms-flex-align: stretch;
    align-items: stretch;
    border: 0 solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-box-orient: vertical;
    /* -webkit-box-direction: normal; */
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    /* flex-direction: column; */
    /* -webkit-flex-shrink: 0; */
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
}

</style>
