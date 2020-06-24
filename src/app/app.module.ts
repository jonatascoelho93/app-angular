import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router' // modulo de rota
import { FormsModule } from '@angular/forms' // modulo ng forms

import { appRoutes } from './rotas/app.routes' //deve vir primeiro

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

//rotas
import { LogoComponent } from './logo/logo.component';
import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotFoundComponent } from './error/notFound.component'

//services

import { CursosService } from './services/cursos.service'


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule], //modulos usados na aplicação
  declarations: [AppComponent,
    MenuComponent,
    LogoComponent,
    ListaComponent,
    CadastroComponent,
    NotFoundComponent], // componentes usados na aplicação
  providers: [CursosService], // Services  
  bootstrap: [AppComponent] // incica qual componente inicial da aplicação
})
export class AppModule { }
