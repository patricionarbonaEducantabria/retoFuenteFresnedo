-- Creamos la base de datos
CREATE DATABASE IF NOT EXISTS almacen;
USE almacen;

-- Creamos las tablas

-- TABLA UNIDADES
CREATE TABLE IF NOT EXISTS unidades (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion CHAR(20) NOT NULL,
    observaciones CHAR(100) NULL
) ENGINE = INNODB;

-- TABLA CATEGORIAS
CREATE TABLE IF NOT EXISTS categorias (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    descripcion CHAR(50) NOT NULL, 
    observaciones CHAR(100) NULL
) ENGINE = INNODB;

-- TABLA ESTADORESIDUOS
CREATE TABLE IF NOT EXISTS estadoresiduos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion CHAR(50) NOT NULL,
    observaciones CHAR(100) NOT NULL
) ENGINE = INNODB;

-- TABLA RESIDUOS
CREATE TABLE IF NOT EXISTS residuos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion CHAR(50) NOT NULL,
    observaciones CHAR(100) NOT NULL
) ENGINE = INNODB;

-- TABLA PRODUCTOS
CREATE TABLE IF NOT EXISTS productos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion CHAR(50) NOT NULL,
    fk_unidades INT NOT NULL,
    observaciones CHAR(100) NULL,
    foto CHAR(80) DEFAULT 'Carnicería.png',
    FOREIGN KEY (fk_unidades) REFERENCES unidades (id)
    ON UPDATE CASCADE
) ENGINE = INNODB;

-- TABLA PRODUCTOS_CATEGORIA
CREATE TABLE IF NOT EXISTS productos_categoria (    
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fk_producto INT NOT NULL,
    fk_categoria INT NOT NULL,
    FOREIGN KEY (fk_producto) REFERENCES productos (id)
    ON UPDATE CASCADE,
    FOREIGN KEY (fk_categoria) REFERENCES categorias (id)
    ON UPDATE CASCADE
) ENGINE = INNODB;

-- TABLA PRODUCTOS_RESIDUOS
CREATE TABLE IF NOT EXISTS productos_residuos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fk_producto INT NOT NULL,
    fk_residuos INT NOT NULL,
    FOREIGN KEY (fk_producto) REFERENCES productos (id)
    ON UPDATE CASCADE,
    FOREIGN KEY (fk_residuos) REFERENCES residuos (id)
    ON UPDATE CASCADE
) ENGINE = INNODB;

-- TABLA RESIDUOS_GENERADOS
CREATE TABLE IF NOT EXISTS residuos_generados (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion CHAR(50) NOT NULL,
    cantidad FLOAT NOT NULL,
    unidades CHAR(20) NOT NULL,
    fk_estadoresiduo INT NOT NULL,
    observaciones CHAR(100) NULL, 
    fecha_creacion DATE NOT NULL,
    fecha_desechado DATE NULL,
    FOREIGN KEY (fk_estadoresiduo) REFERENCES estadoresiduos (id)
    ON UPDATE CASCADE
) ENGINE = INNODB;

-- TABLA USUARIOS
CREATE TABLE IF NOT EXISTS usuarios (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    admin BINARY(1) NOT NULL,
    nombre CHAR(50) NOT NULL,
    email CHAR(50) NOT NULL UNIQUE,
    password CHAR(255) NOT NULL,
    activo BINARY(1) NOT NULL, 
    observaciones CHAR(100) NULL,
    telefono CHAR(9) NOT NULL
) ENGINE = INNODB;

-- TABLA ESTADOS
CREATE TABLE IF NOT EXISTS estados (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion CHAR(20) NOT NULL,
    observaciones CHAR(100) NULL
) ENGINE = INNODB;

-- TABLA PROVEEDORES
CREATE TABLE IF NOT EXISTS proveedores (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion CHAR(50) NOT NULL,
    telefono CHAR(9) NULL,
    email CHAR(50) NULL,
    direccion CHAR(100) NULL,
    observaciones CHAR(100) NULL
) ENGINE = INNODB;

-- TABLA PEDIDOS
CREATE TABLE IF NOT EXISTS pedidos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    fk_proveedor INT NOT NULL,
    fk_estado INT NOT NULL,
    fk_usuario INT NOT NULL,
    observaciones CHAR(100) NULL,
    FOREIGN KEY (fk_estado) REFERENCES estados (id)
    ON UPDATE CASCADE,
    FOREIGN KEY (fk_usuario) REFERENCES usuarios (id)
    ON UPDATE CASCADE,
    FOREIGN KEY (fk_proveedor) REFERENCES proveedores (id)
    ON UPDATE CASCADE
) ENGINE = INNODB;

-- TABLA LINEA_PEDIDO
CREATE TABLE IF NOT EXISTS linea_pedido (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fk_pedido INT NOT NULL,
    descripcion CHAR(50) NOT NULL,
    cantidad FLOAT NOT NULL,
    unidades CHAR(50) NOT NULL, 
    observaciones CHAR(100) NULL,
    FOREIGN KEY (fk_pedido) REFERENCES pedidos (id)
    ON UPDATE CASCADE
) ENGINE = INNODB;

-- TABLA SOLICITUDES
CREATE TABLE IF NOT EXISTS solicitudes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fecha DATETIME NOT NULL,
    descripcion CHAR(50) NOT NULL,
    unidades CHAR(20) NOT NULL,
    cantidad FLOAT NOT NULL,
    observaciones CHAR(100) NULL,
    fk_usuario INT NOT NULL,
    tramitado BINARY(1) NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuarios (id)
    ON UPDATE CASCADE
) ENGINE = INNODB;
