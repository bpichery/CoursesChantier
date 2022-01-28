<template>
    <div>
        <AdminBar/>
        <br/>
        <br/>
        <section></section>
    </div>
</template>
<script>
import AdminBar from "~/components/navbar/AdminBar.vue"
export default {
  'components': {
      AdminBar
    }
}
</script>
<style>
body{
    background-image: linear-gradient(to right, #373636 0%, black 100%);
    top: 0;
    margin: 0;
}
section{
    margin-top: 25vh;
    background: white;
    height: 80vh;
    margin: 0 auto;
    width: 80vw;}
</style>