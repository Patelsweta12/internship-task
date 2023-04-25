import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customertArry=[
    {'id':1,'name':'sweta'},
    {'id':2,'name':'harsh'},
    {'id':3,'name':'namrata'},
    {'id':4,'name':'alay'},
    {'id':5,'name':'tejas'},
    {'id':6,'name':'maahi'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
