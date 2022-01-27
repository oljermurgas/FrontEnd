import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler,  HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry  } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) {    
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
   
      if (token)
      { request = request.clone({ setHeaders: { Authorization: `Bearer ${token}`}}); }
    
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {       
           if (error.status == 401 || error.status == 0){
            this.toastr.error('Sesion expirada, por favor vuelva a loguearse', 'Error!');
            //  console.log("Estado: 401"); 
            this.router.navigate(['/inicio']);            
            }          
          // console.log(request);
          // console.log(error);
          return throwError(error);
            })
        );        
  }


}




/*  return next.handle(request).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {

          if (err.status === 401 || err.status === 403) {
              // Invalidate user session and redirect to login/home
          }

          // return the error back to the caller
          return throwError(err);
        }
      }),
      finalize(() => {
        // any cleanup or final activities
      })
    );
 */


/*     return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
         if (error.status === 401){
          this.toastr.error('Sesion expirada, por favor vuelva a loguearse', 'Error!');
          this.router.navigate(['/inicio']); 
          console.log("Pruebas");
        }
        return throwError(error);
      })
      ); */