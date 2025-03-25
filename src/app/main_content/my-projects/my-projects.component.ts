import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    // IntersectionObserver erstellen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Sichtbar, also Klasse hinzufügen
        }
      });
    }, { threshold: 0.5 }); // 50% des Elements müssen sichtbar sein

    // Klassen 'slide-in-right' und 'slide-in-left' überwachen
    const elementsRight = document.querySelectorAll('.slide-in-right');
    const elementsLeft = document.querySelectorAll('.slide-in-left');

    elementsRight.forEach((element) => {
      observer.observe(element);
    });

    elementsLeft.forEach((element) => {
      observer.observe(element);
    });
  }
}
