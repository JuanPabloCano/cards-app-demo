import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from './character.component';

const components = [ CharacterDetailsComponent, CharacterListComponent, CharacterComponent ];

@NgModule({
  declarations: [ ...components ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ ...components ]
})
export class CharacterModule {
}
