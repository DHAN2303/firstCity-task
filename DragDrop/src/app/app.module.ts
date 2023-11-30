import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from 'mat-timepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { AppComponent } from './app.component';
import { DraggableCircleComponent } from './draggable-circle/draggable-circle.component';
import { ArrowComponentComponent } from './arrow-component/arrow-component.component';
import { DatePickerDialogComponent } from './date-picker-dialog/date-picker-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    DraggableCircleComponent,
    ArrowComponentComponent,
    DatePickerDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTimepickerModule,
    NgxMaterialTimepickerModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
