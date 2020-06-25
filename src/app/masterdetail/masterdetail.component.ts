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
    private novoCurso: ICurso;

    public selecionar(item: ICurso): void {
        this.cursoSelecionado = item;
    }

    public listaCursos: ICurso[];
    constructor(cursoService: CursosService) {
        this.listaCursos = cursoService.getListaCursos();
    }

    public novo(): void {
        this.novoCurso = { codigo: 0, descricao: '', ch: 0 };
        this.cursoSelecionado = this.novoCurso;
    }

    public incluir(curso: ICurso) : void{
        this.listaCursos.push(curso);
        alert('Curso incluido com sucesso');
    }

};

