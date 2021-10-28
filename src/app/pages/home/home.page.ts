import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit { 

  title = 'Home';

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  goToUrl(url) {
    this.router.navigateByUrl(url);
  }

}
