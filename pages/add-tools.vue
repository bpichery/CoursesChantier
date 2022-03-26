<template>
<div>
    <div v-if="$auth.loggedIn">
        <BarPart class='navbar'/>
        <div class='wrapperTools'>
            <h1 class='welcome'>Ajouter du matériel</h1>
            <form class="formPart">

        <label for="ref">Référence:</label>
        <input id="ref" v-model="tool.reference"  type="text" placeholder="LEG0000000">

        <label for="designation">Désignation:</label>
        <input id="designation" v-model="tool.designation"  type="text" placeholder="support batibox ...">

        <label for="designation">Description(optionel):</label>
        <input id="designation" v-model="tool.description"  type="text" placeholder="sens de montage ...">


        <button @click.prevent="send">Valider</button>
    </form>
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
    },
    data(){
      return {
      tool: {
        "reference": "",
        "designation": "",
        "description": ""
      }
    }
    },
    methods:{
      'send'(){
            alert(JSON.stringify(this.$store.state.list.finalList))
            if(this.tool.reference ==='' || this.tool.designation ===''){
             alert('Merci de remplir les champs du nom de la liste ainsi que de selectionner le destinataire')
          }
          else{
             this.$axios.post('http://localhost:3000/api/tool/', {
                "reference": this.tool.reference,
        "designation": this.tool.designation,
        "description": this.tool.description
                 }).then(() => {alert(`Outil ajouté!`)})
          .then(() => {
              this.$router.push('/connected-section');}) 
          }
      }
    }
}
</script>
<style >
.wrapperTools{
     padding-top: 85px;
}
</style>
