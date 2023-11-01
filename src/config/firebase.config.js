import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyAvGZgtaL1z612EIh9xBI_sBT-Of6FrplU",
  authDomain: "conceptual-2-milestone-11.firebaseapp.com",
  projectId: "conceptual-2-milestone-11",
  storageBucket: "conceptual-2-milestone-11.appspot.com",
  messagingSenderId: "298777602131",
  appId: "1:298777602131:web:bd2cc93a0302fc69687ea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;