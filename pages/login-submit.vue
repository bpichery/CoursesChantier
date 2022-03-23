<template>
	<section>
    <div class="containerLogin">
		<BarPart class="navbar"/>
		<TabPart/>
		</div>
		<FooterPart/>
    </section>
</template>
<script>
import BarPart from '~/components/navbar/BarPart.vue'
import TabPart from '~/components/tabPart/TabPart.vue'
import FooterPart from '~/components/footerPart/FooterPart.vue'
export default {
  'components': {
	  TabPart,
	  BarPart,
	  FooterPart
    }
}
</script>
<style>
body{
	margin: 0;
}
.navbar{
	top:0;
	left: 0;
}

.containerLogin{
	background-image:  url(~/images/test.jpg);
     background-size: cover;
    background-position: center;
    width: 100%;
	max-height: 100%;
	margin-top: -100px;
	display: flex;
	justify-content: center;
}
</style>