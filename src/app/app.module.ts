import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.componnent';
import { SettingsComponent } from './settings/settings.component';
import { WelcomeComponent } from './home/ui/welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SettingsComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
