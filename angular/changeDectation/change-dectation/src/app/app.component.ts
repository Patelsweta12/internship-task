import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'change-dectation';

  public string='sweta'
  public obj={
    name:'sweta',address:'valsad'
  }
  changeName(){
    this.string='patel'
  }
  changObj(){
    this.obj.address='navsari'
  }
}
