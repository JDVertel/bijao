import { default } from '../u_admin/Parametros.vue';
<template>
  <div class="app">
    <h6 class="display-6"> <i class="fa fa-cutlery" aria-hidden="true"></i> Tamalero</h6>
    <div class="container aplicacion">
      <div class="container">
        <div v-if="this.selectedeventtamalero === ''">
        <p>Seleccione el evento para ver el inventario y registrar sus ventas</p>
        <select class="form-select form-select-sm" aria-label="Default select example" v-model="selectedeventtamalero">
          <option selected value="">Seleccione evento</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <br>
      
  </div>
        <div class="container tamalero" v-if="this.selectedeventtamalero != ''">
          <br>
          <div class="row">

            <div class="col-2">
              <button class="btn btn-danger btn-sm redondo" @click="volverInvTam()">
                <i class="fa fa-times" aria-hidden="true"></i></button>
            </div>
                  <div class="col-10">
            <p>Seleccione el producto y adicione la cantidad para registrar la venta  en el evento  <strong>{{ selectedeventtamalero }}</strong> </p>  </div>
            <div class="col-12 col-sm-5">

              <select class="form-select form-select-sm" aria-label="Default select example">
                <option selected>Seleccione Producto</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Cantidad</span>
                <input type="number" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm">
                <button type="button" class="btn btn-primary btn-sm">Registrar venta</button>
              </div>

            </div>
            <div class="col-12 col-sm-7">
              <p>Inventario y Ventas Generales</p>

              <div class="table-responsive">
                <table class="table table-sm table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Disponibles</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">vendidos</th>
                      <th scope="col">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
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
</template>

<script>

export default {

  data: () => ({
    selectedeventtamalero: "",
  }),

  methods: {

    volverInvTam() {
          this.selectedeventtamalero = '';
    }

  }




}


</script>



