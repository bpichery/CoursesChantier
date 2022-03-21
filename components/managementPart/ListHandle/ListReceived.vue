<template>
    <div class='wrapper'>
        <h4>Listes Reçues</h4>
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
      <td>{{element.message}}</td>
      <td>Status</td>
      <td>Cliquez-ici</td>
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
export default{
    data(){
    return{
        'results': [],
        'users': [],
        'nickname':'',
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
h4{font-family: 'Oswald', sans-serif;
text-align: center;
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
}
th {
  border-bottom: 1px solid #0000004b;
  color: #e27542;
  font-size: 0.85em;
  font-weight: 600;
  padding: 0.5em 1em;
  text-align: left;
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