<template>
    <div class="containerCreation">
		<CreationPart/>
    </div>
</template>
<script>
import CreationPart from "../components/creationPart/CreationPart.vue"
export default {
  'components': {
      CreationPart
    }
}
</script>
<style>
body{
    background-image: linear-gradient(to right, #373636 0%, black 100%);
}

.containerCreation{
  width: 100%;
  display: flex;
  justify-content: center;
}

</style>