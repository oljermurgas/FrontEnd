// importar componentes y servicios a utilizar en el formulario
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TDepartamento } from 'src/app/models/TDepartamento';
import { TMunicipio    } from 'src/app/models/TMunicipio';
import { ToastrService } from 'ngx-toastr';
import { InicioService } from 'src/app/services/inicio/inicio.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  form: FormGroup; //Nombre del formulario
 
constructor(  private formBuilder: FormBuilder, 
  private router: Router,
  public serviceService: InicioService,  
  private toastr: ToastrService,
  public datepipe: DatePipe )
    { this.form = this.formBuilder.group({
      TDepartamanto:[null,Validators.required],
      TMunicipio: [null,Validators.required],
      Actividad : [null,Validators.required]
        });
    }

  ngOnInit(): void {
      this.serviceService.SObternerDepartamantos();
      this.serviceService.SObternerData();       
  }
  
  selectChangeDto(event: any) {
    var dato = event.target.value;    
        if (dato != "0")
          this.serviceService.SObternerMunicipos(dato);                          
      }

}
