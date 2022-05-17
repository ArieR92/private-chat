// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCV1LTPmApUWDOwxZzobRijyWF99VRR-8",
  authDomain: "private-chat-11834.firebaseapp.com",
  projectId: "private-chat-11834",
  storageBucket: "private-chat-11834.appspot.com",
  messagingSenderId: "123867114360",
  appId: "1:123867114360:web:fc6ed81a6563a51b9d368d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}; 