import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso'
import { CursosService } from '../services/cursos.service'

@Component({
    moduleId: module.id,
    templateUrl: 'views/lista.component.html'
})

export class ListaComponent {

    public listaCursos: ICurso[];

    constructor(cursosService: CursosService){
        //this.listaCursos = cursosService.getListaCursos();
        cursosService.getCursos().subscribe(res => this.listaCursos = res,
            error => alert(error), () => console.log("Finalizado"));
    };

};