<template>
<div>
    <div class='length'>
        <div class='wrapper-list'> <h3>Ma Liste</h3>
            <p
v-for="element in finalList" id="flex-list"
      :key="element.content.id" > ITEM: {{element.content.designation}} // {{element.content.reference}}- QUANTITÉ: {{element.quantity}}</p></div>
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
       <button class='bt-list' @click.prevent="addList">AJOUTER</button>
        <button class='bt-list' @click.prevent="validateList">VALIDER</button>
        <button class='bt-list' @click.prevent="startAgain">RECOMMENCER</button>
        </div>
    <section
      v-for="result in filteredList" id="flex-wrapper"
      :key="result.id"  :class 
      ="selectedTool.id === result.id ? 'active' : ''" @click="handleSelect(result)">
            <div class="first part">
                <div class="picture" > {{result.designation}} {{result.reference}}</div>
            </div>
        </section>
        
      </div>
    </div>
  
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
    'startAgain'(){
            this.finalList =[]
            this.$store.dispatch('list/clearAll')
        },
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
.input-search{
    height: 10px;
    width: 276px;
    margin-bottom: 2px;
    margin-top: 25px;
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
    -webkit-border-radius: 9px;
}

.wrapper-list{
    width:65vw
}

.wrapper-list h3{
    text-align:center;
    font-family: 'Oswald', sans-serif;
}

#flex-list{
    background: #eee;
    font-family: 'Oswald', sans-serif;
    border: 1px, solid, rgba(117, 117, 117, 0.486);
    margin: 3px;
}
#flex-wrapper{
        background: #00000046;
    font-family: 'Oswald', sans-serif;
    border: solid 1px rgba(14, 14, 14, 0.555);
    margin: 0;
    text-align: justify;
    font-size: 95%;
}
#flex-wrapper:hover{
    background: rgb(255, 103, 32);
}
.qt-list{
  max-height: 16px;
  max-width: 55px;
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
    -webkit-border-radius: 9px;
}
.pm-flex{
  display: flex;
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
.length{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}
.wrapper-flex{
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;
  padding: 5px;
  overflow-y: auto;
}
.active{
        font-weight: 600;
        color: #eee;
    }
    @media (max-width: 700px) {

        .length{
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
}
.wrapper-list{
    width: 100%
}
.wrapper-flex{
    height: 250px;
    width: 303px;
    margin-left: auto;
    margin-right: auto
}
    }
</style>