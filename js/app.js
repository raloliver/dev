// dentro dos [] são inseridas as dependências do modulo ou de plugins externos, ou até mesmo do angular
// o objeto angular já vem criado por padrão
// o nome do módulo pode não ser igual ao da variável

var appWelcome = angular.module('appWelcome', []);

//filtro para encrementar o módulo do app
appWelcome.filter('welcome', function(){
  return function(nome) {
    return "Bem vindo "+ nome + "!";
  }
});
