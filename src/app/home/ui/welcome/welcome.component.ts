import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  isDevMode,
} from '@angular/core';
import { environment } from '@environment/dev';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  @Input() name = '';
  @Output() cookiesAccepted = new EventEmitter();

  @ViewChild('inputElementRef') inputElementRef: ElementRef | undefined;

  constructor() {}

  onChange(ev: Event) {
    try {
      if (ev.target) {
        const inputElementTarget = ev.target as HTMLInputElement;

        if (environment.DEBUGGER && isDevMode()) {
          console.log(inputElementTarget.value);
          console.log(this.inputElementRef?.nativeElement.value);
        }
      } else {
        throw new Error(`Input element dos not have event target.`);
      }
    } catch (error) {
      console.warn(error);
    }

    this.name = this.inputElementRef?.nativeElement.value;
  }
}
