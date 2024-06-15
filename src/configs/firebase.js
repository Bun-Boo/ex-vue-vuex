import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5L8CVUET90onrvZKdiayB55odQr99wws",
    authDomain: "vue-prj-c1dc1.firebaseapp.com",
    projectId: "vue-prj-c1dc1",
    storageBucket: "vue-prj-c1dc1.appspot.com",
    messagingSenderId: "145687118973",
    appId: "1:145687118973:web:d3ab09e390a03f3af85d14"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;