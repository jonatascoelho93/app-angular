import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ], //modulos usados na aplicação
  declarations: [ AppComponent ], // componentes usados na aplicação
  bootstrap:    [ AppComponent ] // incica qual componente inicial da aplicação
})
export class AppModule { }
