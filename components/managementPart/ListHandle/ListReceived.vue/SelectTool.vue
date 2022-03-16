<template>
<div>
    <div class='length'>
      <div class='wrapper-flex'>
      <input
v-model="searchTool" type="text"
class="input-search" placeholder="Rechercher du matériel" required/>
<div class='pm-flex'>
<input
v-model="quantity"
class='qt-list'
type="number" 
       min="1" max="20" placeholder="0" required>
       <button class='bt-list' @click.prevent="addList">Ajouter à la liste</button>
        <button v-if='selectedTool.id!== undefined' class='bt-list' @click.prevent="validateList">Valider la liste</button>
        </div>
    <section
      v-for="result in filteredList" id="flex-wrapper"
      :key="result.id"  :class 
      ="selectedTool.id === result.id ? 'active' : ''" @click="handleSelect(result)">
            <div class="first part">
                <div class="picture" > {{result.designation}} {{result.reference}} 
</div>
            </div>
        </section>
        
      </div>
    </div>
   <p
v-for="element in finalList" id="flex-wrapper"
      :key="element.content.id" > ITEM: {{element.content.designation}} // {{element.content.reference}}- QUANTITÉ: {{element.quantity}}</p>
</div>
</template>
<script>

export default{
  'components': {
        },
data(){
    return{
        'isAdded': false,
        'results': '',
        'quantity': null,
        'searchTool':'',
        'selectedTool':{},
        
        'finalList':[]
    }
},

'computed': {
        'filteredList' () {
            if (this.searchTool === '') {
                return ''
            }
            return this.results.filter((post) =>
            
          post.designation.toLowerCase().includes(this.searchTool.toLowerCase())|| post.reference.toLowerCase().includes(this.searchTool.toLowerCase()) )
        }
    },
created(){
    this.$axios
  .get("/api/tools")
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
            this.selectedTool = element
            },
          addList(){
            if(this.quantity===null || this.quantity > 20 || this.selectedTool.id=== undefined){
              alert(`Merci d'indiquer la quantité souhaitée avant d'ajouter l'élément à votre liste (comprise entre 1 et 20)`)
            }
            else{
          const listModel= {
          'quantity': null,
          'content': {}
          }
              listModel.quantity = this.quantity
              listModel.content=this.selectedTool
              this.finalList.push(listModel)
              this.searchTool=''
              this.quantity=null
              this.isAdded=true
            }
          },
          validateList(){
            if(this.isAdded=== false){
              alert(`Merci d'AJOUTER l'élément à votre liste. Puis, une fois la liste complétée, cliquez sur VALIDER LA LISTE`)
            }else{
              // eslint-disable-next-line no-console
              console.log(this.finalList)
            this.$store.dispatch('list/pushItem', this.finalList)
            this.$store.dispatch('list/changeListDone', true)
            }
          }

}
}
</script>
<style scoped>
.qt-list{
  max-height: 16px;
  max-width: 55px;
}

.pm-flex{
  display: flex;
}

.bt-list{
    max-height: 22px;
    min-height: 20px;
}

.length{
  display: flex;
}
.wrapper-flex{
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;
  border: 1px  solid #eee;
  padding: 5px;
  overflow-y: auto;
}
.active{
        background-color: blueviolet;
    }
</style>