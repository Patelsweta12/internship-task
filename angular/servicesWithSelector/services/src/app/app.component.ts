import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
 
  id:any
  name:any
  age:any
  email:any
  address:any

  getData(data:any){
    this.id=data.id,
    this.name=data.name
    this.age=data.age
    this.email=data.email
    this.address=data.address
  }
}
