import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BatchService } from 'src/app/services/batch/batch.service';
import { ClassesService } from 'src/app/services/classes/classes.service';
import { CommonService } from 'src/app/services/common/common.service';
import { SessionService } from 'src/app/services/session/session.service';
import { StudentService } from '../../../services/student/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  public liveDemoVisible = false;
  // id:any = 1;
  classes:any[]=[];
  deleteIdi: any;
  editIdi: any;
  isedit: boolean = false;
  formReactive: FormGroup;
  batchList:any[]=[];
  studentList: any[] = [];
  sessionList:any[]=[];
  loader:boolean=false;
  // page: number = 1;
  // count: number = 0;
  // tableSize: number = 20;
  // totalData:any[]=[];
  
  // details: any[] = [
  //   {
  //     id: 1,
  //     photo: 'assets/img/avatars/1.jpg',
  //     name: 'Vikash kumar',
  //     mobilename: '9470659035',
  //     chat: 'chat now',
  //     gender: 'male',
  //     session: '2021-2022',
  //     batchTime: '8:00 AM - 9:00 AM',
  //     class: '10th',
  //     examSeating: 'First',
  //     department: 'Math & Science',
  //     regNo: '123',
  //     recieveFee: '1100',
  //     paymentTerm: 'Instalment Payments',
  //     status: 'Active',
  //   },
  //   {
  //     id: 2,
  //     photo: 'assets/img/avatars/1.jpg',
  //     name: 'Vikash kumar',
  //     mobilename: '9470659035',
  //     chat: 'chat now',
  //     gender: 'male',
  //     session: '2021-2022',
  //     batchTime: '8:00 AM - 9:00 AM',
  //     class: '10th',
  //     examSeating: 'First',
  //     department: 'Math & Science',
  //     regNo: '123',
  //     recieveFee: '1100',
  //     paymentTerm: 'Instalment Payments',
  //     status: 'Active',
  //   },
  //   {
  //     id: 3,
  //     photo: 'assets/img/avatars/1.jpg',
  //     name: 'Vikash kumar',
  //     mobilename: '9470659035',
  //     chat: 'chat now',
  //     gender: 'male',
  //     session: '2021-2022',
  //     batchTime: '8:00 AM - 9:00 AM',
  //     class: '10th',
  //     examSeating: 'First',
  //     department: 'Math & Science',
  //     regNo: '123',
  //     recieveFee: '1100',
  //     paymentTerm: 'Instalment Payments',
  //     status: 'Active',
  //   },
  //   {
  //     id: 4,
  //     photo: 'assets/img/avatars/1.jpg',
  //     name: 'Vikash kumar',
  //     mobilename: '9470659035',
  //     chat: 'chat now',
  //     gender: 'male',
  //     session: '2021-2022',
  //     batchTime: '8:00 AM - 9:00 AM',
  //     class: '10th',
  //     examSeating: 'First',
  //     department: 'Math & Science',
  //     regNo: '123',
  //     recieveFee: '1100',
  //     paymentTerm: 'Instalment Payments',
  //     status: 'Active',
  //   },
  //   {
  //     id: 5,
  //     photo: 'assets/img/avatars/1.jpg',
  //     name: 'Vikash kumar',
  //     mobilename: '9470659035',
  //     chat: 'chat now',
  //     gender: 'male',
  //     session: '2021-2022',
  //     batchTime: '8:00 AM - 9:00 AM',
  //     class: '10th',
  //     examSeating: 'First',
  //     department: 'Math & Science',
  //     regNo: '123',
  //     recieveFee: '1100',
  //     paymentTerm: 'Instalment Payments',
  //     status: 'Active',
  //   },
  //   {
  //     id: 6,
  //     photo: 'assets/img/avatars/1.jpg',
  //     name: 'Vikash kumar',
  //     mobilename: '9470659035',
  //     chat: 'chat now',
  //     gender: 'male',
  //     session: '2021-2022',
  //     batchTime: '8:00 AM - 9:00 AM',
  //     class: '10th',
  //     examSeating: 'First',
  //     department: 'Math & Science',
  //     regNo: '123',
  //     recieveFee: '1100',
  //     paymentTerm: 'Instalment Payments',
  //     status: 'Active',
  //   },
  //   {
  //     id: 7,
  //     photo: 'assets/img/avatars/1.jpg',
  //     name: 'Vikash kumar',
  //     mobilename: '9470659035',
  //     chat: 'chat now',
  //     gender: 'male',
  //     session: '2021-2022',
  //     batchTime: '8:00 AM - 9:00 AM',
  //     class: '10th',
  //     examSeating: 'First',
  //     department: 'Math & Science',
  //     regNo: '123',
  //     recieveFee: '1100',
  //     paymentTerm: 'Instalment Payments',
  //     status: 'Active',
  //   },
  //   {
  //     id: 8,
  //     photo: 'assets/img/avatars/1.jpg',
  //     name: 'Vikash kumar',
  //     mobilename: '9470659035',
  //     chat: 'chat now',
  //     gender: 'male',
  //     session: '2021-2022',
  //     batchTime: '8:00 AM - 9:00 AM',
  //     class: '10th',
  //     examSeating: 'First',
  //     department: 'Math & Science',
  //     regNo: '123',
  //     recieveFee: '1100',
  //     paymentTerm: 'Instalment Payments',
  //     status: 'Active',
  //   },
  // ];

  constructor(private fb: FormBuilder,
     private studentService: StudentService,
     private batchService:BatchService,
     private commonService:CommonService,
     private classService:ClassesService,
     private sessionService:SessionService,
     private router:Router
     ) {
    this.formReactive = this.fb.group({
      name: new FormControl(''),
      fatherName: new FormControl(''),
      motherName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      mobilename: new FormControl(''),
      fatherContact: new FormControl(''),
      dateOfBirthday: new FormControl(''),
      gender: new FormControl(''),
      session: new FormControl(''),
      batchTime: new FormControl(''),
      address: new FormControl(''),
      paymentType: new FormControl(''),
      class: new FormControl(''),
      examSeating: new FormControl(''),
      bord: new FormControl(''),
      recieveFee: new FormControl(''),
      paymentTerm: new FormControl(''),
      loginCode: new FormControl(''),
      rollNo: new FormControl(''),
      status: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // this.alllDetails();
    this.getAllList();
    this.getClass();
    this.getSessionList();
    // let max_num = Number.NEGATIVE_INFINITY;
    // console.log('max num',max_num);
  }


  // onTableDataChange(event: any) {
  //   this.studentList = [];
  //   this.page = event;
  //  this.getAllList();
  // }

  chatBox(param:any){
    console.log('param data',param)
    this.router.navigate(['./chat/',param._id]);
  }

  getSessionList(){
    this.sessionService.getList().subscribe(res=>{
      console.log(res)
      if(res.success == true){
         this.sessionList= res.data;
      }else{
      }
    },(err)=>{
      console.log(err);
    })
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

  getBatchList(){
    this.batchService.getList().subscribe(res=> {
      console.log('batch api fdate ',res);
      if(res.success==true){
        this.batchList =res.data;
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }

  createModal() {
    this.isedit = false;
    this.getBatchList();
  }

  resetForm() {
    this.formReactive = this.fb.group({
      name: '',
      fatherName: '',
      motherName: '',
      email: '',
      password: '',
      mobilename: '',
      fatherContact: '',
      dateOfBirthday: '',
      gender: '',
      session: '',
      batchTime: '',
      address: '',
      paymentType: '',
      class: '',
      examSeating: '',
      bord: '',
      loginCode: '',
      recieveFee: '',
      paymentTerm: '',
      rollNo: '',
      status: '',
    });
  }

  getAllList() {
    this.loader=true;
    this.studentService.getList().subscribe(
      (res) => {
        console.log('student all lisrt from api data', res);
        this.studentList = res.data;
        // this.totalData = Array(res.totalCount);
       
        this.loader =false;
      },
      (err) => {
        this.commonService.tokenDelete(err.error.msg);
        console.log('Error', err);
        this.loader =false;
      }
    );
  }

  edit(item: any) {
    this.isedit = true;
    this.editIdi = item._id;
    console.log('data', item);
    const patchData = {
      name: item.name,
      fatherName: item.father_name,
      motherName: item.mother_name,
      email: item.email,
      password: item.password,
      mobilename: item.mobile_number,
      fatherContact: item.contact_guardian_no,
      dateOfBirthday: item.date_of_birth,
      gender: item.sex,
      session: item.session,
      batchTime: item.select_batch_time,
      address: item.address,
      paymentType: item.payment_type,
      class: item.class_id,
      examSeating: item.exam_seating,
      bord: item.board,
      recieveFee: item.fee_amount,
      paymentTerm: item.payment_mode,
      loginCode: item.login_code,
      rollNo: item.roll_no,
      status: item.status,
    };
    this.formReactive.patchValue(patchData);
    // this.form.setValue(item);
  }

  onSubmit() {
    // alert('working');

   
    const addData = {
      board: this.formReactive.value.bord,
      class_id: this.formReactive.value.class,
      select_batch_time: this.formReactive.value.batchTime,
      name: this.formReactive.value.name,
      father_name: this.formReactive.value.fatherName,
      mother_name: this.formReactive.value.motherName,
      email: this.formReactive.value.email,
      password: this.formReactive.value.password,
      sex: this.formReactive.value.gender,
      mobile_number: this.formReactive.value.mobilename,
      contact_guardian_no: this.formReactive.value.fatherContact,
      date_of_birth: this.formReactive.value.dateOfBirthday,
      address: this.formReactive.value.address,
      payment_type: this.formReactive.value.paymentType,
      fee_amount: this.formReactive.value.recieveFee,
      payment_mode: this.formReactive.value.paymentTerm,
      roll_no: this.formReactive.value.rollNo,
      session: this.formReactive.value.session,
      exam_seating: this.formReactive.value.examSeating,
      login_code: this.formReactive.value.loginCode,
      status: this.formReactive.value.status,
    };
    console.log('all data Value', addData);
    this.studentService.addList(addData).subscribe((res) => {
      console.log('result of student api da4ee',res);
      if (res.success == true) {
        this.getAllList();
        this.resetForm();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    });
  }
  saveEditData() {
    const editDataData = {
      board: this.formReactive.value.bord,
      class_id: this.formReactive.value.class,
      select_batch_time: this.formReactive.value.batchTime,
      name: this.formReactive.value.name,
      father_name: this.formReactive.value.fatherName,
      mother_name: this.formReactive.value.motherName,
      email: this.formReactive.value.email,
      password: this.formReactive.value.password,
      sex: this.formReactive.value.gender,
      mobile_number: this.formReactive.value.mobilename,
      contact_guardian_no: this.formReactive.value.fatherContact,
      date_of_birth: this.formReactive.value.dateOfBirthday,
      address: this.formReactive.value.address,
      payment_type: this.formReactive.value.paymentType,
      fee_amount: this.formReactive.value.recieveFee,
      payment_mode: this.formReactive.value.paymentTerm,
      roll_no: this.formReactive.value.rollNo,
      session: this.formReactive.value.session,
      exam_seating: this.formReactive.value.examSeating,
      login_code: this.formReactive.value.loginCode,
      status: this.formReactive.value.status,
    };
    this.studentService.updateApi(this.editIdi,editDataData).subscribe(res => {
      console.log('result of edit studen api',res);
      if (res.success == true) {
        this.getAllList();
        this.resetForm();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }

  deleteModal(param:any){
    this.deleteIdi=param._id;
    console.log('this.deleteIdi',this.deleteIdi)

  }

  delete1(){
    this.studentService.deleteApi(this.deleteIdi).subscribe(res=>{
      // console.log('delete api data',res);
      if(res.success == true) {
        this.getAllList();
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
}
