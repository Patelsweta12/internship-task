import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {  FormControl, FormGroup, Validators, } from '@angular/forms';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit ,OnChanges {
btnNameChange='submit';
onDataChange=true
  @Input() id:any
  @Input() name:any
  @Input() age:any
  @Input() email:any
  @Input() address:any


  constructor(private customerService:CustomerService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.id!=undefined) {
      this.reactiveForm.setValue({
        name:this.name,
        age:this.age,
        email:this.email,
        address:this.address
      })
      this.btnNameChange='Update';
      this.onDataChange=false
    }
   
  }
  
  reactiveForm!:FormGroup;
  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      age:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      address:new FormControl(null,Validators.required),
    })
   
    }

    onSubmit(){
      return this.customerService.postData(this.reactiveForm.value).subscribe(data=>data)
      }
  
    onCustomerUpdate(){
      return this.customerService.updatedData(this.id,this.reactiveForm.value).subscribe(data=>data)
    }
  }


