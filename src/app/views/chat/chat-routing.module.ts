import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChatboxComponent } from './chat/chatbox/chatbox.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    data: {
      title: 'Chat'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
