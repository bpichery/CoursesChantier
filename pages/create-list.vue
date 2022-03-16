<template>
<div>
    <div v-if="$auth.loggedIn">
        <BarPart class='navbar'/>
      <div class="wrapper-content">
            <div class='part1'>
                <div>
                    <div v-if="generatedDone=== true">
                        <input v-model='name' placeholder="Nom de la liste" type="text">
                        <input v-model='message' placeholder="Message" type="text">
                        <SelectUser/>
                        <button @click.prevent='send'>Envoyer la liste</button>
                        <button @click.prevent='startAgain'>Recommencer la liste</button>
                         <p
v-for="element in generatedList" id="flex-wrapper"
      :key="element.content.id" > ITEM: {{element.content.designation}} // {{element.content.reference}}- QUANTITÉ: {{element.quantity}}</p>
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
import SelectUser from '~/components/managementPart/ListHandle/ListReceived.vue/SelectUser.vue'
import SelectTool from '~/components/managementPart/ListHandle/ListReceived.vue/SelectTool.vue'
export default {
    'components': {
        BarPart,
        SelectUser,
        SelectTool
    },data(){
        return {
        name: '',
        message:'',
        list:{content : [ {result: this.$store.state.list.finalList} ]}
                            
    }
  },'computed': {
        'generatedList' (){
            return this.$store.state.list.finalList
        },
        'generatedDone' (){
            return this.$store.state.list.listDone
        }
    },'methods':{
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
            if(this.$store.state.list.to_user.nickname===undefined || this.message === "" || this.name === ""){
             alert('Merci de remplir les champs de message, de nom de la liste ainsi que de selectionner le destinataire')
          }
          else{
             this.$axios.post('http://localhost:3000/api/list/', {
                'user_id': this.$auth.user[0].user_id,
                'to_uuid':  this.$store.state.list.to_user.user_id,
                'content': this.list,
                'message': this.message,
                'list_name': this.name
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
.part1{
    background-color: rgba(255, 255, 255, 0.589);
     margin-top: 100px;
     margin-left: 5px;
     margin-right: 5px;
     margin-bottom: 5px;
border-radius: 50px;
height: 82vh;
}
</style>