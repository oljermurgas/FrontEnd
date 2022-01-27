import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { InicioComponent }          from './components/inicio/inicio.component';
import { PresentacionComponent }    from './components/inicio/presentacion/presentacion.component';

// Guards
//import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
   
    { path: '',                   component: InicioComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 