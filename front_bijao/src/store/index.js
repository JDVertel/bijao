import { createStore } from "vuex";

export default createStore({
  state: {
    carrito: [],
    total: "",
   
  },

  mutations: {


    addItem(state) {
      const existeItem = state.carrito.find(
        (i) => i.nombre === state.item.nombre
      );
      if (existeItem) {
        /*  // console.log("si existe"); */
        const nom = state.item.nombre;
        const conteo = state.carrito.find((i) => i.nombre === nom);
        conteo.cant++;
        conteo.subtotal = state.item.precio * state.item.cant;
      
      } else {
        /*      // console.log("no existe"); */
        state.item.cant = 1;
        /* almacera array subtotal */
        state.item.subtotal = state.item.precio;
        /* almacena en el array carrito cada uno de los items */
        state.carrito = [state.item, ...state.carrito];
        /*  */
   
     /*    state.item.info=state.info; */
      }
      state.total = state.carrito.reduce(
        (contador, elemento) => contador + elemento.subtotal,
        0
      )
  /*     state.info="informacion"; */
    },
    setVaciar(state) {
      state.carrito =[]
      state.total=''
    
    },
    /*--------------------------------------------------------------------  */
    deleteItem(state, itemEdit) {
      const existeItem = state.carrito.find(
        (i) => i.nombre === state.itemEdit.nombre
      );
      const indexitem = state.carrito.findIndex(
        (k) => k.nombre === state.itemEdit.nombre
      );

      if (existeItem.cant > 1) {
        /*      // console.log("varios en la orden"); */
        existeItem.cant--;
        existeItem.subtotal = existeItem.precio * existeItem.cant;
      } else {
        /*    // console.log(indexitem); */

        this.state.carrito.splice(indexitem, 1);

        /*  // console.log("elimina el unico item en la orden"); */
      }
      state.total = state.carrito.reduce(
        (contador, elemento) => contador + elemento.subtotal,
        0
      );
    },
  },

  /* ---------------------------------------------------------------- */

  actions: {
    addItemAction(item) {
      item.commit("addItem");
    },

    deleteItemAction(itemEdit) {
      itemEdit.commit("deleteItem");
    },
    deleteCar(store) {
      store.commit('setVaciar')
      // console.log ("vaciando store");
    }

  },
});
