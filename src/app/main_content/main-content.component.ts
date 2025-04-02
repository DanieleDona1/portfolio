import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-main-content',
  imports: [ LandingPageComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent, ContactMeComponent ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
