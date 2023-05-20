import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  //Variaveis dinâmicas para o quizz.component.html
  titleQuizz: string = "Titulo Segundario"
  buttonQuizz: string = "Opções"
  resultsQuizz: string = "O seu resultado é:"
  respostQuizz: string = "Resposta Selecionada"

  questions: any
  questionSelected: any = "Pergunta Selecionada"

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
    throw new Error('Method not implemented.');
  }
}
