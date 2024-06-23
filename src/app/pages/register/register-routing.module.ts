import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'step1',
    loadChildren: () => import('./step1/step1.module').then( m => m.Step1PageModule)
  },
  {
    path: 'step2',
    loadChildren: () => import('./step2/step2.module').then( m => m.Step2PageModule)
  },
  {
    path: '',
    redirectTo: 'step1',
    pathMatch: 'full'
  },
  {
    path: 'step2',
    loadChildren: () => import('./step2/step2.module').then( m => m.Step2PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
