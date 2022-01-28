<template>
  <div>
      <BarPart/>
      <Welcolme-part/>
      <hr/>
      <TutoPart/>
      <SearchBar/>
      <FooterPart class="footer"/>
  </div>
</template>

<script>
import WelcolmePart from '~/components/welcomePart/WelcolmePart.vue'
import BarPart from '~/components/navbar/BarPart.vue'
import SearchBar from '~/components/searchPart/SearchBar.vue'
import TutoPart from '~/components/tutoPart/TutoPart.vue'
import FooterPart from '~/components/footerPart/FooterPart.vue'
export default {
  name: 'IndexPage',
  'components': {
        BarPart,
        SearchBar,
        FooterPart,
        TutoPart,
        WelcolmePart
    }
}
</script>
<style >

body{
  margin: 0%;
  background-color: rgb(109, 109, 109);
}

hr{
  display: block;
    border: 0;
    border-top: 35px solid rgb(199, 199, 199);
    margin-top: -5px;
}

.footer{

  margin-top: 150px;
}
</style>
