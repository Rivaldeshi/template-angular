import { Routes } from '@angular/router';

export const content: Routes = [
  
   {
     path: '',
     loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
   },

   {
    path: '',
    loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/elements/elements.module').then(m => m.ElementsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/forms-module/forms-module.module').then(m => m.FormsModuleModule)
  },

  {
    path: '',
    loadChildren: () => import('../../components/advanced/advanced.module').then(m => m.AdvancedModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/advanced/filemanager/filemanager.module').then(m => m.FilemanagerModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/basicui/basicui.module').then(m => m.BasicuiModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/page/page.module').then(m => m.PageModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/page/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/page/mail/mail.module').then(m => m.MailModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/page/invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/page/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule)
  },

 ];
