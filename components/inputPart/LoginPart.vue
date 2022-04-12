<template>
  <div class="main">  	
		<div class="background"/>
    <form class="formPart">
      <p>Courses Chantier</p>
      <div class='centered'>
      <label for="mail">Email</label>
      <input id="username" v-model="userInfo.email" type="text" placeholder="exemple@exemple.com">
      </div>
      <div class='centered'>
      <label for="password">Mot de Passe</label>
      <input id="password" v-model="userInfo.password"  type="password" placeholder="*******">
      </div>
      <button @click.prevent="submitLogin">Valider</button>
    </form>
  </div>
</template>
<script>

import * as EmailCheck from 'email-validator';
export default{
  
  data(){
    return {
      isErr: false,
      userInfo: {
        email: '',
        password:''
      }
    }
  },
  methods: {
    waitBeforeReload(){
      setTimeout(function () {
        window.location.reload()
    }, 2000);
    },
    submitLogin () {
      if(this.userInfo.password === ''){
        alert(`Merci d'inscrire un mot de passe`)
      }
      else if(EmailCheck.validate(this.userInfo.email) === false){
         alert(`Merci d'inscrire un email valide`)
      }
      else if(EmailCheck.validate(this.userInfo.email)){
      const log = this.userInfo
      this.$auth.loginWith('local', {data:log}).catch((error)=>  alert(`erreur` + ' ' + error.response.status  + '!' + ' Merci de vérifier votre email et votre mot de passe'))
     	
      }
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Oswald:wght@200;300;400;500&display=swap');
body {
  font-family: 'Oswald', sans-serif;
}
*,
*:before,
*:after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  background-color: #080710;
}

.background{
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%,-50%);
}

.background .shape{
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}

.formPart{
  height: 340px;
  min-width: 190px;
  width: 18vw;
  background-color: rgba(255,255,255,0.13);
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.formPart *{
    font-family: 'Oswald', sans-serif;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

.formPart p{
    font-size: calc(14px + (26 - 14) * ((75vw - 300px) / (1600 - 300)));
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}

input{
    display: block;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.296);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    color: black;
    font-size: 14px;
    font-weight: 300;
}

::placeholder{
    color: #fffefe;
}

button{
    margin: 43px auto 0 auto;
    background-color: #ffffff;
    color: #080710;
    padding: 5px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
}

.social{
  margin-top: 30px;
  display: flex;
}

.social div{
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255,255,255,0.27);
  color: #eaf0fb;
  text-align: center;
}

.social div:hover{
  background-color: rgba(255,255,255,0.47);
}

.social .fb{
  margin-left: 25px;
}

.social i{
  margin-right: 4px;
}
</style>