import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  readLocalStorageValue(key) {
    return localStorage.getItem(key);
  }

  Logout(){
    localStorage.removeItem('user');
  }
}
