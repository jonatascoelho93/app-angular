import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'views/menu.component.html'
})

export class MenuComponent {
    titulo_empresa: string = "Impacta"
    titulo1: string = "Listar Cursos";
    titulo2: string = "Incluir Curso"
}