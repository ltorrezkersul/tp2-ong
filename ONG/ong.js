/* MENÚ RESPONSIVE */
function abrirMenu() {
    let flexNav = document.querySelector('ul');
    let botonMenu = document.querySelector('#abrirMenu');
    let menuAbierto = flexNav.classList.toggle('flexNav');

    botonMenu.setAttribute('aria-expanded', menuAbierto);
    botonMenu.textContent = menuAbierto ? 'X' : '☰';
}

window.addEventListener("resize", function () {
    let menu = document.querySelector("nav ul");
    let boton = document.querySelector("#abrirMenu");

    if (window.innerWidth > 600) {
        menu.classList.remove("flexNav");
        boton.textContent = "☰";
    }
});

/* EFECTOS INTERACTIVOS EN TARJETAS */
document.addEventListener('DOMContentLoaded', function () {

    /* Tarjetas MVP */
    let tarjetasMVP = document.querySelectorAll('.tarjeta-mvp');
    tarjetasMVP.forEach(function (tarjeta) {
        tarjeta.style.transition = 'all 0.3s ease';

        tarjeta.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 16px rgba(46, 139, 60, 0.2)';
            this.style.backgroundColor = '#F0F8F2';
        });

        tarjeta.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            this.style.backgroundColor = 'rgba(6,42,51,0.90)';
        });
    });
    /* Valores Cards */
    let valoresCards = document.querySelectorAll('.valor-card');
    valoresCards.forEach(function (card) {
        card.style.transition = 'all 0.3s ease';

        card.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.backgroundColor = '#6DBE2A';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.backgroundColor = '#F0F8F2';
        });
    });

    /* Público Cards */
    let publicoCards = document.querySelectorAll('.publico-card');
    publicoCards.forEach(function (card) {
        card.style.transition = 'all 0.3s ease';

        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-6px)';
            this.style.boxShadow = '0 12px 24px rgba(0, 159, 154, 0.15)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        });
    });

});

/* DONAR*/
/* Abrir modal */
function abrirModal() {
    let modal = document.querySelector("#modalDonacion");
    modal.style.display = "flex";

}

/* Cerrar modal */
function cerrarModal() {
    let modal = document.querySelector("#modalDonacion");
    modal.style.display = "none";
}


/* Calcular impacto */

function calcularImpacto() {
    let monto = document.querySelector("#monto");
    let resultado = document.querySelector("#resultadoImpacto");

    if (monto.value == "" || monto.value <= 0) {
        resultado.style.display = "block";
        resultado.innerHTML = "<p>Ingresá un monto válido.</p>";
        return;
    }

    let arboles = Math.floor(monto.value / 1000);
    let residuos = Math.floor(monto.value / 500);
    let talleres = Math.floor(monto.value / 5000);

    resultado.style.display = "block";

    resultado.innerHTML =

        "<h3>Con tu aporte podremos:</h3>" +
        "<p>🌳 Plantar <b>" + arboles + "</b> árboles.</p>" +
        "<p>♻️ Recuperar <b>" + residuos + "</b> kg de residuos.</p>" +
        "<p>📚 Realizar <b>" + talleres + "</b> talleres ambientales.</p>";
}


/* Enviar donación */
function enviarDonacion(event) {
    event.preventDefault();
    let formulario = document.querySelector("#modalDonacion form");
    let mensaje = document.querySelector("#mensajeDonacion");

    formulario.style.display = "none";
    mensaje.style.display = "block";

    setTimeout(function () {
        cerrarModal();
        formulario.style.display = "block";
        mensaje.style.display = "none";
        formulario.reset();
    }, 3000);
}
/*CARRUSEL HOME*/

let slides = document.querySelectorAll(".slide");
let puntos = document.querySelectorAll(".punto");
let slideActual = 0;

/* Mostrar slide */

function mostrarSlide(numero) {
    slides[slideActual].classList.remove("activo");
    puntos[slideActual].classList.remove("activo");

    slideActual = numero;

    slides[slideActual].classList.add("activo");
    puntos[slideActual].classList.add("activo");
}

/* Siguiente */

function siguienteSlide() {
    let siguiente = slideActual + 1;

    if (siguiente >= slides.length) {
        siguiente = 0;
    }
    mostrarSlide(siguiente);
}

/* Anterior */

function anteriorSlide() {
    let anterior = slideActual - 1;

    if (anterior < 0) {
        anterior = slides.length - 1;
    }
    mostrarSlide(anterior);
}

/* Cambio automático */

setInterval(function () {
    siguienteSlide();
}, 5000);

/*EFECTOS HOME*/

document.addEventListener("DOMContentLoaded", function () {
    /* Tarjetas Home */

    let tarjetasHome = document.querySelectorAll(".card-home");
    tarjetasHome.forEach(function (card) {

        card.style.transition = "all .3s ease";
        card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-8px)";
            this.style.boxShadow = "0 10px 20px rgba(0,0,0,.15)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "none";
        });
    });

    /* Galería */

    let imagenes = document.querySelectorAll(".galeria-home img");
    imagenes.forEach(function (imagen) {

        imagen.style.transition = "all .3s ease";
        imagen.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
        });
        imagen.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});