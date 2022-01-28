<template>
<div class="wrapper">
    <form class="searchform cf">
  <input type="text" placeholder="Ecrou, vis, boulon, ...">
  <button type="submit">Chercher</button>
</form>
</div>
</template>
<script>

</script>
<style scoped>


*,*:after,*:before {
  box-sizing:border-box;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
}

.wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
}

.cf:before,
.cf:after {
    content:"";
    display:table;
}
.cf:after {
    clear:both;
}

body {
  background: #3aaae8;
  color: #fff;
  font:12px/18px 'HelveticaNeue', Helvetica, Arial, sans-serif;
}
a,a:visited {
  color:#fff
}

/*--------------------------------------------------------------
2.0 - SEARCH FORM
--------------------------------------------------------------*/
.searchform {
  background:#f4f4f4;
  background:rgba(244,244,244,.79);
  border: 1px solid #d3d3d3;
  padding: 2px 5px;
  position: absolute;
  margin: 3%;
  width:313px;
  box-shadow:0 4px 9px rgba(0,0,0,.37);
  -moz-box-shadow:0 4px 9px rgba(0,0,0,.37);
  -webkit-box-shadow:0 4px 9px rgba(0,0,0,.37);
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px
}

.searchform input, .searchform button {
	float: left
}
.searchform input {
	background:#fefefe;
	border: none;
	font:12px/12px 'HelveticaNeue', Helvetica, Arial, sans-serif;
	margin-right: 5px;
	padding: 10px;
	width: 190px;
	box-shadow: 0 0 4px rgba(0,0,0,.4) inset, 1px 1px 1px rgba(255,255,255,.75);
	-moz-box-shadow: 0 0 4px rgba(0,0,0,.4) inset, 1px 1px 1px rgba(255,255,255,.75);
	-webkit-box-shadow: 0 0 4px rgba(0,0,0,.4) inset, 1px 1px 1px rgba(255,255,255,.75);
  border-radius: 9px;
  -moz-border-radius: 9px;
  -webkit-border-radius: 9px
}
	.searchform input:focus {
		outline: none;
		box-shadow:0 0 4px #f86300 inset;
		-moz-box-shadow:0 0 4px #fc7024 inset;
		-webkit-box-shadow:0 0 4px #f78b26 inset;
	}
	.searchform input::-webkit-input-placeholder {
  	font-style: italic;
  	line-height: 15px
	}

	.searchform input:-moz-placeholder {
	  font-style: italic;
  	line-height: 15px
	}

.searchform button {
	background: rgb(236, 119, 52);
	background: -moz-linear-gradient(top, rgb(253, 126, 41) 0%, rgb(255, 126, 41) 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgb(245, 128, 19)), color-stop(100%,rgb(245, 131, 24)));
	background: -webkit-linear-gradient(top, rgb(236, 125, 52) 0%,rgb(220, 96, 38) 100%);
	background: -o-linear-gradient(top, rgb(255, 151, 31) 0%,rgb(247, 127, 14) 100%);
	background: -ms-linear-gradient(top, rgb(255, 118, 26) 0%,rgb(236, 124, 19) 100%);
	background: linear-gradient(to bottom, rgb(255 71 1) 0%,rgb(255, 129, 27) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#34adec', endColorstr='#2691dc',GradientType=0 );
	border: none;
	color:#fff;
	cursor: pointer;
	font: 13px/13px 'HelveticaNeue', Helvetica, Arial, sans-serif;
	padding: 10px;
	width:106px;
	box-shadow: 0 0 2px #ff7e33 inset;
	-moz-box-shadow: 0 0 2px #fc6b1d inset;
	-webkit-box-shadow: 0 0 2px #ff760d inset;
  border-radius: 9px;
  -moz-border-radius: 9px;
  -webkit-border-radius: 9px;
}
	.searchform button:hover {
		opacity:.9;
	}
</style>
