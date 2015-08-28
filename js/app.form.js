var app = angular.module('app', []);

app.controller('form', function ($scope) {
    // ao precisar criar um objetvo com nova pessoa eu chamo a função declarada abaixo, armazenando um objeto que ainda não foi criado
    $scope.person = newPerson();

    // exemplo de formulário com select box (também poderia ser objetos)
    $scope.local = ['BA', 'RN', 'SC', 'PR', 'SP', 'RJ']

    //o objeto pessoa, inicia em um array vazio
    $scope.people = [];

    //função para salvar a pessoa após clicar no botão
    $scope.savePerson = function(person) {
        $scope.people.push(person);
        //para limpar os campos dentro da função e voltar ao valor padrão após a gravação dos dados
        $scope.person = newPerson();
        //opção para resetar ou limpar o form
        $scope.formy$setUntouched();
        //e depois voltar o form com o valor padrão
        $scope.formy$setPristine();
    }
});

// função para retornar um objetivo vazio de pessoa
function newPerson() {
    // objeto JSON
    return {
        name : "",
        email: "",
        sexo: "m",
        local:"SC"
    }
}
