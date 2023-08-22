import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  isDevMode,
} from '@angular/core';
import { environment } from '@environment/dev';
import { FakeDataService } from 'src/app/shared/services/fake-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

interface FakeData {
  name: string;
  age: number;
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  @Input() name = '';
  @Output() cookiesAccepted = new EventEmitter();

  @ViewChild('inputElementRef') inputElementRef: ElementRef | undefined;

  data = {} as FakeData;
  constructor(fakeDataService: FakeDataService) {
    this.data = fakeDataService.data;
  }

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

@NgModule({
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  imports: [FormsModule, CommonModule, SharedModule],
})
export class WelcomeComponentModule {}