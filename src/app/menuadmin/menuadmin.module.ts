import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuadminPage } from './menuadmin.page';

const routes: Routes = [
  {
    path: '',
    component: MenuadminPage,
    children :[
      { path: 'home', loadChildren:'../home/home.module#HomePageModule'},
     { path: 'register', loadChildren: '../register/register.module#RegisterPageModule' },
     { path: 'admin', loadChildren: '../admin/admin.module#AdminPageModule' },
     { path: 'caissier', loadChildren: '../caissier/caissier.module#CaissierPageModule' },
     { path: 'user', loadChildren: '../user/user.module#UserPageModule' },
     { path: 'depot', loadChildren: '../depot/depot.module#DepotPageModule' },
     { path: 'compte', loadChildren: '../compte/compte.module#ComptePageModule' },
     { path: 'allcompte', loadChildren: '../allcompte/allcompte.module#AllcomptePageModule' },
     { path: 'comptetravail', loadChildren: '../comptetravail/comptetravail.module#ComptetravailPageModule' },
     { path: 'transaction', loadChildren: '../transaction/transaction.module#TransactionPageModule' },
     { path: 'historiqueadmin', loadChildren: '../historiqueadmin/historiqueadmin.module#HistoriqueadminPageModule' },
    
   
       ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuadminPage]
})
export class MenuadminPageModule {}
