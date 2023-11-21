<script setup>
    import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="nav-bar">
        <div class="logo">
            <img src="/Logo2.png" alt="" class="ILogo">
        </div>
        
        <div>
            <nav class="Routes">
            <RouterLink to="/">
                <div class="Route">
                    <p>Inicio</p>
                </div>
            </RouterLink>

            <RouterLink to="/info">
                <div class="Route">
                    <p>Informacion</p>
                </div>
            </RouterLink>

            <RouterLink to="/CursosP">
                <div class="Route">
                    <p>Cursos presenciales</p>
                </div>
            </RouterLink>

            <RouterLink to="/CursosL">
                <div class="Route">
                    <p>Cursos en linea</p>
                </div>
            </RouterLink>

            <RouterLink to="/Galeria">
                <div class="Route">
                    <p>Galeria de fotos</p>
                </div>
            </RouterLink>

            <RouterLink to="/Blog">
                <div class="Route">
                    <p>Blog</p>
                </div>
            </RouterLink>
          </nav>

        </div>
    </div>
</template>

<style scoped>

    .ILogo{
        width: 95px;
        height: 95px;
    }
    .nav-bar{
        position: sticky;
        text-align: center;
        height: 100px;
        width: 100%;
        top: 0;
        background-color: #bcc6eb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100; 
    }

    .logo{
        align-items: center;
        justify-content: center;
    }

    .Routes{
        display: flex;
    }
    .Route{
        height: 100%;
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Route:hover{
        background-color: #98a0bd;
    }

    .Route p{
        font-size: 15px;
        color: #0e1438;
    }

    @media (max-width: 600px){

    .ILogo{
        width: 60px; /* Ajuste el tamaño según tus preferencias */
        height: 60px; /* Ajuste el tamaño según tus preferencias */
    }

    .nav-bar{
        position: sticky;
        text-align: center;
        height: 80px; /* Ajuste la altura según tus preferencias */
        max-width: 600px;
        width: 100%;
        top: 0;
        background-color: #bcc6eb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100; 
        margin: 0 auto; /* Centra el contenido dentro de la anchura máxima */
    }

    .logo{
        align-items: center;
        justify-content: center;
    }

    .Routes{
        display: flex;
    }
    .Route{
        height: 100%;
        width: 80px; /* Ajuste la anchura según tus preferencias */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Route:hover{
        background-color: #98a0bd;
    }

    .Route p{
        font-size: 12px; /* Ajuste el tamaño de fuente según tus preferencias */
        color: #0e1438;
    }

    }
</style>