import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';

  topics=['Angular','CSS','JS'];
  topicHasError = true;


  validateTopic(value: string){
    if (value=== 'default') {
      this.topicHasError=true;      
    }else{
      this.topicHasError=false; 
    }
  }
  userModel= new User ('','',9512278489,'default',true);
}
