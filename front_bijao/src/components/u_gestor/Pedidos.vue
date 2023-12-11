<template>
<div class="app">
    <h6 class="display-6"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i> Gestor de Pedidos</h6>
    <!--  -->

    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Conteo - Descuentos
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col-5">
                            <h5>Registrar Ventas</h5>
                            <div>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Seleccione tamalero</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Seleccione tipo de tamal</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <input class="form-control form-control-sm" type="number" placeholder="Digite Cantidad" aria-label=".form-control-sm example">
                                <button type="button" class="btn btn-primary btn-sm">+ Registrar</button>
                            </div>
                        </div>
                        <div class="col-7">
                            <h5>Historial de registros </h5>
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Tamalero</th>
                                        <th scope="col">Tipo tamal</th>
                                        <th scope="col">cant</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>

                                    
                                    
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <hr>
                        <div>
                            <h5>Resumen de Ventas (123)</h5>
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Tamalero</th>
                                        <th scope="col">Tipo tamal</th>
                                        <th scope="col">Cantidad</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>@mdo</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Domicilios
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="container-fluid aplicacion">
                        <br>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pedidos-tab" data-bs-toggle="tab" data-bs-target="#pedidos" type="button" role="tab" aria-controls="pedidos" aria-selected="true">
                                    Pedidos
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="ordenes-tab" data-bs-toggle="tab" data-bs-target="#ordenes" type="button" role="tab" aria-controls="ordenes" aria-selected="false">
                                    Ordenes
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="envios-tab" data-bs-toggle="tab" data-bs-target="#envios" type="button" role="tab" aria-controls="envios" aria-selected="false">
                                    Envios
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="envios-tab" data-bs-toggle="tab" data-bs-target="#historial" type="button" role="tab" aria-controls="historial" aria-selected="false">
                                    Historial
                                </button>
                            </li>
                        </ul>

                        <!-- -------------------------------------------------------------Tab panes -->

                        <div class="tab-content">
                            <div class="tab-pane active" id="pedidos" role="tabpanel" aria-labelledby="pedidos-tab" tabindex="0">

                                <p>
                                    Listado de domicilios reportados que deben ser verificados para un
                                    posterior aprovionamiento y envio
                                </p>

                                <table class="table table-sm table-hover">
                                    <thead>
                                        <tr>
                                            <th>Comprador</th>
                                            <th>Evento/Pedido</th>
                                            <th>Direccion</th>

                                            <th>Opc</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(Pedido) in Pedidos" v-bind:key="Pedido.id">
                                            <td><strong>Nombre </strong><br> {{Pedido.nombres}} <br><strong>Celular </strong><br> {{Pedido.celular}}</td>
                                            <td>

                                                <div v-for="(item,index) in Pedido.carrito " v-bind:key="index"> ({{item.cant}}) {{item.prod}}</div>
                                            </td>
                                            <td>{{Pedido.direccion}}</td>
                                            <!-- data-bs-toggle="modal" data-bs-target="#modalPedidos"  -->
                                            <td>
                                                <div class="row">

                                                    <button type="button" class="btn btn-danger btn-sm redondo" @click="DeleteOrden(Pedido.id)">
                                                        <i class="fa fa-times" aria-hidden="true"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-warning btn-sm redondo" @click="UpdatetoOrden(Pedido.id)">
                                                        <i class="fa fa-check" aria-hidden="true"></i>
                                                    </button>

                                                </div>

                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                            <!-- ------------------------------------------------------------------------------------------------------------ -->
                            <div class="tab-pane" id="ordenes" role="tabpanel" aria-labelledby="ordenes-tab" tabindex="0">

                                <p>
                                    listado de domicilios confirmados listos para aprovisionar y enviar
                                </p>

                                <table class="table table-sm table-hover">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Pedido</th>
                                            <th>Direccion</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(Orden) in Ordenes" v-bind:key="Orden.id">
                                            <td><strong>Nombre </strong><br> {{Orden.nombres}} <br><strong>Celular </strong><br> {{Orden.celular}}</td>
                                            <td>
                                                <div v-for="(item,index) in Orden.carrito " v-bind:key="index"> ({{item.cant}}) {{item.prod}}</div>
                                            </td>
                                            <td>{{Orden.direccion}}</td>

                                            <td>

                                                <button type="button" class="btn btn-success btn-sm redondo" @click="UpdatetoEnvio(Orden.id)">
                                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                                </button>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <!-- -------------------------------------------------------------------------------------------------------------- -->
                            <div class="tab-pane" id="envios" role="tabpanel" aria-labelledby="envios-tab" tabindex="0">

                                <p>listado de pedidos listos para entregar a domiciliario</p>
                                ver historial de envios

                                <table class="table table-sm table-hover">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Pedido</th>
                                            <th>Direccion</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(Envio) in Envios" v-bind:key="Envio.id">
                                            <td><strong>Nombre </strong><br> {{Envio.nombres}} <br><strong>Celular </strong><br> {{Envio.celular}}</td>
                                            <td>
                                                <div v-for="(item,index) in Envio.carrito " v-bind:key="index"> ({{item.cant}}) {{item.prod}}</div>
                                            </td>
                                            <td>{{Envio.direccion}}</td>

                                            <td>

                                                <!--     <button type="button" class="btn btn-warning btn-sm">Middle</button> -->
                                                <button type="button" class="btn btn-info btn-sm redondo" @click="UpdatetoEntregas(Envio.id)">
                                                    <i class="fa fa-motorcycle" aria-hidden="true"></i>
                                                </button>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <!-- ---------------------------------------------------------------------------------------------------------------- -->
                            <div class="tab-pane" id="historial" role="tabpanel" aria-labelledby="historial-tab" tabindex="0">

                                <p>historial de envios a domicilio</p>

                                <table class="table table-sm table-hover">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Pedido</th>
                                            <th>Direccion</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(h) in Historial" v-bind:key="h.id">
                                            <td><strong>Nombre </strong><br> {{h.nombres}} <br><strong>Celular </strong><br> {{h.celular}}</td>
                                            <td>
                                                <div v-for="(item,index) in h.carrito " v-bind:key="index"> ({{item.cant}}) {{item.prod}}</div>
                                            </td>
                                            <td>{{h.direccion}}</td>

                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <br>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- Nav tabs -->

</div>
</template>

<script>

import bd from "./../../utils/firebase";
import {
    collection,
    addDoc,
    onSnapshot,
    updateDoc,
    doc,
    deleteDoc,
    query,
    where,
    getDocs

} from "firebase/firestore";
import Swal from "sweetalert2";
export default {

    data: () => ({
        listPedidos: [],
        Pedidos: [],
        Ordenes: [],
        Envios: [],
        eventovigente: '',
    }),
    methods: {

        eventosHoy() {
            const q = query(collection(bd, "eventos"), where("estado", "==", true));
            let evento = '';
            let list = [];
            onSnapshot(q, (snapshot) => {

                snapshot.docs.forEach((doc) => {
                    list.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                    this.listEvents = list;
                });
                const found = list.find(registro => registro.nombre != '');
                evento = found.nombre;
                this.leerpedidos(evento)
            }, )

        },

        leerpedidos(evento) {

            const ColRef = query(collection(bd, "pedidos"), where("Evento", "==", evento));
            onSnapshot(ColRef, (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                    this.listPedidos = list;

                });

                this.Pedidos = this.filtrarPedidos(list, "Pedido");
                this.Ordenes = this.filtrarPedidos(list, "Orden");
                this.Envios = this.filtrarPedidos(list, "Envio");
                this.Historial = this.filtrarPedidos(list, "Entregado");

            });

        },

        filtrarPedidos(arr, query) {
            return arr.filter(ped => ped.estado == query);
        },

        /* -------------PEDIDOS------------------------------ */

        async UpdatetoOrden(idPedido) {
            // funcion para actualizar en la BD la informacion capturada
            const productoRef = doc(bd, "pedidos", idPedido);
            //update
            await updateDoc(productoRef, {
                estado: "Orden",
            });

            Swal.fire({
                title: "¡Actualizado!",
                text: "El Pedido aprobado",
                icon: "success",
            }).then(() => {
                /* // console.log("vaciando campos"); */
                /*   this.$refs.productForm.reset(); */

            });

        },
        async UpdatetoEnvio(idPedido) {
            // funcion para actualizar en la BD la informacion capturada
            const productoRef = doc(bd, "pedidos", idPedido);
            //update
            await updateDoc(productoRef, {
                estado: "Envio",
            });

            Swal.fire({
                title: "¡Actualizado!",
                text: "La Orden esta lista para domicilio",
                icon: "success",
            }).then(() => {
                /* // console.log("vaciando campos"); */
                /*   this.$refs.productForm.reset(); */

            });

        },
        async UpdatetoEntregas(idPedido) {
            // funcion para actualizar en la BD la informacion capturada
            const productoRef = doc(bd, "pedidos", idPedido);
            //update
            await updateDoc(productoRef, {
                estado: "Entregado",
            });

            Swal.fire({
                title: "¡Enviado!",
                text: "El pedido ha sido enviado",
                icon: "success",
            }).then(() => {
                /* // console.log("vaciando campos"); */
                /*   this.$refs.productForm.reset(); */

            });

        },

        DeleteOrden(id) {

            Swal.fire({
                title: 'Esta seguro de eliminar el pedido?',
                text: "Esta accion no se puede reversar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'SI, Eliminalo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteDoc(doc(bd, "pedidos", id));

                    Swal.fire(
                        'Pedido Eliminado!',
                    )
                }
            })

        },


    },
    created() {
        this.eventosHoy();
   

    },
}
</script>
