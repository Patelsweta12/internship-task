import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { DataType } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
// methods for table 
  getEmpData(){

    return this.httpClient.get('http://localhost:3000/employee')
    }

removeEmpData(id:number){
      return this.httpClient.delete(`http://localhost:3000/employee${id}`)
    }


    //methods for form 

    postEmpData(data:DataType){  //interface datatype
return this.httpClient.post('http://localhost:3000/employee',data)
    }

}
