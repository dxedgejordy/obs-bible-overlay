import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGfA21fXLS-DNmr988sc-prxvMV1o_14A",
  authDomain: "biblia-jnf.firebaseapp.com",
  projectId: "biblia-jnf",
  storageBucket: "biblia-jnf.firebasestorage.app",
  messagingSenderId: "1092166350928",
  appId: "1:1092166350928:web:2c0c660eb0e6b1746eb955"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
