import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  submitted:boolean = false;
  reactiveForm: FormGroup;

  constructor(private router:Router,private formBuilder: FormBuilder,
    private loginService: LoginService) {
    this.reactiveForm = this.formBuilder.group({
      email: new FormControl('admin@admin.com', [Validators.required]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });
  }
  ngOnInit(): void {}

  get f() {
    return this.reactiveForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
    const data = this.reactiveForm.value;
    const datas ={"email": this.reactiveForm.value.email, "password": this.reactiveForm.value.password};
    const test= {"email":"admin@admin.com","password":"123456"};
    console.log('data of form', datas);
    this.loginService.getLogin(datas).subscribe(res => {
      // console.log(res);
      if(res.success == true){
        // alert('success message');
      localStorage.setItem('token',res.token);
        this.router.navigate(['./dashboard']);
      }
      else{
        alert("please enter the right username and passWord");
      }
    },
    (err)=> {
      console.log(err);
      alert("get errror");
    });
  }
}
