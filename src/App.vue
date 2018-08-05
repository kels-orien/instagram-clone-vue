<template>
  <div id="app">
 <router-view></router-view>
    </div>
     
</template>

<script>
import Headers from './components/Headers'
import Posts from './components/Posts'
import Login from './components/Login'
export default {
  name: 'App',
  components: {
      Headers,
      Posts,
      Login
    }
}
</script>

<style>


body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

textarea {
    -webkit-appearance: textarea;
    background-color: white;
    -webkit-rtl-ordering: logical;
    flex-direction: column;
    resize: auto;
    cursor: text;
    white-space: pre-wrap;
    word-wrap: break-word;
    border-width: 1px;
    border-style: solid;
    border-color: initial;
    border-image: initial;
    padding: 2px;
}
.app {
  background: #fafafaa8;
  min-height: 100vh;
  min-width: 100vh;
}
 .main {
  width: 50%;
  margin: 0 auto;
  padding-top: 120px;
}
.Nav {
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  -webkit-transition: height 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
  height: 77px;
}


.Nav-menus {
  display: flex;
  flex-direction: row;
  height: 77px;
  /* justify-content: center; */
  width: 70%;
  margin: 0 auto;
  padding: 26px 40px;
}


.Nav-brand-logo {
  display: block;
  background-position: -98px -317px;
  background-repeat: no-repeat;
  height: 35px;
  width: 176px;
  text-indent: -20000%
}
.Post {
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

.X7cDz, .Ypffh {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
.L_LMM ._JgwE {
    padding-right: 26px;
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

.eo2As {
    padding: 0 16px;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
}

.E3X2T {
    min-height: 100%;
    overflow: hidden;
}

_3Laht, .o64aR {
    background-color: #fafafa;
    padding-top: 140px;
}

.SCxLW {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-ordinal-group: 5;
    -webkit-order: 4;
    -ms-flex-order: 4;
    order: 4;
}
.tbpKJ {
    min-height: 100%;
    overflow: hidden;
    padding-bottom: 44px;
}

.agXmL, .tbpKJ {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}

@media (max-width: 450px)
{
  .rgFsT {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 0;
    max-width: 100%;
}
}


.rgFsT {
    color: #262626;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 12px;
    max-width: 350px;
}

@media (max-width: 450px)
{
  .gr27e {
    background-color: transparent;
    border: 0;
}
}



.gr27e {
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
}
.NXVPg {
    margin: 22px auto 12px;
}

.Szr5J {
    display: block;
    overflow: hidden;
    text-indent: 110%;
    white-space: nowrap;
}

.EPjEi {
    margin-bottom: 15px;
}

.HmktE {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.-MzZI, .Et89U {
    margin: 0 40px 6px;
}

._2hvTZ {
    border: 0;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 0;
    -ms-flex: 1 0 0;
    flex: 1 0 0px;
    margin: 0;
    outline: 0;
    overflow: hidden;
    padding: 9px 0 7px 8px;
    text-overflow: ellipsis;
}



._9GP1n {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #262626;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;  
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    font-size: 14px;
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    border: 1px solid #efefef;
}

._2hvTZ, ._9GP1n {
    background: #fafafa;
}

.zyHYP {
    -webkit-appearance: none;
}



.f0n8F {
    height: 36px;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 0;
    -ms-flex: 1 0 0;
    flex: 1 0 0;
    padding: 0;
    position: relative;
    margin: 0;
}

._9nyy2 {
    color: #999;
    font-size: 12px;
    height: 36px;
    left: 8px;
    line-height: 36px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
    text-overflow: ellipsis;
    -webkit-transform-origin: left;
    transform-origin: left;
    -webkit-transition: -webkit-transform ease-out .1s;
    transition: transform ease-out .1s;
    transition: transform ease-out .1s,-webkit-transform ease-out .1s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
}

.f0n8F .pexuQ {
    font-size: 16px;
}

.i24fI {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 100%;
    padding-right: 8px;
    vertical-align: middle;
}

.-Qhn2 {
    margin: 8px 40px;
}
._1OSdk {
    display: block;
    position: relative;
}
._5f5mN {
    -webkit-appearance: none;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
    outline: 0;
    overflow: hidden;
     text-align: center;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: 100%;
}
 
.pm766 {
    opacity: 9;
}
.jIbKX, .m4t9r.jIbKX {
    background: #3897f0;
    border-color: #3897f0;
    color: #fff;
}
.gr27e {
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
}
.izU2O {
    color: #262626;
    font-size: 14px;
    margin: 15px;
    text-align: center;
}
.izU2O>a, .izU2O>a:active, .izU2O>a:hover, .izU2O>a:visited {
    color: #3897f0;
}
input, textarea, select, button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 400 13.3333px Arial;
}
.ltpMr {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
}

.Slqrh {
    margin-top: 4px;
    padding-left: 8px;
}
.tiVCN {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 8px;
}

.OV9Wd {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 8px;
}

.wmtNn {
    margin-left: auto;
    float: right;
}
._15y0l, .fr66n, .wmtNn {
    display: inline-block;
}

.fscHb {
    background-color: transparent;
    border: 0;
    padding: 8px;
}
.coreSpriteHeartOpen {
    background-position: -564px -244px; 
    width: 26px;
    height: 23px;
}
.fr66n {
    margin-left: -8px;
}
.coreSpriteComment, .coreSpriteHeartOpen, .coreSpriteSaveOpen, .coreSpriteHeart,  .Nav-brand-logo, .coreSpriteSave{
    background-image: url(./assets/instagram-sprite.png);
}
.coreSpriteComment {
    background-position: -566px -113px; 
    height: 24px;
    width: 24px;
    
}
.coreSpriteSaveOpen {
    background-repeat: no-repeat;
    background-position: -566px -425px;
    height: 24px;
    width: 24px;
}
.coreSpriteSave {
    background-repeat: no-repeat;
    background-position: -131px -552px; 
    width: 24px;
    height: 24px;
}
.coreSpriteHeart {
    background-position: -564px -216px; 
    width: 29px;
    height: 25px;
}
a, a:visited {
    color: #003569;
    text-decoration: none;
}
</style>
