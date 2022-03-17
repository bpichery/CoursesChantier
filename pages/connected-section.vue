<template>
<div>
    <div v-if="$auth.loggedIn">
        <BarPart class='navbar'/>
        <div class='welcolme-wrapper'>
            <h1 class='welcome'>Bienvenue {{$auth.user[0].nickname}}</h1>
        </div>
       
        <div class="wrapper-content">
            <div class='part1'>
                 <nuxt-link class='link' to='/create-list'>CRÉER UNE LISTE</nuxt-link>
            </div>
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
   font-size: 75%;
}

.not-connected{
    text-align: center;

  font-family: 'Oswald', sans-serif;
}
.wrapper-content{
    display: flex;
    flex-direction: column;
}
.part1{
    background-color: rgba(255, 255, 255, 0.589);
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    height: 78vh;
}
.link{
    cursor: pointer; 
   font-weight: 600;
   margin-left: 1%;
   font-family: 'Oswald', sans-serif;
   color: rgb(252, 86, 45);
      width: fit-content;
text-decoration: none;
}
.link:hover{
   background: rgba(0, 0, 0, 0.37);
   color: rgb(255, 255, 255);
}
</style>