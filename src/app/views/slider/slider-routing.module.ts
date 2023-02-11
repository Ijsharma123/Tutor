import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidersComponent } from './sliders/sliders.component';

const routes: Routes = [
  {
    path: '',
    component: SlidersComponent,
    data: {
      title: 'Slider'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliderRoutingModule { }
