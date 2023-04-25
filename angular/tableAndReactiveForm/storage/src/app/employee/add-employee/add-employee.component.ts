import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddRemoveEmpService } from '../add-remove-emp.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  // returnedData:any =localStorage.getItem('data')
  // returnedDataObj=JSON.parse(this.returnedData)
  // lenght=this.returnedDataObj+1

  constructor(private addRemoveEmp:AddRemoveEmpService, private router:Router) { }


 public reactiveForm!: FormGroup;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup(
      {
        // id:  new FormControl(this.lenght),
        fname: new FormControl(null,Validators.required),
        lname: new FormControl(null,Validators.required),
        technology:new FormControl(null,Validators.required),
        address:new FormControl(null,Validators.required)
      }
    )
  }
  onSubmit(){
    this.addRemoveEmp.add(this.reactiveForm.value)
this.router.navigate(['employee/employee-list'])
  }

}
