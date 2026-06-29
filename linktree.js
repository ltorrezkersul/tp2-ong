const botones = document.querySelectorAll(".boton");


botones.forEach(function(boton) {


    boton.addEventListener("click", function() {


        console.log("Ingresaste a: " + boton.innerHTML);


    });


})