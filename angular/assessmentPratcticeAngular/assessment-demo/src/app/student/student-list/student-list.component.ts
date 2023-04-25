import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
isOpen:boolean=true;
// @Output() openEvent = new EventEmitter();
@Input() iteratedData:any;
@Output() deleteEvent = new EventEmitter(); //try
@Output() editEvent=new EventEmitter();
public id: any | undefined;

constructor() { }

ngOnInit(): void {
    console.log(this.iteratedData);
  }
  // toFormOpen(){
  //   this.openEvent.emit(this.isOpen)

  // }

  deleteStudent(id:number) {
       this.deleteEvent.emit(id)
  }

  getStudentById(id:number){
   this.editEvent.emit(id)

  }

}
