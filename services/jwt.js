/* Version Control 
Created: 2021-06-10
- Create function to return token
*/
'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var key = 'flotcar123';

exports.createToken = (users)=>{
    var payload = {
        sub: users.userID,
        nameU: users.nameU,
        lastnameU: users.lastnameU,
        email: users.email,
        role: users.rol,
        iat: moment().unix(),
        exp: moment().add(45, "minutes").unix()
    }
    return jwt.encode(payload, key);
}