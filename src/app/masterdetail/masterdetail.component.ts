import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso'
import { CursosService } from '../services/cursos.service'

@Component({
    moduleId: module.id,
    templateUrl: 'views/masterdetail.component.html'
})

export class MasterDetailComponent {

    //seleção
    public cursoSelecionado: ICurso;

    public selecionar(item: ICurso): void {
        this.cursoSelecionado = item;
    }

    public listaCursos: ICurso[];
    constructor(cursoService: CursosService) {
        this.listaCursos = cursoService.getListaCursos();
    }
};

