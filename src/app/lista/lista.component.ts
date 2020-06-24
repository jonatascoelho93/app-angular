import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso'

@Component({
    moduleId: module.id,
    templateUrl: 'views/lista.component.html'
})

export class ListaComponent {

    public listaCursos: ICurso[] = [
        { codigo: 10, descricao: 'Java', ch: 80 },
        { codigo: 11, descricao: 'C# Fundamentos', ch: 40 },
        { codigo: 12, descricao: 'JavaScript', ch: 40 },
        { codigo: 13, descricao: 'Excel Basico ', ch: 40 }

    ];

};