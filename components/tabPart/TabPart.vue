<template>
    <div class="wrapper">
        <br /><br /><br /><br /><br />
        <div id="menu-tab">
<div id="page-wrap">
<div class="tabs">
<div class="tab co"><input id="tab-1" checked="checked" name="tab-group-1" type="radio" /> <label for="tab-1">CONNEXION</label>
<div class="content">
<LoginPart/>
</div>
</div>
<div class="tab cre"><input id="tab-2" name="tab-group-1" type="radio" /> <label for="tab-2">CRÉER VOTRE COMPTE</label>
<div class="content">
<SubmitPart/>
</div>
</div>
</div>
</div>
		</div>

    </div>
</template>
<script>
import LoginPart from '~/components/inputPart/LoginPart.vue'
import SubmitPart from '~/components/inputPart/SubmitPart.vue'
export default {
  'components': {
        LoginPart, 
        SubmitPart
    }
}
</script>
<style scoped>

#menu-tab {
    margin-top: 100px;
    font-family: 'Oswald', sans-serif;
	font-size: 12pt;
      color: white;
	}
	
#menu-tab a {
color: grey;
font-weight: normal;
font-style: normal;
text-decoration: none;
font-variant: normal;
}


.tabs {
      position: relative;   
      min-height: 480px;
      max-height: 550px;
      clear: both;
      margin: 100px 0;
    }
    .tab {
      float: left;
    }
    .tab label {
      background: rgba(43, 43, 43, 0.515);
      padding: 4px;
border: 5px solid #06060600;
margin-left: auto;
    margin-right: auto;
position: relative;
border-radius: 10px 10px 0px 0px;
    }
    .tab [type=radio] {
      display: none;   
    }
    .content {
      position: absolute;
      top: 28px;
      left: 0;
      background: rgb(255 82 40);
      right: 0;
      bottom: 0;
      padding: 30px;
      border-radius: 0px 0px 10px 10px;
      box-shadow:6px 6px 10px rgba(0, 0, 0, 0.41);
      overflow: hidden;
	  overflow-y: auto;
	  margin-bottom: -20px;
    max-height: 340px;
    max-width: 240px;
    
    }
    .content > * {
      opacity: 0;
      transition: width 2s, height 2s, background-color 2s, transform 2s;
      -webkit-transition: all 0.6s ease;
      -moz-transition:    all 0.6s ease;
      -ms-transition:     all 0.6s ease;
      -o-transition:      all 0.6s ease;
    }

    [type=radio]:checked ~ label {
      background: rgb(255 82 40);
      color: black;
      z-index: 2;
    }
    [type=radio]:checked ~ label ~ .content {
      z-index: 1;
    }
    [type=radio]:checked ~ label ~ .content > * {
      opacity: 1;
      
    }
</style>