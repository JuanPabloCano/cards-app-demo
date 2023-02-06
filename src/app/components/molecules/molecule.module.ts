import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AtomModule } from '@app/components/atoms/atoms.module';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent
  ],
  exports: [
    HeaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AtomModule,
    RouterLink
  ]
})
export class MoleculeModule {
}
