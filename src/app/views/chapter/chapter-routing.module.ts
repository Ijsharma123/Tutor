import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChapterComponent } from './chapter/chapter.component';

const routes: Routes = [
  {
    path: '',
    component: ChapterComponent,
    data: {
      title: 'Chapter '
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterRoutingModule { }
