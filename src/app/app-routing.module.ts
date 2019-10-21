import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'caissier', loadChildren: './caissier/caissier.module#CaissierPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'depot', loadChildren: './depot/depot.module#DepotPageModule' },
  { path: 'compte', loadChildren: './compte/compte.module#ComptePageModule' },
  { path: 'allcompte', loadChildren: './allcompte/allcompte.module#AllcomptePageModule' },
  { path: 'comptetravail', loadChildren: './comptetravail/comptetravail.module#ComptetravailPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
