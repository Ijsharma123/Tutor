import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public liveDemoVisible = false;
  data:any =[
    {"id":1,"setNo":'CHEMESTRY-X-TEST ( 1 & 2)',"class":"7th", "studentName":"Archana kumari","totalQuestion":"15", "solveQuestion":"15", "rightQuestion":"9","wrongQuestion":"5","skipQuestion":"0",
    "marks":"9","date":"2020-09-06 16:54:01" },
    {"id":1,"setNo":'CHEMESTRY-X-TEST ( 1 & 2)',"class":"7th", "studentName":"Archana kumari","totalQuestion":"15", "solveQuestion":"15", "rightQuestion":"9","wrongQuestion":"5","skipQuestion":"0",
    "marks":"9","date":"2020-09-06 16:54:01" },
    {"id":1,"setNo":'CHEMESTRY-X-TEST ( 1 & 2)',"class":"7th", "studentName":"Archana kumari","totalQuestion":"15", "solveQuestion":"15", "rightQuestion":"9","wrongQuestion":"5","skipQuestion":"0",
    "marks":"9","date":"2020-09-06 16:54:01" },
    {"id":1,"setNo":'CHEMESTRY-X-TEST ( 1 & 2)',"class":"7th", "studentName":"Archana kumari","totalQuestion":"15", "solveQuestion":"15", "rightQuestion":"9","wrongQuestion":"5","skipQuestion":"0",
    "marks":"9","date":"2020-09-06 16:54:01" },
    {"id":1,"setNo":'CHEMESTRY-X-TEST ( 1 & 2)',"class":"7th", "studentName":"Archana kumari","totalQuestion":"15", "solveQuestion":"15", "rightQuestion":"9","wrongQuestion":"5","skipQuestion":"0",
    "marks":"9","date":"2020-09-06 16:54:01" },
  ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      chapter:new FormControl(''),
      name:new FormControl(''),
      language:new FormControl(''),
      class:new FormControl(''),
      totalTime:new FormControl(''),
      markPerQuestion:new FormControl(''),
      totalQuestion:new FormControl(''),
      vdoSolution:new FormControl(''),
      pdfsolution:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      chapterTitle:new FormControl(''),
      class:new FormControl(''),
      Subject:new FormControl(''),
      language:new FormControl(''),
      totalTopics:new FormControl(''),
      status:new FormControl(''),
     });
  }

  resetForm(){
this.initForm();
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