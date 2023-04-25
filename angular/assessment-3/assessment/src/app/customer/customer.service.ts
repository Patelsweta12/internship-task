import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CustomerModel } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getCustomertData():Observable<CustomerModel[]>{
    return this.httpClient.get<CustomerModel[]>(' http://localhost:3000/customer') //api call to get data from json to table
    
  }

  removeCustomerData(id:number):Observable<CustomerModel>{
    return this.httpClient.delete<CustomerModel>(`http://localhost:3000/customer/${id}`) // api call to  delete data from table
  }

  postCustomerData(data:any):Observable<CustomerModel>{
    return this.httpClient.post<CustomerModel>('http://localhost:3000/customer',data) // api call for post data from form
  }


  editCustomerDataById(id:number):Observable<CustomerModel>{
    return this.httpClient.get<CustomerModel>(`http://localhost:3000/customer/${id}`) // get customer by Id from table
  }

  editCustomer(data:any):Observable<CustomerModel>{
    return this.httpClient.put<CustomerModel>(`http://localhost:3000/customer/${data.id}`,data.formValue) // edit customer data
}


  }