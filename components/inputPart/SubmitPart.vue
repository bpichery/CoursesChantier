<template>
  <div class="main">  	
		<div class="background"/>
    <form>
      <h3>Courses Chantier</h3>
      <label for="mail">Email</label>
      <input id="username" v-model.lazy="userInfo.email" type="text" placeholder="exemple@exemple.com">
      <label for="name">Pseudo</label>
      <input id="username" v-model.lazy="userInfo.nickname" type="text" placeholder="MesCoursesChantiers">
      <label for="password">Mot de Passe</label>
      <input id="password" v-model.lazy="userInfo.password" type="password" placeholder="*******">
      <label for="password">Mot de Passe</label>
      <input id="password" v-model.lazy="userInfo.same_password" type="password" placeholder="*******">
      <button @click.prevent="submitRegister">Valider</button>
    </form>
	</div>
</template>
<script>
import * as EmailCheck from 'email-validator';
export default{
  data(){
    return {
      results:[],
      filteredResult:[],
      newUser:false,
      messageEmail:'',
      messagePassword:'',
      messageNickname:'',
      samePass: null,
      passLength: null,
      nickLength: null,
      uniqueNickname: null,
      uniqueEmail: null,
      valideEmail: null,
      userInfo: {
        nickname:'',
        email: '',
        password:'',
        same_password:''
      }
    }
  },computed:{
  filteredNick(){ 
    if(this.userInfo.nickname === ''){
      return ''
    }else{
    return this.results.filter((post) => post.nickname.toLowerCase()===this.userInfo.nickname.toLowerCase()) } },
      
  filteredEmail(){
      if(this.userInfo.email === ''){
      return ''
    }else{return this.results.filter((post) => post.email.toLowerCase()===this.userInfo.email.toLowerCase())}}
  },
  async created(){
    this.samePass = false
    this.valideEmail = false
    this.uniqueNickname = false
    this.uniqueEmail = false
    this.results = await this.$axios.$get("/api/users")
  },
  methods: {
   checkData(){
     if(this.userInfo.password === this.userInfo.same_password){
       this.samePass = true
     }
     if(this.userInfo.password !== this.userInfo.same_password){
       this.samePass = false
       this.messagePassword = 'Les mots de passes sont invalides, merci de corriger! '
     }
     if(this.userInfo.password.length < 7){
       this.passLength = false
       this.messagePassword = 'Le mot de passe doit contenir au moins 7 charactères. '
     }
     if(this.userInfo.password.length >= 7){
         this.passLength = true
     }
     if(this.userInfo.nickname.length < 5){
       this.nickLength = false
       this.messageNickname = 'Le pseudo doit contenir au moins 5 charactères. '
     }
     if(this.userInfo.nickname.length >= 5){
         this.nickLength = true
     }
     if(this.userInfo.nickname !== ''){
        if(this.filteredNick.length !== 0){
         this.uniqueNickname = false
          this.messageNickname = `Pseudo déjà utilisé, merci d'en choisir un autre! `
        }else{
          this.uniqueNickname = true
        }
      }
      if(this.userInfo.email !== ''){
        if(this.filteredEmail.length !== 0){
          this.uniqueEmail = false
          this.messageEmail = `Mail déjà utilisé, merci d'en choisir un autre! `
          }
          if(this.filteredEmail.length === 0){
          this.uniqueEmail = true
        }
      }
        if(EmailCheck.validate(this.userInfo.email)===true){
            this.valideEmail = true
            }
        if(EmailCheck.validate(this.userInfo.email)===false){
            this.valideEmail = false
            this.messageEmail = 'Mail invalide ...'
            }
            if(this.uniqueEmail && this.valideEmail && this.passLength && this.nickLength && this.samePass && this.uniqueNickname){
                this.newUser = true
            }
            else{
                this.newUser = false
            }
      
   },
   submitRegister(){
        this.checkData()
       if(this.newUser === false){
          alert(this.messageEmail + ' ' +this.messageNickname + ' ' + this.messagePassword)
          window.location.reload()
       }else{
          this.$axios.post('/api/register', {
          nickname: this.userInfo.nickname,
          email: this.userInfo.email,
          password: this.userInfo.password
        }) 
        .then(()=> alert(`Bienvenue ${this.userInfo.nickname} sur Courses Chantier, cliquez sur l'onglet connexion!`) ).then(()=> window.location.reload())
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

.trueInput{
  border: 2px solid green;
}
.falseInput{
  border: 2px solid red;
}
.nullInput{
  border-style: none;
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

form{
  height: 340px;
  min-width: 190px;
  width: 18vw;
  background-color: rgba(255,255,255,0.13);
  position: absolute;
  transform: translate(-50%,-50%);
  top: 44%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  padding: 15px;
}

form *{
  font-family: 'Oswald', sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

form h3{
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label{
  display: block;
  margin-top: 5px;
  font-size: 16px;
  font-weight: 500;
}

input{
  display: block;
  height: 30px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.296);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  color: black;
  font-weight: 300;
}

::placeholder{
  color: #ffffff;
}

button{
  margin-top: 25px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
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