import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { DataType } from './student-model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }
  getStudentData(){
   return this.httpClient.get('http://localhost:3000/student') //get data from json to table
  }

  removeStudentData(id:number){
    return this.httpClient.delete(`http://localhost:3000/student/${id}`) // to delete data from table
    
}

  postStudentData(data:DataType){
    return this.httpClient.post('http://localhost:3000/student',data) // to post data from from
  }

  editStudentDataById(id:number){
    return this.httpClient.get(`http://localhost:3000/student/${id}`)
  }

  editStudentData(id:number,data:any){
    return this.httpClient.put(`http://localhost:3000/student/${id}`,data)
  }

}
