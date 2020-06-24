import { Injectable } from '@angular/core';
import { ICurso} from '../classes/interface.curso';

@Injectable()
export class CursosService {
    public getListaCursos(): ICurso[] {
        return [
            { codigo: 10, descricao: 'Java', ch: 80 },
            { codigo: 11, descricao: 'C# Fundamentos', ch: 40 },
            { codigo: 12, descricao: 'JavaScript', ch: 40 },
            { codigo: 13, descricao: 'Excel Basico ', ch: 40 }
        ]
    }

};
