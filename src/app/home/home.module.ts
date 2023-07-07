import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.componnent';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './ui/welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
  ],
  declarations: [HomeComponent, WelcomeComponent],
})
export class HomeModule {}
