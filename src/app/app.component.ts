import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { MainContentComponent } from './main_content/main-content.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

}
