import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  user = {
    name: 'Eduardo',
  };

  handleCookies() {
    console.log('Cookies were accepted');
  }
}
