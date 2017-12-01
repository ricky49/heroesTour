import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navs = [
    { url: 'heroes', content: 'HEROES'},
    { url: 'dashboard', content: ' DASHBOARD'}
  ];

  title = 'Tour of Heroes';
}
