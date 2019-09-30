import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotificionEnvioPage } from './notificion-envio.page';

const routes: Routes = [
  {
    path: '',
    component: NotificionEnvioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotificionEnvioPage]
})
export class NotificionEnvioPageModule {}
