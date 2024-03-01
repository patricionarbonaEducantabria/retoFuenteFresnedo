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
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Pollo', (SELECT id FROM unidades WHERE descripcion = 'Unidad'), "Sin observaciones", "Carnicería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Chorizo de guisar', (SELECT id FROM unidades WHERE descripcion = 'Unidad'), "Sin observaciones", "Carnicería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Tocino Fresco', (SELECT id FROM unidades WHERE descripcion LIKE '%(g)%'), "Sin observaciones", "Carnicería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Gallina', (SELECT id FROM unidades WHERE descripcion LIKE 'Unidad'), "Sin observaciones", "Carnicería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Salchichon', (SELECT id FROM unidades WHERE descripcion LIKE '%(g)%'), "Sin observaciones", "Carnicería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Bacon', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Carnicería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Solomillo de Cerdo', (SELECT id FROM unidades WHERE descripcion LIKE 'Unidad'), 'Miercoles', "Carnicería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Conejo', (SELECT id FROM unidades WHERE descripcion LIKE 'Unidad'), "Sin observaciones", "Carnicería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Cinta de Lomo', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Carnicería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Babilla terneta', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Carnicería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Panaderíaceta de cerdo', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Carnicería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Carne picada Mezcla', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Carnicería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Pechuga de pollo fileteada', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Carnicería.png");
    /* Frutería*/
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Ajo', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Cebolla', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Naranja', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Patata', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Pimiento rojo', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Pimiento verde italiano', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Puerros', (SELECT id FROM unidades WHERE descripcion LIKE '%Manojo%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Zanahoria', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Limones', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Ajo negro', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Naranja de mesa grande', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Piña semimadura monte', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Freson temporada', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Granada palos extra', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Kiwi New Zealand', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Pomelo rosa grande', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Menta fresca o Hierbabuena', (SELECT id FROM unidades WHERE descripcion LIKE '%Paquete%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Limon verde', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Espinaca', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Lechuga', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Tomate', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Calabaza', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Calabacin', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Manzana reineta', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Vaina verde', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Salvia', (SELECT id FROM unidades WHERE descripcion LIKE '%Blister%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Jengibre', (SELECT id FROM unidades WHERE descripcion LIKE '%(g)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Mango', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Manzana golden', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Jengibre fresco', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Fresa', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Aguacate', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Lima', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Brotes de alfalfa', (SELECT id FROM unidades WHERE descripcion LIKE '%Bolsa%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Champiñones', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Zanahoria baby', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Mazorca baby', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Chalotas', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Cebolla dulce', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Cilantro', (SELECT id FROM unidades WHERE descripcion LIKE '%Bandeja%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Chile fresco', (SELECT id FROM unidades WHERE descripcion LIKE '%Bandeja%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Cebollino', (SELECT id FROM unidades WHERE descripcion LIKE '%Bandeja%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Platano', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'), "Sin observaciones", "Frutería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Arandanos', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'), "Sin observaciones", "Frutería.png");
    /*Pescadería*/
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Dorada de racion', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), "Sin observaciones", "Pescadería.png");
    /*Pastelería*/
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Harina Floja', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Pastelería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Mantequilla', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Pastelería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Nata para montar', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Pastelería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Harina de almendra', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Pastelería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Pulpa de mango', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Pastelería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Pulpa de frambuesa', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Pastelería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Pulpa de cereza', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Pastelería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Harina de tapioca', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Pastelería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Frambuesa fresca', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'),"Sin observaciones", "Pastelería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Grosellas', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'),"Sin observaciones", "Pastelería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Queso de burgos fresco', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Pastelería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Panadería de sandwich', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'),"Sin observaciones", "Pastelería.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Tramezzino', (SELECT id FROM unidades WHERE descripcion LIKE '%Paquete%'),"Sin observaciones", "Pastelería.png");
    /* Congelados*/
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Pure de frutos rojos', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Congelados.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Bocas de mar', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'),"Sin observaciones", "Congelados.png");
    /* Economato y varios*/
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Aceite Oliva suave', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Aceite Girasol', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Arroz redondo', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Huevos', (SELECT id FROM unidades WHERE descripcion LIKE '%Carton%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Jamon York', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Leche Entera', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Queso barra nata', (SELECT id FROM unidades WHERE descripcion LIKE '%(g)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Cuajada', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Garbanzos secos', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Tinto Garnacha', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Atun', (SELECT id FROM unidades WHERE descripcion LIKE '%Sobre%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Mermelada de albaricoque', (SELECT id FROM unidades WHERE descripcion LIKE '%Bote'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Zumo de melocoton', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Queso Curado', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Vino oloroso', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Garbanzos cocidos', (SELECT id FROM unidades WHERE descripcion LIKE '%Tarro%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Sidra', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Pedro Ximénez', (SELECT id FROM unidades WHERE descripcion LIKE '%Botella%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Latón de tomate entero', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Mazorcas baby', (SELECT id FROM unidades WHERE descripcion LIKE '%Bote'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Picos de panadería integrales', (SELECT id FROM unidades WHERE descripcion LIKE '%Bolsa%'),"Sin observaciones", "Economato y Varios.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Regañás', (SELECT id FROM unidades WHERE descripcion LIKE '%Bolsa%'),"Sin observaciones", "Economato y Varios.png");
    /* Cafetería y Restaurante*/
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Café Selección', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Cafetería y Restaurante.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Azúcar sobre', (SELECT id FROM unidades WHERE descripcion LIKE '%(g)%'),"Sin observaciones", "Cafetería y Restaurante.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Chocolate puro polvo taza', (SELECT id FROM unidades WHERE descripcion LIKE '%(Kg)%'),"Sin observaciones", "Cafetería y Restaurante.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Sacarina sobres', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'),"Sin observaciones", "Cafetería y Restaurante.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Agua Solares cristal', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Cafetería y Restaurante.png");
    INSERT INTO productos (descripcion, fk_unidades , observaciones, foto) 
    VALUES ('Agua Solares Pet 1,5litro', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Cafetería y Restaurante.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Botellin agua pet', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Cafetería y Restaurante.png");
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Granadina', (SELECT id FROM unidades WHERE descripcion LIKE '%(L)%'),"Sin observaciones", "Cafetería y Restaurante.png");
    /* Panadería*/
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Barra Panadería', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), 'Lunes, Martes, Miércoles, Jueves, Viernes', 'Panadería.png');
    INSERT INTO productos (descripcion, fk_unidades, observaciones , foto) 
    VALUES ('Levadura Fresca', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), 'Lunes', 'Panadería.png');
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Panadería de maíz', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), 'Miércoles', 'Panadería.png');
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Panadería integral', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), 'Miércoles', 'Panadería.png');
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto ) 
    VALUES ('Panadería de cereales', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'), 'Viernes', 'Panadería.png');
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Panadería sandwich', (SELECT id FROM unidades WHERE descripcion LIKE '%Caja%'),"Sin observaciones", 'Panadería.png');
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Panadería tostadas', (SELECT id FROM unidades WHERE descripcion LIKE '%Bolsa%'),"Sin observaciones", 'Panadería.png');
    /* Útiles y Materiales*/
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Bolsa plastico', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'),"Sin observaciones", 'Útiles y Materiales.png');
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Film transparente', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'),"Sin observaciones", 'Útiles y Materiales.png');
    INSERT INTO productos (descripcion, fk_unidades, observaciones, foto  ) 
    VALUES ('Papel Aluminio', (SELECT id FROM unidades WHERE descripcion LIKE '%Unidad%'),"Sin observaciones", 'Útiles y Materiales.png');


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
        ('Sin redsiduos', 'Sin residuos'),
        ('Residuo 15', 'Observaciones 15');

-- INSERCION ESTADOS
INSERT INTO `estados` (`descripcion`, `observaciones`) VALUES
        ('En espera', 'Se esta esperando a que llegue el producto'),
        ('Pendiente', "Se ha creado el pedido, pero todavia no se ha solicitado al proveedor"),
        ('Cancelado', "No se acepto el pedido o se anulo por parte del proveedor"),
        ('Completado', 'El pedido ha sido recibido');
        
-- INSERCION PROVEEDORES
INSERT INTO `proveedores` (`descripcion`, `telefono`, `email`, `direccion`, `observaciones`) VALUES
('Proveedor1', '123456789', 'proveedor1@example.com', 'Calle 123, Ciudad', 'Observaciones proveedor 1'),
('Proveedor2', '987654321', 'proveedor2@example.com', 'Avenida XYZ, Ciudad', 'Observaciones proveedor 2');
