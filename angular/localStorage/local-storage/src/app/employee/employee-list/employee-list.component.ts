import { Component, OnInit } from '@angular/core';
import { AddRemoveEmployeeService } from '../add-remove-employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 employeeData:any;
  constructor(private addservice: AddRemoveEmployeeService) { }
  

  ngOnInit(): void {
  }

}
