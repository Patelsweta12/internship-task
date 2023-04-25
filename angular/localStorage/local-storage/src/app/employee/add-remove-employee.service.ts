import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddRemoveEmployeeService {

  employeeData=[
    {id:1,name:'Sweta',address:'Valsad'},
    {id:2,name:'Harsh',address:'suart'},
    {id:3,name:'Namrata',address:'Chikhli'},
    {id:4,name:'Alay',address:'vapi'},
    {id:5,name:'Tejas',address:'baroda'},
    {id:6,name:'Eklavya',address:'Valsad'},
    {id:7,name:'Megha',address:'suart'},
    {id:8,name:'Piya',address:'Chikhli'},
    {id:9,name:'Vihan',address:'vapi'},
    {id:10,name:'Princy',address:'baroda'},
  ]
  constructor() {localStorage.setItem('data',JSON.stringify(this.employeeData)),
localStorage.getItem('data') }

 
  }
  
 



