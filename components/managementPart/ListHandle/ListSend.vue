<template>
    <div class='wrapper'>
        <h4>Listes Envoyées</h4>
        <ActionPop v-if='generatedActionPop===true'/>
        <PopSystem v-if="openPop">
          <h1>{{listSelected.listName.toUpperCase()}}</h1>
          <h4>Envoyé à {{listSelected.nickname}}</h4>
          <p v-if="listSelected.message.length >0">{{listSelected.message}}</p>
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
            <tr
              v-for="item in listSelected.content" id="flex-list" :key="item.content.designation">
                <td>{{item.quantity}}</td>
                <td>{{item.content.reference}}</td>
                <td>{{item.content.designation}}</td>
                <td>{{item.content.description}}</td>
            </tr>
          </tbody>
        </table>
        <p class='pointer' @click="openPop= false">FERMER</p>
        </PopSystem>
        <div v-if='isThereContent' class='content'>
        <table>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Destinataire</th>
      <th>Message</th>
      <th>Status</th>
      <th>Détails</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr
v-for="element in finalList" id="flex-list"
      :key="element.listId">
      <td class='row'>{{element.listName}}</td>
      <td class='row'>{{element.nickname}}</td>
      <td class='row'>{{handleMessage(element.message)}}</td>
      <td class='row'>{{element.status}}</td>
      <td class='pointer row' @click="handlePop(element)">Cliquez-ici</td>
      <td class='row' @click='handleAction(element)'><img class='action pointer' alt='action' src="../../../images/gear.png"/></td>
    </tr>
  </tbody>
</table>
</div><p v-else class='listNone'>
    Aucune liste retrouvée
    </p>
    </div>
</template>
<script>
 import PopSystem from '~/components/Popin/PopSystem.vue'
 import ActionPop from '~/components/managementPart/ActionHandle/ActionPop.vue'
export default{
  'components': {
    PopSystem,
    ActionPop
},
    data(){
    return{
        'results': [],
        'users': [],
        'nickname':'',
        openPop: false,
        finalList:[],
        user:{},
        'isThereContent': false
        
    }
},
'computed': {
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
      nickname:userdata[0].nickname
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

.action{
  max-height: 50px
}

h4, h1{font-family: 'Oswald', sans-serif;
text-align: center;
}
.listNone{
  width: 50vw
}

.flex-list td{
  padding: none;
}
.pointer{
  cursor: pointer;
}

.content{
  width: 100%;
  display: flex;
  justify-content: center;
}

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

td{
  color: #fff;
  font-weight: 400;
  padding: 1px;
}

.row {
  padding: 0.65em 1em;
}
.disabled td {
  color: #0000001f;
}
tbody tr {
  transition: background 0.25s ease;
}
tbody tr:hover {
  background: #fc520f;
}

</style>