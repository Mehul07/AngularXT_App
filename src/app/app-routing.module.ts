import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'banner',
    loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule)
  },
  {
    path: 'timersubject',
    loadChildren: () => import('./timersubject/timersubject.module').then(m => m.TimersubjectModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'divcreate',
    loadChildren: () => import('./dynamicdiv/dynamicdiv.module').then(m => m.DynamicdivModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
