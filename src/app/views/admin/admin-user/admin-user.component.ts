import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  public liveDemoVisible = false;
  data:any =[
    {"id":1, "firstName":'Vikash ', "lastName": "Singhania", "email": "vk112004@gmail.com", "group":["Admin","member"], "status":"Active" },
    {"id":2, "firstName":'Archana', "lastName": "Kumari", "email": "vk112004@gmail.com", "group":["Admin","member"], "status":"Active" },
    {"id":3, "firstName":'Kundan', "lastName": "Yadav", "email": "vk112004@gmail.com", "group":["Admin","member"], "status":"Active" },
    {"id":4, "firstName":'Sumit', "lastName": "Yadav", "email": "vk112004@gmail.com", "group":["Admin","member"], "status":"Active"  },
    {"id":5, "firstName":'Mayank', "lastName": "Podar", "email": "vk112004@gmail.com", "group":["Admin","member"], "status":"Active"  },
    {"id":6, "firstName":'Harendra', "lastName": "Mahto", "email": "vk112004@gmail.com", "group":["Admin","member"], "status":"Active" },
    {"id":7, "firstName":'Anshu', "lastName": "Shekhar", "email": "vk112004@gmail.com", "group":["Admin","member"], "status":"Active" },
    {"id":8, "firstName":'Sinu', "lastName": "kumari", "email": "vk112004@gmail.com", "group":["Admin","member"], "status":"Active"  },
  ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      email:new FormControl(''),
      group:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      firstName:'',
      lastName:'',
      email:'',
      group:'',
      status:'',
     });
  }

  saveNewData(){
    alert('I am in progress, thanku');
    // this.toggleLiveDemo();
    console.log('reactive form',this.form.value);
  }
  createBatches(){
    this.initForm();
    // alert('I am in progress, thanku')

  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }

  edit(data:any){
// console.log('data',data);
this.form.patchValue(data);
// this.form.setValue(data);
  }


}