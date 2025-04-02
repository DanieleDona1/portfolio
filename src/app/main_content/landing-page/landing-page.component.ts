import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  inject,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-landing-page',
  imports: [TranslateModule, CommonModule, NavbarComponent],
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
      profilPhoto.style.opacity = '1';
      this.isMenuVisible = false;
    } else {
      menuElement.style.display = 'flex';
      profilPhoto.style.opacity = '0';
      this.isMenuVisible = true;
    }
  }

  deImageSrc = '../../../../assets/img/navbar/de.svg';
  enImageSrc = '../../../../assets/img/navbar/en.svg';

  isDeActive: boolean = false;
  isEnActive: boolean = true;

  changeLanguageImg(language: string): void {
    this.isDeActive = language === 'de';
    this.isEnActive = language === 'en';

    if (language === 'de') {
      this.deImageSrc = '../../../../assets/img/navbar/de-active.svg';
      this.enImageSrc = '../../../../assets/img/navbar/en.svg';
    } else if (language === 'en') {
      this.enImageSrc = '../../../../assets/img/navbar/en-active.svg';
      this.deImageSrc = '../../../../assets/img/navbar/de.svg';
    }
  }

  translate: TranslateService = inject(TranslateService);
  translateWebsite(language: string) {
    this.translate.use(language);
    this.changeLanguageImg(language);
  }
}
