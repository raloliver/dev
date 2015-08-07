// dentro dos [] são inseridas as dependências do modulo ou de plugins externos

var appWelcome = angular.module('appWelcome', []);

appWelcome.filter('welcome', function(){
  return function(nome) {
    return "Bem vindo "+ nome + "!";
  }
});
