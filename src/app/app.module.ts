import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line:comment-format
//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Routes, RouterModule } from '@angular/router';

import { KattegatComponent } from './kattegat/kattegat.component';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent},
  { path: 'kattegat', component: KattegatComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'gallery' }
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    KattegatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
