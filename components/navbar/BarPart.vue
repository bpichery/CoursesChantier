<template>
    <div>
        <nav class="navbar">
      <div class="navbar-container container">
          <input type="checkbox">
          <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
          </div>
          <nuxt-link class="link" to="/">
          <div>
            <img class="logo" src="../../images/logo3.png"/>
          </div>
          </nuxt-link>
          <ul class="menu-items">
              <nuxt-link v-if="$auth.loggedIn === false" class="link" to="/"><li><div class="userWrap"><img class="home" src="../../images/home-page.png"/><p>ACCUEIL</p></div></li></nuxt-link>
              <nuxt-link v-else class="link" to="/connected-section"><li><div class="userWrap"><img class="home" src="../../images/home-page.png"/><p>TABLEAU DE BORD</p></div></li></nuxt-link>
              <nuxt-link v-if="$auth.loggedIn === false" class="link" to="/login-submit"><li><div class="userWrap"><img class="user" src="../../images/profile-user.png"/><p>CONNEXION</p></div></li></nuxt-link>
              <li v-else class="link" @click="bye"><div class="userWrap"><img class="user" src="../../images/profile-user.png"/><p>DECONNEXION</p></div></li>
          </ul>
        </div>
  </nav>
    </div>
</template>
<script>
export default {
   methods: {
    bye(){
      if(this.$auth){
     this.$auth.reset()
.then(() => {this.$router.push('/login-submit');})}
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Oswald:wght@200;300;400;500&display=swap');

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.html {
  font-size: 62.5%;
}

body {
  font-family: 'Oswald', sans-serif;
}
h2{
  font-family: 'Oswald', sans-serif;
}
.container {
  max-width: 1200px;
  width: 90%;
  margin: auto;
}

.btn {
  display: inline-block;
  padding: 0.5em 1.5em;
  text-decoration: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  margin-top: 1em;
  text-transform: uppercase;
  font-weight: small;
}

.btn-primary {
  color: #fff;
  background: #16a083;
}

.btn-primary:hover {
  background: #117964;
  transition: background 0.3s ease-in-out;
}

.logo{
  max-width: 4.2rem;
}
.user, .home{
  max-height: 25px;
  margin-right: 15px;
}

.userWrap{
  display: flex;
  align-items: center;
}

.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}

.navbar {
  box-shadow: 0px 5px 10px 0px rgba(4, 4, 4, 0.555);
  position: fixed;
  width: 100%;
  background: rgb(255, 255, 255);
  color: #000;
  opacity: 0.85;
  height: 75px;
  z-index: 12;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 75px;
  align-items: center;
}

.menu-items {
  order: 2;
  display: flex;
  text-align: center;
}

.menu-items li {
  list-style: none;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Oswald', sans-serif;
  font-size: 1vw;
  vertical-align: middle;
}

.link {
  cursor: pointer;
  text-decoration: none;
  color: #444;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.link:hover {
  color: #dd3d03;
  transition: color 0.3s ease-in-out;
}

.showcase-area {
  height: 50vh;
  background: linear-gradient(rgba(240, 240, 240, 0.144),rgba(255, 255, 255, 0.336)),
  url("https://i.postimg.cc/wT3TQS3V/header-image2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.showcase-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.6rem;
}

.main-title {
  text-transform: uppercase;
  margin-top: 1.5em;
}

#about {
  padding: 50px 0;
  background: #f5f5f7;
}

.about-wrapper {
  display: flex;
  flex-wrap: wrap;
}

#about h2 {
  font-size: 2.3rem;
}

#about p {
  font-size: 1.2rem;
  color: #555;
}

#about .small {
  font-size: 1.2rem;
  color: #666;
  font-weight: 600;
}

.about-img {
  flex: 1 1 400px;
  padding: 30px;
  transform: translateX(150%);
  animation: about-img-animation 1s ease-in-out forwards;
}

@keyframes about-img-animation {
  100% {
    transform: translate(0);
  }
}

.about-text {
  flex: 1 1 400px;
  padding: 30px;
  margin: auto;
  transform: translate(-150%);
  animation: about-text-animation 1s ease-in-out forwards;
}

@keyframes about-text-animation {
  100% {
    transform: translate(0);
  }
}

.about-img img {
  display: block;
  height: 400px;
  max-width: 100%;
  margin: auto;
  object-fit: cover;
  object-position: right;
}

@media (min-width: 768px) {
  #displayPhone{
    display: none;
  }
}

@media (max-width: 768px) {
  .wrapperLogo{
    margin-top: 15px;
  }

  #displayPC{
    display: none;
  }

  .navbar {
    opacity: 0.95;
  }
  
  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 75px;
  }

  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 32%;
    left: 1%;
    z-index: 5;
    opacity: 0;
  }

  .navbar-container .hamburger-lines {
    display: block;
    height: 23px;
    width: 35px;
    position: absolute;
    top: 32%;
    left: 1%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #333;
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 100px;
    background: #fff;
    height: 100vh;
    max-width: 300px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 50px;
    transition: transform 0.5s ease-in-out;
    box-shadow: 5px 0px 10px 0px #aaa;
  }

  .navbar .menu-items li {
    margin-bottom: 1.5rem;
    font-size: 3vw;
    font-weight: 500;
  }

  .logo {
    position: absolute;
    top: 5px;
    font-size: 2rem;
  }

  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(35deg);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-35deg);
  }

  .form-container {
    width: 90%;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
  }

  .contact-img {
    width: 90%;
    margin: 3rem auto;
  }

  .logo {
    position: absolute;
    right: 15px;
    font-size: 3rem;
  }
}
@media (min-width: 769px) and (max-width: 900px) {
  .navbar .menu-items li {
    margin-bottom: 2.5rem;
    font-size: 3vw;
    font-weight: 500;
  }

  .img-container h3 {
    font-size: 1.5rem;
  }

  .img-container .btn {
    font-size: 0.7rem;
  }
}
@media (orientation: landscape) and (max-height: 500px) {
  .showcase-area {
    height: 50vmax;
  }
}
</style>
