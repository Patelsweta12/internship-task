import { Component, OnInit } from '@angular/core';
import { map, mergeAll, mergeMap, of } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'observable';
  
  ngOnInit(): void {
  
const animalArr:any =['tiger','lion','elephant']; //array


from(animalArr).subscribe(d=>console.log(d)) //looping the array through observable
from(animalArr).subscribe(d=>this.getMessage(d).subscribe(e=>console.log(e)))    //two observable to make it one use map
from(animalArr).pipe(map(d=>d+'sweta')).subscribe(d=>console.log(d)) // using map data is modified before it is subscribe


from(animalArr).pipe(map((d)=>this.getMessage(d)),mergeAll()).subscribe(d=>console.log(d)) 
from(animalArr).pipe(mergeMap((d)=>this.getMessage(d))).subscribe(d=>console.log(d)) 



 
  }
  getMessage(animalArr:any){
    return of(animalArr + 'is danger')
  }
}
