<script>
import {
    RouterLink,
    RouterView
} from "vue-router";

import bd from "./utils/firebase";
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs
} from "firebase/firestore";

import './../src/assets/styles.css'
//importamos firebase
export default {

    data: () => ({
        user: "",
        passw: "",

    }),
    methods: {
        async ingresar(user, pass) {

            console.log("ejecutando ...")
            // console.log("metodo login", docu, psw)
            const q = query(collection(bd, "usuarios"), where("documento", "==", user), where("passw", "==", pass), where("estado", "==", true));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                this.$router.push('/errorpage');
                this.user = "";
                this.passw = "";
                return null;

            } else {
                let user = querySnapshot.docs[0].data();
                this.rol = querySnapshot.docs[0].data().rol
                this.activaRol(this.rol);
                this.$router.push('/menu');

                this.user = "";
                this.passw = "";
                return user;

            }

        },

        activaRol(Ac_Rol) {
            this.$store.state.rol_Ac = Ac_Rol;
            this.$store.dispatch("activaRolAction");

        },

    }
}

/*  */

/*  */
</script>

<template>
<header>

    <!-- navbar -->

    <nav class="navbar bg-body-tertiary fixed-top coloreadonavbar">
        <div class="container-fluid">
            <RouterLink to="/">  <a class="navbar-brand" href="#"><img alt="Vue logo" class="logo" src="@/components/images/logo_bijao.png" height="43" /></a> </RouterLink>

           
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><i class="fa fa-bars" aria-hidden="true"></i> Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
                    <div class="card">
                        <div class="card-header">
                            <img alt="logo" class="logo" src="@/components/images/logo_bijao.png" height="43" />

                        </div>
                        <div class="card-body">
                            <div style="padding-left: 10px;">
                                <h6> <i class="fa fa-lock" aria-hidden="true"></i> Ingreso al Sistema</h6>
                            </div>
                            <div class="container">
                                <form class="d-flex mt-3 mb-3">
                                    <input class="form-control me-2" type="number" placeholder="Usuario" v-model="user">
                                    <input class="form-control me-2" type="password" placeholder="Contraseña" v-model="passw">
                                    <button class="btn btn-outline-success " data-bs-dismiss="offcanvas" type="button" @click="ingresar(this.user, this.passw)">Entrar</button>
                                </form>
                            </div>

                            <div class="container">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item" data-bs-dismiss="offcanvas">

                                        <a class="nav-link active" aria-current="page">
                                            <RouterLink to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</RouterLink>
                                        </a>

                                    </li>
                                    <li class="nav-item" data-bs-dismiss="offcanvas">
                                        <a class="nav-link" aria-current="page">
                                            <RouterLink to="/acercade"><i class="fa fa-info-circle" aria-hidden="true"></i> Acerca de AppBijao</RouterLink>
                                        </a>
                                    </li>
                                    <!--  <li class="nav-item" data-bs-dismiss="offcanvas">
                                        <a class="nav-link" aria-current="page">
                                            <RouterLink to="/registro"><i class="fa fa-user-circle" aria-hidden="true"></i> Registro</RouterLink>
                                        </a>
                                    </li>
                                   <li class="nav-item" data-bs-dismiss="offcanvas">
                                        <a class="nav-link" aria-current="page">
                                            <RouterLink to="/menu"><i class="fa fa-user-circle" aria-hidden="true"></i> menu</RouterLink>
                                        </a>
                                    </li> -->
                                </ul>
                            </div>

                        </div>
                    </div>

                    <br>

                    <ul>

                    </ul>

                </div>
            </div>
        </div>
    </nav>
    <!--  -->

</header>
<div class="container-fluid appbijao">
    <RouterView />
</div>
</template>

<style>
.appbijao {
    margin-top: 80px;
    padding: 0px !important;

}
</style>
