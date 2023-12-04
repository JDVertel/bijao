<template>
  <div class="container carrito">
    <br />
    <div class="row" style="background-color: #84ad09">
      <h6 style="color: white">Pedido ${{ $store.state.total }}</h6>
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
              <button class="btn btn-danger btn-sm" @click="DeleteItem(item)">
                -
              </button>
            </td>
          </tr>
        </tbody>
      </table>

  
    </div>
  </div>
</template>

<script>
import store from "../../store";
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
.carrito {
  background-color: #dbee61;
  font-size: 0.7rem !important;
  border-radius: 5px !important;
}
.btn {
  margin: 0px !important;
  border: none;
  text-align: center;
  border-radius: 50% !important;
  height: 20px !important;
  width: 20px !important;
  padding: 1px !important;
  font-size: 0.7rem !important;
}
table {
  text-align: center;
  border-color: #84ad09 !important ;
}
</style>
