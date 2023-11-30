import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { TfInfoComponent } from './tf-info/tf-info.component';
import { TfStatisticComponent } from './tf-statistic/tf-statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    TfInfoComponent,
    TfStatisticComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTabsModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    NgxGraphModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
