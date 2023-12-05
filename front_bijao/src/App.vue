<script>
import {
    RouterLink,
    RouterView
} from "vue-router";
import {
    defineAsyncComponent
} from "vue";

import './../src/assets/styles.css'
//importamos firebase
</script>

<template>
<header>
   
    <!-- navbar -->

    <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img alt="Vue logo" class="logo" src="@/components/images/logo_bijao.png"  height="50" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Acerca de ...</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Registrarse</a>
                </li>
          
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Usuario" aria-label="Search">
                <input class="form-control me-2" type="search" placeholder="Contraseña" aria-label="Search">
                <button class="btn btn-outline-success" type="btn">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    <!--  -->

    
    <div class="wrapper">
        <nav>
            <RouterLink to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</RouterLink>
            <RouterLink to="/login"><i class="fa fa-lock" aria-hidden="true"></i> Admin</RouterLink>
            <!--    <RouterLink to="/dashboard"><i class="fa fa-bars" aria-hidden="true"></i> Dashboard</RouterLink> -->
        </nav>
    </div>
</header>
<RouterView />
</template>

<body>

</body>
