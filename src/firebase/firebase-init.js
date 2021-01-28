/* eslint-disable */
// Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyBX4TxYLSJl8urzezGI3mkRH5n6BOjhFV8',
  authDomain: 'beutycorp-a4fb3.firebaseapp.com',
  projectId: 'beutycorp-a4fb3',
  storageBucket: 'beutycorp-a4fb3.appspot.com',
  messagingSenderId: '386504568337',
  appId: '1:386504568337:web:12523ee1421219dfebcbb0',
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();
export default db;
