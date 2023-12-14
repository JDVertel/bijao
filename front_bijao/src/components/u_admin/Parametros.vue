<template>
<div>

    <h6 class="display-6">
        <i class="fa fa-lock" aria-hidden="true"></i> Administracion
    </h6>
    <div class="accordion" id="accordionAdmin">

        <!-- -----------------------------------------------------INVENTARIO--------- -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInv" aria-expanded="false" aria-controls="collapseInv">
                    <h6><i class="fa fa-linode" aria-hidden="true"></i> Inventario</h6>
                </button>
            </h2>
            <div id="collapseInv" class="accordion-collapse collapse" data-bs-parent="#accordionAdmin">
                <div class="accordion-body">
                    <div class="container">

                        <div v-if="this.selectedEvent === ''">
                            <p>Seleccione el evento para adicionar productos al inventario</p>
                            <select class="form-select form-select-sm" aria-label="Default select example" v-model="selectedEvent" v-on:change="verInv(selectedEvent)">
                                <option selected value="">Seleccione evento</option>
                                <option v-for="eventl in listEventos" v-bind:key="eventl.id">{{ eventl.nombre }}</option>
                            </select>
                            <br>
                        </div>

                        <div class="container data" v-if="this.selectedEvent != ''">
                            <div class="row">
                                <div class="col-2">
                                    <button class="btn btn-danger btn-sm redondo" @click="volverInv()">
                                        <i class="fa fa-times" aria-hidden="true"></i></button>
                                </div>
                                <div class="col-10">
                                    <p>Agregar productos y cantidades al inventario del evento <strong>{{ selectedEvent
                                        }}</strong> </p>
                                </div>
                                <div class="col-10 col-sm-5">
                                    Aguegar productos
                                    <select class="form-select form-select-sm" aria-label="Default select example" v-model="selectProdInv" @change="mostrarSeleccion">
                                        <option value="">-Seleccione-</option>
                                        <option v-for="item in listProductos" v-bind:key="item.id" :value="item.id" :label="item.nombre">

                                        </option>
                                    </select>

                                    <div class="input-group input-group-sm mb-3">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Cantidad</span>
                                        <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="prodInvCant">
                                        <button :disabled="btninv" type="button" class="btn btn-primary btn-sm" @click="ValidaItems(this.SelectID, this.selectedEvent)" v-if="prodInvCant != '' ">Agregar</button>
                                    </div>

                                </div>
                                <div class="col-12 col-sm-7">
                                    <div class="table-responsive">
                                        <table class="table table-sm table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Disponibles</th>
                                                    <th scope="col">Nombre</th>
                                                    <th scope="col">evento</th>
                                                    <th scope="col">Opc </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in listInv" v-bind:key="item.id">
                                                    <th scope="row">{{ item.cantidad }}</th>
                                                    <td>{{ item.nombre }}</td>
                                                    <td>{{ item.evento }}</td>
                                                    <td> <button class="btn btn-sm btn-danger redondo" @click="EliminarItemInv(item.id)">
                                                            <i class="fa fa-times-circle" aria-hidden="true"></i></button></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- -------------------------------------------------PRODUCTOS--------- -->

        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProd" aria-expanded="false" aria-controls="collapseProd">
                    <h6><i class="fa fa-cutlery" aria-hidden="true"></i> Productos</h6>
                </button>
            </h2>
            <div id="collapseProd" class="accordion-collapse collapse" data-bs-parent="#accordionAdmin">
                <div class="accordion-body">
                    <!-- Nav tabs -->
                    <button class="btn btn-success btn-sm  redondo" @click="newProd()" v-if="!gestprod">
                        <i class="fa fa-plus" aria-hidden="true"></i></button>
                    <div class="row">

                        <div class="row titular" v-if="gestprod === 1">

                            <p class="subtitle"><i class="fa fa-plus" aria-hidden="true"></i> Crear un Nuevo producto</p>
                            <div>
                                <button class="btn btn-danger btn-sm redondo" @click="cerrar()">
                                    <i class="fa fa-times" aria-hidden="true"></i></button>
                            </div>

                        </div>
                        <div class="row titular" v-if="gestprod === 2">
                            <p class="subtitle"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar producto
                            </p>
                            <button class="btn btn-danger btn-sm redondo" @click="cerrar()">
                                <i class="fa fa-times" aria-hidden="true"></i></button>
                        </div>

                        <div class="col-12 col-sm-6" v-if="gestprod > 0">

                            <div class="container gestprod">
                                <form @submit.prevent="uploadImage()" class="row" enctype="multipart/form-data" ref="productForm">
                                    <div class="col-12">
                                        <input type="text" class="form-control form-control-sm" id="producName" placeholder="Nombre del Producto" v-model="p_nombre" />
                                    </div>
                                    <div class="col-12">
                                        <input type="number" class="form-control form-control-sm" id="producPrice" placeholder="$Precio" v-model="p_precio" />
                                    </div>
                                    <div class="col-12" v-if="gestprod === 1">
                                        <label for="formFileMultiple" class="form-label">Seleccione imagen del producto
                                            <small>(max 500kb)</small></label>
                                        <input class="form-control form-control-sm" type="file" id="formFileMultiple" accept="image/*" multiple @change="previewImage($event)" />
                                    </div>
                                    <div class="col-6 mt-2">
                                        <textarea class="form-control form-control-sm" id="descrip_eventoInput" rows="3" placeholder="Descripcion del producto" v-model="p_descripcion"></textarea>
                                    </div>
                                    <div class="col-6 imagen">
                                        <img :src="ImagenView" alt="Imagen producto">
                                    </div>
                                    <br />

                                    <button type="submit" v-if="(p_nombre && p_precio && p_descripcion && imagenok && gestprod == 1) != ''" class="btn btn-primary btn-sm" @click="crearProducto()">
                                        <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar
                                    </button>

                                    <button type="submit" v-if="gestprod == 2" class="btn btn-warning btn-sm" @click="UpdateProducto()">
                                        <i class="fa fa-floppy-o" aria-hidden="true"></i> Actualizar
                                    </button>

                                </form>
                            </div>

                        </div>
                        <div class="col-12 col-sm-6">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in listProductos" v-bind:key="item.id">
                                        <td>{{ item.nombre }}</td>
                                        <td>{{ item.precio }}</td>
                                        <td>

                                            <button class="btn btn-danger btn-sm  redondo">
                                                <i class="fa fa-trash" aria-hidden="true" @click="eliminarProd(item.id, item.urlimagen)"></i>
                                            </button>
                                            <button class="btn btn-warning btn-sm redondo" @click="editProd(item, item.id)">
                                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            </button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <!-- ----------------------------USUARIOS------- -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUsers" aria-expanded="false" aria-controls="collapseUsers">
                    <h6><i class="fa fa-users" aria-hidden="true"></i> Usuarios</h6>
                </button>
            </h2>
            <div id="collapseUsers" class="accordion-collapse collapse" data-bs-parent="#accordionAdmin">
                <div class="accordion-body">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" id="userNav" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="user-active-tab" data-bs-toggle="tab" data-bs-target="#user_active" type="button" role="tab" aria-controls="user_active" aria-selected="true">
                                Activos
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="user-edit-tab" data-bs-toggle="tab" data-bs-target="#user_edit" type="button" role="tab" aria-controls="profile2" aria-selected="false">
                                Gestionar
                            </button>
                        </li>
                    </ul>
                    <!--  -->
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="user_active" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Nombres</th>
                                        <th>Documento</th>
                                        <th>Rol</th>
                                        <th>Estado</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="users in listUser" v-bind:key="users.id">
                                        <td>{{ users.nombres }}</td>
                                        <td>{{ users.documento }}</td>
                                        <td>{{ users.rol}} </td>
                                        <td>

                                            <button class="btn btn-info btn-sm redondo" @click="Bloq_Desb_User(users.id, users.estado)" v-if="users.estado == true">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                            </button>

                                            <button class="btn btn-warning btn-sm redondo" @click="Bloq_Desb_User(users.id, users.estado)" v-if="users.estado == false">
                                                <i class="fa fa-user-times" aria-hidden="true"></i>
                                            </button>

                                        </td>
                                        <td>

                                            <button class="btn btn-danger btn-sm  redondo" @click="eliminaruser(users.id)">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-pane fade" id="user_edit" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <div class="container">
                                <p><small>Crear nuevo usuario</small></p>

                                <form action="" class="row" ref="usuariosForm">
                                    <div class="col-6">
                                        <input type="text" class="form-control form-control-sm" id="nameInput" placeholder="Nombres" v-model="username" />
                                    </div>

                                    <div class="col-4">
                                        <input type="number" class="form-control form-control-sm" id="DocInput" placeholder="Documento" v-model="userdoc" />
                                    </div>
                                    <div class="col-4">
                                        <input type="number" class="form-control form-control-sm" id="celInput" placeholder="Celular" v-model="usercel" />
                                    </div>
                                    <div class="col-4">
                                        <select class="form-select form-select-sm" aria-label="Default select example" id="idrol" v-model="userrol">
                                            <option value="0">Rol</option>
                                            <option value="gestor">Gestor</option>
                                            <option value="tamalero">Tamalero</option>
                                            <option value="admin">Administrador</option>
                                        </select>
                                    </div>
                                    <div class="col-6">
                                        <input type="password" class="form-control form-control-sm" id="p1" placeholder="Password" v-model="userpassw1" />
                                    </div>
                                    <div class="col-6">
                                        <input type="password" class="form-control form-control-sm" id="p2" v-model="userpassw2" placeholder="new-password" />
                                    </div>
                                    <div class="col-2 p-1">
                                        <button v-if="username != '' &&
                                                userpassw2 == userpassw1 &&
                                                userpassw1 != ''
                                                " type="button" class="btn btn-primary btn-sm" id="btn_guardar" @click="crearUsuarios()">
                                            <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ------------------------------EVENTOS -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEvents" aria-expanded="true" aria-controls="collapseOne">
                    <h6><i class="fa fa-calendar" aria-hidden="true"></i> Eventos</h6>
                </button>
            </h2>
            <div id="collapseEvents" class="accordion-collapse collapse" data-bs-parent="#accordionAdmin">

                <div class="accordion-body">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" id="eventNav" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="event-list-tab" data-bs-toggle="tab" data-bs-target="#activeEvent" type="button" role="tab" aria-controls="activeEvent" aria-selected="true">
                                Activos
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="event-edit-tab" data-bs-toggle="tab" data-bs-target="#editEvent" type="button" role="tab" aria-controls="editEvent" aria-selected="false">
                                Gestionar
                            </button>
                        </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane active" id="activeEvent" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Inicia</th>
                                        <th>Finaliza</th>
                                        <th>Nombre</th>
                                        <th>Estado</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="event in listEventos" v-bind:key="event.id">
                                        <td>{{ event.fechaini }}</td>
                                        <td>{{ event.fechafin }}</td>
                                        <td>{{ event.nombre }}</td>
                                        <td>

                                            <button class="btn btn-info btn-sm redondo" @click="Bloq_Desb_Event(event.id, event.estado)" v-if="event.estado == true">
                                                <i class="fa fa-check" aria-hidden="true"></i>
                                            </button>

                                            <button class="btn btn-warning btn-sm redondo" @click="Bloq_Desb_Event(event.id, event.estado)" v-if="event.estado==false">
                                                <i class="fa fa-times-circle" aria-hidden="true"></i>
                                            </button>

                                        </td>
                                        <td>
                                            <div class="row">
                                                <div class="col">
                                                    <button class="btn btn-sm btn-danger redondo" @click="eliminarevento(event.id)">
                                                        <i class="fa fa-times-circle" aria-hidden="true"></i></button>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-pane" id="editEvent" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                           
                                <p><small>Crear nuevo evento</small></p>
                         
                                <form action="" class="row" ref="eventosForm">
                                    <div class="col-12">
                                        <input type="text" class="form-control form-control-sm" id="producnombre" placeholder="Nombre" v-model="e_nombre" />
                                    </div>

                                    <div class="col-6">
                                        Desde
                                        <input type="date" class="form-control form-control-sm" id="producfechaini" v-model="f_inicio" />
                                    </div>
                                    <div class="col-6">
                                        Hasta
                                        <input type="date" class="form-control form-control-sm" id="producfin" v-model="f_fin" />
                                    </div>
                                    <div class="col-2">
                                        <button :disabled="btnNewEvent" type="button" v-if="f_inicio != '' && f_fin != '' && e_nombre != ''" class="btn btn-primary btn-sm" @click="crearEventos()">
                                            <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar
                                        </button>
                                    </div>
                                    <br>

                                </form>
                      
                        </div>
                    </div>

                    <!--  -->
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import bd from "./../../utils/firebase";
import {
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    doc,
    deleteDoc,
    query,
    where,
    updateDoc,
} from "firebase/firestore";
import {
    getStorage,
    ref,
    uploadBytes,
    /*     getDownloadURL, */
    deleteObject,

} from "firebase/storage";
import Swal from "sweetalert2";
export default {
    data: () => ({
        /* INVENTARIO */
        selectedEvent: "",
        selectProdInv: "",
        prodInvCant: "",
        listInv: "",
        gestprod: "",
        SelectID: "",
        SelectLabel: "",
        existente: [],
        IDitem: "",
        CantItem: "",

        /* EVENTOS */
        listEventos: [],
        f_inicio: "",
        f_fin: "",
        e_nombre: "",
        eventR: [],
        /* USUARIOS */
        listUser: [],
        username: "",
        userdoc: "",
        usercel: "",
        userrol: "0",
        userpassw1: "",
        userpassw2: "",

        /* PRODUCTOS */
        listProductos: [],
        imagenes: [],
        imagen: null,
        p_precio: "",
        p_nombre: "",
        p_descripcion: "",
        imagenok: "",
        idprod: "",
        imgurl: "",

        /* IMAGES */
        image: null,
        imagePreview: null,
        editar: "",

        /* BOTONES */
        btninv: false,
        btnNewProduct: false,
        btnNewuser: false,
        btnNewEvent: false,
        ImagenView: "",

    }),

    methods: {
        /* ------------------------------------------------------------------------------------------------------- */
        /* ------------------------------------------------------------------------------------------------------- */
        /* INVENTARIO */
        ListInvAdmin() {
            /*     //   // console.log("listar inventario") */
        },
        volverInv() {
            this.selectedEvent = '';
        },

        opcProd() {
            this.gestprod = 1;
        },

        mostrarSeleccion(e) {
            let opcionSeleccionada = e.target.options[e.target.selectedIndex];
            this.selectLabel = opcionSeleccionada.label;
            this.SelectID = opcionSeleccionada.value;
            this.selectProdInv = this.SelectID;
            /*      //   // console.log("Value: " + this.SelectID + ", Label: " + this.selectLabel); */
        },
        /* --------------------------------------------------------------------------------- */

        async ValidaItems(idPed, event) {

            const r = query(collection(bd, "inventario"), where("evento", "==", event));

            const querySnapshot = await getDocs(r);
            let eventL = [];
            querySnapshot.forEach((doc) => {

                eventL.push({
                    ...doc.data(),
                    id: doc.id,
                });

                //   // console.log(doc.id, " => ", doc.data());
            });
            this.existente = this.filtrarItems(eventL, idPed);

            if (this.existente >= 1) {
                //   // console.log("existe el item", this.IDitem, this.CantItem);
                this.actualizaItem(this.IDitem, this.CantItem);
                this.selectProdInv = "";
                this.prodInvCant = "";
                this.btninv = false;
            } else {
                //   // console.log("NO EXISTE");
                this.addProdInv()
            }

        },

        filtrarItems(arr, query) {
            let resultado = arr.filter(item => item.IDproducto == query);
            //   // console.log(resultado.length)
            //   // console.log(resultado)
            if (resultado.length >= 1) {
                this.IDitem = resultado[0].id;
                this.CantItem = resultado[0].cantidad;
            }

            return resultado.length
        },

        async actualizaItem(idUser, cant) {
            // funcion para actualizar en la BD la informacion capturada
            const productoRef = doc(bd, "inventario", idUser);
            //update
            await updateDoc(productoRef, {
                cantidad: Number(this.prodInvCant) + Number(cant)
            });

            Swal.fire({
                title: "¡Item Actualizado!",
                icon: "success",
            }).then(() => {
                /* //   // console.log("vaciando campos"); */
                /*   this.$refs.productForm.reset(); */

            });

        },

        /* ------------------------------------------------------------------------------- */
        async addProdInv() {
            this.btninv = true
            const ColRef = collection(bd, "inventario");
            const dataObj = {
                evento: this.selectedEvent,
                IDproducto: this.SelectID,
                nombre: this.selectLabel,
                cantidad: this.prodInvCant,
            };
            const docRef = await addDoc(ColRef, dataObj);
            /*   //   // console.log("item agregado", docRef.id); */
            Swal.fire({
                title: "¡Enviado!",
                text: "El item creado correctamente.",
                icon: "success",
            }).then(() => {
                /* this.$refs.productForm.reset(); */
                this.selectProdInv = "";
                this.prodInvCant = "";
                this.btninv = false;
            });
        },
        /* ----------------------------------------------------------------------------------- */
        verInv(evento) {
            this.listInv = [];
            /* const ColRef = collection(bd, "inventario"); */
            const q = query(collection(bd, "inventario"), where("evento", "==", evento));

            onSnapshot(q, (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({
                        ...doc.data(),
                        id: doc.id
                    });
                    this.listInv = list;
                });
                /*  //   // console.log(list); */
            });

        },

        EliminarItemInv(id) {

            Swal.fire({
                title: 'Esta seguro?',
                text: "Se eliminara el item de la lista!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteDoc(doc(bd, "inventario", id));
                    Swal.fire(
                        'Eliminado!',
                        'El item fue eliminado exitosamente.',
                        'success'
                    )
                }
            })

            /*   //   // console.log("evento eliminado"); */
        },
        /* ----------------------------------------------------------- */

        /* -------------------------------------------------------------------------------------------------------------- */

        /* EVENTOS */
        async crearEventos() {
            this.btnNewEvent = true
            const ColRef = collection(bd, "eventos");
            const dataObj = {
                fechaini: this.f_inicio,
                fechafin: this.f_fin,
                nombre: this.e_nombre,
                estado: false,
            };
            const docRef = await addDoc(ColRef, dataObj);
            /*   //   // console.log("evento con creado con id", docRef.id); */

            Swal.fire({
                title: "¡Enviado!",
                text: "El evento fue creado correctamente.",
                icon: "success",
            }).then(() => {
                this.$refs.eventosForm.reset();
                this.f_inicio = "";
                this.f_fin = "";
                this.e_nombre = "";
            });
        },
        /* ---------------------------------------------------- */

        leerEventos() {
            const ColRef = collection(bd, "eventos");

            onSnapshot(ColRef, (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({
                        ...doc.data(),
                        id: doc.id
                    });
                    this.listEventos = list;
                });
                /*   //   // console.log(list); */
            });
        },

        /* eliminar */

        eliminarevento(id) {

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteDoc(doc(bd, "eventos", id));
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })

            /*   //   // console.log("evento eliminado"); */
        },

        async Bloq_Desb_Event(idUser, state) {
            // funcion para actualizar en la BD la informacion capturada
            const productoRef = doc(bd, "eventos", idUser);
            //update
            await updateDoc(productoRef, {

                estado: !state,
            });

            Swal.fire({
                title: "¡Evento Actualizado!",

                icon: "success",
            }).then(() => {
                /* //   // console.log("vaciando campos"); */
                /*   this.$refs.productForm.reset(); */

            });
        },

        /* ------------------------------------------------------------------------------------------------------- */
        /* ------------------------------------------------------------------------------------------------------- */
        /* USUARIOS */
        async crearUsuarios() {
            this.btnNewuser = true
            const ColRef = collection(bd, "usuarios");
            const dataObj = {
                nombres: this.username,
                documento: this.userdoc,
                celular: this.usercel,
                rol: this.userrol,
                estado: true,
                passw: this.userpassw1,

            };
            const docRef = await addDoc(ColRef, dataObj);
            /* //   // console.log("usuario con creado con id", docRef.id); */

            Swal.fire({
                title: "¡Enviado!",
                text: "Usuario creado correctamente.",
                icon: "success",
            }).then(() => {
                
                this.username = "";
                this.userdoc = "";
                this.usercel = "";
                this.userrol = "";
                this.userpassw1 = "";
                this.userpassw2 = "";
            });
        },

        /* ---------------------------------------------------- */

        leerUsuarios() {
            const ColRef = collection(bd, "usuarios");

            onSnapshot(ColRef, (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({
                        ...doc.data(),
                        id: doc.id
                    });
                    this.listUser = list;
                });
                this.username = "";
                /* //   // console.log(list); */
            });
        },
        /* ----------------------eliminar productos---------------------- */
        /*  async eliminaruser(id) {
             await deleteDoc(doc(bd, "usuarios", id));
             //   // console.log("usuario eliminado" + id);
         }, */

        eliminaruser(id) {

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteDoc(doc(bd, "usuarios", id));
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })

            //   // console.log("usuario eliminado" + id);
        },

        async Bloq_Desb_User(idUser, state) {
            // funcion para actualizar en la BD la informacion capturada
            const productoRef = doc(bd, "usuarios", idUser);
            //update
            await updateDoc(productoRef, {

                estado: !state,
            });

            Swal.fire({
                title: "¡Usuario Actualizado!",

                icon: "success",
            }).then(() => {
                /* //   // console.log("vaciando campos"); */
                /*   this.$refs.productForm.reset(); */

            });

        },
        /* ------------------------------------------------------------------------------------------------------- */
        /* ------------------------------------------------------------------------------------------------------- */
        /* PRODUCTOS */

        async crearProducto() {
            this.btnNewProduct = true
            const ColRef_c = collection(bd, "productos");

            const dataObj = {
                nombre: this.p_nombre,
                precio: this.p_precio,
                urlimagen: this.image.name,
                descripcion: this.p_descripcion,
            }

            const docRef = await addDoc(ColRef_c, dataObj);
            //   // console.log("producto con creado con id", docRef.id);
            this.gestprod = 0;
            Swal.fire({
                title: "¡Enviado!",
                text: "El producto fue creado correctamente.",
                icon: "success",
            }).then(() => {
                //   // console.log("vaciando campos");
                /*  this.$refs.productForm.reset(); */
                this.p_nombre = "";
                this.p_precio = "";
                this.p_descripcion = "";
            });
        },

        /* -------------------imagenes--------------------------------- */
        previewImage(event) {
            this.image = event.target.files[0];
            this.ImagenView = URL.createObjectURL(this.image);
            const reader = new FileReader();
            reader.readAsDataURL(this.image);
            reader.onload = (event) => {
                this.imagePreview = event.target.result;
                this.imagenok = 1;
            };
        },
        async uploadImage() {
            const storage = getStorage();
            const storageRef = ref(storage, "images/" + this.image.name);
            await uploadBytes(storageRef, this.image);
            //   // console.log("Image uploaded successfully!");

        },

        /* -------------------imagenes--------------------------------- */

        leerproductos() {

            const ColRef_l = collection(bd, "productos");

            onSnapshot(ColRef_l, (snapshot) => {
                let listP = [];
                snapshot.docs.forEach((doc) => {
                    listP.push({
                        ...doc.data(),
                        id: doc.id
                    });
                    this.listProductos = listP;
                });
                /* //   // console.log(listP); */
            });
        },

        /* ----------------------eliminar productos---------------------- */
        /*   async eliminarProd(id, imagen) {
              await deleteDoc(doc(bd, "productos", id));
              //eliminamos imagen 
              const storage = getStorage();
              const desertRef = ref(storage, "images/" + imagen);
              deleteObject(desertRef)
                  .then(() => {
                       // //   // console.log("foto eliminada");
                  })
                  .catch((error) => {
                      // Uh-oh, an error occurred!
                  });
          }, */

        eliminarProd(id, imagen) {

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {

                    deleteDoc(doc(bd, "productos", id));
                    //eliminamos imagen 
                    const storage = getStorage();
                    const desertRef = ref(storage, "images/" + imagen);
                    deleteObject(desertRef)
                        .then(() => {
                            // //   // console.log("foto eliminada");
                        })
                        .catch((error) => {
                            // Uh-oh, an error occurred!
                        });

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })

        },

        /* -----------------------------Editar productos */
        newProd() {
            this.gestprod = 1;
            // abre el formulario en modo crear producto
            this.p_nombre = "";
            this.p_precio = "";
            this.p_descripcion = "";
            this.idprod = "";
            this.imgurl = "";
            this.ImagenView = null;

        },

        editProd(item) {
            this.gestprod = 2;
            //abre el formulario en modo edicion y carga los campos con los datos del item seleccionado
            this.p_nombre = item.nombre;
            this.p_precio = item.precio;
            this.p_descripcion = item.descripcion;
            this.idprod = item.id;
            this.imgurl = item.url;

        },

        async UpdateProducto() {
            // funcion para actualizar en la BD la informacion capturada
            const productoRef = doc(bd, "productos", this.idprod);
            //update
            await updateDoc(productoRef, {
                nombre: this.p_nombre,
                precio: this.p_precio,
                descripcion: this.p_descripcion,
            });

            Swal.fire({
                title: "¡Actualizado!",
                text: "El producto fue Actualizado correctamente.",
                icon: "success",
            }).then(() => {
                /* //   // console.log("vaciando campos"); */
                /*   this.$refs.productForm.reset(); */
                this.p_nombre = "";
                this.p_precio = "";
                this.p_descripcion = "";
                this.idprod = "";
                this.imgurl = "";
            });

        },

        cerrar() {
            this.gestprod = 0;
            this.p_nombre = "";
            this.p_precio = "";
            this.p_descripcion = "";
            this.idprod = "";
            this.imgurl = "";
        },

    },

    /* ------------------------------------------------------------------------------------------------------- */
    created() {
        this.leerEventos();
        this.leerUsuarios();
        this.leerproductos();
    },
};
</script>

<style>
    </style>
