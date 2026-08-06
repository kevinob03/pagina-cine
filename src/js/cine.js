// ===============================
// BOTONES
// ===============================

const botonTema = document.getElementById("tema");
const botonCartelera = document.getElementById("btnCartelera");

// ===============================
// CAMBIAR EL TEXTO DEL BOTÓN
// ===============================

function actualizarBotonTema() {

    const modoOscuro = document.body.classList.contains("dark");

    if (modoOscuro) {
        botonTema.textContent = "☀️ Modo Claro";
    } else {
        botonTema.textContent = "🌙 Modo Oscuro";
    }

}

// ===============================
// GUARDAR TEMA
// ===============================

function guardarTema() {

    const modoOscuro = document.body.classList.contains("dark");

    if (modoOscuro) {
        localStorage.setItem("tema", "oscuro");
    } else {
        localStorage.setItem("tema", "claro");
    }

}

// ===============================
// CARGAR TEMA GUARDADO
// ===============================

function cargarTema() {

    if (localStorage.getItem("tema") === "oscuro") {
        document.body.classList.add("dark");
    }

    actualizarBotonTema();

}

cargarTema();

// ===============================
// BOTÓN MODO OSCURO
// ===============================

botonTema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    actualizarBotonTema();

    guardarTema();

});

// ===============================
// BOTÓN VER CARTELERA
// ===============================

botonCartelera.addEventListener("click", () => {

    document.getElementById("cartelera").scrollIntoView({
        behavior: "smooth"
    });

});