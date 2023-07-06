import { NgModule } from '@angular/core';
import { BigAlertDirective } from './directives/big-alert/big-alert.directive';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [BigAlertDirective, ReversePipe],
  imports: [CommonModule],
  exports: [BigAlertDirective],
})
export class SharedModule {}
