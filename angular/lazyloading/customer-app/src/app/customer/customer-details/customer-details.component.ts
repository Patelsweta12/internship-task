import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
idOfcustomer:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idOfcustomer=this.route.snapshot.paramMap.get('id')
  }

}
