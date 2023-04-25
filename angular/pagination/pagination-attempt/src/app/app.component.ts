import { Component } from '@angular/core';
import{UsersService} from './users.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagination-attempt';
  POSTS:any;
  page:number=1;
  count:number=0;
  tableSize:number=10;
  tableSizes:any=[5,10,15,20];
  constructor(private userService:UsersService){}

  ngOnInit(): void{
    this.postList();

  }

  postList(){
    this.userService.getData().subscribe((res)=>{
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
}
