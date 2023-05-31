import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsingListnerChildComponent } from './using-listner-child/using-listner-child.component';
export interface StringValueListener {
  take(value: string): void;
}
@Component({
  selector: 'app-using-listner',
  standalone: true,
  imports: [CommonModule, UsingListnerChildComponent],
  templateUrl: './using-listner.component.html',
  styleUrls: ['./using-listner.component.css'],
})
export class UsingListnerComponent implements OnInit {
  list: any = [];

  parentListener: any;

  constructor() {
    this.parentListener = this;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  take(value: string) {
    this.list.push(value);
  }
}
