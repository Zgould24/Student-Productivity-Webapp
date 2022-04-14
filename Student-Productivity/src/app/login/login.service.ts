import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  sendCredentialsService(formData:FormData):Observable<any> {
    return this.http.post<any>('http://localhost:8080/credentials.php', formData);
  }
}
