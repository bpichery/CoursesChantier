<template>
  <div class='wrapper'>
    <h4 class='title'>Listes Envoyées</h4>
    <ActionPop v-if='generatedActionPop===true'/>
    <PopSystem v-if="openPop">
      <h1 class='titlePop'>{{listSelected.listName.toUpperCase()}}</h1>
      <div class="overflow">
        <div class='flex'>
          <h4>Envoyé à {{listSelected.nickname}}</h4>
          <p><span class='bold'>Date: </span>{{handleDate(listSelected.created)}}</p>
        </div>
        <div class='flex'>
          <p><span class='bold'>Status: </span>{{listSelected.status.toUpperCase()}}</p>
          <p v-if="listSelected.message !== ''"><span class='bold'>Message: </span>{{listSelected.message}}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Quantité</th>
              <th>Référence</th>
              <th>Nom</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in listSelected.content" id="flex-list" :key="item.content.designation" class="border">
              <td>{{item.quantity}}</td>
              <td>{{item.content.reference}}</td>
              <td>{{item.content.designation}}</td>
              <td>{{item.content.description}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class='pointer' @click="handleClosedPop">FERMER</p>
    </PopSystem>
    <div v-if='isThereContent' class='content'>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Destinataire</th>
            <th class='none'>Date</th>
            <th class='none'>Status</th>
            <th>Détails</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="element in finalList" id="flex-list" :key="element.created">
            <td class='row'>{{element.listName}}</td>
            <td class='row'>{{element.nickname}}</td>
            <td class='row none'>{{handleDate(element.created)}}</td>
            <td :class='handleStatus(element.status)' class='row none'>⚈</td>
            <td class='pointer row' @click="handlePop(element)">Cliquez-ici</td>
            <td class='row' @click='handleAction(element)'><img class='action pointer' alt='action' src="../../../images/gear.png"/></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else class='listNone'>Aucune liste retrouvée</p>
  </div>
</template>
<script>
import PopSystem from '~/components/Popin/PopSystem.vue'
import ActionPop from '~/components/managementPart/ActionHandle/ActionPop.vue'
export default{
  components: {
    PopSystem,
    ActionPop
  },
  data(){
    return{
        'results': [],
        'users': [],
        'nickname':'',
        'openPop': false,
        'finalList':[],
        'user':{},
        'isThereContent': false
    }
  },
  computed: {
    'generatedActionPop' () {
      return this.$store.state.list.actionPop
    }
  },
  async created(){
    const listSend = await this.$axios.$get(`/api/listSend/${this.$auth.user[0].user_id}`)
    const usersList = await this.$axios.$get("/api/users")
    listSend.forEach(element => {
      const userdata=usersList.filter((post)=>post.user_id===element.to_uuid)
      const userSelected={
        listId:element.list_id,
        listName:element.list_name,
        message:element.message,
        content:JSON.parse(element.content),
        status:element.status,
        nickname:userdata[0].nickname,
        created: element.created
      }
    this.finalList.push(userSelected)
    })
    if(this.finalList[0]!==undefined){
      this.isThereContent = true
    }
    else{
      this.isThereContent = false
    }
  },
  methods:{
    handlePop(element){
      this.openPop = true
      this.listSelected= element
    },
    handleDate(element){
      const date = new Date(element);
      if(typeof date === 'undefined'){
        return '---'
      }
      return date.toLocaleDateString('fr-FR');
    },
    handleClosedPop(){
      this.openPop = false
    },
    handleAction(element){
      if(element.length !==0){
        this.$store.dispatch('list/addListSelected', element)
        this.$store.dispatch('list/changeActionPop', true)
        this.$store.dispatch('list/changeShowButton', false)
      }
    },
    handleMessage(element){
      if(element.length === 0){
        return '---'
      }else{
        return element
      }
    },
    handleStatus(element){
      if(element=== 'en attente'){
        return 'wait'
      }else if(element=== 'refusé'){
        return 'wrong'
      }
      else{
        return 'done'
      }
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Oswald:wght@200;300;400;500&display=swap');

body {
  font-family: 'Oswald', sans-serif;
  text-align: center;
}

p{
  font-family: 'Oswald', sans-serif;
  text-align: center;
}

h4, h1{
  font-family: 'Oswald', sans-serif;
  text-align: center;
  margin-bottom: 0px
}

.border{
  border: 1px solid rgba(255, 255, 255, 0.589);
}

.bold{
  font-weight: 600;
}

.flex{
  display: flex;
  justify-content: space-around;
}

.title{
  margin-top: 10px
}

.titlePop{
  margin-top: -5px
}

.overflow {
  overflow: hidden;
  overflow-y: auto;
  max-height: 410px;
  max-width: 500px;
}

.action{
  max-height: 50px
}

.popTable{
  position: sticky;
    top: 0;
}

.pointer{
  cursor: pointer;
}

.wait{
  color:#f86b20;
  font-weight: bold;
  width: 1em
}

.done{
  color:#249c00;
  font-weight: bold;
  width: 1em
}

.wrong{
  color:#c70000;
  font-weight: bold;
  width: 1em
}

.row {
  padding: 0.65em 1em;
}

table {
  box-sizing: border-box;
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

.wrapperBt{
  margin-left: 15px;
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

.wrapper{
  min-width:43vw;
  max-width:49vw
}

td{
  color: #fff;
  font-weight: 400;
  padding: 1px;
}

@media (max-width: 768px) {
  .row{
    padding: 1px
  }

  .none{
    display: none;
  }

  .overflow {
    overflow-x: auto;
  }

  .title{
  margin-top: 10px
  }

  .wrapper{
    min-width: none;
    max-width: none;
  }
}
</style>