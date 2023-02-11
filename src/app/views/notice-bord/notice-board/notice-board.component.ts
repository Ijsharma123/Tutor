import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common/common.service';
import {NoticeBoardService} from '../../../services/noticeBoard/notice-board.service';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss']
})
export class NoticeBoardComponent implements OnInit {

  editId:any;
  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder, private commonService:CommonService,
    private noticeBoardService:NoticeBoardService) {
    this.form = this.fb.group({
      notice:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    this.getNoticeBoardData();
  }

  getNoticeBoardData(){
    this.noticeBoardService.getList().subscribe(res=>{
      console.log('res',res);
      this.editId = res.data[0]._id;
      const patchData= {
        notice:res.data[0].notice,
        status:res.data[0].status,
      }
      this.form.patchValue(patchData);
      // console.log(' this.editId ', this.editId );

    }, (err)=>{
      this.commonService.tokenDelete(err.error.msg);
    });
  }

  saveEditData(){
    const patchData = { "notice":this.form.value.notice, "status":this.form.value.status };
    // console.log('patchdata',patchData);
this.noticeBoardService.updateApi(this.editId,patchData).subscribe(res=>{
  console.log(res)
  if(res.success == true){
    this.getNoticeBoardData();
    alert("Data Updated");
  }
}, (err)=>{
  this.commonService.tokenDelete(err.error.msg);
});
  }


  cancelData(){
    
  }

}
