<template>
<div class="card">
<div class="container carrito">

    <br />
    <div class="row center" style="background-color: #84ad09">
        <div class="col-10">
            <h6 style="color:white; padding: 1px; margin: 1px;">Valor de su Pedido <strong> ${{ $store.state.total }} </strong> </h6>
        </div>
        <div class="col-2"><button class="btn btn-danger btn-sm redondomini">
           <i class="fa fa-times " aria-hidden="true"></i>
            </button></div>

    </div>

    <div class="table-responsive-sm">
        <table class="table table-sm">
            <thead>
                <tr>
                    <th>Cant</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>subtotal</th>
                    <th>Opc</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in $store.state.carrito" :key="index">
                    <td>{{ item.cant }}</td>
                    <td>{{ item.nombre }}</td>
                    <td>${{ item.precio }}</td>
                    <td>{{ item.subtotal }}</td>
                    <td>
                        <button class="btn btn-danger btn-sm redondo" @click="DeleteItem(item)">
                            <i class="fa fa-minus-circle" aria-hidden="true"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        
    </div>
</div>
</div>
</template>

<script>
/* import store from "../../store"; */
export default {
    methods: {
        DeleteItem(deleteitem) {
            this.$store.state.itemEdit = deleteitem;
            this.$store.dispatch("deleteItemAction");

        },
    },
};
</script>

<style scoped>

</style>
