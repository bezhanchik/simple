import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar-component/sidebar-component';
import { CommonModule } from '@angular/common';

interface Item {
  id: number,
  value: number,
  isChecked: boolean,
  title: string
}

@Component({
  selector: 'app-second-page-component',
  imports: [SidebarComponent, CommonModule],
  templateUrl: './second-page-component.html',
  styleUrl: './second-page-component.css',
})
export class SecondPageComponent {
  items: Item[] = [
    {id: 1, value: 10, isChecked: false, title: 'Item1'},
    {id: 2, value: 15, isChecked: false, title: 'Item2'},
    {id: 3, value: 10, isChecked: false, title: 'Item3'},
    {id: 4, value: 95, isChecked: false, title: 'Item4'}
  ]
}
