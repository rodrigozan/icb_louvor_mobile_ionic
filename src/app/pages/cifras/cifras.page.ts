import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cifras',
  templateUrl: './cifras.page.html',
  styleUrls: ['./cifras.page.scss'],
})
export class CifrasPage implements OnInit {

  public culto = [
    {
      data: '21/02/2020',
      musicas: [
        'Agindo Deus quem impedirá?',
        'Pra sempre se ouvirá',
        'Jesus o que eu faria',
        'Enche-me de Ti'
      ]
    },
  ];

  public musicas = [
    'Ao Único',
    'Atrai o meu coração',
    'Carta Viva',
    'Sacia-me',
    'Tudo ficou pra trás',
    'Todo Poderoso'
  ];

  constructor() { }

  ngOnInit() {
  }

}
