<template>
    <div>
        <div id="tabs" class="container">
  
    <div class="tabs">
        <a :class="[ activetab === '1' ? 'active' : '' ]" @click="activetab='1'">Nouvelle Liste</a>
        <a :class="[ activetab === '2' ? 'active' : '' ]" @click="activetab='2'">Historique</a>
    </div>

    <div class="content">
        <div v-if="activetab ==='1'" class="tabcontent">
            <SearchBar/>
        </div>
        <div v-if="activetab ==='2'" class="tabcontent">
            <p>test</p>
        </div>
        </div>
    </div>
  
</div>
</template>
<script>
import SearchBar from '~/components/searchPart/SearchBar.vue'
export default {
    'components': {
        SearchBar},
  'data' () {
        return {
            activetab: '1'
           
        };
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Oswald:wght@200;300;400;500&display=swap');


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {  
    max-width: 620px; 
    min-width: 420px;
    margin: 40px auto;
    font-family: 'Oswald', sans-serif;
    font-size: 0.9em;
    color: #888;
}

/* Style the tabs */
.tabs {
    overflow: hidden;
    margin-bottom: -2px; /* hide bottom border */
    margin-left: 24px;
}

.tabs a{
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
}
.tabs a:last-child { 
    border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
    background-color: #aaa;
    color: #fff;
}

/* Styling for active tab */
.tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
}

/* Style the tab content */
.tabcontent {
    padding: 30px 50px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 4px 4px 8px #e1e1e1;
    height:100vh;
    background:white;
}

.tabcontent td {
  padding: 0.3em 0.4em;
  color: #484848;
}
.tabcontent td.legend { 
  color: #888; 
  font-weight: bold;
  text-align: right;
}
.tabcontent .map {
  height: 173px;
  width: 220px;
  background: #D3EAFB;
  margin-left: 60px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.data { width: 120px; }
</style>