import { Component, OnInit } from '@angular/core';
import { map, mergeAll, mergeMap, of } from 'rxjs';

import { from } from 'rxjs/internal/observable/from';
import { ObservablesServiceService } from './services/observables-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'observables';
  public studentArray = ['sweta','harsh','namrata'];
  public studentData= from(this.studentArray);

constructor(private studentService:ObservablesServiceService){}
  ngOnInit(): void {

    //for Map
   this.studentData.pipe(map(res=>this.getStudentData(res))).subscribe(data=>data.subscribe(data=>{this.studentService.printData('map',data)}))

   //MergeMap
   this.studentData.pipe(mergeMap(res=>this.getStudentData(res))).subscribe(data=>{this.studentService.printData('mergemap',data)})

  //  mergeAll
  this.studentData.pipe(map(res=>this.getStudentData(res)),mergeAll()).subscribe(data=>{this.studentService.printData('mergeAll',data)})
  
  }

 getStudentData(data:any){
    return of(data)
  }
}
