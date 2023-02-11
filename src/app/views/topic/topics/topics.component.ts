import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import {TopicService} from '../../../services/topic/topic.service';
import {CommonService} from '../../../services/common/common.service';
import { SubjectService } from 'src/app/services/subject/subject.service';
import { ClassesService } from 'src/app/services/classes/classes.service';
import { ChapterService } from 'src/app/services/chapter/chapter.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  public liveDemoVisible = false;
  listingId:any
  subjectData:any[]=[];
  classes:any[]=[];
  chapters:any[]=[];
  deleteIdi:any;
  editIdi:any;
  isedit:boolean=false;
  listData:any[]=[];
  loader:boolean = false;
  // data:any =[
  //   {"id":1,"name":'Exercise - 1.2',"status":"Active" },
  //   {"id":2, "name":'Exercise - 1.3',"status":"Active" },
  //   {"id":3, "name":'Exercise - 1.4',"status":"Inactive"},
  //   {"id":4, "name":'Exercise - 1.4',"status":"Active" },
  //   {"id":5, "name":'Exercise - 2.1',"status":"Active"  },
  //   {"id":6, "name":'Exercise - 2.2',"status":"Active" },
  //   {"id":7, "name":'Exercise - 3.1',"status":"Active" },
  //   {"id":8, "name":'Exercise - 3.2',"status":"Active"  },
  // ];

  form: FormGroup;
  nochangePdf:any;
  id:any;
  @ViewChild('f1') fillForm: NgForm;
  constructor(private fb: FormBuilder,
    private topicService:TopicService,
    private chapterService:ChapterService,
    private subjectService:SubjectService,
    private commonService:CommonService, 
    private classService:ClassesService,
    ) {
    this.form = this.fb.group({
      name:new FormControl(''),
      class:new FormControl(''),
      Subject:new FormControl(''),
      chapter:new FormControl(''),
      // uploadvdo:new FormControl(''),
      uploadpdf:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
    this.getClass();
    this.getListAPiData();
  }

  listId(e:any){
console.log('list id',e.topic_id);
this.listingId = e.topic_id;
  }

  deletevdo(e:any){
    console.log('list id',e.topic_id);
    this.listingId = e.topic_id;
  }

  // private emptyVideo: File;
  deleteVdeos(){
    let data = new FormData();
    data.append('upload_video','');

    this.topicService.addVideo(data, this.listingId).subscribe(res=>{
      console.log('Add vdo data',res);
      if(res.success == true) {
        this.getListAPiData();
      }
    },
    (err)=>{
      console.log('error open messagege',err);
    })
  }

 
  private FileVdo: File;
  onFileChangeVideo(fileChangeEvent:any){
    this.FileVdo = fileChangeEvent.target.files[0];
    console.log('this fileVdeo', this.FileVdo);
  }

  onSubmit(form: NgForm){
    if(!form.valid) {
      return;
    }
    alert('Working...');
    console.log('form datas ', form.value);
    let data = new FormData();
    data.append('upload_video',this.FileVdo, this.FileVdo.name);

    this.topicService.addVideo(data, this.listingId).subscribe(res=>{
      console.log('Add vdo data',res);
      if(res.success == true) {
        this.getListAPiData();
      }
    },
    (err)=>{
      console.log('error open messagege',err);
    })
  }

  getListAPiData(){
    this.loader = true;
    this.topicService.getList().subscribe(res => {
      console.log('result of topic service',res);
      if(res.success == true){
        this.loader = false;
        this.listData = res.data;
      }
    },
    (err)=>{
      this.loader = false;
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error?.msg);
    })
  }
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
    // this.subjectData=[];
    // this.form.value.Subject = '';
    console.log('select data class',this.form.value.class);
    
    this.subjectService.getData().subscribe(res => {
      console.log('Total data Subject Api result',res);
      if(res.success == true){
        const data= res.data.filter((x:any)=> x.class_id==this.form.value.class);
        if(data.length==0){
          this.chapters=[];
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

      onSelectedSubject(){
        console.log('subjected',this.form.value.Subject)
        this.chapterService.getList().subscribe(res => {
          console.log('chapter Api data Listing', res);
          if(res.success == true){
            const data= res.data.filter((x:any)=> x.subject_id==this.form.value.Subject);
            const fdata = data.filter((x:any)=> x.class_id == this.form.value.class)
            if(fdata.length==0){
              this.chapters=[];
              alert('No Chapter for this Subject avilable,Please Select Other Subject Or First Create Chapter');
            }else{
              this.chapters = fdata;
            }
          }
        },
        (err)=>{
          console.log('Topic List Api Error',err.error);
          this.commonService.tokenDelete(err.error.msg);
        })
      }

      chapterPachdata(subjectId:any){
        console.log('subjected',this.form.value.Subject)
        this.chapterService.getList().subscribe(res => {
          console.log('chapter', res);
          if(res.success == true){
            const data= res.data.filter((x:any)=> x.subject_id==subjectId);
            if(data.length==0){
              this.chapters=[];
              alert('No Chapter for this Subject avilable,Please Select Other Subject Or First Create Chapter');
            }else{
              this.chapters = data;
            }
          }
        },
        (err)=>{
          console.log('Topic List Api Error',err.error);
          this.commonService.tokenDelete(err.error.msg);
        })
      }

  initForm(){
    this.form = this.fb.group({
      name:'',
      class:'',
      Subject:'',
      status:'',
      chapter:'',
      // uploadvdo:'',
      uploadpdf:''
     });
  }
  private vdo: File;
  onFileChangeVdo(fileChangeEvent:any){
    this.vdo = fileChangeEvent.target.files[0];
  }
  private fileEmpty: File;
  private pdf: File;
  onFileChangePdf(fileChangeEvent:any){
    this.pdf = fileChangeEvent.target.files[0];
  }

  saveNewData(){
    // this.toggleLiveDemo();
    // const ={"chapter_id":"638f2e7734729646ccc01334","subject_id":"638f22079ab17fe38d23bf87","upload_video":"","upload_pdf":"test.pdf","status":"active"}

    console.log('reactive form',this.form.value);
    let formData = new FormData();
    formData.append('upload_video',this.form.value.uploadvdo);
    formData.append('upload_pdf',this.pdf, this.pdf.name);
    formData.append('subject_id',this.form.value.Subject );
    formData.append('chapter_id',this.form.value.chapter);
    formData.append('topic_name',this.form.value.name);
    formData.append('status',this.form.value.status);
    this.topicService.addList(formData).subscribe(res=>{
      console.log('topic api heating',res);
      if(res.success == true){
        this.getListAPiData();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }


  createNew(){
    this.isedit=false;
    // this.getClass();
    // this.getChapterList();
  }
  close(){
    
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
    this.subjectData=[];
    this.pdf = this.fileEmpty;
    this.chapterPachdata(data.subject_id);
    this.subjectApi(data.class_id);
    this.nochangePdf = data.upload_pdf;
    // this.getClass();
    this.getChapterList();
    console.log('edit data',data)
    this.isedit=true;
    this.editIdi=data._id;
    const patchData = {name:data.topic_name,class:data.class_id,Subject:data.subject_id,status:data.status,chapter:data.chapter_id,uploadpdf:data.upload_pdf}
this.form.patchValue(patchData);
// this.form.setValue(data);
  }

  saveEditData(){
    console.log('EDitdata',this.form.value);
    let formData = new FormData();

       //  this.file == null ||
       if(  this.pdf == undefined){
        formData.append('upload_pdf',this.nochangePdf);
      }else{
        formData.append('upload_pdf', this.pdf, this.pdf.name);
      }
    formData.append('upload_video',this.form.value.uploadvdo);
    // formData.append('upload_pdf',this.pdf, this.pdf.name);
    formData.append('subject_id',this.form.value.Subject );
    formData.append('chapter_id',this.form.value.chapter);
    formData.append('topic_name',this.form.value.name);
    formData.append('status',this.form.value.status);
    this.topicService.updateApi(this.editIdi,formData).subscribe(res => {
      // console.log('result of update api',res);
      if(res.success == true){
        this.getListAPiData();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }
  deleteId(param:any){
    console.log('Delete data',param);
    this.deleteIdi = param?._id;
  }

  delete1(){
    this.topicService.deleteApi(this.deleteIdi).subscribe(res=> {
      console.log(res);
      if(res.success == true){
        this.getListAPiData();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }
  getChapterList(){
    this.chapterService.getList().subscribe(res => {
      console.log('result', res);
      if(res.success == true){
   this.chapters = res.data;
   console.log('this.data',this.chapters);
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }

  subjectApi(classId:any){
    this.subjectService.getData().subscribe(res => {
      if(res.success == true){
        if(res.success == true){
          const data= res.data.filter((x:any)=> x.class_id== classId);
          if(data.length==0){
            this.subjectData=[];
            alert('No subject for this Class,Please Add Subject OR Select Other Class');
          }else{
            this.subjectData = data;
          }
        }
      }
     })
  }

}
