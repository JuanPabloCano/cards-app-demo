import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { AtomModule } from '@app/components/atoms/atoms.module';
import { environment } from '@environment/environment';
import { MoleculeModule } from '@molecules/molecule.module';
import { OrganismModule } from '@organisms/organism.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AtomModule,
    OrganismModule,
    MoleculeModule
  ],
  providers: [],
  exports: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
