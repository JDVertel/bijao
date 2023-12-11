
import bd from "./../../utils/firebase.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";


export const funcion1 = () => console.log("corriendo script importado");


export const funcion2 = () => console.log("segunda funcion");





export const usuariosbyRol = async (table, rol) => {
  const Ref = collection(bd, table);
  const q = query(Ref, where("rol", "==", rol));
  const querySnapshot = await getDocs(q);
  let list = [];
  querySnapshot.forEach((doc) => {
    list.push({
      ...doc.data(),
      id: doc.id
    });
  list;
  });
/*   console.log(list) */
return list

};

