import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpRequest,  HttpHandler,  HttpEvent,  HttpInterceptor } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TDepartamento } from 'src/app/models/TDepartamento';
import { TMunicipio    } from 'src/app/models/TMunicipio';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  myAppUrl            :   string;
  myApiUrlDepartamanto:   string;  //Obtener listado de departamento
  myApiUrlMunicipio   :   string;  //Obtener listado de Municipio, paramatro Departamanto
  myApiUrlData        :   string;  //Obtener data

  body:     any;
  listDep:  TDepartamento []=[];
  listMun:  TMunicipio    []=[];
  listDat:  any           []=[];

  constructor(private http: HttpClient) { 
    this.myAppUrl=environment.ServidorUrl;
    this.myApiUrlMunicipio    = 'ObtenerMunicipios';
    this.myApiUrlDepartamanto = "ObtenerDepartamentos";
    this.myApiUrlData         = "ObtenerData";
   }

      SObternerDepartamantos() {      
        this.http.get(this.myAppUrl + this.myApiUrlDepartamanto).toPromise()
                 .then(data => { this.listDep =data as TDepartamento[]; }) 
      }   

      SObternerMunicipos(dpto: string) {
        this.http.get(this.myAppUrl + this.myApiUrlMunicipio + "/" + dpto).toPromise()
        .then(data => { this.listMun =data as TMunicipio[];})
      } 

      SObternerData() {      
        this.http.get(this.myAppUrl + this.myApiUrlData).toPromise()
                 .then(data => { this.listDat =data as any[]; }) 
      }  
}
