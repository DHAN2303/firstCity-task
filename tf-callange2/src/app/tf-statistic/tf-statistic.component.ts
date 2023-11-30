import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tf-statistic',
  templateUrl: './tf-statistic.component.html',
  styleUrls: ['./tf-statistic.component.css']
})
export class TfStatisticComponent implements OnInit {

  constructor() { }
  arrayList = [
    {
      title: "P1-A02-07",
      departure: "08:40:00",
      arrival: "09:08:00"
    },
    {
      title: "P1-A12-07",
      departure: "08:20:00",
      arrival: "07:58:00"
    },
    {
      title: "P1-A04-09",
      departure: "08:40:00",
      arrival: "08:08:00"
    },
    {
      title: "P1-A19-07",
      departure: "08:30:00",
      arrival: "05:08:00"
    },
    {
      title: "P1-A06-07",
      departure: "08:50:00",
      arrival: "07:08:00"
    },
    {
      title: "P1-A03-03",
      departure: "08:45:00",
      arrival: "05:58:00"
    },
    {
      title: "P1-A04-07",
      departure: "08:30:00",
      arrival: "05:58:00"
    },
    {
      title: "P1-A12-06",
      departure: "08:25:00",
      arrival: "07:53:00"
    },
    {
      title: "P1-A19-09",
      departure: "08:40:00",
      arrival: "06:08:00"
    },
    {
      title: "P1-A11-03",
      departure: "08:00:00",
      arrival: "06:28:00"
    },
    {
      title: "P1-A06-09",
      departure: "08:40:00",
      arrival: "06:08:00"
    },
    {
      title: "P1-A01-08",
      departure: "08:30:00",
      arrival: "06:58:00"
    },

  ]


  arrayList2 = [];

  arrayList3 = [];

  action1 = false;
  action2 = false;
  action3 = false;
  action4 = false;
  ngOnInit(): void {

    setTimeout(() => {
      this.arrayList2.push({
        title: "P2-B04-01",
        departure: "09:50:00",
        arrival: "10:38:00"
      })

      this.action1 = true;
      this.action2 = true;
      this.action4 = true;
    }, 3000)


    setTimeout(() => {
      this.arrayList2.length = 0;
      this.arrayList3.push({
        title: "P2-B04-01",
        departure: "10:00:00",
        arrival: "10:39:00"
      })
      this.action2 = false;
      this.action3 = true;
    }, 7000)

  }

}
