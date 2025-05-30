import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [ TranslateModule, CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @Output() displayChanged = new EventEmitter<void>();

  changeDisplayFlex() {
    this.displayChanged.emit();
  }

  deImageSrc = '../../../../assets/img/navbar/de.svg';
  enImageSrc = '../../../../assets/img/navbar/en.svg';

  activeLanguage = '';

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
