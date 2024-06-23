import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  private loading;

  constructor( private loadingCtrl: LoadingController) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers;

    headers =  new HttpHeaders({
      'token': 'token anexado'
    });

    this.showLoading();

    let request = headers? req.clone({headers}): req;

    return next.handle(req).pipe(finalize(() => {
      setTimeout(() => {
        this.closeLoading();
      }, 1000);
    }));
  }

  private async showLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading-spinner',
      spinner: "dots",
      translucent: true,
    });
    await this.loading.present();
  }

  private closeLoading() {
    this.loading.dismiss();
  }
}
