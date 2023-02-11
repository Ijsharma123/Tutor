import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineTestComponent } from './online-test/online-test.component';
import { QuestionsetListComponent } from './questionset-list/questionset-list.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: '',
    // component: OnlineTestComponent,
    data: {
      title: 'onlineTest '
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },
      {
        path: 'questionList',
        component: OnlineTestComponent,
        data: {
          title: 'QuestionList',
        }
      },
      {
        path: 'setList',
        component: QuestionsetListComponent,
        data: {
          title: 'QuestionList',
        }
      },
      {
        path: 'result',
        component: ResultComponent,
        data: {
          title: 'Result',
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineTestRoutingModule { }
