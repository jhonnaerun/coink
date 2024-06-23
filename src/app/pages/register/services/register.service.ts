import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataRegister, RegisterContract, RegisterResponse } from '../interfaces/resgiter';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public getContractRegister(): Observable<RegisterContract> {
    return this.http.get<RegisterContract> ('assets/data/contract.json');
  }

  public registerCoink(data: DataRegister): Observable<RegisterResponse> {
    console.log('información enviada a registrar', data);
    return of({status: 'ok', message: 'Registro exitoso', code: 0 });
  }
}
