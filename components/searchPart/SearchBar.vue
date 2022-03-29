<template>
  <div class="wrapper">
    <form class="searchform cf">
      <input v-model='searchItem' type="text" placeholder="Recherchez ici">
      <button type="submit" @click.prevent="filteredList">Chercher</button>
      <div v-if="showResult=== true">
        <section id="flex-wrapper">
          <div class="first part">
				    <br/>
            <div v-for="item in finalList" :key="item.id" class="picture" >{{item.reference}} // {{item.designation}}</div>
          </div>
        </section>
      </div>
    </form>
  </div>
</template>
<script>
export default{
	data(){
    return {
    searchItem:'',
    results:[],
		showResult:false,
		finalList: ''               
    }
  },
  created(){
    this.$axios.get("/api/tools").then((res) => {this.results = res.data})
  },
  methods: {
    'filteredList' () {
			this.showResult = true
      if (this.searchItem === '') {
        return ''
      }
      this.finalList = this.results.filter((post) =>
      post.designation.toLowerCase().includes(this.searchItem.toLowerCase())|| post.reference.toLowerCase().includes(this.searchItem.toLowerCase()) )  
		}
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Oswald:wght@200;300;400;500&display=swap');

body{
	font-family: 'Oswald', sans-serif;
}

#flex-wrapper{
	margin-bottom: 5px;
}

*,*:after,*:before {
  box-sizing:border-box;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
}

.picture{
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
}

.wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
}

.cf:before,
.cf:after {
  content:"";
  display:table;
}
.cf:after {
  clear:both;
}

body {
  background: #3aaae8;
  color: #fff;
  font:12px/18px  'Oswald', sans-serif;
}
a,a:visited {
  color:#fff
}

/*--------------------------------------------------------------
2.0 - SEARCH FORM
--------------------------------------------------------------*/
.searchform {
  background:#f4f4f4;
  background:rgba(244,244,244,.79);
  border: 1px solid #d3d3d3;
  padding: 5px;
  margin: 3%;
  width:400px;
  box-shadow:0 4px 9px rgba(0,0,0,.37);
  -moz-box-shadow:0 4px 9px rgba(0,0,0,.37);
  -webkit-box-shadow:0 4px 9px rgba(0,0,0,.37);
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
}

.searchform input {
	background:#fefefe;
	border: none;
	font:12px/12px  'Oswald', sans-serif;
	margin-right: 5px;
	padding: 10px;
	box-shadow: 0 0 4px rgba(0,0,0,.4) inset, 1px 1px 1px rgba(255,255,255,.75);
	-moz-box-shadow: 0 0 4px rgba(0,0,0,.4) inset, 1px 1px 1px rgba(255,255,255,.75);
	-webkit-box-shadow: 0 0 4px rgba(0,0,0,.4) inset, 1px 1px 1px rgba(255,255,255,.75);
  border-radius: 9px;
  -moz-border-radius: 9px;
  -webkit-border-radius: 9px
}

.searchform input:focus {
	outline: none;
	box-shadow:0 0 4px #f86300 inset;
	-moz-box-shadow:0 0 4px #fc7024 inset;
	-webkit-box-shadow:0 0 4px #f78b26 inset;
}

.searchform input::-webkit-input-placeholder {
 	font-style: italic;
 	line-height: 15px
}

.searchform input:-moz-placeholder {
	font-style: italic;
  line-height: 15px
}

.searchform button {
	background: rgb(236, 119, 52);
	background: -moz-linear-gradient(top, rgb(253, 126, 41) 0%, rgb(255, 126, 41) 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgb(245, 128, 19)), color-stop(100%,rgb(245, 131, 24)));
	background: -webkit-linear-gradient(top, rgb(236, 125, 52) 0%,rgb(220, 96, 38) 100%);
	background: -o-linear-gradient(top, rgb(255, 151, 31) 0%,rgb(247, 127, 14) 100%);
	background: -ms-linear-gradient(top, rgb(255, 118, 26) 0%,rgb(236, 124, 19) 100%);
	background: linear-gradient(to bottom, rgb(255 71 1) 0%,rgb(255, 129, 27) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#34adec', endColorstr='#2691dc',GradientType=0 );
	border: none;
	color:#fff;
	cursor: pointer;
	font: 13px/13px  'Oswald', sans-serif;
	padding: 12px;
	width:110px;
	box-shadow: 0 0 2px #ff7e33 inset;
	-moz-box-shadow: 0 0 2px #fc6b1d inset;
	-webkit-box-shadow: 0 0 2px #ff760d inset;
  border-radius: 9px;
  -moz-border-radius: 9px;
  -webkit-border-radius: 9px;
}
.searchform button:hover {
	opacity:.9;
}
@media (max-width: 400px) {
  .searchform input {
  	min-width: 220px;
  }
}
@media (min-width: 400px) {
  .searchform input {
  	min-width: 266px;
    max-width: 273px;
  }
 }
</style>
