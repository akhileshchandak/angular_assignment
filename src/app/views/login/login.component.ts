import { Component } from '@angular/core';
import { FormControl, FormGroup,FormArray, Validators, NgForm, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { validateVerticalPosition } from '@angular/cdk/overlay';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  });
 
  constructor( private router: Router, private fb: FormBuilder, private toastr : ToastrService ){

 }

 submited : Boolean = false;

 onNgInit(){
  this.createLoginform();
 }

  onLoginClicked(){
    this.submited = true;
    console.log('loginForm',this.loginForm);
    if (this.loginForm.valid) {
    this.router.navigate(['dashboard']);
    }else{
      this.toastr.error('Enter Vlaid Username', 'Validation Error', {
        timeOut: 5000
      });
    }
  }


  createLoginform(){
    this.loginForm = this.fb.group({
      'username': ['', [
                        Validators.required,
                        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
                      ]
                  ],
      'password': [''],
    }, {updateOn: 'blur'});
  }
}