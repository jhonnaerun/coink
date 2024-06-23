import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWithStepsComponent } from './header-with-steps/header-with-steps.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DispleyStepsComponent } from './displey-steps/displey-steps.component';
import { InformativeCoinkComponent } from './informative-coink/informative-coink.component';



@NgModule({
  declarations: [
    HeaderWithStepsComponent,
    InformativeCoinkComponent,
    DispleyStepsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    HeaderWithStepsComponent,
    InformativeCoinkComponent,
    DispleyStepsComponent
  ]
})
export class SharedModule { }
