import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { HttpClientModule } from '@angular/common/http';
import { PageModule } from './components/page/page.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [CommonModule,BrowserModule,HttpClientModule,PageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
