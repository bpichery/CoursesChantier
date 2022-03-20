<template>
    <div>
        <h4>Listes Reçues</h4>
        <p
v-for="element in finalList" id="flex-list"
      :key="element.listId" >{{element.listName}} de
       {{element.nickname}}</p>
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
        user:{}
        
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
      nickname:userdata[0].nickname
    }
    this.finalList.push(userSelected)
    })
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Oswald:wght@200;300;400;500&display=swap');

body {
  font-family: 'Oswald', sans-serif;
}
h4{font-family: 'Oswald', sans-serif;
}
</style>