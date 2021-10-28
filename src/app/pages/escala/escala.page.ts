import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escala',
  templateUrl: './escala.page.html',
  styleUrls: ['./escala.page.scss'],
})
export class EscalaPage implements OnInit {

  showDomingo = false;
  showSexta = false;
  bgSexta = false;
  bgDomingo = false;

  sexta = [
    {
      data: '21/02/2020',
      ministro: 'Pr. Fabiano',
      violao: 'Pr. Fabiano',
      backs: 'Pra. Ethel, Deborah',
      teclado: 'Rodrigo'
    },
    {
      data: '16/02/2020',
      ministro: 'Flávia',
      violao: 'Marcelo',
      backs: 'Ana Carol',
      teclado: 'Aurélio'
    },
    {
      data: '08/02/2020',
      ministro: 'Bruna',
      violao: 'Andrei',
      backs: 'Marceli',
      teclado: 'Luis'
    }
  ];

  domingo = [
    {
      data: '16/02/2020',
      ministro: 'Pr. Fabiano',
      violao: 'Pr. Fabiano',
      backs: 'Pra. Ethel, Ana Carol, Deborah',
      teclado: 'Rodrigo',
      baixo: 'Vitor',
      guitarra: 'Felipe',
      bateria: 'João Pedro'
    },
    {
      data: '08/02/2020',
      ministro: 'Pr. Fabiano',
      violao: 'Pedro',
      backs: 'Marcely, Bruna, Dudu',
      teclado: 'Aurélio',
      baixo: 'Vitor',
      guitarra: 'Felipe',
      bateria: 'João Pedro'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  // Métodos

  public escalaDomingo() {
    this.showDomingo = true;
    this.showSexta = false;
    this.bgDomingo = true;
    this.bgSexta = false;
  }

  public escalaSexta() {
    this.showDomingo = false;
    this.showSexta = true;
    this.bgDomingo = false;
    this.bgSexta = true;
  }

}
