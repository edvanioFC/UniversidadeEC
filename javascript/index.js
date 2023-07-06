var menu = document.getElementById("menu");
var btn = document.getElementById("btn-topo");
    
function showMenu() {
    menu.style.right = "0";
}

function hideMenu() {
    menu.style.right = "-200px";
}


window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    } 
}

function backToTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var comentarios = document.getElementById("comentarios").value;

    if (nome.trim() === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }

    if (email.trim() === "") {
        alert("Por favor, preencha o campo Email.");
        return false;
    }

    if (assunto.trim() === "") {
        alert("Por favor, preencha o campo Assunto.");
        return false;
    }

    if (comentarios.trim() === "") {
        alert("Por favor, preencha o campo Comentários.");
        return false;
    }
}

