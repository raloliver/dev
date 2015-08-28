var app = angular.module('app', []);

app.controller('lista', function ($scope) {
    // exemplo com array de nomes
    $scope.designers = [
        'Israel',
        'Lucas',
        'Tiago',
        'Zamp'
    ];
    // exemplo com array de objetos
    $scope.devs = []; // inicia vazio

    // ao trabalhar com BD, você vai receber um JSON e exibir isso na tela
    $scope.devs.push
    ({
        nome: "Israel Oliveira", idade: "29", status: false
    });
    $scope.devs.push
    ({
        nome: "Lucas Santana", idade: "19", status: false
    });
    $scope.devs.push
    ({
        nome: "Tiago Silva", idade: "23", status: false
    });
    $scope.devs.push
    ({
        nome: "Tiago Zampieri", idade: "18", status: false
    });

        // adicionar novos elementos a lista de maneira simples
    $scope.adddev   = function(){
        var nome    = document.getElementById("devnome"); //referência ao ID do input
        var idade   = document.getElementById("devidade");

        //insere o novo item na lista
        $scope.devs.push(
            { nome: nome.value, idade: idade.value }
        );

        // limpa os campos
        nome.value  = "";
        idade.value = "";
    };

});
