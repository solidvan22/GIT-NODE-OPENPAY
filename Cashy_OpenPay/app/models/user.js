var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
// module.exports = mongoose.model('User', new Schema({ 
// 	name: String, 
// 	password: String, 
// 	admin: Boolean 
// }));

//Para efectos de prueba definimos un diccionario de usuaros, posteriormente podemos susutituirlo con una conexion a BD
users={
	"Rafa":{
		userName:"Rafa",
		password: "ContratarASerch"
	},
	"OtroUser":{
		userName:"OtroUser",
		password: "xx223344"
	}
}
module.exports ={
	
	findOne:function(userObject,callback){ //userObject:{user}
		//console.log("QUIEREN USAR ESTE USUARIO " + userObject.userName );
		callback(users[userObject.userName]);
	}
	
}