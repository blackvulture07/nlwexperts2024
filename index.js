const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "myVar = 10;",
        "variable myVar = 10;"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método utilizado para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
        "!="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função utilizada para converter uma string para um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToInt()",
        "toInteger()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a estrutura de controle usada para executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
      respostas: [
        "while",
        "for",
        "if"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
      respostas: [
        "/* This is a comment */",
        "// This is a comment",
        "# This is a comment"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma função em JavaScript?",
      respostas: [
        "function",
        "declare",
        "func"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tipo de dado que representa uma coleção ordenada de elementos em JavaScript?",
      respostas: [
        "array",
        "list",
        "sequence"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
      respostas: [
        "&",
        "+",
        "concat()"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const monstrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector('h3').textContent = item.pergunta
  
  //faz a leitura das 3 opções de respostas e encontra a alternativa correta
  //dentro de uma lista, ele procura um termo requisitado
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
    
      const estaCorreta = event.target.value == item.correta //true
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  //remove o opção padrão RESPOSTA A, deleta um elemento
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }