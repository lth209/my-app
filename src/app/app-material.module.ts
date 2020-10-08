import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/List';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table'
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
    exports: [MatListModule,
      MatSidenavModule,
      MatToolbarModule,
      MatButtonModule,
      MatPaginatorModule,
      MatRadioModule,
      MatTableModule],
    imports: [
      MatListModule,
      MatSidenavModule,
      MatToolbarModule,
      MatButtonModule,
      MatPaginatorModule,
      MatRadioModule,
      MatTableModule
  ]
})
export class AppMaterialModule { }