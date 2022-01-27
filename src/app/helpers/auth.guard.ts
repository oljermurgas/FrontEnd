/* import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/usuario/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {  
  constructor(private router:Router, private loginServices: LoginService){
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.loginServices.getToken() == null){
          // console.log("Ruta Protegida");
          this.router.navigate(['/inicio']);
        }
    return true;
  }
  
}
 */