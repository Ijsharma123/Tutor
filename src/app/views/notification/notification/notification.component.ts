import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassesService } from 'src/app/services/classes/classes.service';
import { CommonService } from 'src/app/services/common/common.service';
import {NotificatioService} from '../../../services/notification/notificatio.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
 public liveDemoVisible = false;
 deleteIdi:any;
 editIdi:any;
 isedit:boolean=false;
 classes:any[]=[];
 notificationList:any[]=[];
  // data:any =[
  //   {"id":1, "notificationTitle": "आवश्यक सूचना", "notification":"सभी Online live class कुछ कारण वश 10/05/21(सोमवार) और 11/05/21 (मंगलवार) को बंद कर दिया गया है I आप सभी का Online Live Class 12/05/21(मंगलवार) से पुनः start होगा I","notificationFor":"10th", "date":"2022-03-15 13:03:32"},
  //   {"id":2, "notificationTitle": "आवश्यक सूचना", "notification":"सभी Online live class कुछ कारण वश 10/05/21(सोमवार) और 11/05/21 (मंगलवार) को बंद कर दिया गया है I आप सभी का Online Live Class 12/05/21(मंगलवार) से पुनः start होगा I","notificationFor":"All", "date":"2022-03-15 13:03:32"},
  //   {"id":3, "notificationTitle": "आवश्यक सूचना", "notification":"सभी Online live class कुछ कारण वश 10/05/21(सोमवार) और 11/05/21 (मंगलवार) को बंद कर दिया गया है I आप सभी का Online Live Class 12/05/21(मंगलवार) से पुनः start होगा I","notificationFor":"9th", "date":"2022-03-15 13:03:32"},
  //   {"id":4, "notificationTitle": "आवश्यक सूचना", "notification":"सभी Online live class कुछ कारण वश 10/05/21(सोमवार) और 11/05/21 (मंगलवार) को बंद कर दिया गया है I आप सभी का Online Live Class 12/05/21(मंगलवार) से पुनः start होगा I","notificationFor":"8th", "date":"2022-03-15 13:03:32"},
  //   {"id":5, "notificationTitle": "आवश्यक सूचना", "notification":"सभी Online live class कुछ कारण वश 10/05/21(सोमवार) और 11/05/21 (मंगलवार) को बंद कर दिया गया है I आप सभी का Online Live Class 12/05/21(मंगलवार) से पुनः start होगा I","notificationFor":"11th", "date":"2022-03-15 13:03:32"},
  // ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder,
    private notificationService:NotificatioService,
    private classService:ClassesService,
    private commonService:CommonService) {
    this.form = this.fb.group({
      title:new FormControl(''),
      detail:new FormControl(''),
      notificationFor:new FormControl(''),
      senton:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
    this.getClass();
    this.getNotificationList();
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

  getNotificationList(){
    this.notificationService.getList().subscribe(res=>{
      this.notificationList=res.data;
      console.log('Notification Api List', this.notificationList);
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }

  createModal(){
    this.isedit=false;
  }

  initForm(){
    this.form = this.fb.group({
      title:'',
      detail:'',
      notificationFor:'',
      senton:'',
      status:'',
     });
  }

  saveNewData(){
    // alert('I am in progress, thanku');
    console.log('all form data',this.form.value.title);
    // class_id
    const data ={ "notification_title":this.form.value.title, "notification_description":this.form.value.detail, "class_id":this.form.value.notificationFor, "sent_on":this.form.value.senton, "status":this.form.value.status }
    console.log('all form data',data);
    this.notificationService.addList(data).subscribe(res=> {
      console.log(res);
      if(res.success==true){
        this.getNotificationList();
        this.initForm();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })

   
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
    this.isedit=true;
    this.editIdi= data._id;
    const patchData = {
      title:data.notification_title, 
      detail:data.notification_description,
      notificationFor:data.class_id,
      senton:data.sent_on,
      status:data.status
    };

console.log('data',data);
this.form.patchValue(patchData);
// this.form.setValue(data);
  }
  saveEditData(){
    const data ={ "notification_title":this.form.value.title, "notification_description":this.form.value.detail, "class_id":this.form.value.notificationFor, "sent_on":this.form.value.senton, "status":this.form.value.status };
    this.notificationService.updateApi(this.editIdi,data).subscribe(res=>{
      console.log(res);
      if(res.success==true){
        this.getNotificationList();
        this.initForm();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }

  deleteModal(param:any){
   this.deleteIdi=param._id;
   console.log('delewte id', this.deleteIdi);
  }
  delete1(){
this.notificationService.deleteApi(this.deleteIdi).subscribe(res=>{
  console.log('delete api hit',res);
  if(res.success==true){
    this.getNotificationList();
  }
},
(err)=>{
  console.log('Topic List Api Error',err.error);
  this.commonService.tokenDelete(err.error.msg);
})
  }

}