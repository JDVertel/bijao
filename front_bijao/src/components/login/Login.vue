<template>
<div>
    <div class="wrapper fadeInDown" v-if="rol ==''">
        <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
        <h1 class="display-6">Ingreso al Sistema</h1>
            <br>
            <!-- Login Form -->
            <form>
                <div class="container">
                    <div class="input-group input-group-sm mb-1">
                        <input type="number" v-model="docu" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Numero de Documento" />
                    </div>
                    <div class="input-group input-group-sm mb-1">
                        <input type="password" v-model="psw" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Contraseña" />
                    </div>
                </div>
                <button type="button" class="btn btn-success" v-if="docu && psw !=''" @click="login(docu, psw)">Ingresar</button>
                <!--     <input type="submit" class="fadeIn fourth" value="Ingresar" /> -->
            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
                <a class="underlineHover" href="#">Olvido su contraseña?</a>
            </div>
        </div>
    </div>

    <div>

        <div v-if="rol == 'gestor'">

        </div>
        <Gestor />
        <div v-if="rol == 'tamalero'">
            <Tamalero />
        </div>

        <div v-if="rol == 'admin'">

        </div>
        <Admin />
    </div>
</div>
</template>

<script>
import bd from "./../../utils/firebase";
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs
} from "firebase/firestore";

import Swal from "sweetalert2";
import Gestor from "./../u_gestor/Pedidos.vue";
import Tamalero from "./../u_tamaleros/TamaleroHome.vue";
import Admin from "./../u_admin/Parametros.vue";
export default {
    data: () => ({
        docu: "",
        psw: "",
        rol: "",
    }),
    methods: {
        /* ----------------LOGIN--------------------- */
        async login(docu, psw) {
            // console.log("metodo login", docu, psw)
            const q = query(collection(bd, "usuarios"), where("documento", "==", docu), where("passw", "==", psw), where("estado", "==", true));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                // console.log("No matching documents.");
                return null;
            } else {
                let user = querySnapshot.docs[0].data();
                // console.log("User found:", user);
                this.rol = querySnapshot.docs[0].data().rol
                return user;
            }

        },

    },

    components: {
        Gestor,
        Tamalero,
        Admin,
    }
}
</script>

<style>
/* BASIC */
</style>
