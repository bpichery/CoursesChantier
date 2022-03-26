<template>
	<section>
        <PopSystem>
            <div>
            <div
v-if='listSelected.status === waitStatus && showButton === true' class="wrapperBt">
            <div class="wrapperAction">
            <button class='bt-list' @click.prevent="handleStatus('accepté')">ACCEPTER</button>
            <button class='bt-list' @click.prevent="handleStatus('refusé')">REFUSER</button>
            </div>
            <p class="close" @click="handleClose">FERMER</p>
            </div>
            <div v-else class="wrapperBt">
              <div>
            <button class='bt-list' @click='toPdf'>Télécharger la liste</button>
            <button v-if='showButton === false' class='bt-list' @click='deleteList'>Supprimer la liste</button>
              </div>
              <p class="close" @click="handleClose">FERMER</p>
            </div>
            <div class="overflow">
           <table id='pop' class="popTable">
            <thead>
              <tr>
                <th>Quantité</th>
                <th>Référence</th>
                <th>Nom</th>
                <th>Description</th>
              </tr>
            </thead>
          <tbody>
            <tr
              v-for="item in listSelected.content" id="flex-list" :key="item.listId">
                <td>{{item.quantity}}</td>
                <td>{{item.content.reference}}</td>
                <td>{{item.content.designation}}</td>
                <td>{{item.content.description}}</td>
            </tr>
          </tbody>
        </table>
            </div>
            </div>
        </PopSystem>
	</section>
</template>
<script>
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import PopSystem from '~/components/Popin/PopSystem.vue'
export default{
  'components': {
        PopSystem
    },
    data(){
    return {
        isValidated:false,
        waitStatus: 'en attente'
    }
  },
'computed': {
        'listSelected' () {
            return this.$store.state.list.listSelected
        },
        'showButton' () {
            return this.$store.state.list.showButton
        }
        
},
methods: {
    toPdf(){
        
        // eslint-disable-next-line new-cap
        const doc = new jsPDF();
        if(this.showButton===true){
        const headerText= `${this.listSelected.listName}, liste de ${this.listSelected.nickname} - envoyé le ${this.handleDate(this.listSelected.created)}`
        const header = function (data) {
                    doc.setFontSize(12);
                    doc.setTextColor(40);
                    doc.text(headerText, data.settings.margin.bottom, 10);
                };

doc.autoTable({ didDrawPage: header, html: '#pop' })
        }else {
        const headerText= `Liste ${this.listSelected.listName} -  envoyé à ${this.listSelected.nickname} le ${this.handleDate(this.listSelected.created)}`
        const header = function (data) {
                    doc.setFontSize(12);
                    doc.setTextColor(40);
                    doc.text(headerText, data.settings.margin.bottom, 10);
                };

doc.autoTable({ didDrawPage: header, html: '#pop' })
        }
doc.save("listeDeCourses.pdf")

    },
    handleClose(){
        this.$store.dispatch('list/changeActionPop', false)
        this.$store.dispatch('list/changeShowButton', true)
    },
    handleDate(element){
      const date = new Date(element);
      if(typeof date === 'undefined'){
        return '---'
      }
      return date.toLocaleDateString('fr-FR');
    },
    deleteList(){
        this.$axios.delete(`http://localhost:3000/api/list/${this.listSelected.listId}` )
          .then(() => {
              this.$store.dispatch('list/clearActionPop')
              this.$store.dispatch('list/clearShowButton')
              }).then(()=>
    alert(`Suppression de la liste ${this.listSelected.listName}!`) ).then(()=> window.location.reload())
    },
    handleStatus (element) {
        this.isValidated= true
  	this.$axios.put(`http://localhost:3000/api/list/${this.listSelected.listId}`, {
        status: element
          }) 
    .then(()=>
    alert(`Changement de status vers ${element}!`) ).then(()=> window.location.reload())


          
        }
     
    }
  
}
</script>
<style scoped>
table {box-sizing: border-box;
    overflow-y: auto;
    background: #0000008e;
    border-radius: 0.25em;
    border-collapse: collapse;
    margin: 1em;
    font-family: 'Oswald', sans-serif;
    text-align: center;
    }
    th {
  border-bottom: 1px solid #0000004b;
  color: #ff864e;
  text-shadow: 0 0 2px rgb(112, 30, 3);
  font-size: 1em;
  font-weight: 600;
  padding: 0.5em 1em;
  text-align: center;
}
p{
    text-align: center;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
}

.wrapperAction{
    display: flex;
}
.wrapperBt{
    margin-left: 15px;
    display: flex;
    justify-content: space-between;
        align-items: baseline;
    margin-right: 15px;
}
p{
    margin-top:-5px
}

.overflow {
      overflow: hidden;
    overflow-y: auto;
    max-height: 410px;
    max-width: 500px;
    margin: 0 auto;
    }
.bt-list{
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
td{
  color: #fff;
  font-weight: 400;
  padding: 1px;
}
</style>