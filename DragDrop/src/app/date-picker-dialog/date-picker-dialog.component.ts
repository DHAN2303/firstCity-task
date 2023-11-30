import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';




@Component({
  selector: 'app-date-picker-dialog',
  templateUrl: './date-picker-dialog.component.html',
  styleUrl: './date-picker-dialog.component.css'
})
export class DatePickerDialogComponent {
  @ViewChild(MatDatepicker) datePicker!: MatDatepicker<Date>;
  @ViewChild(NgxMaterialTimepickerComponent) timePicker!: NgxMaterialTimepickerComponent;

  ngAfterViewInit() {
    this.datePicker.open();
  }

  onDateSelect(event: any) {

    this.datePicker.close();

    this.timePicker.open();
  }
}
