import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employeeArray=[
    {'id':1,'name':'Sweta'},
    {'id':2,'name':'Fency'},
    {'id':3,'name':'Yesha'},
    {'id':4,'name':'Maahi'},
    {'id':5,'name':'Ekta'}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
