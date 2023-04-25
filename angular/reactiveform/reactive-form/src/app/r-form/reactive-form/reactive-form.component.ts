import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  constructor() { }

// reactiveForm is property we can name it anything

   reactiveForm: FormGroup;
  ngOnInit(): void {
// complete form group
    this.reactiveForm = new FormGroup({
// formGroup
      personalDetails: new FormGroup ({
        firstname: new FormControl(null, [Validators.required, Validators.min(5)]),
        lastname: new FormControl(null, Validators.required),

      }),

      email: new FormControl(null, [Validators.required, Validators.email]),
    
      password: new FormControl(null, Validators.required),

      // formArray
       address:new FormArray([
        new FormControl(null,Validators.required)
      
       ])

    });
  }
  

//   onSubmit() {
//     
// }

addAddress(){
  (<FormArray>this.reactiveForm.get('address')).push(new FormControl(null,Validators.required))
}
 public disablelimit(){
  if (this.reactiveForm.get('address')['controls']>2) {
    return true
    
  }else{return false;}
}
onSubmit(){
  console.log(this.reactiveForm);
 
}
}
