import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeBoardComponent } from './notice-board/notice-board.component';

const routes: Routes = [
  {
    path: '',
    component: NoticeBoardComponent,
    data: {
      title: 'Notice Board '
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeBordRoutingModule { }
