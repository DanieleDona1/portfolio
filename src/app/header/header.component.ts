import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  deImageSrc = '../../assets/img/navbar/de.svg';
  enImageSrc = '../../assets/img/navbar/en.svg';

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
      this.deImageSrc = '../../assets/img/navbar/de-active.svg';
      this.enImageSrc = '../../assets/img/navbar/en.svg';
    } else if (language === 'en') {
      this.enImageSrc = '../../assets/img/navbar/en-active.svg';
      this.deImageSrc = '../../assets/img/navbar/de.svg';
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

  constructor(private router: Router) {}

  getHeaderStyles() {
    const isImprint: boolean = this.router.url.includes('/imprint');
    const isPrivacy: boolean = this.router.url.includes('/privacy-policy');
    const styles: { [key: string]: string } = {};

    if (isImprint || isPrivacy) {
      styles['display'] = 'flex';
    } else {
      styles['display'] = 'none';
    }
    return styles;
  }
}
