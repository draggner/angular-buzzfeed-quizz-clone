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
    buttonQuizz: string = "Opções"
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
    }
  }
}
