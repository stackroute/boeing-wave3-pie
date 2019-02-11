import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { formformat } from './formformat';
@Injectable({
  providedIn: 'root'
})
export class FetchFormsService {

  // private adminUrl = 'http://localhost:8092/admin/api/v1/formformats';
  private adminUrl = 'http://localhost:8092/admin/api/v1/';
  private getAllFormFormatsUrl = 'formformats';
  private getFormFormatUrl = 'formformat/';
  private updateFormFormatUrl = 'formformat/';
  private addNewFormFormatUrl = 'formformat';
  private deleteFormFormatUrl = 'formformat/';
  constructor(private http: HttpClient) { }
  getAllFormFormats(): Observable<formformat[]> {
    return this.http.get<formformat[]>(this.adminUrl + this.getAllFormFormatsUrl);
  }
  getFormFormat(formId): Observable<formformat> {
    return this.http.get<formformat>(this.adminUrl + this.getFormFormatUrl + formId);
  }
  // updateFormFormat(formId, updatedFormFormat): Observable<formformat> {
  //   return this.http.put<formformat>(this.addNewFormFormat + this.updateFormFormatUrl);
  // }
  addNewFormFormat(): Observable<formformat> {
    return this.http.get<formformat>(this.adminUrl + this.addNewFormFormatUrl);
  }
  deleteFormFormat(formId): void {
    console.log(formId);
    console.log(this.adminUrl + this.deleteFormFormatUrl + formId);
    this.http.delete<formformat>(this.adminUrl + this.deleteFormFormatUrl + formId);
  }
}
