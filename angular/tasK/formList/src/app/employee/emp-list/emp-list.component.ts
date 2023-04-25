import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { DataType } from '../data-type'; //interface datatype

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employeeList: DataType | undefined; //interface datatype

  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    
    this.empService.getEmpData().subscribe((res:any)=>this.employeeList=res)
  }

  deleteEmpData(id:number){
    this.empService.removeEmpData(id).subscribe(data=>data)
  this.empService.getEmpData().subscribe((res:any)=>this.employeeList=res)
   
  }

}
