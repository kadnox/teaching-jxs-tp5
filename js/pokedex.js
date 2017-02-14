var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

pokeApp.controller("poke",function($scope,$log){
    $scope.listpoke=[
        {idPk:1,nom:'pika'},
        {idPk:2,nom:'pichu'},
        {idPk:3,nom:'rondoudou'},
        {idPk:4,nom:'rooudou'}
    ];
    $scope.$log = $log;
});

pokeApp.controller("pokeApi",function($scope,$log,$http){
$http({
  method: 'GET',
  url: 'http://pokeapi.co/api/v2/pokemon/'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.listpoke = response.data.results;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  $scope.$log = $log;
});

pokeApp.factory("factoryPoke",function($resource){
    return $resource("http://pokeapi.co/api/v2/pokemon/:id/");
});

pokeApp.controller("controlerPokeApi",["factoryPoke",function(factoryPoke){
    var pokemon = factoryPoke.get({id:2});
    pokemon.$promise.then(function(data){
        console.log(data);
    },function(reason){
        console.log("Raté"+ reason);
    });
}]);