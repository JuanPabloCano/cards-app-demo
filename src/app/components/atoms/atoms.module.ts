import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormSearchComponent } from '@atoms/form-search/form-search.component';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
    FormSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ ButtonComponent, TitleComponent, FormSearchComponent ]
})
export class AtomModule {
}
