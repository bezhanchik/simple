import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar-component/sidebar-component';

interface Item {
  id: number,
  value: number,
  isChecked: boolean,
  title: string
}

@Component({
  selector: 'app-general-component',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './general-component.html',
  styleUrl: './general-component.css',
})
export class GeneralComponent {
    items: Item[] = [
    {id: 1, value: 50, isChecked: false, title: 'Item1'},
    {id: 2, value: 25, isChecked: false, title: 'Item2'},
    {id: 3, value: 30, isChecked: false, title: 'Item3'},
    {id: 4, value: 45, isChecked: false, title: 'Item4'}
  ]
}

