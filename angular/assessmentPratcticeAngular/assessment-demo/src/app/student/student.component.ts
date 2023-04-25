import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { DataType } from './student-model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  initialToggle:boolean=false;
  studentList: any;
  obtainedEditData: any;
  public isToggle=false
  constructor(private studentservice:StudentService) { }

  ngOnInit(): void { //get data in table
    this.getReturnedStudentData()
  }

  formToggle(data:any){
    this.initialToggle=data;

  }

  formClose(data:any){
console.log(data);

 this.initialToggle=data;
  }

getReturnedStudentData(){
    this.studentservice.getStudentData().subscribe(res=>this.studentList=res) //get db.json data
  }

  deleteSingleStudent(id:number){
    this.studentservice.removeStudentData(id).subscribe(data=>data) //delete data in table
    this.studentservice.getStudentData().subscribe(res=>this.studentList=res)//get call for updated list after deleting
  }

  postStudent(data:DataType){
    this.studentservice.postStudentData(data).subscribe(res=>res)
    this.getReturnedStudentData()

  }

  editSingleStudent(id:number){
    
    this.isToggle=true;
  
    this.studentservice.editStudentDataById(id).subscribe(res=>this.obtainedEditData=res)
    console.log(this.obtainedEditData);
    
     
  }

  toFormOpen(){
    this.isToggle=!this.isToggle;
  }
  
}
