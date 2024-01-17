import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-strikers-navigation',
  templateUrl: './strikers-navigation.component.html',
  styleUrls: ['./strikers-navigation.component.scss']
})
export class StrikersNavigationComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  connectedUser: any;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
