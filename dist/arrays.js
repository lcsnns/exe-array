"use strict";

// Criar um array de objetos com nome e nota dos alunos
var alunos = [{
  nome: 'João',
  nota: 7
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 8
}, {
  nome: 'Ana',
  nota: 4
}, {
  nome: 'Carlos',
  nota: 6
}];

// Função para retornar apenas os alunos com nota maior ou igual a 6
function alunosAprovados(arr) {
  return arr.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Chamada da função e exibição dos resultados
var alunosAprovadosArray = alunosAprovados(alunos);
console.log('Alunos aprovados:');
console.log(alunosAprovadosArray);