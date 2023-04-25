import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { CustomerModel } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  iterableCustomerData: any;
  public isToggle = false;
  obtainedEditData!: CustomerModel;




  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getReturnedCustomerData()
  }

  toOpenF(data: any) {
    this.isToggle = data
  }
  toCloseF(data: any) {
    this.isToggle = data
  }
  getReturnedCustomerData() {
    this.customerService.getCustomertData().subscribe((res:CustomerModel[]) => this.iterableCustomerData = res)//get db.json data
  }


  deleteSingleCustomer(id: number) {
    this.customerService.removeCustomerData(id).subscribe((data) => data) //delete data in table
    this.customerService.getCustomertData().subscribe(res => this.iterableCustomerData = res)//get call for updated list after deleting
  }

  postCustomer(data: any) {
    this.customerService.postCustomerData(data).subscribe((res) => res)
    this.getReturnedCustomerData()
    this.isToggle = false;
  }


  editSingleCustomer(id: number) {                                          
    this.isToggle = true;                                                                                                                                 
    console.log(id);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    this.customerService.editCustomerDataById(id).subscribe((res) => this.obtainedEditData = res)
  }

  editSelectedCustomer(data: any) {
    
    this.customerService.editCustomer(data).subscribe(res => {this.getReturnedCustomerData();
    }
    )
  }
}
