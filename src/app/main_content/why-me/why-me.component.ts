import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

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
  typingSpeed = 100; // milliseconds per character
  deletingSpeed = 50;
  pauseBetweenSentences = 2000;
  isCursorBlinking = false;
  private timeoutRef: any;

  ngOnInit() {
    this.typeSentence();
  }

  ngOnDestroy() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }
  }

  typeSentence() {
    const currentSentence = this.sentencesEn[this.currentIndex];
    this.currentImage = this.images[this.currentIndex];

    if (this.isDeleting) {
      this.displayedText = currentSentence.substring(0, this.displayedText.length - 1);

      if (this.displayedText === '') {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.sentencesEn.length;
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
