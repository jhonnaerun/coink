import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Step1PageRoutingModule } from './step1-routing.module';

import { Step1Page } from './step1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Step1PageRoutingModule,
    SharedModule
  ],
  declarations: [Step1Page]
})
export class Step1PageModule {}
