
import bd from "./../../utils/firebase.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";



/* consulta una tabla y compara con el nombre y valor de parametro */

export const consultaXParametro = async (table, param, value) => {
  const Ref = collection(bd, table);
  const q = query(Ref, where(param, "==", value));

  const querySnapshot = await getDocs(q);
  let list = [];
  querySnapshot.forEach((doc) => {
    list.push({
      ...doc.data(),
      id: doc.id
    });

  });
  return list;
}

/* consulta todos los elementos de una tabla*/

export const leerTabla = (table) => {
  const ColRef = collection(bd, table);
  onSnapshot(ColRef, (snapshot) => {
    let listU = [];
    snapshot.docs.forEach((doc) => {
      listU.push({
        ...doc.data(),
        id: doc.id
      })


    });

    return listU;

  });
}

/* 
export const leerTabla = (table) => {
  try {
    const ColRef = collection(bd, table);
    onSnapshot(ColRef, (snapshot) => {
      let listU = [];
      snapshot.docs.forEach((doc) => {
        listU.push({
          ...doc.data(),
          id: doc.id
        });
      });
      return listU;
    });
  } catch (error) {
    console.error('Error al leer la tabla:', error);
  }
}; */
