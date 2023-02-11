import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {
  studentId:any;
  chatList:any[]=[];
  form: FormGroup;
  constructor(private route: ActivatedRoute,private fb: FormBuilder,
    private chatService:ChatService) { 
      this.form = this.fb.group({
        newMessage:new FormControl(''),
      })
    }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id'];
    console.log('sanpdata id',this.studentId);
    this.getchatList();
    this.chatService.Refreshrequired.subscribe(response=>{
      this.getchatList();
    })
  }

  getchatList(){
    const data = {"student_id":this.studentId};
    this.chatService.chatMessangerList(this.studentId).toPromise().then(res=>{
      console.log('all data chat list api',res);
      if(res.success==true){
          this.chatList=res.data;
         }
    }).catch(error=>{

    }).finally(()=>{

    });
    // subscribe(res =>{
    //  console.log('getChatList()',res);
    //  if(res.success==true){
    //   this.chatList=res.data;
    //   console.log('getChatList()',this.chatList);
    //  }
    // })
  }

  // getchatList(){
  //   const data = {"student_id":this.studentId};
  //   this.chatService.chatMessangerList(data).subscribe(res =>{
  //    console.log('getChatList()',res);
  //    if(res.success==true){
  //     this.chatList=res.data;
  //     console.log('getChatList()',this.chatList);
  //    }
  //   })
  // }
  initForm(){
    this.form = this.fb.group({
      newMessage:'',
     });
  }

  sendMessage(){
console.log('form inputr maeds',this.form.value);
const data = { student_id:this.studentId, reply_to:"", message:this.form.value.newMessage };
// console.log('send dat inputr maeds',data);
this.chatService.sendMessageAdmin(data).subscribe(res=>{
  console.log('send data api',res)
  if(res.success==true){
    this.getchatList();
    this.initForm();
  }
})
  }

}
