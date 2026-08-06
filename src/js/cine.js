const botonTema = document.getElementById("tema");

botonTema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        botonTema.textContent = "☀️ Modo Claro";
    }else{
        botonTema.textContent = "🌙 Modo Oscuro";
    }

});