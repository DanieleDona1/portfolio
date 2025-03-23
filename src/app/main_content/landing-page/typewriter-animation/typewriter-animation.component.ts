import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter-animation',
  imports: [],
  templateUrl: './typewriter-animation.component.html',
  styleUrl: './typewriter-animation.component.scss'
})
export class TypewriterAnimationComponent implements OnInit {
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
