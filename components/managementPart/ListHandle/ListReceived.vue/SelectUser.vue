<template>
    <div class='length'>
      <input
v-model="searchUser" type="text"
class="input-search" placeholder="Rechercher un joueur"/>
    <section
v-for="result in filteredList" id="flex-wrapper"
:key="result.user_id"  :class 
="selectedUser.user_id === result.user_id ? 'active' : ''" @click="handleSelect(result)">
            <div class="first part">
                <div class="picture"> {{result.nickname}}
</div>
            </div>
        </section>
    </div>
    
</template>
<script>
export default{
  'components': {
        },
data(){
    return{
        'results': '',
        'searchUser':'',
        'selectedUser':{}
    }
},

'computed': {
        'filteredList' () {
            if (this.searchUser === '') {
                return ''
            }
            return this.results.filter((post) =>
post.nickname.toLowerCase().includes(this.searchUser.toLowerCase()))
        }
    },
created(){
    this.$axios
  .get("/api/users")
  .then((res) => {
    this.results = res.data
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(this.results))
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });

}, methods:{
handleSelect (element) {
            this.selectedUser = element
             this.$store.dispatch('list/pushUser', this.selectedUser)
            }
}
}
</script>
<style scoped>
.length{
  width: fit-content;
}
.active{
        background-color: blueviolet;
    }
</style>