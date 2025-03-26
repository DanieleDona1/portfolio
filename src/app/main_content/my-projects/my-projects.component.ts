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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 400);
        }
      });
    }, { threshold: 0.5 });

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
