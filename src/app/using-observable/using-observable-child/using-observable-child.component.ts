import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-using-observable-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './using-observable-child.component.html',
  styleUrls: ['./using-observable-child.component.css'],
})
export class UsingObservableChildComponent {
  @Input()
  emitter?: Subject<string>;
}
