import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu/home', pathMatch: 'full' },
   { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'menuadmin', loadChildren: './menuadmin/menuadmin.module#MenuadminPageModule' },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
