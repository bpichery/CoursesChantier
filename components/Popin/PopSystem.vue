<template>
	<section>
    <div class='position'>
        <slot>
        </slot>
    </div>
	</section>
</template>
<script>

</script>
<style scoped>
section{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:100vw;
    height:100vh;
    background:rgba(255, 255, 255, 0.274)
}
.position{
    width:600px;
    padding:10px;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border: 50px;
    box-shadow: rgba(0, 0, 0, 0.671);
}
@media all and (max-width:900px){
div{
    max-width: 500px;
    width: calc(100% -20px)
}
}
@media all and (max-width:480px){
  div{max-width: 400px;
    width: calc(100% -20px)
    }  
}
</style>