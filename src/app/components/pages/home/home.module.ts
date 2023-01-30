import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CharacterListModule } from '@characters/character-list/character-list.module';
import { CharacterModule } from '@characters/characters.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharacterListModule,
    CharacterModule
  ]
})
export class HomeModule { }
