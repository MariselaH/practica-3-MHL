var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Para esquematizar los modelos que vayamos a utilizar
//var Autor = mongoose.model('Autor');

var libroSchema = new Schema({
//Se tiene que definir el tipo de atributo
	titulo:{type:String},
	//autor: {type: Schema.ObjectId, ref: "Autor" ,require: true},
	autor:{type:String},
	anio: {type: Number},
	genero: {type: String}
});



 //Convertir un modelo que esta en el cache de mongoose
module.exports = mongoose.model('Libro',libroSchema);
