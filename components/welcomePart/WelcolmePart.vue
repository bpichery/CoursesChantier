<template>
    <section>
        <div class="container">
          <p class="centered">Bienvenue sur Courses Chantier</p>
          <p class="subtitle">Le site qui vous permet d'envoyer vos listes de course de l'essentiel du BTP</p>
        </div>
    </section>
</template>
<script>

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Oswald:wght@200;300;400;500&display=swap');

body {
  font-family: 'Oswald', sans-serif;
}

.container {
  position: relative;
  text-align: center;
  color: rgb(250, 81, 30);
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 8vw;
    background-image:  url(../../images/tools.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 650px;
    
}

.subtitle {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: black;
  font-size: 3vw;
}
  

.centered {	
text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.808),
             0px 8px 13px rgba(0, 0, 0, 0.774),
             0px 18px 23px rgba(0, 0, 0, 0.172);
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-size: 5vw;
}

.mainPic{
 max-width: 100vw;
  height: auto;
 position: absolute;
 top: 0;
 left: 0;
}

@media (min-width: 768px) {
#displayPC{
    display: none;
}
}

@media (max-width: 768px) {
  #displayPhone{
    display: none;
}
 .subtitle {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: black;
  font-size: 8vw;
}
  
.centered {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-size: 8vw;
}
}
</style>