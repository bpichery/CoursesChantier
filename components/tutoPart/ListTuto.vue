<template>
    <ul class="tilesWrap">
		<li>
			<h2>01</h2>
			<p>Créez-vous un compte dans l'onglet connexion!</p>
		</li>
		<li>
			<h2>02</h2>
			<p>Testez notre Tableau de Bord pour accéder à nos services.</p>
		</li>
		<li>
			<h2>03</h2>
			<p>Créez votre liste et ajoutez les éléments dont vous avez besoin. Envoyez celle-ci à l'utilisateur de votre choix.</p>
		</li>
		<li>
			<h2>04</h2>
			<p>Gérez les listes envoyées ou reçues. Et découvrez nos autres fonctionnalités...</p>
		</li>
	</ul>
</template>
<style scoped>
body {
	background: #262a2b;
}

.tilesWrap {
	padding: 0;
	margin: 50px auto;
	list-style: none;
	text-align: center;
}

.tilesWrap li {
	display: inline-block;
	width: 20%;
	min-width: 140px;
	max-width: 190px;
	padding: 20px 20px 20px;
	position: relative;
	vertical-align: top;
	margin: 10px;
	font-family: 'Oswald', sans-serif;
	min-height: 25vh;
	background: #262a2b;
	border: 1px solid #252727;
	text-align: justify;
}

.tilesWrap li h2 {
	font-size: 65px;
	margin: 0;
	position: absolute;
	opacity: 0.2;
	top: 50px;
	right: 10px;
	transition: all 0.3s ease-in-out;
    color: rgb(255, 81, 0);
}

.tilesWrap li h3 {
	font-size: 20px;
	color: #b7b7b7;
	margin-bottom: 5px;
}

.tilesWrap li p {
	font-size: 16px;
	line-height: 18px;
	color: #b7b7b7;
	margin-top: 25px;
}

.tilesWrap li button {
	background: transparent;
	border: 1px solid #b7b7b7;
	padding: 10px 20px;
	color: #b7b7b7;
	border-radius: 3px;
	position: relative;
	transition: all 0.3s ease-in-out;
	transform: translateY(-40px);
	opacity: 0;
	cursor: pointer;
	overflow: hidden;
}

.tilesWrap li button:before {
	content: '';
	position: absolute;
	height: 100%;
	width: 120%;
	background: #b7b7b7;
	top: 0;
	opacity: 0;
	left: -140px;
	border-radius: 0 20px 20px 0;
	z-index: -1;
	transition: all 0.3s ease-in-out;
	
}

.tilesWrap li:hover button {
	transform: translateY(5px);
	opacity: 1;
}

.tilesWrap li button:hover {
	color: #262a2b;
}

.tilesWrap li button:hover:before {
	left: 0;
	opacity: 1;
}

.tilesWrap li:hover h2 {
	top: 0px;
	opacity: 1;
}

.tilesWrap li:before {
	content: '';
	position: absolute;
	top: -2px;
	left: -2px;
	right: -2px;
	bottom: -2px;
	z-index: -1;
	background: #fff;
	transform: skew(2deg, 2deg);
}

.tilesWrap li:after {
	content: '';
	position: absolute;
	width: 40%;
	height: 100%;
	left: 0;
	top: 0;
	background: rgba(255, 255, 255, 0.02);
}

.tilesWrap li:nth-child(1):before {
background: linear-gradient(to right, #eb4e0a, #e6e6e6);
}

.tilesWrap li:nth-child(2):before {
background: linear-gradient(to right, #eb4e0a, #e6e6e6);
}

.tilesWrap li:nth-child(3):before {
background: linear-gradient(to right, #eb4e0a, #e6e6e6);
}

.tilesWrap li:nth-child(4):before {
background: linear-gradient(to right, #eb4e0a, #e6e6e6);
}

</style>