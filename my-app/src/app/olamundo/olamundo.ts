import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-olamundo',
  templateUrl: './olamundo.html',
  styleUrls: ['./olamundo.css'],
  standalone: true,
  imports: [CommonModule]
})
export class OlamundoComponent {
  showMessage = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
    console.log('Mensagem secreta:', this.showMessage);
  }
}