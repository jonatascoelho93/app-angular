import { Injectable } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx'

@Injectable()
export class CursosService {

    public constructor(private _http: Http){}
    private url : string = "http://localhost:8080/curso"

    public getCursos(): Observable<ICurso[]>{
        return this._http.get(this.url).map(res => res.json()); //resposta no formato json map..
    }


    public getListaCursos(): ICurso[] {
        return [
            { codigo: 10, descricao: 'Java', ch: 80 },
            { codigo: 11, descricao: 'C# Fundamentos', ch: 40 },
            { codigo: 12, descricao: 'JavaScript', ch: 40 },
            { codigo: 13, descricao: 'Excel Basico ', ch: 40 }
        ]
    }

};
