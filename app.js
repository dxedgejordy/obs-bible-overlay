// Conexión con Firestore
import { db } from "./firebase-config.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Cargar versículo del día
async function cargarVersiculo() {
    try {
        const referencia = doc(db, "versiculos", "dia");

        const resultado = await getDoc(referencia);

        if (resultado.exists()) {
            const datos = resultado.data();

            document.getElementById("versiculo").innerHTML = datos.texto;
            document.getElementById("referencia").innerHTML = datos.referencia;

        } else {
            console.log("No existe el versículo del día");
        }

    } catch (error) {
        console.error("Error cargando versículo:", error);
    }
}

// Ejecutar al abrir la app
cargarVersiculo();
