import { Component, OnInit } from '@angular/core';

import quizz_questions from '../../data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  //Variaveis dinâmicas para o quizz.component.html
    titleQuizz: string = ""
    buttonQuizz: string = ""
    resultsQuizz: string = "O seu resultado é:"
    respostQuizz: string = "Resposta Selecionada"

  questions: any
  questionSelected: any = ""

  //Armazenar a respostas do user
    answers: string[] = []
    answerSelected: string = ""

  //Algoritmo que armaneza a quantidade de perguntas
    questionIndex: number = 0
    questionMaxIndex: number = 0
  
  //Resultado final do quizz, quando true exibe a Tela de results
    finished: boolean = false;
  constructor() { }
  

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false

      //Mapeando as propriedades do objeto que estão importadas.
      this.titleQuizz = quizz_questions.title

      this.questions = quizz_questions.questions

      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length
      //Ao imprimir esses valores no console.log será exibido a quantidade de questão inicial e final do arquivo JSON.
        console.log(this.questionIndex);
        console.log(this.questionMaxIndex);
    }
  }

  //Criando uma função que vai armanezar o valor do user e empurrar essas informações das opções para manipular o resultado final.
  playerChosse(value: string){
    this.answers.push(value)

    //Imprimindo o valor armanezado conforme o user seleciona as opções.
      //console.log(this.answers);
    
    this.nextStep()
  }

  //Essa função será responsável para exibir a proximá pergunta, tendo em vista quepode havé mais de uma pergunta e ainda apliação não insere a proxima pergunta.
  async nextStep() {
    this.questionIndex += 1
    
    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex]
    } else {
      this.finished = true
    }
    //Até aqui o que apenas falta é importar essa função em playerChoose() para que sempre que ela ser chamada, essa função ser executada.
  }
}
