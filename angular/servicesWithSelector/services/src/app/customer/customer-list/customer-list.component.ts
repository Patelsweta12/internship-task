import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Output() myEvent=new EventEmitter

  constructor(private customerService:CustomerService) { }
customerList:any;
  ngOnInit(): void {

  this.customerService.getData().subscribe((res:any)=>this.customerList=res)
  }

  deleteCustomer(id:any){
    this.customerService.deleteCustomer(id).subscribe(data=>data)
    this.customerService.getData().subscribe((res:any)=>this.customerList=res)
  }
 
}
