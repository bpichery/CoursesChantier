<template>
    <div class="main">  	
		<div class="background">
    </div>
    <form>
        <h3>Courses Chantier</h3>

        <label for="mail">Email</label>
        <input id="username" v-model="userInfo.email" type="text" placeholder="exemple@exemple.com">

        <label for="name">Pseudo</label>
        <input id="username" v-model="userInfo.nickname" type="text" placeholder="MesCoursesChantiers">

        <label for="password">Mot de Passe</label>
        <input id="password" v-model="userInfo.password" type="password" placeholder="*******">

        <label for="password">Mot de Passe</label>
        <input id="password" v-model="userInfo.same_password" type="password" placeholder="*******">
        <button @click.prevent="submitRegister">Valider</button>
    </form>
	</div>
</template>
<script>
export default{
  data(){
    return {
      userInfo: {
        nickname:'',
        email: '',
        password:'',
        same_password:''
      }
    }
  },methods: {
    submitRegister () {
      // eslint-disable-next-line no-console
      console.log('Register en cours')
      if (this.userInfo.password === this.userInfo.same_password) {
        // eslint-disable-next-line no-console
      console.log('Same')
     this.$axios.post('http://localhost:3000/api/register', {
        nickname: this.userInfo.nickname,
        email: this.userInfo.email,
        password: this.userInfo.password
          }) 
.then(()=>
alert(`Bienvenue ${this.userInfo.nickname}, cliquez sur l'onglet connexion!`) )
          
        }
      else {
        // eslint-disable-next-line no-console
      console.log('Not the same')
        this.error = 'Le mot de passe ne correspond pas'
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

form{
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