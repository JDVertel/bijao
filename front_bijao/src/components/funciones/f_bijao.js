import bd from "./../../utils/firebase.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";



export const ConsultaXparametro= async (tabla,variable,valor)=>{
  const Ref = collection(bd, tabla);
  const q = query(Ref, where(variable, "==",valor));
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
