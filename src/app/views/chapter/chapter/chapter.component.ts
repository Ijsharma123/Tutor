import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassesService } from 'src/app/services/classes/classes.service';
import { CommonService } from 'src/app/services/common/common.service';
import { SubjectService } from 'src/app/services/subject/subject.service';
import {ChapterService} from '../../../services/chapter/chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  public liveDemoVisible = false;
  classes:any[]=[];
  // data:any =[
  //   {"id":1,"chapterTitle":'FINAL EXAM ANSWER 2022 - IX',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active" },
  //   {"id":2, "chapterTitle":'GUESS QUESTION (2021-2022)',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active" },
  //   {"id":3, "chapterTitle":'SEN-TUP EXAM 2022',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active"},
  //   {"id":4, "chapterTitle":'SCIENCE TEST QUESTION + ANSWER',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active" },
  //   {"id":5,"chapterTitle":'MATH TEST QUESTION + ANSWER',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active"  },
  //   {"id":6,"chapterTitle":'RATIONAL NUMBER(परिमेय संख्यां )',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active" },
  // ];
  data:any[] =[];
  subjectData:any[]=[];
  deleteIdi:any;
  editIdi:any;
  isedit:boolean=false;
  form: FormGroup;
  id:any;
  loader:boolean=false;
  constructor(private fb: FormBuilder,
    private chapterService:ChapterService,
    private commonService:CommonService, private classService:ClassesService,
    private subjectService:SubjectService) {
    this.form = this.fb.group({
      chapterTitle:new FormControl(''),
      class:new FormControl(''),
      Subject:new FormControl(''),
      language:new FormControl(''),
      board:new FormControl(''),
      // totalTopics:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
    this.getChapterList();
    this.getClass();
  }

  onSelected(){
// console.log('select data class',this.form.value.class);

this.subjectService.getData().subscribe(res => {
  console.log('Total data Subject Api result',res);
  if(res.success == true){
    const data= res.data.filter((x:any)=> x.class_id==this.form.value.class);
    if(data.length >= 1){
      this.subjectData = data;
    }else{
      this.subjectData=[];
      alert('No subject for this Class,Please Select Other Class');
    }
  }
},
(err)=>{
  // console.log('Topic List Api Error',err.error);
  this.commonService.tokenDelete(err.error.msg);
})
  }

  

  initForm(){
    this.form = this.fb.group({
      chapterTitle:new FormControl(''),
      class:new FormControl(''),
      Subject:new FormControl(''),
      language:new FormControl(''),
      board:new FormControl(''),
      status:new FormControl(''),
     });
  }

  getClass(){
    this.classService.getClass().subscribe(res => {
      if(res.success == true){
        this.classes = res.data;
        // console.log('class Api hit',this.classes);
      }
    },
    (err)=>{
      // console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
      }

 subjectList(classId:any){
        this.subjectService.getData().subscribe(res=> {
          console.log('Subject listadcvdsvcdssadvadscvfaaq',res);
          if(res.success == true){
            // this.subjectData = res.data;
            if(res.success == true){
              const data= res.data.filter((x:any)=> x.class_id == classId);
              if(data.length >= 1){
                this.subjectData = data;
              }else{
                this.subjectData=[];
                alert('No subject for this Class,Please Select Other Class');
              }
            }
          }
        },
        (err)=>{
          // console.log('Topic List Api Error',err.error);
          this.commonService.tokenDelete(err.error.msg);
        })
      }

  getChapterList(){
    this.loader =true;
    this.chapterService.getList().subscribe(res => {
      console.log('result', res);
      if(res.success == true){
        this.loader =false;
   this.data = res.data;
   console.log('this.data',this.data);
      }
    },
    (err)=>{
      this.loader =false;
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }

  resetForm(){
    this.isedit = false;
this.initForm();
this.getClass();

  }

  saveNewData(){
    // alert('I am in progress, thanku');
    console.log('result of save api data',this.form.value)
    const data ={"class_id":this.form.value.class,"subject_id":this.form.value.Subject,"board":this.form.value.board,"language":this.form.value.language,"chapter_title":this.form.value.chapterTitle,"status":this.form.value.status};

    //  { "chapter_title":this.form.value.chapterTitle, "admin_id":this.form.value.class, "subject":this.form.value.Subject, "language":this.form.value.language, "total_topics":this.form.value.totalTopics, "status":this.form.value.status };

    console.log('reactive form',this.form.value);
    this.chapterService.addList(data).subscribe(res=>{
      if(res.success == true){
        this.getChapterList();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }
  create(){
    this.initForm();
    // alert('I am in progress, thanku')

  }
  deleteId(param:any){
    this.deleteIdi = param._id;
  }
  delete1(){
  this.chapterService.deleteApi(this.deleteIdi).subscribe(res=>{
    // console.log('Delete result',res);
    if(res.success == true){
      this.getChapterList();
    }
    
  },
  (err)=>{
    console.log('Topic List Api Error',err.error);
    this.commonService.tokenDelete(err.error.msg);
  });
  }

  saveEditData(){

    const data= {"class_id":this.form.value.class,"subject_id":this.form.value.Subject,"board":this.form.value.board,"language":this.form.value.language,"chapter_title":this.form.value.chapterTitle,"status":this.form.value.status};
// console.log('updateed data',data);
// console.log('Edit  data',this.editIdi)
    // const data = { "chapter_title":this.form.value.chapterTitle, "admin_id":this.form.value.class, "subject":this.form.value.Subject, "language":this.form.value.language, "total_topics":this.form.value.totalTopics, "status":this.form.value.status };
this.chapterService.updateApi(this.editIdi,data).subscribe(res=>{
  console.log('Edit data hit Api response',res);
  if(res.success == true){
    this.getChapterList();
  }
},
(err)=>{
  console.log('Topic List Api Error',err.error);
  this.commonService.tokenDelete(err.error.msg);
})
  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }

  edit(data:any){
    this.subjectData=[];
    this.subjectList(data.class_id);
    console.log(data)
    this.editIdi=data._id;
    this.isedit =true;
    const patchData = { "chapterTitle":data.chapter_title, "class":data.class_id, "Subject":data.subject_id, "language":data.language,"board":data.board, "status":data.status };
console.log('data',this.editIdi);
this.form.patchValue(patchData);
// this.form.setValue(data);
  }


}
