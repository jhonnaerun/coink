import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DocumentType } from '../interfaces/commons';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private path: string = environment.url;

  constructor(private http: HttpClient) { }

  public documentType(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.path}/documentTypes?apiKey=030106`);
  }
}
