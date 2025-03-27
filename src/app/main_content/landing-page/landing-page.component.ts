import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TypewriterAnimationComponent } from './typewriter-animation/typewriter-animation.component';
@Component({
  selector: 'app-landing-page',
  imports: [ NavbarMobileComponent, MatIconModule, MatButtonModule, TypewriterAnimationComponent ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  @ViewChild('menuList') menuList!: ElementRef;
  @ViewChild('profilPhoto') profilPhoto!: ElementRef;
  isMenuVisible = false;

  constructor(private renderer: Renderer2) {}

  toggleMenu() {
    const menuElement = this.menuList.nativeElement;
    const profilPhoto = this.profilPhoto.nativeElement;
    if (this.isMenuVisible) {
      menuElement.style.display = 'none';
      profilPhoto.style.opacity = '1'
      this.isMenuVisible = false;
    } else {
      menuElement.style.display = 'flex';
      profilPhoto.style.opacity = '0'
      this.isMenuVisible = true;
    }
  }
}
