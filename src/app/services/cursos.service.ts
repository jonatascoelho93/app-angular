import { Injectable } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx'

@Injectable()
export class CursosService {

    public constructor(private _http: Http) { }
    private url: string = "http://localhost:8080/curso"

    private heandleError(error: Response): Observable<ICurso[]> {
        const conteudo = error.json();
        const erro = conteudo.error() || JSON.stringify(conteudo);

        let msgErro = `Codigo: ${error.status} - Descrição: ${erro}`;
        return Observable.throw(msgErro);

    };

    public getCursos(): Observable<ICurso[]> {
        return this._http.get(this.url).map(res => res.json()).catch(this.heandleError); //resposta no formato json map..
    }

    public setCurso(curso: ICurso): Observable<ICurso> {
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });
        let json = JSON.stringify({ "codigo": curso.codigo, "descricao": curso.descricao, "ch": curso.ch });

        return this._http.post(this.url, json, options).map(res => res.json());
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
