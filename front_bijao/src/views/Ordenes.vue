<template>
<div class="container" v-if="$store.state.total">

    <div class="app">
        <CarritodeCompras />

     <!--    {{ $store.state.carrito.length }} -->
        <div class="row">

            <div style="color:red
        "><small> <strong>*Los valores no incluyen gastos de envio</strong></small></div>

        </div>

        <hr />
        <h6>Datos de la Orden de Pedido</h6>

        <p>
            Nota: su pedido será confirmado por uno de nuestros encargados vía
            telefónica y deberá ser cancelado al momento de recibirlo
        </p>
        <p>Diligencie los siguientes datos para realizar su envio</p>
        <div class="form" ref="carritoForm">
            <div class="row">
                <div class="col-6">
                    <!--  -->
                    <div class="input-group input-group-sm mb-1">
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Nombre" v-model="P_nom" />
                    </div>
                    <!--  -->
                </div>
                <div class="col-6">

                    <div class="input-group input-group-sm mb-1">
                        <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Celular" v-model="P_cel" />
                    </div>
                    <!--  -->
                </div>
                <div class="col-12">

                    <div class="input-group input-group-sm mb-1">
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Direccion" v-model="P_dir" />
                    </div>
                </div>

            </div>
          
            <div class="row">
                <button :disabled="botonDeshabilitado" type="submit" class="btn btn-success btn-sm " style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" v-if="(P_cel && P_dir && P_nom)!=''" @click="GuardarPedido"><i class="fa fa-cart-plus" aria-hidden="true"></i> <strong>Realizar pedido</strong> </button>

            </div>
        </div>
    </div>
</div>

<div v-else class="text-center">
    <h3>No hay elementos en el carrito </h3> <br>
    <router-link to="/">Volver a la página de inicio</router-link>

</div>
</template>

<script>
import {
    defineAsyncComponent
} from "vue";
import store from "../store";
import bd from "./../utils/firebase";
import {
    collection,
    addDoc,
    where,
    query,
    onSnapshot,
    doc,
    getDoc,

} from "firebase/firestore";

import Swal from "sweetalert2";

export default {
    name: 'App',
    components: {
        CarritodeCompras: defineAsyncComponent(() => import('./../components/carritodecompras/carrito.vue'))
    },
    data: () => ({
        P_nom: "",
        P_cel: "",
        P_dir: "",
        botonDeshabilitado: false,
        pedidorealizado: false,
        Listpedido: [],

    }),
    methods: {

        async GuardarPedido() {
            this.botonDeshabilitado = true;
            document.querySelector('button').disabled = true;
            const ColRef = collection(bd, "pedidos");
            const dataObj = {
                estado: "Pedido",
                nombres: this.P_nom,
                direccion: this.P_dir,
                celular: this.P_cel,
                carrito: this.Listpedido,
                fechaP: this.fechaActual,
                Evento:this.eventovigente,
          /*       evento: item.eventovigente, */
                
            };

            this.$store.state.carrito.map((item) => {
                this.Listpedido.push({
                    prod: item.nombre,
                    cant: item.cant,
                    sub: item.subtotal,
                    evento: item.eventovigente,
                    fecha: this.fechaActual,
                })
            })

            const docRef = await addDoc(ColRef, dataObj);
            // console.log("pedido guardardado", docRef.id);
            this.vaciarcarrito();
            this.Listpedido = [],

                Swal.fire({
                    title: "¡Enviado!",
                    text: "Usuario creado correctamente.",
                    icon: "success",
                }).then(() => {
                    this.pedidorealizado = true;
                    this.P_nom = "";
                    this.P_cel = "";
                    this.P_dir = "";
                    this.car = "";
                    this.$router.push('/');
                });
        },

        vaciarcarrito() {

        },

        vaciarcarrito() {
            /* redireccion */
            this.$store.dispatch("deleteCar");

        },
        diahoy() {
            const fecha = new Date();
            const diaActual = fecha.getDate();
            const mesActual = fecha.getMonth() + 1; // Los meses se indexan desde 0, por lo que se suma 1
            const añoActual = fecha.getFullYear();
            this.fechaActual = añoActual + '-' + mesActual + '-' + diaActual;
            /*  // console.log("1 funcion ejecutandose"); */
        },

        eventosHoy() {
            
            const q = query(collection(bd, "eventos"), where("estado", "==", true));
            onSnapshot(q, (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                    this.listEvents = list;
                });
                const found = list.find(registro => registro.nombre != '');
                this.eventovigente = found.nombre;
        
            }, )
        },

    },
    created() {
        this.diahoy();
        this.eventosHoy();
    }
}
</script>

<style>
</style>
