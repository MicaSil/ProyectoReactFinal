import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDya328-sbsiAHxZONm_Fl6-9SM9WiB5Rw",
    authDomain: "productos-b81ad.firebaseapp.com",
    projectId: "productos-b81ad",
    storageBucket: "productos-b81ad.appspot.com",
    messagingSenderId: "547153646489",
    appId: "1:547153646489:web:10a22f0be2ae89e72c3908"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)