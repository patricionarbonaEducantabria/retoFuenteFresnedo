document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnUsuario").onclick = function() {
        window.location.href = "../usuario/usuario_inicio.html";
    };

    document.getElementById("btnAdmin").onclick = function() {
        window.location.href = "../admin/admin_gestion.html";
    };
});
