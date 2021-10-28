import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  logged;

  ministro = '';
  back1 = '';
  back2 = '';
  violao = '';
  teclado = '';
  guitarra = '';
  baixo = '';
  bateria = '';
  mesa = '';

  banda = [
    {
      vocal: ['Pr. Fabiano', 'Pra. Ethel', 'Deborah', 'Dudu', 'Ana Carol', 'Marceli', 'Bruna'],
      violao: ['Pr. Fabiano', 'Vitor', 'Rodrigo', 'Pedro', 'Felipe'],
      teclado: ['Aurélio', 'Deborah', 'Rodrigo', 'Luís'],
      guitarra: ['Felipe', 'Andrei'],
      baixo: ['Vitor', 'Rodrigo', 'Pedro'],
      bateria: ['João Pedro', 'Ivan', 'Dudu'],
      mesa: ['Felipe', 'Andrei', 'Lála', 'Luis']
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.logged = true;
    if(this.logged === false) {
      this.router.navigateByUrl('/home');
    }
  }

  public escala() {
    const banda = {
      ministro: this.ministro,
      back1: this.back1,
      back2: this.back2,
      violao: this.violao,
      teclado: this.teclado,
      guitarra: this.guitarra,
      baixo: this.baixo,
      bateria: this.bateria,
      mesa: this.mesa,
    };
    console.log(banda);
  }

}
