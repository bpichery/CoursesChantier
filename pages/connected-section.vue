<template>
<div>
    <div v-if="$auth.loggedIn">
        <BarPart class='navbar'/>
        <div class='welcolme-wrapper'>
            <h1 class='welcome'>Bienvenue {{$auth.user[0].nickname}}</h1>
        </div>
        <nuxt-link class='link' to='/create-list'>CRÉER UNE LISTE</nuxt-link>
        <div class="wrapper-content">
            <div class='part1'>part1</div>
        </div>
    </div>
    <div v-else class='not-connected'>
        <h1>Accès non-autorisé</h1>
        <nuxt-link to='/login-submit'>Cliquez ici pour vous connecter</nuxt-link>
    </div>
    </div>
</template>
<script>
import BarPart from '~/components/navbar/BarPart.vue'
export default {
    'components': {
        BarPart
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Oswald:wght@200;300;400;500&display=swap');

.welcolme-wrapper{
    padding-top: 65px;
    padding-left: 5px;
  font-family: 'Oswald', sans-serif;
  color:rgb(223, 75, 49);
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.808),
             0px 8px 13px rgba(0, 0, 0, 0.774),
             0px 18px 23px rgba(0, 0, 0, 0.172);
   display: flex;
   justify-content: center;
}

.not-connected{
    text-align: center;

  font-family: 'Oswald', sans-serif;
}
.wrapper-content{
    display: flex;
    flex-direction: column;
}
.wrapper-content div{
    background-color: rgba(255, 255, 255, 0.589);
}
.part1{
border-top-left-radius: 50px;
border-bottom-left-radius: 50px;
margin-top: 8px;
}
.link{
    cursor: pointer; 
   font-weight: 600;
   margin-left: 5%;
   font-family: 'Oswald', sans-serif;
   background: rgba(255, 255, 255, 0.459);
   color: black;
      width: fit-content;
padding: 5px;
border-radius: 50px;
text-decoration: none;
}
.link:hover{
   background: rgb(247, 74, 31);
}
</style>