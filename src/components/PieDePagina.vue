<template>
    <div class="PieDePagina">
        <img class="LOGOP" src="PieDePagina2.png" alt="">

        <h3 class="Numero">Numero de contacto:</h3>
        <h3 class="Telefono">33 1438 7923</h3>

        <h3 class="Co">Correo de contacto:</h3>
        <h3 class="Correo">aulagramma@gmail.com</h3>

        <a class="face" href="https://www.facebook.com/profile.php?id=100063923500181"><img  src="faceLogo.png" alt=""></a>
        <a class="insta" href=""><img src="logoInsta.png" alt=""></a>
        <a class="X" href=""><img src="logoX.jpg" alt=""></a>
    </div>
</template>+

<style scoped>
    .PieDePagina{
        display: grid;
        grid-template-rows: repeat(3, 100px);
        grid-template-columns: repeat(18,105px); 
        justify-content: space-between;
        align-items: center;
        text-align: center;
        background-color: #bcc6eb;
    }
    .LOGOP{
        width: 300px;
        height: 250px;
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 4;
    }
    .Numero{
        grid-column-start: 5;
        grid-column-end: 7;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .Telefono{
        grid-column-start: 5;
        grid-column-end: 7;
        grid-row-start: 1;
        grid-row-end: 4;
    }
    .Co{
        grid-column-start: 7;
        grid-column-end: 9;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .Correo{
        grid-column-start: 7;
        grid-column-end: 9;
        grid-row-start: 1;
        grid-row-end: 4;
    }
    .face{
        grid-column-start: 12;
        grid-column-end: 14;
        grid-row-start: 1;
        grid-row-end: 4;
    }
    .insta{
        grid-column-start: 14;
        grid-column-end: 16;
        grid-row-start: 1;
        grid-row-end: 4;
    }
    .X{
        grid-column-start: 16;
        grid-column-end: 18;
        grid-row-start: 1;
        grid-row-end: 4;
    }
    img{
        width: 150px;
        height: 150px;
    }
</style>