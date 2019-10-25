import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoriquePage } from './historique.page';

const routes: Routes = [
  {
    path: 'h',
    component: HistoriquePage,
    children: [
      { path: 'envoie', loadChildren: '../envoie/envoie.module#EnvoiePageModule' },
      { path: 'retrait', loadChildren: '../retrait/retrait.module#RetraitPageModule' },
    ]
  },
  {
    path: '',
    redirectTo: 'h/envoie',
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
  declarations: [HistoriquePage]
})
export class HistoriquePageModule {}
