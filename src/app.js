
const sujetos = ["Mi perro", "Un extraterrestre", "Mi vecino", "Mi jefe", "Un fantasma", "Mi hermano pequeño"];
const verbos = ["se comió", "robó", "perdió", "destruyó", "escondió", "rompió"];
const objetos = ["mi tarea", "mi coche", "mis llaves", "mi teléfono", "el informe", "el dinero"];
const circunstancias = ["mientras dormía", "en la calle", "justo antes de llegar", "sin querer", "cuando no estaba mirando", "durante una tormenta"];


function generarExcusa() {
    const sujeto = sujetos[Math.floor(Math.random() * sujetos.length)];
    const verbo = verbos[Math.floor(Math.random() * verbos.length)];
    const objeto = objetos[Math.floor(Math.random() * objetos.length)];
    const circunstancia = circunstancias[Math.floor(Math.random() * circunstancias.length)];

    const excusa = `${sujeto} ${verbo} ${objeto} ${circunstancia}.`;
    document.getElementById("excusa").textContent = excusa;
}

window.onload = generarExcusa;
