import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataType } from '../student-model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, OnChanges {
  formOpen: boolean = false;
  btnChange:boolean=true;
  @Output() closeEvent = new EventEmitter();
  @Output() postEvent = new EventEmitter(); //post data through form
  @Input() obtainedEditData: any;
  @Output() updateEvent =new EventEmitter();
  isToggle: any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    if (this.obtainedEditData) {
      this.studentForm.setValue({
        name: this.obtainedEditData.name,
        age: this.obtainedEditData.age,
        email: this.obtainedEditData.email,
        technology: this.obtainedEditData.technology,
        address: this.obtainedEditData.address,
      })
    }
  }

  studentForm!: FormGroup;
  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl(null),
      age: new FormControl(null),
      email: new FormControl(null),

      technology: new FormControl(null),
      address: new FormControl(null),

    })
  }

  toCloseForm() {
    this.isToggle=true;
    this.closeEvent.emit(this.formOpen)

  }

  postStudentData() {
    this.postEvent.emit(this.studentForm.value)
  }

  updateStudentData(){
    this.updateEvent.emit(this.studentForm.value)
  }
}
