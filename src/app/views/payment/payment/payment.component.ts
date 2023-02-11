import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassesService } from 'src/app/services/classes/classes.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public liveDemoVisible = false;
  classes:any[]=[];
  formReactive: FormGroup;
  details: any[] = [
    {
      "id": 1,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "mobilename": '9470659035',
      "chat": 'chat now',
      "gender": 'male',
      "session": '2021-2022',
      "batchTime": '8:00 AM - 9:00 AM',
      "class": '10th',
      "examSeating": 'First',
      "department": 'Math & Science',
      "regNo": '123',
      "recieveFee": '1100',
      "paymentTerm": 'Instalment Payments',
      "status": 'Active',
    },
    {
      "id": 2,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "mobilename": '9470659035',
      "chat": 'chat now',
      "gender": 'male',
      "session": '2021-2022',
      "batchTime": '8:00 AM - 9:00 AM',
      "class": '10th',
      "examSeating": 'First',
      "department": 'Math & Science',
      "regNo": '123',
      "recieveFee": '1100',
      "paymentTerm": 'Instalment Payments',
      "status": 'Active',
    },
    {
      "id": 3,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "mobilename": '9470659035',
      "chat": 'chat now',
      "gender": 'male',
      "session": '2021-2022',
      "batchTime": '8:00 AM - 9:00 AM',
      "class": '10th',
      "examSeating": 'First',
      "department": 'Math & Science',
      "regNo": '123',
      "recieveFee": '1100',
      "paymentTerm": 'Instalment Payments',
      "status": 'Active',
    },
    {
      "id": 4,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "mobilename": '9470659035',
      "chat": 'chat now',
      "gender": 'male',
      "session": '2021-2022',
      "batchTime": '8:00 AM - 9:00 AM',
      "class": '10th',
      "examSeating": 'First',
      "department": 'Math & Science',
      "regNo": '123',
      "recieveFee": '1100',
      "paymentTerm": 'Instalment Payments',
      "status": 'Active',
    },
    {
      "id": 5,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "mobilename": '9470659035',
      "chat": 'chat now',
      "gender": 'male',
      "session": '2021-2022',
      "batchTime": '8:00 AM - 9:00 AM',
      "class": '10th',
      "examSeating": 'First',
      "department": 'Math & Science',
      "regNo": '123',
      "recieveFee": '1100',
      "paymentTerm": 'Instalment Payments',
      "status": 'Active',
    },
    {
      "id": 6,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "mobilename": '9470659035',
      "chat": 'chat now',
      "gender": 'male',
      "session": '2021-2022',
      "batchTime": '8:00 AM - 9:00 AM',
      "class": '10th',
      "examSeating": 'First',
      "department": 'Math & Science',
      "regNo": '123',
      "recieveFee": '1100',
      "paymentTerm": 'Instalment Payments',
      "status": 'Active',
    },
    {
      "id": 7,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "mobilename": '9470659035',
      "chat": 'chat now',
      "gender": 'male',
      "session": '2021-2022',
      "batchTime": '8:00 AM - 9:00 AM',
      "class": '10th',
      "examSeating": 'First',
      "department": 'Math & Science',
      "regNo": '123',
      "recieveFee": '1100',
      "paymentTerm": 'Instalment Payments',
      "status": 'Active',
    },
    {
      "id": 8,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "mobilename": '9470659035',
      "chat": 'chat now',
      "gender": 'male',
      "session": '2021-2022',
      "batchTime": '8:00 AM - 9:00 AM',
      "class": '10th',
      "examSeating": 'First',
      "department": 'Math & Science',
      "regNo": '123',
      "recieveFee": '1100',
      "paymentTerm": 'Instalment Payments',
      "status": 'Active',
    },
  ];
 
  constructor(private fb: FormBuilder, 
    private commonService:CommonService, private classService:ClassesService) {
    this.formReactive = this.fb.group({
      name: new FormControl(''),
      photo: new FormControl(''),
      mobilename: new FormControl(''),
      chat: new FormControl(''),
      gender: new FormControl(''),
      session: new FormControl(''),
      batchTime: new FormControl(''),
      class: new FormControl(''), 
      examSeating: new FormControl(''),
      department: new FormControl(''),
      recieveFee: new FormControl(''),
      paymentTerm: new FormControl(''),
      status: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // this.alllDetails();
    this.getClass();
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

  resetForm(){
    this.formReactive = this.fb.group({
      name: '',
      photo: '',
      mobilename: '',
      chat: '',
      gender: '',
      session: '',
      batchTime: '',
      class: '',
      examSeating: '',
      department: '',
      recieveFee: '',
      paymentTerm: '',
      status: '',
    });
  }
  edit(item:any) {
    console.log('data',item);
    this.formReactive.patchValue(item);
    // this.form.setValue(item);

  }
  onSubmit() {
    // alert('working');
    console.log('all data Value', this.formReactive.value);
  }
  // saveNewData() {
  //   alert('save working');
  // }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }

  // alllDetails() {
  //   this.details = 
  // }
}
