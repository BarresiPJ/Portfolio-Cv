let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//linkedin, gmail y github en otra pestaña
document.addEventListener('DOMContentLoaded', function () {
    const redesLinks = document.querySelectorAll('.redes a');

    redesLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.open(link.href, '_blank');
        });
    });
});

//redes biclouds en otra pestaña
document.addEventListener('DOMContentLoaded', function () {
    const redesLinks = document.querySelectorAll('.icon-container a');

    redesLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.open(link.href, '_blank');
        });
    });
});


//Portfolio en otra pestaña
document.addEventListener('DOMContentLoaded', function () {
    const projectLinks = document.querySelectorAll('.card-content a');

    projectLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.open(link.href, '_blank');
        });
    });
});
