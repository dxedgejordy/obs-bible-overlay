import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  onSnapshot
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
const db = getFirestore(app);

// ----------- CONTROL -----------

const btn = document.getElementById("enviar");

if (btn) {

  btn.onclick = async () => {

    const referencia = document.getElementById("referencia").value;
    const texto = document.getElementById("versiculo").value;

    await setDoc(doc(db, "overlay", "current"), {
      referencia,
      texto
    });

    alert("Versículo enviado");
  };

}

// ----------- OVERLAY -----------

const ref = document.getElementById("ref");
const txt = document.getElementById("txt");

if (ref && txt) {

  onSnapshot(doc(db, "overlay", "current"), (d) => {

    const data = d.data();

    if (!data) return;

    ref.innerHTML = data.referencia;
    txt.innerHTML = data.texto;

  });

}
