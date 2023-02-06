import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', loadChildren: () => import('./components/organisms/login/login-routing.module').then(m => m.LoginRoutingModule) },
  {
    path: 'home',
    loadChildren: () => import('./components/templates/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/organisms/register/register-routing.module').then(m => m.RegisterRoutingModule)
  },
  {
    path: 'character-list',
    loadChildren: () => import('./components/organisms/character-list/character-list-routing.module').then(m => m.CharacterListRoutingModule)
  }, {
    path: 'character-details/:id',
    loadChildren: () => import('./components/organisms/character-details/character-details-routing.module').then(m => m.CharacterDetailsRoutingModule)
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
