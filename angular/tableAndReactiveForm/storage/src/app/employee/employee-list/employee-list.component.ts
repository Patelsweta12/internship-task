import { Component, OnInit } from '@angular/core';
import { AddRemoveEmpService } from '../add-remove-emp.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeData:any
  deleteEmp:any
  constructor(private myService:AddRemoveEmpService) { }

  ngOnInit(): void {


    this.employeeData=this.myService.getData()
  }
 
  deleteData(id:any){
  this.myService.removedata(id)
  this.employeeData=this.myService.getData()
  
  

  }
}
