import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipe-task';
  public myClass:boolean=true

  public tableFilter:string="";
  headerArr=[
    {id:'id',name:'Name',age:'Age'}
  ]
  studentArray=[
    {id: 1, name:'Sweta',age:23},
    {id: 2, name:'Harsh',age:18},
    {id: 3, name:'Namrata',age:26},
    {id: 4, name:'Tejes',age:30},
  ]

}
