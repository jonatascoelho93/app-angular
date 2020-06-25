import { Pipe, PipeTransform } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

@Pipe({
    name: 'sublista'
})

export class SubLista implements PipeTransform {
    transform(cursos: ICurso[], input: String): ICurso[] {
        //aerofunction
        return cursos.filter(curso => curso.descricao.toLowerCase().includes(input.toLocaleLowerCase()))
    }
}


