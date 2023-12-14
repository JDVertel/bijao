<template>
<div>
    <!-- v-if="$store.state.rol_Ac" -->
    <div>
        <h1 class="display-6">Dashboard <strong>{{ $store.state.rol_Ac }}</strong> </h1>
        <hr>
        <div>
            <div v-if="$store.state.rol_Ac == 'gestor'">
                <Gestor />
            </div>
          
            <div v-if="$store.state.rol_Ac == 'tamalero'">
                <Tamalero />
            </div>
            <div v-if="$store.state.rol_Ac == 'admin'">
                <Admin />
            </div>
        </div>
        <hr>
        <h1 class="display-6">
            <RouterLink to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</RouterLink>
        </h1>
    </div>

    <!--    <div class="center" v-else>
        <RouterLink to="/">
            <h1 class="display-6 text-center">Pagina no encontrada volver al menu inicio</h1>
        </RouterLink>
    </div>
 -->
</div>
</template>

<script>




import Swal from "sweetalert2";
import Gestor from "./../u_gestor/Pedidos.vue";
import Tamalero from "./../u_tamaleros/TamaleroHome.vue";
import Admin from "./../u_admin/Parametros.vue";
export default {
    data: () => ({
        docu: "",
        psw: "",
        rol: "",
        tamaleros: [],
        tamales: []

    }),



    components: {
        Gestor,
        Tamalero,
        Admin,
    },
    mounted() {
        this.rol = this.$route.query.parametro;

    }
}
</script>

<style>
/* BASIC */
</style>
