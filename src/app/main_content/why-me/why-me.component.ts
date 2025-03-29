import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  imports: [TranslateModule ],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent implements OnInit{

  private config = {
    typeSpeed: 100,
    deleteSpeed: 50,
    pauseAfterTyping: 2000,
    pauseBetweenSentences: 500
  };

  private sentences = [
    "located in Heidelberg.",
    "open to work.",
    "open to relocate."
  ];

  private images = [
    "../../../assets/img/why_me/location_icon.svg",
    "../../../assets/img/why_me/remote_icon.svg",
    "../../../assets/img/why_me/relocate_icon.svg"
  ];

  currentText = '';
  currentImage = this.images[0];
  private index = 0;
  private isDeleting = false;
  private timeoutId: any;

  ngOnInit(): void {
    this.type();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private type(): void {
    const currentSentence = this.sentences[this.index];

    if (!this.isDeleting) {
      // Typing mode
      this.currentText = currentSentence.substring(0, this.currentText.length + 1);

      if (this.currentText === currentSentence) {
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.type(), this.config.pauseAfterTyping);
      } else {
        this.timeoutId = setTimeout(() => this.type(), this.config.typeSpeed);
      }
    } else {
      // Deleting mode
      this.currentText = currentSentence.substring(0, this.currentText.length - 1);

      if (this.currentText === '') {
        this.isDeleting = false;
        this.index = (this.index + 1) % this.sentences.length;
        this.currentImage = this.images[this.index];
        this.timeoutId = setTimeout(() => this.type(), this.config.pauseBetweenSentences);
      } else {
        this.timeoutId = setTimeout(() => this.type(), this.config.deleteSpeed);
      }
    }
  }
}
