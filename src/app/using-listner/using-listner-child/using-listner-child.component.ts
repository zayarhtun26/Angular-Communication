import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StringValueListener } from '../using-listner.component';

@Component({
  selector: 'app-using-listner-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './using-listner-child.component.html',
  styleUrls: ['./using-listner-child.component.css'],
})
export class UsingListnerChildComponent {
  value = '';
  @Input()
  childListener?: StringValueListener;

  add() {
    if (this.value && this.childListener) {
      this.childListener.take(this.value);
      this.value = '';
    }
  }
}
