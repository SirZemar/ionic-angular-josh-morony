import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.componnent';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponentModule } from './ui/welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    SharedModule,
    WelcomeComponentModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
