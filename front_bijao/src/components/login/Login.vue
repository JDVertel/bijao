<template>
<div>

    <div>

        <div v-if="rol == 'gestor'">
            <Gestor />
        </div>

        <div v-if="rol == 'tamalero'">
            <Tamalero />
        </div>

        <div v-if="rol == 'admin'">
            <Admin />
        </div>

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

        /*  async login(docu, psw) {

            const q = query(collection(bd, "usuarios"), where("documento", "==", docu), where("passw", "==", psw), where("estado", "==", true));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {

                return null;
            } else {
                let user = querySnapshot.docs[0].data();

                this.rol = querySnapshot.docs[0].data().rol
                return user;
            }

        }, */

    },

    components: {
        Gestor,
        Tamalero,
        Admin,
    },
    mounted() {
        this.rol = this.$route.query.parametro;
        console.log(this.$route.query.parametro);
    }
}
</script>

<style>
/* BASIC */
</style>
