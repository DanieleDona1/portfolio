import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import {MatIconModule} from '@angular/material/icon';
// import { HostListener } from '@angular/core';
// import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-landing-page',
  imports: [NavbarComponent, NavbarMobileComponent, MatIconModule ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
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


  // typewriterCode -----------------------------------------------
  texts = [
    'Frontend Developer.',
    'Turning design into code.',
    'Learn. Build. Repeat.',
    // ' Always learning, always building.',
  ];
  typingSpeed = 150;
  deleteSpeed = 50;
  pauseTime = 1350;
  currentTextIndex = 0;
  @ViewChild('textElement', { static: true }) textElementRef!: ElementRef;

  ngOnInit(): void {
    this.loop();
  }

  typeText(text: string, callback: () => void): void {
    let i = 0;
    const type = () => {
      if (i < text.length && this.textElementRef) {
        this.textElementRef.nativeElement.textContent += text[i];
        i++;
        setTimeout(type, this.typingSpeed);
      } else {
        setTimeout(callback, this.pauseTime);
      }
    };
    type();
  }

  deleteText(callback: () => void): void {
    if (!this.textElementRef) return;

    let text = this.textElementRef.nativeElement.textContent || '';
    const erase = () => {
      if (text.length > 0 && this.textElementRef) {
        text = text.slice(0, -1);
        this.textElementRef.nativeElement.textContent = text;
        setTimeout(erase, this.deleteSpeed);
      } else {
        setTimeout(callback, this.pauseTime);
      }
    };
    erase();
  }

  loop(): void {
    const text = this.texts[this.currentTextIndex];
    this.typeText(text, () =>
      this.deleteText(() => {
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        this.loop();
      })
    );
  }
}
