/* Version Control
Created: 2021-06-09
- Creation Add, Update, List Functions
- Export Functions
Modificated: 2021-06-10
- Creacion de las Funciones Elminar para la tabla de CarInformation
*/

'use strict'

const mysqlFunctions = require('../database/database.js'); //Import database.js Properties



/* function nameFunction(req, res){
    importConectionDatabase.query('queryMysql', [parameterForQueryMysql], (err, results, fields)=>{ 
        if(err){ -> PosibleError
            res.status(500).send({message: 'Message about error', err}) -> Server Response in case of Error
        }else if(results){
            res.send({message: 'Query done Message', results}) -> Server Response with query result
        }else{
            res.status(402).send({message:'Error message in the query'}) -> Server Response to user about query not performed
        }
    })
} 
*/

/* CRUD Function for the Users table */

function findAllCars(req, res){ // -> Function to list all registers table CarInformation
    mysqlFunctions.query('Select * From CarsInformation', (err, rows)=>{
        if(err){
            console.log(err)
            res.status(500).send({message: 'Error general en el sistema'});
        }else if(rows){
            res.send({message: 'Encontrado', cars: rows});
        }else{
            res.status(402).send({message: 'No se ha podido realizar la consulta'});
        }
    });
}

function findOneCar(req, res){ // -> Function to search for a record filtered by 'placa' in the table CarInformation
    var data = req.params
    var automovilID = data.automovilID;
    mysqlFunctions.query('Select * From CarsInformation Where automovilID = ?',[automovilID], (err, rows, fields)=>{ 
        if(err){
            res.status(500).send({message: 'Error general en el sistema', err});
        }else if(rows){
            res.send({message: 'Enctrado', car: rows});
        }else{
            res.status(402).send({message: 'No se ha podido realizar la consulta'});
        }
    });
}

function registerCar(req, res){ // -> Function to create a new register in table CarInformation
    var {automovilID, placa, marca, modelo, anio, estado} = req.body;
    mysqlFunctions.query('call sp_addCar(?,?,?,?,?,?)', [automovilID, placa, marca, modelo, anio, estado], (err, rows, fields)=>{
        if(err){
            res.status(500).send({message: 'Error general en el sistema'});
        }else if(rows){
            res.send({message:'Carro registrado correctamente'});
        }else{
            res.status(402).send({message: 'No se ha podido realiar la consula'});
        }
    } )
}

function deleteCarInformation(req, res){ // -> Function to delite register in table CarInformation
    var data = req.params;    
    var automovilID = data.automovilID;
    mysqlFunctions.query('Call sp_dropCarInformation(?)', [automovilID], (err, rows, fields)=>{ 
        if(err){
            res.status(500).send({message: 'Error general en el sistema'});
        }else if(rows){
            console.log(rows)
            res.send({message: 'Informacion del carro eleminada correctamente'});
        }else{
            res.send({message: 'No se pudo eliminar'});
        }
    });
}

function updateCarInformation(req, res){ // ->Function to update register in table CarInformation
    var {placa, marca, modelo, anio, estado} = req.body;
    var data = req.params
    var automovilID = data.automovilID
    mysqlFunctions.query('Call sp_updateCarInformation(?,?,?,?,?,?)', [automovilID, placa, marca, modelo, anio, estado], (err, rows, field)=>{
        if(err){
            res.status(500).send({message: 'Error general en el sistema', err});
        }else if(rows){
            res.send({car: rows});
        }else{
            res.status(404).send({message: 'Hubo un error al realizar la peticion'});
        }   
    })
}

//Exports functions
module.exports = {
    findAllCars,
    findOneCar,
    registerCar,
    deleteCarInformation,
    updateCarInformation
}