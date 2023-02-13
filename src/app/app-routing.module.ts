import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./components/organisms/login/login-routing.module').then(m => m.LoginRoutingModule),
    ...canActivate(() => redirectLoggedInTo('home'))
  },
  {
    path: 'home',
    loadChildren: () => import('./components/templates/home/home.module').then(m => m.HomeModule),
    ...canActivate(() => redirectUnauthorizedTo('login'))
  },
  {
    path: 'register',
    loadChildren: () => import('./components/organisms/register/register-routing.module').then(m => m.RegisterRoutingModule),
    ...canActivate(() => redirectLoggedInTo('home'))
  },
  {
    path: 'character-list',
    loadChildren: () => import('./components/organisms/character-list/character-list-routing.module').then(m => m.CharacterListRoutingModule),
    ...canActivate(() => redirectUnauthorizedTo('login'))
  }, {
    path: 'character-details/:id',
    loadChildren: () => import('./components/organisms/character-details/character-details-routing.module').then(m => m.CharacterDetailsRoutingModule),
    ...canActivate(() => redirectUnauthorizedTo('login'))
  },
  {
    path: 'user',
    loadChildren: () => import('./components/organisms/user/user-routing.module').then(m => m.UserRoutingModule),
    ...canActivate(() => redirectUnauthorizedTo('login'))
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
