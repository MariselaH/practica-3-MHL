var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Para esquematizar los modelos que vayamos a utilizar


var autorSchema = new Schema({
//Se tiene que definir el tipo de atributo
	nombre:{type:String},
	apellidos: {type:String},
	libros:{type: Schema.ObjectId, ref: "Libro" , require: true}
	//Schema.ObjectId
});

module.exports = mongoose.model('Autor',autorSchema);