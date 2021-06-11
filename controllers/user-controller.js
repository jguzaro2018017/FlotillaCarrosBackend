/* Version Control 
Created: 2021-06-09
- Import Mysql Variable of database.js
- Created functions to login, register, listen, find, update and delete users
- Export Functions
*/
'user controller'

const mysqlFunctions = require('../database/database');
var jwt = require('../services/jwt');


const querySelect = 'Select * From Users Where userID = ? or DPI = ?';


/* Login Function */
function login(req, res){
    var data = req. body;
    var dataEmail = data.email;
    mysqlFunctions.query('Select * From Users Where email = ?', [dataEmail], (err, rows, field)=>{ 
        if(err){
            res.status(500).send({message: 'Error gneral en el sistema', err});
        }else if(rows){
            for(let i = 0; i < rows.length; i++){
                var userPass = rows[i].passwordU;//Declaration of Variable Password of the User
                var userName = rows[i].username;// Declaration of Variable Username of the User
                var userData = rows[i];
            }
            if(data.passwordU == userPass){// Comparison of Password entered by User and Password previously registered
                res.send({token: jwt.createToken(userData), users: userData});
            }else{
                res.send({message: 'Contraseña o Correo Incorrectos'});
            }            
        }else{
            res.status(402).send({message: 'No existe un usuario con este correo'});
        }
    })
}

/* CRUD Function for the Users table */
// Function to Register User
function registerUser(req, res){
    var {userID, DPI, username, nameU, lastnameU, hiringDate, age, phoneNumber, email, passwordU, rol} = req.body
    mysqlFunctions.query('call sp_registerUser(?,?,?,?,?,?,?,?,?,?,?)', [userID, DPI, username, nameU, lastnameU, hiringDate, age, phoneNumber, email, passwordU, rol], (err, rows, fields)=>{
        if(err){
             res.status(500).send({message: 'Error general en el servidor', err});
        }else if(rows){
             res.send({user: rows});
        }else{
            res.status(402).send({message: 'No se pudo realizar la peticion'});
        }
    });
}

//Function to List Users
function findUsers(req, res){
    mysqlFunctions.query('Select * From Users', (err, rows, fields)=>{
        if(err){
            res.status(500).send({message: 'Error general en el servidor', err});
        }else if(rows){
            res.send({users: rows});
        }else{
            res.status(402).send({message: 'No se pudieron listar los usuarios'});
        }
    });
}

//Function to Find User
function findOneUser(req, res){
    var data = req.body;
    var parUserID = data.userID;
    var parDPI = data.DPI;

    if(parUserID == '' || parDPI == ''){// Validation of empty fields
        res.status(402).send({message: 'Debe de ingresar un dato de busqueda'});
    }else{
        mysqlFunctions.query(querySelect, [parUserID, parDPI], (err, rows, fields)=>{
            if(err){
                res.status(500).send({message: 'Error general en el servidor', err});
            }else if(rows){
                res.send({message: 'Usuario encontrado', rows});
            }else{
                res.status(402).send({message: 'No se encontro al usuario'});
            }
            
        });
    }
    
}

//Function to Delete User
function deleteUser(req, res){
    var data = req.body;
    if(data.userID == ''){
        res.send({message: 'No se pueden utilizar campos vacios'});
    }else{
        mysqlFunctions.query('Call sp_dropUserInformation(?)', [data.userID], (err, rows,fields)=>{
            if(err){
                res. status(500).send({message: 'Error general en el sistema'});
            }else if(rows){
                res.send({message: 'Usuario Eliminado'});
            }else{
                res.status(402).send({message: 'No se pudo realizar la peticion'});
            }
        });
    }

}

// Function to Update User
function updateUser(req, res){
    var {DPI, username, nameU, lastnameU, hiringDate, age, phoneNumber, email, passwordU, rol} = req.body; 
    var userID = req.body.userID;

    mysqlFunctions.query('Call sp_updateUser(?,?,?,?,?,?,?,?,?,?,?)', [userID, DPI, username, nameU, lastnameU, hiringDate, age, phoneNumber, email, passwordU, rol], (err, rows, field)=>{
        if(err){
            res.status(500).send({message: 'Error general en el sistema', err});
        }else if(rows){
            res.send({message: 'Se han actualizado los datos', rows});
        }else{
            res.status(402).send({message: 'No se pudieron actualizar los datos'});
        }
    })
}


// Exports Function
module.exports = {
    registerUser,
    findUsers,
    findOneUser,
    deleteUser,
    updateUser,
    login

}