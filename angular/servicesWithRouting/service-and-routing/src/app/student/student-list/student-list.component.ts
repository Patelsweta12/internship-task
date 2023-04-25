import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
public studentList!:Student
filter: any='';
// for pagination (starts)
POSTS:any;
page:number=1;
count:number=0;
tableSize:number=10;
tableSizes:any=[5,10,15,20];
  userService: any;
// for pagination (ends)



  constructor(private studentService:StudentService, private routes:Router) { }

  ngOnInit() {
    this.studentService.getData().subscribe((res:any)=>this.studentList=res)
    this.postList();
  }
  deleteStudent(id:number){
    this.studentService.removeStudent(id).subscribe(data=>data)
    // this.studentService.getData().subscribe((res:any)=>this.studentList=res)
    this.studentService.getData().subscribe((res:any)=>this.studentList=res)
  }

//on click to edit it navigated to form page
  editStudent(id:number){
    this.routes.navigate(['add-student',id])

  }
  //on the lick to add student it navigates to student form 
  navigateToForm(){
    this.routes.navigate(['add-student',""])
  }



// for pagination (starts)
  postList(){
    this.userService.getData().subscribe((res: any)=>{
      this.POSTS=res;
      console.log(this.POSTS);
      
    })
  }

  onTableDataChange(event:any){
    this.page=event;
    this.postList();
}

onTableSizeChange(event:any){
  this.tableSize=event.target.value;
  this.page=1;
  this.postList();
}
//pagination (ends)
}
