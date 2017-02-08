var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

pokeApp.controller("poke",function($scope){
    $scope.idPk = 5
    $scope.listpoke=[
        {idPk:1,nom:'pika'},
        {idPk:2,nom:'pichu'},
        {idPk:3,nom:'rondoudou'}
    ]
});