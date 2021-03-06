import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { KattegatComponent } from './kattegat/kattegat.component';
import { LogeoComponent } from './Logeo/logeo.component';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'kattegat', component: KattegatComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'logeo', component: LogeoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'kattegat' }
];

@NgModule({
  declarations: [
    AppComponent,
    KattegatComponent,
    GalleryComponent,
    LogeoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
