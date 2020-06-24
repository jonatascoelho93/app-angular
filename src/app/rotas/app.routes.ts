import { Routes } from '@angular/router';

import { LogoComponent } from '../logo/logo.component'
import { ListaComponent } from '../lista/lista.component'
import { CadastroComponent } from '../cadastro/cadastro.component'
import { NotFoundComponent } from '../error/notFound.component'

export const appRoutes: Routes = [
    { path: "", component: LogoComponent },
    { path: "lista", component: ListaComponent },
    { path: "cadastro", component: CadastroComponent },
    { path: "**", component: NotFoundComponent }
];