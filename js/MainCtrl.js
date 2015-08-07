app.controller('MainCtrl', function ($scope) {
  $scope.nome = "Antonio Oliveira";
  $scope.save = function (elemento) {
    alert(elemento + " salvo com Sucesso!");
  }
  console.log("Controller MainCtrl Executado!");
});
