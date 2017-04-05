var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

/*
pokeApp.controller("poke",function($scope,$log){
    $scope.listpoke=[
        {idPk:1,nom:'pika'},
        {idPk:2,nom:'pichu'},
        {idPk:3,nom:'rondoudou'},
        {idPk:4,nom:'rooudou'}
    ];
    $scope.$log = $log;
});
*/

pokeApp.controller("pokeApi",function($scope,$log,$http){
$http({
  method: 'GET',
  url: 'http://pokeapi.co/api/v2/pokemon/'
}).then(function successCallback(response) {
    $scope.listpoke = response.data.results;
  }, function errorCallback(response) {
    console.log("fail "+ response)
  });
  $scope.$log = $log;
});

pokeApp.factory("factoryPoke",function($resource){
    return $resource("http://pokeapi.co/api/v2/pokemon/:id/");
});

pokeApp.controller("controlerPokeApi",function(factoryPoke,$scope){
    var pokemon = factoryPoke.get({id:'4'});
    pokemon.$promise.then(function(data){
        console.log(data);
        $scope.nom2 = data.name;
        $scope.id = data.id;
        $scope.atk = data.moves;
    },function(reason){
        console.log("Raté"+ reason);
    });
});

pokeApp.service("infoPoke",function(){

});