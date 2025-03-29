import { Component, ViewChild, ElementRef, Renderer2, inject } from '@angular/core';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TypewriterAnimationComponent } from './typewriter-animation/typewriter-animation.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [ NavbarMobileComponent, MatIconModule, MatButtonModule, TypewriterAnimationComponent, TranslateModule, CommonModule ],
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


  deImageSrc = '../../../../assets/img/navbar/de.svg';
  enImageSrc = '../../../../assets/img/navbar/en.svg';

  activeLanguage: string = '';

  ngOnInit(): void {
    this.setInitialLanguage();
  }

  setInitialLanguage(): void {
    this.changeLanguageImg(this.activeLanguage);
  }

  changeLanguageImg(language: string): void {
    this.activeLanguage = language;

    if (language === 'de') {
      this.deImageSrc = '../../../../assets/img/navbar/de-active.svg';
      this.enImageSrc = '../../../../assets/img/navbar/en.svg';
    } else if (language === 'en') {
      this.enImageSrc = '../../../../assets/img/navbar/en-active.svg';
      this.deImageSrc = '../../../../assets/img/navbar/de.svg';
    }
  }

  isActive(language: string): boolean {
    return this.activeLanguage === language;
  }

  translate: TranslateService = inject(TranslateService);
  translateWebsite(language: string) {
    this.translate.use(language);
    this.changeLanguageImg(language);
  }



}
