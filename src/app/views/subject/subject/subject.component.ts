import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common/common.service';
import {SubjectService} from 'src/app/services/subject/subject.service';
import {ClassesService} from '../../../services/classes/classes.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  public liveDemoVisible = false;
  classes:any[]=[];
  deleteIdi:any;
  editIdi:any;
  isedit:boolean=false;
  subjectData:any[]=[];
  // data:any =[
  //   {"id":1,"name":'Math', "department":"math & Science", "status":"Active" },
  //   {"id":2, "name":'Science', "department":"math & Science","status":"Active" },
  //   {"id":3, "name":'Sankrit', "department":"Sankrit & Science","status":"Inactive"},
  //   {"id":4, "name":'Hindi', "department":"math & Hindi","status":"Active" },
  //   {"id":5, "name":'English', "department":"math & English","status":"Active"  },
  //   {"id":6, "name":'S.Science', "department":"S.Science & Science","status":"Active" },
  // ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder,
    private subjectService:SubjectService,
    private classService:ClassesService,
    private commonService:CommonService) {
    this.form = this.fb.group({
      subject_name:new FormControl(''),
      // department:new FormControl(''),
      class:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
   this.getData();
   this.getClass();
  }

  getClass(){
this.classService.getClass().subscribe(res => {
  // console.log('class Api hit',res);
  if(res.success == true){
    this.classes = res.data;
    console.log('class Api hit',this.classes);
  }
},
(err)=>{
  console.log('Topic List Api Error',err.error);
  this.commonService.tokenDelete(err.error.msg);
})
  }

  getData(){
    this.subjectService.getData().subscribe(res=> {
      if(res.success == true){
        this.subjectData = res.data;
        console.log('Subject Api result',this.subjectData);
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }

  initForm(){
    this.form = this.fb.group({
      subject_name:'',
      // department:'',
      class:'',
      status:'',
     });
  }

  saveNewData(){
    // alert('I am in progress, thanku');{"class_id":"638f1a59a34d75d34cf2f30a","subject_name":"english","status":"active"}  "sub_date":new Date
   const addData = {"name":this.form.value.subject_name,"class_id":this.form.value.class,"status":this.form.value.status};
    console.log('addData detail',addData);
   this.subjectService.addList(addData).subscribe(res => {
    // console.log('Add result result',res);
    if(res.success == true){
      this.getData();
    }
   },
   (err)=>{
     console.log('Topic List Api Error',err.error);
     this.commonService.tokenDelete(err.error.msg);
   })
  }

  create(){
    this.isedit = false;
    this.initForm();
    this.getClass();
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
    this.isedit = true;
    // this.getClass();
    this.editIdi = data._id;
const datas = {subject_name:data.name,  status: data.status, class:data.class_id};
this.form.patchValue(datas);
  }



  saveEditData(){
 const patchData =  {"name":this.form.value.subject_name,"class_id":this.form.value.class,"status":this.form.value.status};
 console.log('this.editId List Api Error',patchData);
 this.subjectService.updateApi(this.editIdi,patchData).subscribe(res => {
   console.log(res);
  if(res.success == true){
    this.getData();
  }
 },
 (err)=>{
   console.log('Topic List Api Error',err.error);
   this.commonService.tokenDelete(err.error.msg);
 })
  }

  deleteId(param:any){
    this.deleteIdi = param._id;
    console.log('delete data',param);
      }
    
      delete1(){
    this.subjectService.deleteApi(this.deleteIdi).subscribe(res => {
      console.log('result',res);
      if(res.success == true){
        this.getData();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
      }


}
