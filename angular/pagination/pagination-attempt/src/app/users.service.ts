import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
// import{Observable} from 'rxjs'
const dataUrl= 'http://localhost:3000/student'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get(dataUrl);
  }
}
