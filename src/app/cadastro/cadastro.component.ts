import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

@Component({
    moduleId: module.id,
    templateUrl: 'views/cadastro.component.html'
})

export class CadastroComponent {
    public curso: ICurso = {
        codigo: 10,
        descricao: 'Node JS',
        ch: 24
    };
};
