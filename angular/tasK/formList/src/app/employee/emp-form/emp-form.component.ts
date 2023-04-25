import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  constructor(private empService:EmployeeService) { }

  employeeForm!:FormGroup;
  ngOnInit(): void {
    this.employeeForm= new FormGroup({ 
      empName: new FormControl(null),
      empAge: new FormControl(null),
      empTechnology: new FormControl(null),
      empEmail: new FormControl(null),
    })
  }

  onSubmitEmpData(){
this.empService.postEmpData(this.employeeForm.value).subscribe(data=>data)
  }

}
