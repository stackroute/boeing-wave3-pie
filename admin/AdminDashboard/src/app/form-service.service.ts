import { Injectable } from '@angular/core';
import {FormFormat} from './formformat';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  allFormFormats: Observable<FormFormat[]>;

  adminUrl = 'http://loaclhost:8092/admin/api/v1/';
  getAllFormsUrl = 'formformats';
  constructor(private http: HttpClient) { }
  getAllFormFormats(): Observable<FormFormat[]> {
    return this.http.get<FormFormat[]>(this.adminUrl + this.getAllFormsUrl);
  }
}
