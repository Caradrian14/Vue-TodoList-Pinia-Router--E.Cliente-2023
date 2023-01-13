<template>
    <nav  class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        
            <span class="navbar-brand" href="#">Lista de Todos</span>
		    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-link active">Ver Tareas</router-link>
                    <router-link to="/add" class="nav-link active">Añadir Tareas</router-link>
                    <!--<router-link to="/delete" class="nav-link active">Borrar Tarea</router-link>-->
                    <router-link to="/about" class="nav-link active">Sobre nosotros</router-link>
                    
                </div>
            </div>
        </div>
    </nav>
        <!-- Zona para mostrar mensajes al usuario -->
    <div class="row" id="messages">
	
    </div>
</template>