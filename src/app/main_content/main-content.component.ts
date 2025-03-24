import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WhyMeComponent } from './why-me/why-me.component';

@Component({
  selector: 'app-main-content',
  imports: [ LandingPageComponent, WhyMeComponent ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
