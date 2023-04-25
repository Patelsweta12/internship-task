import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productArry=[
    {'id':1,'name':'Watch'},
    {'id':2,'name':'Bag'},
    {'id':3,'name':'Shoes'},
    {'id':4,'name':'cap'},
    {'id':5,'name':'bottle'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
