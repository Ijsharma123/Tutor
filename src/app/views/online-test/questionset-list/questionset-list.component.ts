import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {SetListService} from '../../../services/setList/set-list.service';
import {ClassesService} from '../../../services/classes/classes.service';
import { CommonService } from 'src/app/services/common/common.service';
import { SubjectService } from 'src/app/services/subject/subject.service';
@Component({
  selector: 'app-questionset-list',
  templateUrl: './questionset-list.component.html',
  styleUrls: ['./questionset-list.component.scss']
})
export class QuestionsetListComponent implements OnInit {

  public liveDemoVisible = false;
  classes:any[]=[];
  subjectData:any[]=[];
  deleteIdi:any;
  editIdi:any;
  isedit:boolean=false;
  apidata:any[]=[];
  // data:any =[
  //   {"id":1,"chapter":'SCIENCE-IX(PHY-1,CHEM-1,BIO-1)',"class":"7th", "name":"SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)","totalTime":"15", "language":"hind","totalQuestion":"10","markPerQuestion":"15" },
  //   {"id":1,"chapter":'SCIENCE-IX(PHY-1,CHEM-1,BIO-1)',"class":"7th", "name":"SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)","totalTime":"15", "language":"hind","totalQuestion":"10","markPerQuestion":"15" },
  //   {"id":1,"chapter":'SCIENCE-IX(PHY-1,CHEM-1,BIO-1)',"class":"7th", "name":"SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)","totalTime":"15", "language":"hind","totalQuestion":"10","markPerQuestion":"15" },
  //   {"id":1,"chapter":'SCIENCE-IX(PHY-1,CHEM-1,BIO-1)',"class":"7th", "name":"SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)","totalTime":"15", "language":"hind","totalQuestion":"10","markPerQuestion":"15" },
  //   {"id":1,"chapter":'SCIENCE-IX(PHY-1,CHEM-1,BIO-1)',"class":"7th", "name":"SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)","totalTime":"15", "language":"hind","totalQuestion":"10","markPerQuestion":"15" },
  //   {"id":1,"chapter":'SCIENCE-IX(PHY-1,CHEM-1,BIO-1)',"class":"7th", "name":"SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)","totalTime":"15", "language":"hind","totalQuestion":"10","markPerQuestion":"15" },
  // ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder,
    private setlistService:SetListService,
    private classService:ClassesService,
    private commonService:CommonService,
    private subjectService:SubjectService
    ) {
    this.form = this.fb.group({
      // chapter:new FormControl(''),
      name:new FormControl(''),
      language:new FormControl(''),
      class:new FormControl(''),
      subject:new FormControl(''),
      totalTime:new FormControl(''),
      markPerQuestion:new FormControl(''),
      totalQuestion:new FormControl(''),
      // vdoSolution:new FormControl(''),
      pdfsolution:new FormControl(''),
      status:new FormControl(''),
     });
   }

  ngOnInit(): void {
    // this.initForm();
    this.isedit= false;
    this.getClass();
    this.getApiData();
  }

  // getClass(){
  //   this.classService.getClass().subscribe(res => {
  //     // console.log('class Api hit',res);
  //     if(res.success == true){
  //       this.classes = res.data;
  //       console.log('class Api hit',this.classes);
  //     }
  //   },
  //   (err)=>{
  //     console.log('Topic List Api Error',err.error);
  //     this.commonService.tokenDelete(err.error.msg);
  //   })
  //     }

  getClass(){
    this.classService.getClass().subscribe(res => {
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

      onSelected(){
        console.log('select data class',this.form.value.class);
        this.subjectData=[];
        this.subjectService.getData().subscribe(res => {
          console.log('Total data Subject Api result',res);
          if(res.success == true){
            const data= res.data.filter((x:any)=> x.class_id==this.form.value.class);
            if(data.length==0){
              this.subjectData=[];
              alert('No subject for this Class,Please Select Other Class');
            }else{
              this.subjectData = data;
            }
          }
        },
        (err)=>{
          console.log('Topic List Api Error',err.error);
          this.commonService.tokenDelete(err.error.msg);
        })
          }



          subjectUpdated(classId:any){
            // console.log('select data class',this.form.value.class);
            this.subjectData=[];
            this.subjectService.getData().subscribe(res => {
              console.log('Total data Subject Api result',res);
              if(res.success == true){
                const data= res.data.filter((x:any)=> x.class_id==classId);
                if(data.length==0){
                  this.subjectData=[];
                  alert('No subject for this Class,Please Select Other Class');
                }else{
                  this.subjectData = data;
                }
              }
            },
            (err)=>{
              console.log('Topic List Api Error',err.error);
              this.commonService.tokenDelete(err.error.msg);
            })
              }

  

  getApiData(){
    this.setlistService.getData().subscribe(res=> {
      console.log('result',res);
      this.apidata = res.data;
    },
    (err)=> {
      console.log('errr',err);
    })
  }

  initForm(){
    this.form = this.fb.group({
      // chapter:new FormControl(''),
      name:new FormControl(''),
      language:new FormControl(''),
      class:new FormControl(''),
      subject:new FormControl(''),
      totalTime:new FormControl(''),
      markPerQuestion:new FormControl(''),
      totalQuestion:new FormControl(''),
      // vdoSolution:new FormControl(''),
      pdfsolution:new FormControl(''),
      status:new FormControl(''),
     });
  }

  resetForm(){
     this.isedit= false;
    //  this.getClass();
this.initForm();
  }

  saveNewData(){
    console.log('reactive form',this.form.value);
    const formData={"class_id":this.form.value.class,"subject_id":this.form.value.subject,"qps_title":this.form.value.name,"qps_time":this.form.value.totalTime,"qps_mark":this.form.value.markPerQuestion,"no_of_ques":this.form.value.totalQuestion,"qps_language":this.form.value.language,"qps_date":new Date,"solution_pdf":this.form.value.pdfsolution,"qps_status":this.form.value.status};
    console.log('all form data',formData);

    this.setlistService.setList(formData).subscribe(res => {
      console.log('all data',res);
      if(res.success == true){
        this.getApiData();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    });
  }

  saveEditData(){
    const apidata = { "chapter_name":this.form.value.chapter, "admin_id":this.form.value.class, "subject":this.form.value.subject, "qps_title":this.form.value.name, "qps_time":this.form.value.totalTime, "qps_mark":this.form.value.markPerQuestion, "no_of_ques":this.form.value.totalQuestion, "qps_language":this.form.value.language, "qps_date":new Date, "solution_pdf":this.form.value.pdfsolution, "qps_status":this.form.value.status};
    this.setlistService.updateApi(this.editIdi,apidata).subscribe(res =>{
      console.log('edit Result',res);
      if(res.success == true){
        this.getApiData();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    }
      )
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
    this.subjectUpdated(data.class_id);
    this.isedit= true;
    // this.getClass();
    this.editIdi=data._id;
console.log('Edit data',data);
const allPatchData = {chapter:data.chapter_name, name:data.qps_title, language:data.qps_language, class:data.class_id, subject:data.subject_id, totalTime:data.qps_time, markPerQuestion:data.qps_mark, totalQuestion:data.no_of_ques, vdoSolution:'', pdfsolution:data.solution_pdf, status:data.qps_status,}
this.form.patchValue(allPatchData);
// this.form.setValue(data);
  }
  deleteId(param:any){
this.deleteIdi = param._id
console.log('delete data',param);
  }

  delete1(){
this.setlistService.deleteApi(this.deleteIdi).subscribe(res => {
  console.log('result',res);
  if(res.success == true){
    this.getApiData();
  }
},
(err)=>{
  console.log('Topic List Api Error',err.error);
  this.commonService.tokenDelete(err.error.msg);
})
  }


}
