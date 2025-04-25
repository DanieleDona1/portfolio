import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  imports: [ TranslateModule, CommonModule ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent implements AfterViewInit {
  projects = [
    {
      id: 'join',
      name: 'Join',
      technologies: 'JavaScript | HTML | CSS | Firebase',
      description: 'MY_PROJECTS.LIST.0.DESCRIPTION',
      imageSrc: '../../../assets/img/my_projects/join-gimp.png',
      projectLink: './Join',
      githubLink: 'https://github.com/DanieleDona1/Join',
    },
    {
      id: 'el_pollo_loco',
      name: 'El Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'MY_PROJECTS.LIST.1.DESCRIPTION',
      imageSrc: '../../../assets/img/my_projects/pollo_loco-gimp.png',
      projectLink: './el_pollo_loco',
      githubLink: 'https://github.com/DanieleDona1/ElPolloLoco',
    },
    {
      id: 'pokedex',
      name: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS',
      description: 'MY_PROJECTS.LIST.2.DESCRIPTION',
      imageSrc: '../../../assets/img/my_projects/pokedexneu-gimp.png',
      projectLink: './Pokedex',
      githubLink: 'https://github.com/DanieleDona1/Pokedex',
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 0);
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
