<template>
    <div class='wrapper'>
        <h4>Listes Reçues</h4>
        <PopSystem v-if="openPop">
          <h1>{{listSelected.listName.toUpperCase()}}</h1>
          <h4>Réalisé par {{listSelected.nickname}}</h4>
          <p>{{listSelected.message}}</p>
          <p>{{listSelected.content}}</p>
        </PopSystem>
        <div v-if='isThereContent' class='content'>
        <table>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Pseudo</th>
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
      <td>{{element.listName}}</td>
      <td>{{element.nickname}}</td>
      <td>{{handleMessage(element.message)}}</td>
      <td>{{element.status}}</td>
      <td class='pointer' @click="handlePop(element)">Cliquez-ici</td>
      <td>supprimer la liste</td>
    </tr>
  </tbody>
</table>
</div><p v-else>
    Aucune liste retrouvée
    </p>
  </div>
</template>
<script>
import PopSystem from '~/components/Popin/PopSystem.vue'
export default{
  'components': {
        PopSystem
    },
    data(){
    return{
        list:'',
        'results': [],
        'users': [],
        'nickname':'',
        'listSelected':'',
        openPop: false,
        finalList:[],
        user:{},
        'isThereContent': false
        
    }
    },
async created(){
  const listReceived = await this.$axios.$get(`/api/listReceived/${this.$auth.user[0].user_id}`)
  const usersList = await this.$axios.$get("/api/users")
  
  listReceived.forEach(element => {
    const userdata=usersList.filter((post)=>post.user_id===element.user_id)
    const userSelected={
      listId:element.list_id,
      listName:element.list_name,
      message:element.message,
      status:element.status,
      content: element.content,
      nickname:userdata[0].nickname
    }
    // eslint-disable-next-line no-console
    console.log(userSelected.content)
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

}
p{
  font-family: 'Oswald', sans-serif;
  text-align: center;

}
h4, h1{font-family: 'Oswald', sans-serif;
text-align: center;
}

.pointer{
  cursor: pointer;
}
.wrapper{
 box-sizing: border-box;
overflow-y: auto;
width: 50%;
}

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.content{
  width: 100%;
  display: flex;
  justify-content: center;
}
table {
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
  color: #e27542;
  font-size: 0.85em;
  font-weight: 600;
  padding: 0.5em 1em;
  text-align: center;
}
td {
  color: #fff;
  font-weight: 400;
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