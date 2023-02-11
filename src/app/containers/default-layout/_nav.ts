import { INavData } from '@coreui/angular';
// Admin R B Singh
export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
  {
    name: 'Slider',
    url: '/slider',
    iconComponent: { name: 'cil-tags' },
  },
  {
    name: 'Batches',
    url: '/batches',
    iconComponent: { name: 'cil-spreadsheet' },
  },
  // {
  //   name: 'Schedule Live',
  //   url: '/scheduleLive',
  //   iconComponent: { name: 'cil-calculator' },
  // },
  {
    name: 'Students',
    url: '/students',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Admin Users',
    url: '/admin',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Session',
    url: '/session',
    iconComponent: { name: 'cil-layers' },
  },
  {
    name: 'Chapter',
    url: '/chapter',
    iconComponent: { name: 'cil-basket'},
  },
  {
    name: 'Topic',
    url: '/topic',
    iconComponent: { name: 'cil-basket' },
  },
  {
    name: 'Subject',
    url: '/subject',
    iconComponent: { name: 'cil-notes' },
  },

  {
    name: 'Sample Paper',
    url: '/samplePeper',
    iconComponent: { name: 'cil-notes' },
  },

  {
    name: 'Payment',
    url: '/payment',
    iconComponent: { name: 'cil-calculator' },
  },
  {
    name: 'Contact us',
    url: '/contactUs',
    iconComponent: { name: 'cil-spreadsheet' },
  },
  {
    name: 'Chat',
    url: '/chat',
    iconComponent: { name: 'cil-cursor' },
  },
  {
    name: 'Live Class',
    url: '/liveClass',
    iconComponent: { name: 'cil-star' },
  },
  {
    name: 'Notification',
    url: '/notification',
    iconComponent: {  name: 'cil-bell' },
  },
  {
    name: 'Notice Board',
    url: '/noticeBoard',
    iconComponent: { name: 'cil-bell' },
  },
  // {
  //   name: 'Online Test',
  //   url: '/onlinetest',
  //   iconComponent: { name: 'cil-calculator' },
  // },
  {
    name: 'Online Test',
    url: '/onlineTest',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Question List',
        url: '/onlineTest/questionList'
      },
      {
        name: 'Question Set List',
        url: '/onlineTest/setList'
      },
      {
        name: 'Results',
        url: '/onlineTest/result'
      },

    ]
  },
  






  // {
  //   title: true,
  //   name: 'Theme'
  // },

  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  // {
  //   name: 'Components',
  //   title: true
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   iconComponent: { name: 'cil-puzzle' },
  //   children: [
  //     {
  //       name: 'Accordion',
  //       url: '/base/accordion'
  //     },
  //     {
  //       name: 'Breadcrumbs',
  //       url: '/base/breadcrumbs'
  //     },
  //     {
  //       name: 'Cards',
  //       url: '/base/cards'
  //     },
  //     {
  //       name: 'Carousel',
  //       url: '/base/carousel'
  //     },
  //     {
  //       name: 'Collapse',
  //       url: '/base/collapse'
  //     },
  //     {
  //       name: 'List Group',
  //       url: '/base/list-group'
  //     },
  //     {
  //       name: 'Navs & Tabs',
  //       url: '/base/navs'
  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/pagination'
  //     },
  //     {
  //       name: 'Placeholder',
  //       url: '/base/placeholder'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress'
  //     },
  //     {
  //       name: 'Spinners',
  //       url: '/base/spinners'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   iconComponent: { name: 'cil-cursor' },
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons'
  //     },
  //     {
  //       name: 'Button groups',
  //       url: '/buttons/button-groups'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns'
  //     },
  //   ]
  // },
  // {
  //   name: 'Forms',
  //   url: '/forms',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Form Control',
  //       url: '/forms/form-control'
  //     },
  //     {
  //       name: 'Select',
  //       url: '/forms/select'
  //     },
  //     {
  //       name: 'Checks & Radios',
  //       url: '/forms/checks-radios'
  //     },
  //     {
  //       name: 'Range',
  //       url: '/forms/range'
  //     },
  //     {
  //       name: 'Input Group',
  //       url: '/forms/input-group'
  //     },
  //     {
  //       name: 'Floating Labels',
  //       url: '/forms/floating-labels'
  //     },
  //     {
  //       name: 'Layout',
  //       url: '/forms/layout'
  //     },
  //     {
  //       name: 'Validation',
  //       url: '/forms/validation'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },


  
  
];
