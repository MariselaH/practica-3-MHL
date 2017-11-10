angular.module('controladores.biblioteca',['servicios.biblioteca'])
	.controller('LibroCtrl',LibroCtrl); //el 2do parametro es el nombre de la funcion
function LibroCtrl($scope,Libro){
	$scope.titulo = 'PRACTICA 3';
	$scope.libro = {};
	$scope.libros = Libro.libros;
	
	/*$scope.libros = [{
		titulo: 'El código Da Vinci',
		autor: 'Dan Brown',
		anio: 2015,
		genero: 'Novela'
	},{
		titulo: 'Música Acuatica',
		autor: 'TC Boyle',
		anio: 2011,
		genero: 'Novela'
	},{
		titulo: 'Hollywood',
		autor: 'Bukowski',
		anio: 2001,
		genero: 'Novela'
	}];*/

	$scope.addLibro = function(){
		//$scope.libros.push($scope.libro);
		Libro.addLibro($scope.libro);
		//$scope.libro = {};

	};
	$scope.getLibros = function(){
		Libro.getLibros();
		$scope.libros = Libro.libros;
	};
	$scope.showLibro=function(l){
		
		$scope.libro=l;
	};

	$scope.getById = function(id){
		
		Libro.getById(id);
		$scope.libros = Libro.libros;
	};

	$scope.updateLibro = function(libro){
		Libro.updateLibro(libro);
		Libro.getLibros();
		$scope.libros = Libro.libros;
	};

	$scope.deleteLibro = function(id){
		Libro.deleteLibro(id);
		Libro.getLibros();
		$scope.libros = Libro.libros;
	};
};