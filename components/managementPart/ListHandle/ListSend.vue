<template>
    <div>
        <h4>Listes Envoyées</h4>
        <p
v-for="element in results" id="flex-list"
      :key="element.list_id" >{{element.list_name}}</p>
    </div>
</template>
<script>
export default{
    data(){
    return{
        'results': '',
    }
},
created(){
    this.$axios
  .get(`/api/listSend/${this.$auth.user[0].user_id}`)
  .then((res) => {
    this.results = res.data
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(this.$auth.user[0].user_id))
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
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