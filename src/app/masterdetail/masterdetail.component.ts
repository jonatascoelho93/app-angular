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

    constructor(private cursosService: CursosService) {
        this.listar();

    }

    public listar(): void {
        this.cursosService.getCursos().subscribe(res => this.listaCursos = res,
            error => alert(error), () => console.log("Finalizado"));
    }

    public novo(): void {
        this.novoCurso = { codigo: 0, descricao: '', ch: 0 };
        this.cursoSelecionado = this.novoCurso;
    }

    public incluir(curso: ICurso): void {
        //this.listaCursos.push(curso);
        this.cursosService.setCurso(curso)
            .subscribe(res => JSON.stringify(res), error => console.log(error), () => this.listar()),
        alert('Curso incluido com sucesso');
    }

};

