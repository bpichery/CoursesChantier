<template>
<div>
    <img
src="../..//images/logo3.png"/>
        <p>MES LISTES DE COURSES</p>
        <p>LISTES RECUES</p>
    <img
class="signOut"
src="../..//images/sign-out.png"/>
</div>    
</template>
<script>

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Oswald:wght@200;300;400;500&display=swap');

body {
  font-family: 'Oswald', sans-serif;
}
div{
    background-color: rgba(255, 255, 255, 0.371);
    top:0;
    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-size: 3vw;
}
.signOut{
    max-height: 7vw;
}
img{
    max-width: 12vw;
}

@media (min-width: 768px) {
    div{
    background-color: rgba(255, 255, 255, 0.371);
    top:0;
    height: 12vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-size: 2vw;
}
.signOut{
    max-height: 35px;
}
img{
    max-width: 11vh;
}
}
</style>