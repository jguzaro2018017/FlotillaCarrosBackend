-- Programador:
-- Joel Alexander Guzaro Tzunun
-- Control de versiones
-- Creado y Modificado  09-06-2021
-- Creacion de la Tabla de Users y CarsInformation
-- Creacion de Procedimientos Agregar, Listar, Editar y Eliminar de dichas tablas
-- Insertar registro estatico en Users


Create Database DBFlotillaCarros;
Use DBFlotillaCarros;


-- Creacion de la Tabla de Usuarios
Create table Users(
	userID int not null,
    DPI varchar(15) not null,
	username varchar(100) not null,
    nameU varchar(100) not null,
    lastnameU varchar(100) not null,
    hiringDate varchar(15) not null,
    age int not null,
    phoneNumber varchar(10) not null,
    email varchar(50) not null,
    passwordU varchar(50)not null,
    rol varchar(20) not null,
    Primary Key PK_userID (userID)
);


-- Creacion de Tabla sobre Informacion de Automviles
Create table CarsInformation(
	automovilID int not null,
	placa varchar(10) not null,
    marca varchar(20) not null,
    modelo varchar(45) not null,	
    anio varchar(5) not null,
    estado varchar(25) not null,
    Primary Key PK_categoriaID (automovilID)
);

-- Creation of Procedures
-- Users

-- Create Procedure to register User
Delimiter $$ 
Create Procedure sp_registerUser(in parUserID int, in parDPI varchar(15), in parUsername varchar(100), in parNameU varchar(100), in parLastnameU varchar(100),
	in parHiringDate date, in parAge int, in parPhoneNumber varchar(10), in parEmail varchar(50), in parPasswordU varchar(50), in parRol varchar(50)) -- par -> Parameter
	Begin
		Insert into Users(userID, DPI, username, nameU, lastnameU, hiringDate, age, phoneNumber, email, passwordU, rol)
			values (parUserID, parDPI, parUsername, parNameU, parLastnameU, parHiringDate, parAge, parPhoneNumber, parEmail, parPasswordU, parRol);
	End$$
Delimiter ;

-- Create Procedure to find Users
Delimiter $$
Create procedure sp_findUsers()
	Begin
		Select * From Users;
	End$$
Delimiter ;

-- Create Procedure to findOneUser
Delimiter $$
Create procedure sp_findOneUser(in parUserID int, in parDPI varchar(15))
	Begin
		Select * From Users Where userID = parUserID or DPI = parDPI;
    End$$
Delimiter

-- Create Procedure to Delete User
Delimiter $$
Create procedure sp_dropUserInformation(in parUserID varchar(10)) -- par -> Parameter
	Begin
		Delete from Users Where userID = parUserID;
    End$$
Delimiter ;

-- Create Procedure to Update User
Delimiter $$
Create Procedure sp_updateUser(in parUserID int, in parDPI varchar(15), in parUsername varchar(100), in parNameU varchar(100), in parLastnameU varchar(100),
	in parHiringDate date, in parAge int, in parPhoneNumber varchar(10), in parEmail varchar(50), in parPasswordU varchar(50), in parRol varchar(50)) -- par -> Parameter
	Begin
		Update Users set DPI = parDPI, username = parUsername, nameU = parNameU, lastnameU = parLastnameU, hiringDate = parHiringDate, age = parAge, phoneNumber = parPhoneNumber,
			email = parEmail, passwordU = parPasswordU, rol = parRol; 
	End$$
Delimiter ;


-- ----------------------------------------------------------------------
-- CarsInformation
-- Create Procedure to Register Cars
Delimiter $$ 
Create Procedure sp_addCar(in parAutomovilID int, in parPlaca varchar(10), in parMarca varchar(20), in parModelo varchar(45), in parAnio varchar(5), in parEstado varchar(25)) -- par -> Parameter
	Begin
		Insert into CarsInformation(automovilID, placa, marca, modelo, anio, estado) values (parAutomovilID, parPlaca, parMarca, parModelo, parAnio, parEstado);
	End$$
Delimiter ;

-- Create Procedure to find cars information
Delimiter $$
Create procedure sp_findCars()
	Begin
		Select * From CarsInformation;
	End$$
Delimiter ;

-- Create Procedure to find one car information by 'License Plate'
Delimiter $$
Create procedure sp_findOneCar(in parAutomovilID int)
	Begin
		Select * From CarsInformation Where automovilID = parAutomovilID;
    End$$
Delimiter ;


-- Create Procedure to edit car information
Delimiter $$
Create procedure sp_updateCarInformation(in parAutomovilID int, in parPlaca varchar(10), in parMarca varchar(20), in parModelo varchar(45), in parAnio varchar(5), in parEstado varchar(20)) -- par -> Parameter
	Begin
		Update CarsInformation set  placa = parPlaca, marca = parMarca, modelo = parModelo, anio = parAnio, estado= parEstado Where automovilID = parAutomovilID;
    End$$
Delimiter ;

-- Create Procedure to drop car information
Delimiter $$
Create procedure sp_dropCarInformation(in parAutomovilID int) -- par -> Parameter
	Begin
		Delete from CarsInformation where automovilID = parAutomovilID;
    End$$
Delimiter ;

-- Call Procedure Register User
call sp_registerUser(1,'1234567891234','jgomez','Juan', 'Gomez', '2021-06-01', 18, '1234-5678', 'jcorreo@correo.com', 'password', 'ADMIN');

