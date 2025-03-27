import { Component, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar-mobile',
  imports: [ MatIconModule, MatButtonModule, MatToolbarModule ],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent {
  @Output() displayChanged = new EventEmitter<void>();

  changeDisplayFlex() {
    this.displayChanged.emit();
  }
}
