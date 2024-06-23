import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'step1',
    loadChildren: () => import('./components/step1/step1.module').then( m => m.Step1PageModule)
  },
  {
    path: 'step2',
    loadChildren: () => import('./components/step2/step2.module').then( m => m.Step2PageModule)
  },
  {
    path: 'step3',
    loadChildren: () => import('./components/step3/step3.module').then( m => m.Step3PageModule)
  },
  {
    path: '',
    redirectTo: 'step1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
