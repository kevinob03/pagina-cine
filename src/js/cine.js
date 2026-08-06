const botonTema = document.getElementById("tema");

// Revisar si había un tema guardado
if (localStorage.getItem("tema") === "oscuro") {
    document.body.classList.add("dark");
    botonTema.textContent = "☀️ Modo Claro";
}

// Cambiar tema
botonTema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botonTema.textContent = "☀️ Modo Claro";
        localStorage.setItem("tema", "oscuro");
    } else {
        botonTema.textContent = "🌙 Modo Oscuro";
        localStorage.setItem("tema", "claro");
    }

});





const botonCartelera = document.getElementById("btnCartelera");

botonCartelera.addEventListener("click", () => {
    document.getElementById("cartelera").scrollIntoView({
        behavior: "smooth"
    });
});