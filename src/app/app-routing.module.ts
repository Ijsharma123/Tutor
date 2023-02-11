import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import {AuthGuard} from './guard/auth.guard';
import {LoginGuard} from './guard/login/login.guard';
import { ChatboxComponent } from './views/chat/chat/chatbox/chatbox.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    // redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Homes'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      } ,
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'slider',
        loadChildren: () =>
          import('./views/slider/slider.module').then((m) => m.SliderModule)
      },
      {
        path: 'batches',
        loadChildren: () =>
          import('./views/batches/batches.module').then((m) => m.BatchesModule)
      },
      // {
      //   path: 'scheduleLive',
      //   loadChildren: () =>
      //     import('./views/schedule-live/schedule-live.module').then((m) => m.ScheduleLiveModule)
      // },
      {
        path: 'students',
        loadChildren: () =>
          import('./views/student/student.module').then((m) => m.StudentModule)
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./views/admin/admin.module').then((m) => m.AdminModule)
      },
      {
        path: 'session',
        loadChildren: () =>
          import('./views/session/session.module').then((m) => m.SessionModule)
      },
      {
        path: 'topic',
        loadChildren: () =>
          import('./views/topic/topic.module').then((m) => m.TopicModule)
      },
      {
        path: 'subject',
        loadChildren: () =>
          import('./views/subject/subject.module').then((m) => m.SubjectModule)
      },
      {
        path: 'chapter',
        loadChildren: () =>
          import('./views/chapter/chapter.module').then((m) => m.ChapterModule)
      },
      {
        path: 'samplePeper',
        loadChildren: () =>
          import('./views/sample-paper/sample-paper.module').then((m) => m.SamplePaperModule)
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./views/payment/payment.module').then((m) => m.PaymentModule)
      },
      {
        path: 'contactUs',
        loadChildren: () =>
          import('./views/contact-us/contact-us.module').then((m) => m.ContactUsModule)
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('./views/chat/chat.module').then((m) => m.ChatModule)
      },
      
      {path:'chat/:id', component:ChatboxComponent},
      
      {
        path: 'liveClass',
        loadChildren: () =>
          import('./views/liveclass/liveclass.module').then((m) => m.LiveclassModule)
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('./views/notification/notification.module').then((m) => m.NotificationModule)
      },
      {
        path: 'noticeBoard',
        loadChildren: () =>
          import('./views/notice-bord/notice-bord.module').then((m) => m.NoticeBordModule)
      },
      {
        path: 'onlineTest',
        loadChildren: () =>
          import('./views/online-test/online-test.module').then((m) => m.OnlineTestModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ],canActivate:[AuthGuard]
  },

  
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }, canActivate:[LoginGuard]
    // ,canActivate:[AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
