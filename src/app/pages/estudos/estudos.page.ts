import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudos',
  templateUrl: './estudos.page.html',
  styleUrls: ['./estudos.page.scss'],
})
export class EstudosPage implements OnInit {

  public estudos = [
    {
      title: 'O mover de Deus na adoração',
      img: 'https://thumbor.guiame.com.br/unsafe/840x500/top/smart/https://media.guiame.com.br/archives/2019/08/13/1293611346-louvor.jpg',
      instrutor: 'Pastor Paulo'
    },
    {
      title: 'Mensagens da cruz no louvor',
      img: 'https://www.cartacapital.com.br/wp-content/uploads/2019/05/religia%CC%83o-cruz-fe%CC%81-Deus-crista%CC%83o-1200x720.jpg',
      instrutor: 'Pastor Fabiano'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
