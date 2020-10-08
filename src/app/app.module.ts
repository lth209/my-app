import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SvComponent } from './sv/sv.component';
import { MainComponent } from './main/main.component';
import { UpdateComponent } from './update/update.component';
import { FormSVComponent } from './form-sv/form-sv.component';
import { FormLopComponent } from './form-lop/form-lop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LopComponent } from './lop/lop.component';
import { AppMaterialModule } from './app-material.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SvComponent,
    MainComponent,
    UpdateComponent,
    FormSVComponent,
    FormLopComponent,
    LopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
