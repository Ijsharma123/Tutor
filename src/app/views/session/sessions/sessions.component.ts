import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common/common.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  public liveDemoVisible = false;
  loader:boolean=false;
  sessionList:any[]=[];
  data:any =[
    {"id":1,"name":'2020-2021',"status":"Active" },
    {"id":2, "name":'2019-2020',"status":"Active" },
    {"id":3, "name":'2020-2021',"status":"Inactive"},
    {"id":4, "name":'2020-2021',"status":"Active" },
    {"id":5, "name":'2022-2023',"status":"Active"  },
    {"id":6, "name":'2020-2021',"status":"Active" },
    {"id":7, "name":'2020-2021',"status":"Active" },
    {"id":8, "name":'2020-2021',"status":"Active"  },
  ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder, 
    private commonService:CommonService,
    private sessionService:SessionService) {
    this.form = this.fb.group({
      name:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
    this.getSessionList();
  }

  getSessionList(){
    this.loader =true;
    this.sessionService.getList().subscribe(res=>{
      console.log(res)
      if(res.success == true){
         this.sessionList= res.data;
         this.loader =false;
      }else{
        this.loader =false;
      }
    },(err)=>{
      this.loader =false;
      console.log(err);
      this.commonService.tokenDelete(err.error.msg);
    })
  }

  initForm(){
    this.form = this.fb.group({
      name:'',
      status:'',
     });
  }

  saveNewData(){
    alert('I am in progress, thanku');
    // this.toggleLiveDemo();
    console.log('reactive form',this.form.value);
  }
  create(){
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
console.log('data',data);
this.form.patchValue(data);
// this.form.setValue(data);
  }


}
