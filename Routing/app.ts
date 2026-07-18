import { Component, signal } from '@angular/core';
import { RouterOutlet , RouterLink} from '@angular/router';//imported as we are using it in app.html

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],//imported these two
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lifecycle-hook-student-app');
}
