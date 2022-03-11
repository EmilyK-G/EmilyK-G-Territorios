import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbhu2asvVLOg4vU-bzZUiqVaCki6DPIJk",
  authDomain: "territorios-abb75.firebaseapp.com",
  projectId: "territorios-abb75",
  storageBucket: "territorios-abb75.appspot.com",
  messagingSenderId: "869597927154",
  appId: "1:869597927154:web:40864f0362add08f5d626b",
  measurementId: "G-SM7CPB0DK3"
};

//init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

 // collection ref

 const colRef = collection(db, 'Addresses')


export { colRef };
export default db;