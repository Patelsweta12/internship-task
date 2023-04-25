import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  idOfEmployee:any;
  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.idOfEmployee=this.routes.snapshot.paramMap.get('id')
  }

}
