const botonesVerMas = document.querySelectorAll(".btn");

botonesVerMas.forEach(boton => {
    boton.addEventListener("click", function() {
        alert("Por el momento es todo lo que puede ofrecer la página 🫠");
    });
});