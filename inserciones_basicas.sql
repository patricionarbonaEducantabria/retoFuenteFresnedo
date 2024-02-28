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
INSERT INTO categorias (descripcion) VALUES ('Frutería');
INSERT INTO categorias (descripcion) VALUES ('Carnicería');
INSERT INTO categorias (descripcion) VALUES ('Pescadería');
INSERT INTO categorias (descripcion) VALUES ('Pastelería');
INSERT INTO categorias (descripcion) VALUES ('Congelados');
INSERT INTO categorias (descripcion) VALUES ('Economato y varios');
INSERT INTO categorias (descripcion) VALUES ('Cafetería y Restaurante');
INSERT INTO categorias (descripcion) VALUES ('Panadería');
INSERT INTO categorias (descripcion) VALUES ('Útiles y Materiales');

/*TABLA PRODUCTOS*/ 
    /*Carnicería */
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
    VALUES ('Panaderíaceta de cerdo', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Carne picada Mezcla', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pechuga de pollo fileteada', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    /* Frutería*/
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
    VALUES ('Jengibre', (SELECT id FROM unidades WHERE descripcion LIKE '%(g)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Mango', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Manzana golden', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Jengibre fresco', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
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
    VALUES ('Arandanos', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'));
    /*Pescadería*/
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Dorada de racion', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    /*Pastelería*/
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Harina Floja', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Mantequilla', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Nata para montar', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Harina de almendra', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pulpa de mango', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pulpa de frambuesa', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pulpa de cereza', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Harina de tapioca', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Frambuesa fresca', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Grosellas', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Queso de burgos fresco', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Panadería de sandwich', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Tramezzino', (SELECT id FROM unidades WHERE descripcion LIKE '%Paquete%'));
    /* Congelados*/
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pure de frutos rojos', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Bocas de mar', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'));
    /* Economato y varios*/
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Aceite Oliva suave', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Aceite Girasol', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Arroz redondo', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Huevos', (SELECT id FROM unidades WHERE descripcion LIKE '%Carton%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Jamon York', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Leche Entera', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Queso barra nata', (SELECT id FROM unidades WHERE descripcion LIKE '%(g)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Cuajada', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Garbanzos secos', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Tinto Garnacha', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Atun', (SELECT id FROM unidades WHERE descripcion LIKE '%Sobre%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Mermelada de albaricoque', (SELECT id FROM unidades WHERE descripcion LIKE '%Bote'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Zumo de melocoton', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Queso Curado', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Vino oloroso', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Garbanzos cocidos', (SELECT id FROM unidades WHERE descripcion LIKE '%Tarro%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Sidra', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Pedro Ximénez', (SELECT id FROM unidades WHERE descripcion LIKE '%Botella%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Latón de tomate entero', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Mazorcas baby', (SELECT id FROM unidades WHERE descripcion LIKE '%Bote'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Picos de panadería integrales', (SELECT id FROM unidades WHERE descripcion LIKE '%Bolsa%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Regañás', (SELECT id FROM unidades WHERE descripcion LIKE '%Bolsa%'));
    /* Cafetería y Restaurante*/
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Café Selección', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Azúcar sobre', (SELECT id FROM unidades WHERE descripcion LIKE '%(g)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Chocolate puro polvo taza', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Sacarina sobres', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Agua Solares cristal', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Agua Solares Pet 1,5litro', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Botellin agua pet', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Granadina', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'));
    /* Panadería*/
    INSERT INTO productos (descripcion, fk_unidades, observaciones ) 
    VALUES ('Barra Panadería', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), 'Lunes, Martes, Miércoles, Jueves, Viernes');
    INSERT INTO productos (descripcion, fk_unidades, observaciones ) 
    VALUES ('Levadura Fresca', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), 'Lunes');
    INSERT INTO productos (descripcion, fk_unidades, observaciones ) 
    VALUES ('Panadería de maíz', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), 'Miércoles');
    INSERT INTO productos (descripcion, fk_unidades, observaciones ) 
    VALUES ('Panadería integral', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), 'Miércoles');
    INSERT INTO productos (descripcion, fk_unidades, observaciones ) 
    VALUES ('Panadería de cereales', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), 'Viernes');
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Panadería sandwich', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Panadería tostadas', (SELECT id FROM unidades WHERE descripcion LIKE '%Bolsa%'));
    /* Útiles y Materiales*/
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Bolsa plastico', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Film transparente', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));
    INSERT INTO productos (descripcion, fk_unidades ) 
    VALUES ('Papel Aluminio', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'));


/* Vista Productos-Categoria*/
    /* Carnicería*/
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Pollo'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Chorizo de guisar'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Tocino fresco'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Gallina'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Salchichon'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Bacon'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Solomillo de Cerdo'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Conejo'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Cinta de Lomo'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Babilla terneta'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Panaderíaceta de cerdo'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Carne picada Mezcla'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Pechuga de pollo fileteada'),
    (SELECT id FROM categorias WHERE descripcion = 'Carnicería')
    );

    /*Frutería*/
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Ajo'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Cebolla'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Naranja'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Patata'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Pimiento rojo'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Pimiento verde italiano'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Puerros'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Zanahoria'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Limones'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Ajo negro'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Naranja de mesa grande'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Piña semimadura monte'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Freson temporada'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Granada palos extra'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Kiwi New Zealand'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Pomelo rosa grande'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Menta fresca o Hierbabuena'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Limon verde'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Espinaca'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Lechuga'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Tomate'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Calabaza'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Calabacin'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Manzana reineta'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Vaina verde'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Salvia'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Jengibre'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Mango'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Manzana golden'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Jengibre fresco'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Fresa'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Aguacate'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Lima'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Brotes de alfalfa'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Champiñones'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Zanahoria baby'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Mazorca baby'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Chalotas'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Cebolla dulce'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Cilantro'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Chile fresco'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Cebollino'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Platano'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Arandanos'),
    (SELECT id FROM categorias WHERE descripcion = 'Frutería')
    );
    /*Pescadería*/
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Dorada de racion'),
    (SELECT id FROM categorias WHERE descripcion = 'Pescadería')
    );
    /*Pastelería*/
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Harina Floja'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Mantequilla'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Nata para montar'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Harina de almendra'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Pulpa de mango'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Pulpa de frambuesa'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Pulpa de cereza'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Harina de tapioca'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Frambuesa fresca'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Grosellas'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Queso de burgos fresco'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Panadería de sandwich'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Tramezzino'),
    (SELECT id FROM categorias WHERE descripcion = 'Pastelería')
    );
    /* Congelados*/
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Pure de frutos rojos'),
    (SELECT id FROM categorias WHERE descripcion = 'Congelados')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Bocas de mar'),
    (SELECT id FROM categorias WHERE descripcion = 'Congelados')
    );
    /* Economato y varios*/
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Aceite Oliva suave'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Aceite Girasol'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Arroz redondo'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Huevos'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Jamon York'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Leche Entera'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Queso barra nata'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Cuajada'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Garbanzos secos'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Tinto Garnacha'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Atun'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Mermelada de albaricoque'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Zumo de melocoton'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Queso Curado'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Vino Oloroso'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Garbanzos cocidos'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Sidra'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Pedro Ximénez'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Latón de tomate entero'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Mazorcas baby'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Picos de panadería integrales'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Regañás'),
    (SELECT id FROM categorias WHERE descripcion = 'Economato y varios')
    );
    /* Cafetería y Restaurante*/
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Café Selección'),
    (SELECT id FROM categorias WHERE descripcion = 'Cafetería y Restaurante')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Azúcar sobre'),
    (SELECT id FROM categorias WHERE descripcion = 'Cafetería y Restaurante')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Chocolate puro polvo taza'),
    (SELECT id FROM categorias WHERE descripcion = 'Cafetería y Restaurante')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Sacarina sobres'),
    (SELECT id FROM categorias WHERE descripcion = 'Cafetería y Restaurante')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Agua Solares cristal'),
    (SELECT id FROM categorias WHERE descripcion = 'Cafetería y Restaurante')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Agua Solares Pet 1,5litro'),
    (SELECT id FROM categorias WHERE descripcion = 'Cafetería y Restaurante')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Botellin agua pet'),
    (SELECT id FROM categorias WHERE descripcion = 'Cafetería y Restaurante')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Granadina'),
    (SELECT id FROM categorias WHERE descripcion = 'Cafetería y Restaurante')
    );
    /* Panadería*/
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Barra Panadería'),
    (SELECT id FROM categorias WHERE descripcion = 'Panadería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Levadura Fresca'),
    (SELECT id FROM categorias WHERE descripcion = 'Panadería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Panadería de maíz'),
    (SELECT id FROM categorias WHERE descripcion = 'Panadería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Panadería integral'),
    (SELECT id FROM categorias WHERE descripcion = 'Panadería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Panadería de cereales'),
    (SELECT id FROM categorias WHERE descripcion = 'Panadería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Panadería sandwich'),
    (SELECT id FROM categorias WHERE descripcion = 'Panadería')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Panadería tostadas'),
    (SELECT id FROM categorias WHERE descripcion = 'Panadería')
    );
    /* Útiles y Materiales*/
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Bolsa plastico'),
    (SELECT id FROM categorias WHERE descripcion = 'Útiles y Materiales')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Film transparente'),
    (SELECT id FROM categorias WHERE descripcion = 'Útiles y Materiales')
    );
    INSERT INTO productos_categoria (fk_producto, fk_categoria) 
    VALUES (
    (SELECT id FROM productos WHERE descripcion = 'Papel Aluminio'),
    (SELECT id FROM categorias WHERE descripcion = 'Útiles y Materiales')
    );

    -- INSERCION DE RESIDUOS
    INSERT INTO `residuos` (`descripcion`, `observaciones`) VALUES
        ('Residuo 1', 'Observaciones 1'),
        ('Residuo 2', 'Observaciones 2'),
        ('Residuo 3', 'Observaciones 3'),
        ('Residuo 4', 'Observaciones 4'),
        ('Residuo 5', 'Observaciones 5'),
        ('Residuo 6', 'Observaciones 6'),
        ('Residuo 7', 'Observaciones 7'),
        ('Residuo 8', 'Observaciones 8'),
        ('Residuo 9', 'Observaciones 9'),
        ('Residuo 10', 'Observaciones 10'),
        ('Residuo 11', 'Observaciones 11'),
        ('Residuo 12', 'Observaciones 12'),
        ('Residuo 13', 'Observaciones 13'),
        ('Residuo 14', 'Observaciones 14'),
        ('Residuo 15', 'Observaciones 15');
