import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  idOfProduct:any;


  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.idOfProduct=this.routes.snapshot.paramMap.get('id')
  }

}
