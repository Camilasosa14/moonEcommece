
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyD5VpNQiiQVZKnpgEmDAmSrqoSayay3FIk",
    authDomain: "moon-tienda.firebaseapp.com",
    projectId: "moon-tienda",
    storageBucket: "moon-tienda.appspot.com",
    messagingSenderId: "231154408994",
    appId: "1:231154408994:web:0a419975636286ba6d747b"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const auth = getAuth(app)