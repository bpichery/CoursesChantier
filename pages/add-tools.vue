<template>
<div>
    <div v-if="$auth.loggedIn">
        <BarPart class='navbar'/>
        <div class="content">
        <section class='padding'>
        <h1 class='welcome'>Ajouter du matériel</h1>
        <p v-if="isOkay=== false" class='message'>{{message.toUpperCase()}}</p>
        <p v-if="isOkay" class='message'>{{message.toUpperCase()}}</p>
        <div class='wrapperTools'>
            
            <form class="formPart">
        <div class='column'>
        <label for="ref">Référence:</label>
        <input id="ref" v-model.lazy="tool.reference" class="input"  type="text" placeholder="LEG0000000">
        </div>
        <div class='column'>
        <label for="designation">Désignation:</label>
        <input id="designation" v-model.lazy="tool.designation" class="input" type="text" placeholder="support batibox ...">
        </div>
        <div class='column'>
        <label for="designation">Description (optionel):</label>
        <input id="designation" v-model="tool.description" class="input" type="text" placeholder="sens de montage ...">
        </div>

        <button class="bt" @click.prevent="send">VALIDER</button>
    </form>
        </div>
        </section>
        <section>
            <h1 class='welcome'>Supprimer du matériel</h1>
        <p v-if="isOkay=== false" class='message'>{{deleteMessage.toUpperCase()}}</p>
        <p v-if="isOkay" class='message'>{{deleteMessage.toUpperCase()}}</p>
        <div class='wrapperTools'>
            
            <form class="formPart">
        <div class='column'>
        <label for="ref">Référence:</label>
        <input id="ref" v-model.lazy="toolDeleted.reference" class="input"  type="text" placeholder="LEG0000000">
        </div>

        <button class="bt end" @click.prevent="deleteTool">SUPPRIMER</button>
    </form>
        </div>
        </section>
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
          result:'',
          'isOkay': null,
          'isOkayToDelete': null,
          message:'',
          deleteMessage:'',
      tool: {
        "reference": "",
        "designation": "",
        "description": ""
      },
       toolDeleted: {
        "reference": ""
      }
    }
    },        
    created(){
    this.$axios
  .get("/api/tools")
  .then((res) => {
    this.results = res.data
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
},
    methods:{
      'send'(){
            this.checkData()
            if(this.tool.reference ==='' || this.tool.designation ===''){
             alert(`Merci de remplir les champs de référence ainsi que d'indiquer la désignation`)
          }
          else if (this.isOkay === true){
             this.$axios.post('http://localhost:3000/api/tool/', {
                "reference": this.tool.reference,
        "designation": this.tool.designation,
        "description": this.tool.description
                 }).then(() => {alert(`Outil ajouté!`)})
          .then(() => {
              this.$router.push('/connected-section');}) 
          }
      },
      deleteTool(){
        if (this.toolDeleted.reference !== '') {
                const ref = this.results.filter((post) =>
            post.reference.toLowerCase().includes(this.toolDeleted.reference.toLowerCase()))
            if(ref.length>0){
              this.isOkayToDelete = true
        this.$axios.delete(`http://localhost:3000/api/tool/${ref[0].id}` ).then(() => {alert(`Outil supprimé`)})
              
            }
            else{
                alert('Pas de référence retrouvée')
            }
            }
      },
       checkData () {
            if (this.tool.reference !== '') {
                const ref = this.results.filter((post) =>
            post.reference.toLowerCase().includes(this.tool.reference.toLowerCase()))
            if(ref.length>0){
                this.isOkay = false
                this.message = 'Cette référence existe dejà'
            }
            else if (this.tool.designation !== '') {
                const designation = this.results.filter((post) =>
            post.designation.toLowerCase().includes(this.tool.designation.toLowerCase()))
            if(designation.length>0){
                this.isOkay = false
                this.message =  'Cette référence existe dejà'
            }
            else{
                this.isOkay = true
                this.message =  'Cette référence est disponible'
            }
            }
            
        }

    }
}
}
</script>
<style >
body {
  font-family: 'Oswald', sans-serif;
}
.content{
    display: flex;
    justify-content: space-around;
}
.message{
    text-align: center;
    color: #f86f2f;
    font-weight: 500;
}
label{
    margin-bottom: -15px;
    margin-top: 10px;
}
.padding{
    padding-top: 85px
}
.welcome{
    
    text-align: center;
}
.wrapperTools{
     
     display: flex;
     justify-content: center;
     align-items: center;
}
.column{
    display: flex;
    flex-direction: column;
}
.input{
    height: 10px;
    width: 276px;
    margin-bottom: 2px;
    margin-top: 25px;
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
.bt{
    max-height: 32px;
    min-height: 32px;
    margin-top: 10px;
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
@media (max-width: 768px) {
    .content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.end{
    margin-bottom: 15px;
}
}
</style>
