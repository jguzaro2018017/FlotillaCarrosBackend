/* Version Control 
Created: 2021-06-09
-Created MySQL Database Connection
-Exports Variable of Connection
*/
/* Version Control 
Created: 2021-06-09
- Create connection to database
*/
'use strict'

const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'localhost',
    database:'DBFlotillaCarros',
    user:'root',
    password:'password',
    
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion exitosa');
    }
});


module.exports = conexion;