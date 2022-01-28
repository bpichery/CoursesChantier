<template>
    <div>
        <AdminBar/>
        <AdminTab/>
    </div>
</template>
<script>
import AdminBar from "~/components/navbar/AdminBar.vue"
import AdminTab from "~/components/tabPart/AdminTab.vue"
export default {
  'components': {
      AdminBar,
      AdminTab
    }
}
</script>
<style>
body{
    background-image: linear-gradient(to right, #373636 0%, black 100%);
    top: 0;
    margin: 0;
}
</style>