import { Component } from '@angular/core';

@Component({
  selector: 'app-olamundo',
  templateUrl: './olamundo.html',
  styleUrls: ['./olamundo.css'],
  standalone: true
})
export class OlamundoComponent {
  showMessage = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
}