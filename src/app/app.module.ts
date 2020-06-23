import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MenuComponent } from './menu/menu.component'

@NgModule({
  imports:      [ BrowserModule ], //modulos usados na aplicação
  declarations: [ AppComponent, MenuComponent ], // componentes usados na aplicação
  bootstrap:    [ AppComponent, MenuComponent ] // incica qual componente inicial da aplicação
})
export class AppModule { }
