/* Version Control 
Created: 2021-06-09
- Create local service
*/
'use strict'

var port = 3800;
var app = require('./app');


app.listen(port, ()=>{
    console.log('Servidor corriendo con express', port);

});

