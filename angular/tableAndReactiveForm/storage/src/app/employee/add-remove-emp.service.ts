import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddRemoveEmpService {

  employeeData=[
    {id:1,fname:'Sweta',lname:'Patel',technology:'Frontend',address:'Valsad'},
    {id:2,fname:'Harsh',lname:'Patel',technology:'QA',address:'surat'},
    {id:3,fname:'Namrata',lname:'Patel',technology:'Frontend',address:'Chikhli'},
    {id:4,fname:'Alay',lname:'Patel',technology:'java',address:'vapi'},
    {id:5,fname:'Tejas',lname:'Patel',technology:'.net',address:'baroda'},
    {id:6,fname:'Eklavya',lname:'Patel',technology:'Frontend',address:'Valsad'},
    {id:7,fname:'Megha',lname:'Patel',technology:'QA',address:'surat'},
    {id:8,fname:'Piya',lname:'Patel',technology:'Frontend',address:'Chikhli'},
    {id:9,fname:'Vihan',lname:'Patel',technology:'java',address:'vapi'},
    {id:10,fname:'Princy',lname:'Patel',technology:'Frontend',address:'baroda'},
  ]
  singleObj: any;
  constructor() {}
  public returnedData:any; //full data i.e complete array
public returnedDataObj:any;

  getData(){
    if(localStorage.length==0){
      localStorage.setItem('data',JSON.stringify(this.employeeData))
      // localStorage.setItem('data','this.employeeData')
      return this.employeeData;
    }else{
      this.returnedData =localStorage.getItem('data')
      return JSON.parse(this.returnedData)
    }
  }

  removedata(id:any){
    this.returnedData =localStorage.getItem('data') //string format
    this.returnedDataObj=JSON.parse(this.returnedData) //object format
    this.singleObj= this.returnedDataObj.find((element: { id: any; })=>element.id==id)
    this.returnedDataObj.splice(this.returnedDataObj.indexOf(this.singleObj),1) // remove one obj
    localStorage.setItem('data',JSON.stringify(this.returnedDataObj)) // update local storage when deleted one obj from table
    // console.log(id);

  }

  add(data:any){
    this.returnedData =localStorage.getItem('data')
    this.returnedDataObj=JSON.parse(this.returnedData) 
    this.returnedDataObj.push(data)
    localStorage.setItem('data',JSON.stringify(this.returnedDataObj))

  }


}
