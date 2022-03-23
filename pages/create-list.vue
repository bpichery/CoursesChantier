<template>
<div>
    <div v-if="$auth.loggedIn">
        <BarPart class='navbar'/>
      <div class="wrapper-content">
            <div class='part1'>
                <div>
                    <div v-if="generatedDone=== true" class='wrapper'>

                        <section class='left-handle'>
                        <p class='explain'>Veuillez selectionner un destinataire</p>
                        <SelectUser/>
                        <p class='explain'>Veuillez inscrire le nom de la liste</p>
                        <input v-model='name' class='input-content' placeholder="Nom de la liste" type="text">
                        <p class='explain'>Vous pouvez inscrire un message</p>
                        <input v-model='message' class='input-content' placeholder="Message" type="text">
                        <div class='bt-wrapper'>
                        <button @click.prevent='send'>Envoyer la liste</button>
                        <button @click.prevent='startAgain'>Recommencer la liste</button>
                        </div>
                        </section>
                        <section>
                            <h3>Ma Liste</h3>
                         <p
v-for="element in generatedList" id="flex-wrapper"
      :key="element.content.id" > ITEM: {{element.content.designation}} // {{element.content.reference}}- QUANTITÉ: {{element.quantity}}</p>
                        </section>
                    </div>
                    <SelectTool v-if="generatedDone=== false"/>
                    
                </div>

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
import SelectUser from '~/components/managementPart/ListHandle/SelectUser.vue'
import SelectTool from '~/components/managementPart/ListHandle/SelectTool.vue'
export default {
    'components': {
        BarPart,
        SelectUser,
        SelectTool
    },data(){
        return {
        name: '',
        message:''
                            
    }
  },
  'computed': {
        'generatedList' (){
            return this.$store.state.list.finalList
        },
        'generatedDone' (){
            return this.$store.state.list.listDone
        }
    },
    created(){
        // eslint-disable-next-line no-console
        console.log(this.list)
    },
    'methods':{
        'checkContent'(element){
            if(element=== undefined){
                return ''
            }
            return element
        },
        'startAgain'(){
            this.$store.dispatch('list/clearAll')
        },
        'send'(){
            alert(JSON.stringify(this.$store.state.list.finalList))
            if(this.$store.state.list.to_user.nickname===undefined || this.name === ""){
             alert('Merci de remplir les champs du nom de la liste ainsi que de selectionner le destinataire')
          }
          else{
             this.$axios.post('http://localhost:3000/api/list/', {
                'user_id': this.$auth.user[0].user_id,
                'to_uuid':  this.$store.state.list.to_user.user_id,
                'content': JSON.stringify(this.$store.state.list.finalList),
                'message': this.message,
                'list_name': this.name,
                'status': "en attente"
                 }).then(() => {alert(`Liste Envoyée à ${this.$store.state.list.to_user.nickname}!`)})
          .then(() => {
              this.$store.dispatch('list/clearAll')
              this.$router.push('/connected-section');}) 
          }
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Oswald:wght@200;300;400;500&display=swap');
#flex-wrapper{
background: #fefefe;
  font-family: 'Oswald', sans-serif;
  border: solid 1px rgba(14, 14, 14, 0.555);
  margin: 0;
  text-align: justify;
  font-size: 95%;
}
.bt-wrapper{
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
}
.bt-wrapper button{

    max-height: 32px;
    min-height: 32px;
    margin-top: 2px;
    margin-right: 5px;
    height: 10px;
    background: rgb(236, 95, 52);
    background: -moz-linear-gradient(top, rgb(253, 90, 41) 0%, rgb(255, 126, 41) 100%);
    background: -webkit-linear-gradient(top, rgb(236, 104, 52) 0%,rgb(220, 96, 38) 100%);
    background: -o-linear-gradient(top, rgb(255, 121, 31) 0%,rgb(247, 127, 14) 100%);
    background: -ms-linear-gradient(top, rgb(255, 118, 26) 0%,rgb(236, 124, 19) 100%);
    background: linear-gradient(to bottom, rgb(255 71 1) 0%,rgb(255, 129, 27) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#34adec', endColorstr='#2691dc',GradientType=0 );
    border: none;
    color: #fff;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    padding: 4px;
    padding-right: 8px;
    padding-left: 8px;
    box-shadow: 0 0 2px #ff7e33 inset;
    -moz-box-shadow: 0 0 2px #fc6b1d inset;
    -webkit-box-shadow: 0 0 2px #ff760d inset;
    border-radius: 9px;
    -moz-border-radius: 9px;
    -webkit-border-radius: 9px;
}

.input-content{
 height: 10px;
  width:185px;
  background: #fefefe;
    border: solid 1px rgba(0, 0, 0, 0.623);
    font-family: 'Oswald', sans-serif;
    margin-right: 5px;
    padding: 10px;
    box-shadow: 0 0 4px rgb(0 0 0 / 40%) inset, 1px 1px 1px rgb(255 255 255 / 75%);
    -moz-box-shadow: 0 0 4px rgba(0,0,0,.4) inset, 1px 1px 1px rgba(255,255,255,.75);
    -webkit-box-shadow: 0 0 4px rgb(0 0 0 / 40%) inset, 1px 1px 1px rgb(255 255 255 / 75%);
    border-radius: 9px;
    -moz-border-radius: 9px;
    -webkit-border-radius: 9px; 
}

.explain{
 font-family: 'Oswald', sans-serif; 
}

.left-handle{
display: flex;
flex-direction: column ;
margin-top: 5vh;
}

h3{
  font-family: 'Oswald', sans-serif;
  text-align: center;
  color: rgb(0, 0, 0);
}

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

.wrapper{
display: flex;
justify-content: space-around;
}

.part1{
    background-color: rgba(255, 255, 255, 0.589);
     margin-top: 100px;
     margin-left: 5px;
     margin-right: 5px;
     margin-bottom: 5px;

    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
height: 82vh;
}
@media (max-width: 700px) {
    .wrapper{
display: flex;
flex-direction: column;
justify-content: center;
}
}
</style>