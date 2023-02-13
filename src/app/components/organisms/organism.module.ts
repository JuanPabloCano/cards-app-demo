import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AtomModule } from '@atoms/atoms.module';
import { MoleculeModule } from '@molecules/molecule.module';
import { CharacterDetailsComponent } from '@organisms/character-details/character-details.component';
import { LoginComponent } from '@organisms/login/login.component';
import { RegisterComponent } from '@organisms/register/register.component';
import { UserComponent } from '@organisms/user/user.component';
import { CharacterListComponent } from './character-list/character-list.component';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  exports: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    MoleculeModule,
    AtomModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class OrganismModule {
}
