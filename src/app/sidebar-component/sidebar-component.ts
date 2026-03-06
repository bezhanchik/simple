import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterLink],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {
  constructor (private router: Router) {}
  get currentSection(): string {
    if (this.router.url === '/general') {
      return 'Тип 1';
    }
    if (this.router.url === '/second') {
      return 'Тип 2';
    }
    return 'Не выбран';
  }
}
