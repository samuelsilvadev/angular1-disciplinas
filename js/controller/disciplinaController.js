angular.module("disciplina").controller("controllerIndex",function($scope, $http){

    //definir url
    var $SERVICES_CONTEXT = "";

    $scope.title = "Disciplina";
    
    $scope.isDisciplinaSelecionada = true;
   
    var carregarDisciplinas = function(){
        //aqui vem uma url
        $http.get("").success(function(data){
          $scope.disciplinas = data;
        });
    }

    $scope.adicionarDisciplina = function (disciplina){
      //aqui vem uma url
      $http.post("",disciplina).success(function(data){
        carregarDisciplinas();
        delete $scope.disciplina;
        $scope.formDisciplina.$setPristine();
      });
    };

    $scope.deletarDisciplina = function (disciplina){
      if(confirm("Deseja Realmente Deletar?")){
        //outra url
        $http.delete(""+disciplina.pkdisciplina,disciplina).success(function(data){
          carregarDisciplinas();
        });
      }
    };

    $scope.apagarDisciplinas = function(disciplinas){
      $scope.disciplinas = disciplinas.filter(function(disciplina){
        if(disciplina.selecionado){
            //mais uma url :D
            $http.delete(""+disciplina.pkdisciplina,disciplina).success(function(data){
            carregarDisciplinas();   
          });
        }
      });
    };

    carregarDisciplinas();
});
