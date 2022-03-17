<template>
    <div class='length'>
      <input
v-model="searchUser" type="text"
class="input-search" placeholder="Rechercher un joueur" required/>
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
            // eslint-disable-next-line no-console
            console.log('store to_user')
             this.$store.dispatch('list/pushUser', this.selectedUser)
            }
          }
}
</script>
<style scoped>
.input-search{
        height: 10px;
    width: 185px;
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
    -webkit-border-radius: 9px
}
#flex-wrapper{
    background: #ffffff46;
    font-family: 'Oswald', sans-serif;
    border: solid 1px rgba(255, 255, 255, 0.986);
    margin: 0;
    text-align: justify;
    font-size: 95%;
}
.length{
  width: fit-content;
}
.active{
        font-weight: bold;
        color: #ff6600;
    }
</style>