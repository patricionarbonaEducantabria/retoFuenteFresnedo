document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnUsuario").onclick = function() {
        window.location.href = "../Paginas/usuario/usuario_inicio.html";
    };

    document.getElementById("btnAdmin").onclick = function() {
        window.location.href = "../Paginas/admin/admin_gestion.html";
    };
});
