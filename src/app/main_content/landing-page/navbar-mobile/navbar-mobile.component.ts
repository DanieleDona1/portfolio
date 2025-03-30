import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  imports: [ ],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent {
  @Output() displayChanged = new EventEmitter<void>();

  changeDisplayFlex() {
    this.displayChanged.emit();
  }
}
