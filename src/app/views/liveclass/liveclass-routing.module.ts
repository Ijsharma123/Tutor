import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NoticeBoardComponent } from './notice-board/notice-board.component';
import {LiveClassComponent} from './live-class/live-class.component'

const routes: Routes = [
  {
    path: '',
    component: LiveClassComponent,
    data: {
      title: 'Live class '
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class liveclassRoutingModule { }
