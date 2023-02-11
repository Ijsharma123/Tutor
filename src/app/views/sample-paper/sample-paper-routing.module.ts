import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePaperComponent } from './sample-paper/sample-paper.component';

const routes: Routes = [
  {
    path: '',
    component: SamplePaperComponent,
    data: {
      title: 'Sample Paper '
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePaperRoutingModule { }
