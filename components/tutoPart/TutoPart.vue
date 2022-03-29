<template>
    <div>
        <section>
            <h1>Comment ça marche ?</h1>
            <ListTuto/>
            <div class="wrapper">
                <img class="fleche" src="../../images/fleche.png"/>
            </div>
        </section>
    </div>   
</template>
<script>
import ListTuto from '~/components/tutoPart/ListTuto.vue'
export default {
    components: {
        ListTuto
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Oswald:wght@200;300;400;500&display=swap');

h1{
   text-align: center;
    font-family: 'Oswald', sans-serif;
    font-size: 35px;
    color: white;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.808), 0px 8px 13px rgba(0, 0, 0, 0.774), 0px 18px 23px rgba(0, 0, 0, 0.172);
}

.fleche{
    max-width: 250px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: -75px;
    z-index: 3;
    box-shadow: rgba(255, 255, 255, 0.16) 0px 3px 6px, rgba(255, 255, 255, 0.23) 0px 3px 6px;
    border-radius: 50%;
}

.wrapper{
    width: 100%;
    display: flex;
}
</style>