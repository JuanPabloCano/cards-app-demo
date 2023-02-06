import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from '@app/components/templates/home/home-routing.module';
import { HomeComponent } from '@app/components/templates/home/home.component';
import { OrganismModule } from '@organisms/organism.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OrganismModule
  ]
})
export class HomeModule {
}
