import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  imports: [TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss',
})
export class WhyMeComponent implements OnInit, OnDestroy {
  sentencesDe = [
    'aus Heidelberg.',
    'offen für eine neuen Job.',
    'bereit, umzuziehen.',
  ];

  sentencesEn = [
    'located in Heidelberg.',
    'open to work.',
    'open to relocate.',
  ];

  sentences: string[] = this.sentencesEn;

  private images = [
    'assets/img/why_me/location_icon.svg',
    'assets/img/why_me/remote_icon.svg',
    'assets/img/why_me/relocate_icon.svg',
  ];

  currentIndex = 0;
  displayedText = '';
  currentImage = this.images[0];
  isTyping = false;
  isDeleting = false;
  typingSpeed = 100;
  deletingSpeed = 50;
  pauseBetweenSentences = 2000;
  isCursorBlinking = false;
  private timeoutRef: ReturnType<typeof setTimeout> | null = null;

  translate = inject(TranslateService);

  constructor() {
    this.setSentencesByLang(this.translate.currentLang || this.translate.getDefaultLang());
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setSentencesByLang(event.lang);
      this.resetTyping();
    });
  }

  ngOnInit() {
    this.typeSentence();
  }

  ngOnDestroy() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }
  }

  setSentencesByLang(lang: string) {
    this.sentences = lang === 'de' ? this.sentencesDe : this.sentencesEn;
    this.currentIndex = 0;
    this.displayedText = '';
    this.currentImage = this.images[0];
  }

  resetTyping() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }
    this.isDeleting = false;
    this.isCursorBlinking = false;
    this.typeSentence();
  }

  typeSentence() {
    const currentSentence = this.sentences[this.currentIndex];
    this.currentImage = this.images[this.currentIndex];

    if (this.isDeleting) {
      this.displayedText = currentSentence.substring(0, this.displayedText.length - 1);

      if (this.displayedText === '') {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.sentences.length;
        this.timeoutRef = setTimeout(() => this.typeSentence(), this.typingSpeed);
      } else {
        this.timeoutRef = setTimeout(() => this.typeSentence(), this.deletingSpeed);
      }
    } else {
      this.displayedText = currentSentence.substring(0, this.displayedText.length + 1);

      if (this.displayedText === currentSentence) {
        this.isCursorBlinking = true;
        this.timeoutRef = setTimeout(() => {
          this.isDeleting = true;
          this.isCursorBlinking = false;
          this.typeSentence();
        }, this.pauseBetweenSentences);
      } else {
        this.timeoutRef = setTimeout(() => this.typeSentence(), this.typingSpeed);
      }
    }
  }
}
