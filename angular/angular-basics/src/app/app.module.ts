import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyleDirective } from './directives/style.directive';
import { Style2Directive } from './style2.directive';
import { Style3Directive } from './directives/style3.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    Style2Directive,
    Style3Directive

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
