import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public liveDemoVisible = false;
  
  data:any =[
    {"id":1, "studentName":' Navin Kumar',  "email": "navinkrisna.raj1@gmail.com", "contactNo": "917004381143", "message":"Today is holiday" ,"time":" 8 Months, 2 Weeks, 5 Days, 19 Hours, 18 Minutes" },
    {"id":2, "studentName":' Navin Kumar',  "email": "navinkrisna.raj1@gmail.com", "contactNo": "917004381143", "message":"Today is holiday" ,"time":" 8 Months, 2 Weeks, 5 Days, 19 Hours, 18 Minutes" },
    {"id":3, "studentName":' Navin Kumar',  "email": "navinkrisna.raj1@gmail.com", "contactNo": "917004381143", "message":"Today is holiday" ,"time":" 8 Months, 2 Weeks, 5 Days, 19 Hours, 18 Minutes" },
    {"id":4, "studentName":' Navin Kumar',  "email": "navinkrisna.raj1@gmail.com", "contactNo": "917004381143", "message":"Today is holiday" ,"time":" 8 Months, 2 Weeks, 5 Days, 19 Hours, 18 Minutes" },
    {"id":5, "studentName":' Navin Kumar',  "email": "navinkrisna.raj1@gmail.com", "contactNo": "917004381143", "message":"Today is holiday" ,"time":" 8 Months, 2 Weeks, 5 Days, 19 Hours, 18 Minutes" },
   
  ];


  constructor() {
   }

  ngOnInit(): void {
  }

  

  
}
