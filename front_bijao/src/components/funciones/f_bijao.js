import Swal from "sweetalert2";
import bd from "./../../utils/firebase.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
const registrosRta= [];

/*consulta filtrada por 1 parametro -------------------------------------------------------------------------*/
export const ConsultaXparametro = async (tabla, variable, valor) => {
  const Ref = collection(bd, tabla);
  const q = query(Ref, where(variable, "==", valor));
  const querySnapshot = await getDocs(q);
  let responsearray = [];
  querySnapshot.forEach((doc) => {
    responsearray.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  /* console.log(responsearray); */
  return responsearray;
}

/*consulta de todos los datos de una tabla ------------------------------------------------------------------- */


export const LeerRegistros = (tabla) => {
  const CRef = collection(bd, tabla);
  return new Promise((resolve, reject) => {
    onSnapshot(CRef, (snapshot) => {
      let listC = [];
      snapshot.docs.forEach((doc) => {
        listC.push({
          ...doc.data(),
          id: doc.id
        });
      });
   /*    console.log(listC); */
      resolve(listC);
    }, (error) => {
      reject(error);
    });
  });
}


/*guardar datos en una tabla ----------------------------------------------------------------------------------*/

export const guardarRegistro = async (tabla, datos) => {


  /*     const dataObj = {
                evento: this.eventoAct,
                producto: this.Ttamal,
                tamalero: this.tamalero,
                cantidad: this.cant,
            }; */

  const ColRef = collection(bd, tabla);

  const docRef = await addDoc(ColRef, datos);
  /*   //   // console.log("item agregado", docRef.id); */
  Swal.fire({
    title: "¡Enviado!",
    text: "El item creado correctamente.",
    icon: "success",
  }).then(() => {
    /* this.$refs.productForm.reset(); */

  });

}

