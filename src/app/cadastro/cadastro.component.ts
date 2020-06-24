import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

@Component({
    template: `
    <div class="container margem">
        <h1>Cadastro de curso</h1>
    </div>
    `
})

export class CadastroComponent {
    public curso: ICurso = {
        codigo: 10,
        descricao: 'Node JS',
        ch: 24
    };
};