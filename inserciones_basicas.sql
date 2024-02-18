/*TABLA UNIDADES*/
INSERT INTO unidades (descripcion) VALUES ('Kilos (Kg)');
INSERT INTO unidades (descripcion) VALUES ('Unidad');
INSERT INTO unidades (descripcion) VALUES ('Gramos (g)');
INSERT INTO unidades (descripcion) VALUES ('Manojo de 6');
INSERT INTO unidades (descripcion) VALUES ('Bolsa');
INSERT INTO unidades (descripcion) VALUES ('Caja');
INSERT INTO unidades (descripcion) VALUES ('Bandeja');
INSERT INTO unidades (descripcion) VALUES ('Paquete');
INSERT INTO unidades (descripcion) VALUES ('Litro (L)');
INSERT INTO unidades (descripcion) VALUES ('Carton');
INSERT INTO unidades (descripcion) VALUES ('Sobre');
INSERT INTO unidades (descripcion) VALUES ('Bote');
INSERT INTO unidades (descripcion) VALUES ('Tarro');
INSERT INTO unidades (descripcion) VALUES ('Botella');
INSERT INTO unidades (descripcion) VALUES ('Blister');

/*TABLA CATEGORIAS*/
INSERT INTO categorias (descripcion) VALUES ('Fruteria');
INSERT INTO categorias (descripcion) VALUES ('Carniceria');
INSERT INTO categorias (descripcion) VALUES ('Pescaderia');
INSERT INTO categorias (descripcion) VALUES ('Pasteleria');
INSERT INTO categorias (descripcion) VALUES ('Congelados');
INSERT INTO categorias (descripcion) VALUES ('Economato y Varios');
INSERT INTO categorias (descripcion) VALUES ('Cafeteria y Restaurante');
INSERT INTO categorias (descripcion) VALUES ('Pan');
INSERT INTO categorias (descripcion) VALUES ('Utiles y Materiales');

/*TABLA PRODUCTOS*/ 
    /*Carniceria */
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pollo', (SELECT id FROM unidades WHERE descripcion = 'Unidad'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Chorizo de guisar', (SELECT id FROM unidades WHERE descripcion = 'Unidad'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Tocino Fresco', (SELECT id FROM unidades WHERE descripcion LIKE '%(g)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Gallina', (SELECT id FROM unidades WHERE descripcion LIKE 'Unidad'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Salchichon', (SELECT id FROM unidades WHERE descripcion LIKE '%(g)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Bacon', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades, observaciones ) 
    VALUES ('Solomillo de Cerdo', (SELECT id FROM unidades WHERE descripcion LIKE 'Unidad'), 'Miercoles');
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Conejo', (SELECT id FROM unidades WHERE descripcion LIKE 'Unidad'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Cinta de Lomo', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Babilla terneta', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Panceta de cerdo', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Carne picada Mezcla', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pechuga de pollo fileteada', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    /* Fruteria*/
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Ajo', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Cebolla', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Naranja', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Patata', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pimiento rojo', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pimiento verde italiano', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Puerros', (SELECT id FROM unidades WHERE descripcion LIKE '%Manojo%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Zanahoria', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Limones', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Ajo negro', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Naranja de mesa grande', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Piña semimadura monte', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Freson temporada', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Granada palos extra', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Kiwi New Zealand', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pomelo rosa grande', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Menta fresca o Hierbabuena', (SELECT id FROM unidades WHERE descripcion LIKE '%Paquete%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Limon verde', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Espinaca', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Lechuga', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Tomate', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Calabaza', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Calabacin', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Manzana reineta', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Vaina verde', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Salvia', (SELECT id FROM unidades WHERE descripcion LIKE '%Blister%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pimiento rojo', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pimiento verde italiano', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Jengibre', (SELECT id FROM unidades WHERE descripcion LIKE '%(g)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Mango', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Manzana golden', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Jengibre fresco', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Menta fresca o Hierbabuena', (SELECT id FROM unidades WHERE descripcion LIKE '%Paquete%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Fresa', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Aguacate', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Lima', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Brotes de alfalfa', (SELECT id FROM unidades WHERE descripcion LIKE '%Bolsa%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Champiñones', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Zanahoria baby', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Mazorca baby', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Chalotas', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Cebolla dulce', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Cilantro', (SELECT id FROM unidades WHERE descripcion LIKE '%Bandeja%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Chile fresco', (SELECT id FROM unidades WHERE descripcion LIKE '%Bandeja%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Cebollino', (SELECT id FROM unidades WHERE descripcion LIKE '%Bandeja%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Platano', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Lechuga', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Tomate', (SELECT id FROM unidades WHERE descripcion LIKE '%Kg%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Arandanos', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'));
    /*Pescaderia*/

    /*Pasteleria*/

    /* Congelados*/

    /* Economato y Varios*/

    /* Cafeteria y Restaurante*/

    /* Pan*/

    /* Utiles y Materiales*/


/* Vista Productos-Categoria*/
    /* Carniceria*/
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Pollo'),
    (SELECT id FROM categorias WHERE descripcion = 'Carniceria')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Chorizo de guisar'),
    (SELECT id FROM categorias WHERE descripcion = 'Carniceria')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Gallina'),
    (SELECT id FROM categorias WHERE descripcion = 'Carniceria')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Salchichon'),
    (SELECT id FROM categorias WHERE descripcion = 'Carniceria')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Bacon'),
    (SELECT id FROM categorias WHERE descripcion = 'Carniceria')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Solomillo de Cerdo'),
    (SELECT id FROM categorias WHERE descripcion = 'Carniceria')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Conejo'),
    (SELECT id FROM categorias WHERE descripcion = 'Carniceria')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Cinta de Lomo'),
    (SELECT id FROM categorias WHERE descripcion = 'Carniceria')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Babilla terneta'),
    (SELECT id FROM categorias WHERE descripcion = 'Carniceria')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Panceta de cerdo'),
    (SELECT id FROM categorias WHERE descripcion = 'Carniceria')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Carne picada Mezcla'),
    (SELECT id FROM categorias WHERE descripcion = 'Carniceria')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Pechuga de pollo fileteada'),
    (SELECT id FROM categorias WHERE descripcion = 'Carniceria')
    );

    /*Fruteria*/

    /*Pescaderia*/

    /*Pasteleria*/

    /* Congelados*/

    /* Economato y Varios*/

    /* Cafeteria y Restaurante*/

    /* Pan*/

    /* Utiles y Materiales*/

/*Tabla Usuarios*/
/* 2 Usuarios de ejemplo*/
INSERT INTO usuarios (admin, nombre, email, password, activo, observaciones, telefono)
VALUES (0, 'NombreUsuario', 'usuario@example.com', 'contraseña123', 1, 'Observaciones sobre el usuario', '123456789');
INSERT INTO usuarios (admin, nombre, email, password, activo, observaciones, telefono)
VALUES (1, 'NombreAdmin', 'admin@example.com', 'contraseña123', 1, 'Observaciones sobre el admin', '987654321');
