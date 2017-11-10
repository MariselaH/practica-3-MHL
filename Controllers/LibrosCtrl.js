var mongoose = require('mongoose');
//Obtener el modelo que ya se creo. Crear un obj q hace referencia a la coleccion libro
var Libro = mongoose.model('Libro');
var Autor = mongoose.model('Autor');

//FUNCION QUE INTRODUCE AL ARREGLO UN OBJETO NUEVO
exports.addLibro = function(req,res,next){
	console.log('POST /libros');
	//Codigo con mongodb
	var libro = new Libro({
		titulo : req.body.titulo,
		anio : req.body.anio,
		autor : req.body.autor,
		genero : req.body.genero
	});

	//Funcion para guardar un nuevo objeto en la BD
	libro.save(function(err,libro){
		if(err) return res.send(500,err.message);

		res.status(200).jsonp(libro);
	});

};

//FUNCION QUE REGRESA TODOS LOS LIBROS
exports.getLibros=function(req,res,next){
	console.log('GET /libros');

	//Para hacer una consulta tipo sql
	Libro.find({},function(err,libros){
		if(err){
			res.send(500,err.message);
		}
		else{
			console.log('GET /libros');
			//Autor.populate(libros,{path: "autor"},function(err,libros){
			res.status(200).jsonp(libros);
		//});
	   }
	});
	


};

//FUNCION QUE REGRESA EL LIBRO DEL ID QUE SE ENVIO
exports.getById = function(req,res,next){
	console.log('entra a GET /libros/:id');
	//Codigo con mongodb
	console.log("REQ PARAMS:"+req.params.id);
	Libro.find({_id: req.params.id},function(err,libros){
  		if(err){
  			res.status(500).send(err.message);
  		}else{
  			console.log('GET/libros');
  		//	Autor.populate(libros,{path: "autor"},function(err,libros){
			res.status(200).jsonp(libros);
		//});
	   }
	});
};


//FUNCION QUE ACTUALIZA LA INFORMACION DEL LIBRO ESPECIFICADO EN EL ID
exports.updateLibro = function(req,res,next){
	console.log('PUT /libros/:id');
	console.log(req.params.id);
	console.log(req.body);

Libro.update({_id: req.params.id},{$set:{titulo:req.body.titulo,anio:req.body.anio, genero: req.body.genero}},function(err, libros){
		if(err){
  			res.send(500, err.message);
  			console.log('error');
  		}else{
  			console.log('bien');
  			//res.status(200).send(libros);
	Libro.find({_id: req.params.id},function(err,libros){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/libros');
  			//Autor.populate(libros,{path: "autor"},function(err,libros){
			res.status(200).send(libros);
		 //    });
	    }
	});

  		}

	});

};


//FUNCION QUE ELIMINA UN LIBRO 
exports.deleteLibro = function(req,res,next){
	console.log('DELETE /libros/:id');
	console.log(req.params.id);

    Libro.remove({_id: req.params.id},function(err,libros){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('DELETE/libros');
  			//Autor.populate(libros, {path: "autor"},function(err, libros){
        	res.status(200).send(libros);
        	//}); 
  		}		
  	}); 
};

exports.addAutor=function(req,res,next){
console.log('POST /libros');
	var autor = new Autor({
		nombre : req.body.nombre,
		apellidos: req.body.apellidos
		
	});

	//Funcion para guardar un nuevo objeto en la BD
	autor.save(function(err,libro){
		if(err) return res.send(500,err.message);

		res.status(200).jsonp(autor);
	});
};

//FUNCION QUE REGRESA LOS AUTORES DE TODOS LOS LIBROS
exports.getAutores = function(req,res,next){
	console.log('GET /autores');


//Codigo con Mongo db

	Autor.find(function(err,libros){
		if(err){
			res.send(500,err.message);
		}
		else{
			console.log('GET /autores');
			res.status(200).jsonp(libros);

		}
	});
};


//FUNCION QUE REGRESA LOS LIBROS DEL AUTOR QUE SE ENVIO
exports.getByAutor = function(req,res,next){
	console.log('GET /autores/:id');
    console.log('ID:'+req.params.nombre);
	Autor.find({_id: req.params.nombre},function(err,libros){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/libros');
  			//Autor.populate(libros,{path: "autor"},function(err,libros){
			res.status(200).send(libros);
		//});
	   }
	});
		
};


//FUNCION QUE ACTUALIZA EL NOMBRE DEL AUTOR QUE SE ENVIO
exports.updateAutores = function(req,res,next){
	console.log('PUT /autores/:nombre');
	console.log(req.body);
	console.log(req.params.nombre);

Autor.update({_id: req.params.nombre},{$set:{nombre:req.body.nombre,apellidos:req.body.apellidos}},function(err, libros){
		if(err){
  			res.send(500, err.message);
  			console.log('error');
  		}else{
  			console.log('bien');
			Autor.find({_id: req.params.nombre},function(err,libros){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			//Autor.populate(libros,{path: "autor"},function(err,libros){
			res.status(200).send(libros);
		    // });
	    }
	});

  		}

	});
};

//FUNCION QUE ELIMINA LOS LIBROS DE UN AUTOR ESPECIFICADO
exports.deleteAutor = function(req,res,next){
	console.log('DELETE /autores/:nombre');
	console.log(req.params.nombre);

	Autor.find({_id: req.params.nombre},function(err,libros){
		if(err){
			res.send(500,err.message);
		}else{
			console.log(req.params.nombre)
			Libro.remove({autor: req.params.nombre},function(err,libros){
  				if(err){
  					res.send(500, err.message);
  				}else{
  					
  					res.status(200).jsonp(libros);
  				}		
  			});
		}
	});


};

