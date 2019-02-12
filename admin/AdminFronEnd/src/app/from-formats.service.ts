import { Injectable } from '@angular/core';
import { FormFormat } from './form-format';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormFormatsService {

  private adminFormUrl = 'http://localhost:8092/admin/api/v1/';
  private adminGetAllFormUrl = 'formformats';
  constructor(private http: HttpClient) { }
  getAllFormFormats(): Observable<FormFormat[]> {
    return this.http.get<FormFormat[]>(this.adminFormUrl + this.adminGetAllFormUrl);
  }
}
