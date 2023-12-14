<template>
<div class="container principal">
    <h6 class="display-6">{{ this.eventovigente }}</h6>
    <table class="table table-sm table-hover ">
        <thead>
            <tr>
                <th>Fecha inicio</th>
                <th>Fecha fin</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="eventos in listEvents" v-bind:key="eventos.id">
                <td>{{ eventos.fechaini }}</td>
                <td>{{ eventos.fechafin }}</td>

            </tr>
        </tbody>
    </table>

    <!-- ----------------------------------------------------------------------------- -->
    <div class="row">
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 card-deck" v-for="producto in ProdVitrina" :key="producto.id">

            <div class="card shadowB claseTrasnsf">
                <h5 class="card-title">{{ producto.nombre }}</h5>
                <img class="card-img-top" :src="`${producto.url}`" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">{{ producto.descripcion }}</p>
                    <hr>
                    <div class="row">
                        <div class="col-6">
                            <p class="card-price">${{ producto.precio }}</p>
                        </div>
                        <div class="col-6" style="padding:0px"><button class="btn btn-danger btn-sm redondo " @click="addItem(producto)">
                                <i class="fa fa-cart-plus" aria-hidden="true"></i>
                            </button></div>
                    </div>

                </div>
            </div>

        </div>
    </div>
    <!-- ----------------------------------------------------------------------------- -->
    <div v-if="$store.state.total">
        <hr>
        <div class="container">
            <CarritodeCompras />
            <router-link to="/ordenes">Ordenar</router-link>
        </div>
    </div>
    <!-- fin container -->
</div>
</template>

<script>
import bd from "../../utils/firebase";

import {
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    query,
    where,
    getDoc,
    QuerySnapshot,
    documentId,
    doc

} from "firebase/firestore";
import {
    defineAsyncComponent
} from "vue";
/*  */
import {
    getStorage,
    ref,
    getDownloadURL
} from 'firebase/storage';

export default {
    components: {
        CarritodeCompras: defineAsyncComponent(() =>
            import("./../carritodecompras/carrito.vue")
        ),
    },
    props: ['evento', 'fecha'],
    data() {
        return {

            imageUrl: '',
            list: [],
            fechaActual: '',
            listEvents: [],
            eventovigente: "Lo sentimos no hay eventos disponibles",
            prod: {},
            listaP: [],
            datosfact: [],
            ProdVitrina: [],

        };
    },

    methods: {

        addItem(product) {
            /*  let info=this.eventovigente; */
            this.$store.state.item = (product);
            /* // console.log("este es producto ",product); */
            /* this.$store.state.info=(info); */
            this.$store.dispatch("addItemAction");
            this.$store.state.item = "";
        },

        /* funcion 1 */
        diahoy() {
            const fecha = new Date();
            const diaActual = fecha.getDate();
            const mesActual = fecha.getMonth() + 1; // Los meses se indexan desde 0, por lo que se suma 1
            const añoActual = fecha.getFullYear();
            this.fechaActual = añoActual + '-' + mesActual + '-' + diaActual;
            /*  // console.log("1 funcion ejecutandose"); */
        },
        /* funcion 2 */

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
                this.leerProdBD(this.eventovigente);
            }, )
        },

        /* funcion 3 */
        leerProdBD(data) {
            /*  // console.log("leerProdDB", data); */
            const Inv = query(collection(bd, "inventario"), where("evento", "==", data));
            onSnapshot(Inv, (snapshot) => {
                snapshot.docs.map((doc) => {
                    /*  // console.log(doc.data().nombre) */
                    this.listaP = [];
                    this.leerid(doc.data().IDproducto).then(
                        (info) => {
                            if (info != {}) {
                                const storage = getStorage();
                                const imageRef = ref(storage, "images/" + info.urlimagen);
                                getDownloadURL(imageRef).then((url) => {
                                    /*         // console.log("esta es la url", url) */
                                    this.listaP.push({
                                        ...info,
                                        id: doc.id,
                                        url: url,
                                        eventovigente: this.eventovigente,
                                    });
                                    this.ProdVitrina = this.listaP;

                                    /*     // console.log("info de list", this.listaP) */
                                });
                            }
                        })
                })
            })

        },

        async leerid(ide) {
            /*   // console.log("esto es ide", ide) */
            const docRef = doc(bd, "productos", ide)
            const docSnap = await getDoc(docRef);
            let info = {};
            if (docSnap.exists()) {
                /*          // console.log("Document data:", docSnap.data()); */
                info = docSnap.data()
            } else {
                // docSnap.data() will be undefined in this case
                /*    // console.log("No such document!"); */
            }
            return info
        }

    },

    created() {
        this.diahoy();
        this.eventosHoy();

    },

}
</script>
