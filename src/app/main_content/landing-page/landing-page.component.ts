import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TypewriterAnimationComponent } from './typewriter-animation/typewriter-animation.component';
// import { HostListener } from '@angular/core';
// import { CommonModule } from '@angular/common';
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
  // isClickInsideMenu = false;

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

  // // HostListener prüft, ob außerhalb des Menüs geklickt wurde
  // @HostListener('document:click', ['$event'])
  // onOutsideClick(event: MouseEvent) {
  //   const menuElement = this.menuList.nativeElement;
  //   if (this.isMenuVisible && !menuElement.contains(event.target as Node)) {
  //     // Nur toggeln, wenn nicht innerhalb des Menüs geklickt wurde
  //     if (!this.isClickInsideMenu) {
  //       this.toggleMenu();  // Menü schließen, wenn außerhalb geklickt wird
  //     }
  //     this.isClickInsideMenu = false;  // Setze den Flag zurück
  //   }
  // }

  // // Wenn auf das Menü geklickt wird, den Flag setzen
  // @HostListener('click', ['$event'])
  // onMenuClick() {
  //   this.isClickInsideMenu = true;
  // }



}
