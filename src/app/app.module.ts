import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  

// Interceptor 
import { AddTokenInterceptor } from './helpers/add-token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ApproutingmoduleComponent } from './approutingmodule/approutingmodule.component';
import { DatePipe } from '@angular/common';
import { PresentacionComponent } from './components/inicio/presentacion/presentacion.component';
import {CdkTreeModule} from '@angular/cdk/tree';
import { HeaderComponent } from './components/header/header.component';

// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InicioComponent,
    ApproutingmoduleComponent,
    AppComponent,
    PresentacionComponent,
    HeaderComponent,
  ],
  
  imports: [
    BrowserModule,   
    CdkTreeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot()
    // RouterModule
  ],
   providers: [{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
               { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
     DatePipe],
   bootstrap: [AppComponent]
})
export class AppModule { }
