import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.componnent';
import { SettingsComponent } from './settings/settings.component';
import { WelcomeComponent } from './home/ui/welcome/welcome.component';
import { BigAlertDirective } from './directives/big-alert/big-alert.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    WelcomeComponent,
    BigAlertDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
