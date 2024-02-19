document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnUsuarios").onclick = function() {
        window.location.href = "../admin/admin_gestionar_usuarios.html";
    };
    
    document.getElementById("btnPedidos").onclick = function() {
        window.location.href = "../admin/admin_gestionar_pedidos.html";
    };
    document.getElementById("btnResiduos").onclick = function() {
        window.location.href = "../admin/admin_gestionar_residuos.html";
    };
    
    document.getElementById("btnProductos").onclick = function() {
        window.location.href = "../admin/admin_gestionar_productos.html";
    };
});
