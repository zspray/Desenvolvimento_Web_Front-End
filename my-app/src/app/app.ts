import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OlamundoComponent } from './olamundo/olamundo';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [RouterOutlet, OlamundoComponent]
})
export class AppComponent {
  title = 'my-app';
}