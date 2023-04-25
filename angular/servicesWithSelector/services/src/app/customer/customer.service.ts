import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
customerDetail:any;
  setValue: any;
  constructor(private httpClient:HttpClient) { }


//table methods
  getData(){
   
     return this.httpClient.get('http://localhost:3000/customer')
  }
  deleteCustomer(id:any){
    return this.httpClient.delete(`http://localhost:3000/customer/${id}`)
  }
  postData(data:any){
return this.httpClient.post('http://localhost:3000/customer',data)
  }


  getById(id:any){
    return this.httpClient.get(`http://localhost:3000/customer/${id}`)
  }

  updatedData(id:any,data:any){
    return this.httpClient.put(`http://localhost:3000/customer/${id}`,data)
  }
}
