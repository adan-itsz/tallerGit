var app = angular.module('app',[]);
app.controller('alumnosController', function($scope){

	$scope.alumnos=[
		{nombre:"Adan De Santiago", edad: 20, telefono:"3318282443"},
		{nombre:"Fernanda", edad:19, telefono:"3354245435"},
		{nombre:"petra", edad:22, telefono:"324345354"},
		{nombre:"jose", edad:20, telefono:"3243264"}
		];

	$scope.save=function(){
		$scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre,edad: $scope.nuevoAlumno.edad,telefono:$scope.nuevoAlumno.telefono});
		$scope.formVisibility=false;
		console.log($scope.formVisibility);
	}	
$scope.formVisibility=false;
	$scope.showForm=function(){
		$scope.formVisibility=true;
		console.log($scope.formVisibility);
	}
});