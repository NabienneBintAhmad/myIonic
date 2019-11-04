import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoriqueadminPage } from './historiqueadmin.page';

const routes: Routes = [
  {
    path: 'k',
    component: HistoriqueadminPage,
    children: [
      { path: 'envoieadmin', loadChildren: '../envoieadmin/envoieadmin.module#EnvoieadminPageModule' },
      { path: 'retraitadmin', loadChildren: '../retraitadmin/retraitadmin.module#RetraitadminPageModule' },
   ]
  },
  {
    path: '',
    redirectTo: 'k/envoieadmin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistoriqueadminPage]
})
export class HistoriqueadminPageModule {}
