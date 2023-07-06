import { NgModule } from '@angular/core';
import { BigAlertDirective } from './directives/big-alert/big-alert.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BigAlertDirective],
  imports: [CommonModule],
  exports: [BigAlertDirective],
})
export class SharedModule {}
