<script setup>
    import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="nav-bar">
        <div class="logo">
            <img src="/logo.png" alt="" class="ILogo">
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
        background-color: #cad4fa;
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
</style>