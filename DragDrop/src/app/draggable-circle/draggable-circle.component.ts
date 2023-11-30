import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { DatePickerDialogComponent } from '../date-picker-dialog/date-picker-dialog.component';


@Component({
  selector: 'app-draggable-circle',
  templateUrl: './draggable-circle.component.html',
  styleUrls: ['./draggable-circle.component.css']
})
export class DraggableCircleComponent implements OnInit {

  
  circleTexts: string[] = ['الحرم', 'مزدلفة', 
                           'منى', 'عرفات', 'الجمرات','مكة'];
  circles: any[] = [];
  numberOfCircles = 6;
  circleWidth = 100; 
  spacing = 20;

  constructor(private dialog: MatDialog) { }

  @ViewChild('dropBox') dropBox!: ElementRef; 

  //
  //showArrow: boolean = false;
  //arrowPosition: { x: number, y: number } = { x: 0, y: 0 };
  //

  ngOnInit() {
    this.initializeCircles();
  }

  initializeCircles() {
    const totalSpacing = this.spacing * (this.numberOfCircles - 1);
    const totalWidth = this.circleWidth * this.numberOfCircles + totalSpacing;
    const startX = (totalWidth - this.circleWidth) / -2; 
  
    for (let i = 0; i < this.numberOfCircles; i++) {
      const positionX = startX + (this.circleWidth + this.spacing) * i;
      this.circles.push({ text: this.circleTexts[i], position: { x: positionX, y: 0 } });
    }
  }
  

  dragEnded(event: CdkDragEnd, index: number) {
    const { x, y } = event.distance;
    this.circles[index].position.x += x;
    this.circles[index].position.y += y;

    const dropRect = this.dropBox.nativeElement.getBoundingClientRect();
    const circleRect = event.source.element.nativeElement.getBoundingClientRect();

        console.log(this.circles[index].position.y);
        
    if (this.isInsideBox(circleRect, dropRect)) {
      console.log(this.circles[index].text);

      const pageCenterY = window.innerHeight/2;
      const circleCenterY = circleRect.top + circleRect.height / 2;
      const newYPosition = pageCenterY - circleCenterY + this.circles[index].position.y;
      console.log(this.circles[index].position.y);
      console.log(pageCenterY);
      console.log(circleCenterY);

      this.circles[index].position.y = newYPosition;
      console.log(this.circles[index].position.y);
      this.openDatePicker();
      //this.arrowPosition.x = circleRect.right - dropRect.left;
     // this.arrowPosition.y = circleRect.top - dropRect.top;
     // this.showArrow = true;
        }
     //   else {
     //     this.showArrow = false;
     //   }
  }
  
  openDatePicker() {
    this.dialog.open(DatePickerDialogComponent, {
      width: '300px',
      hasBackdrop: true
    });
  }

  private containerOffset() {
    const container = this.dropBox.nativeElement.parentElement.getBoundingClientRect();
    return { top: container.top, left: container.left };
  }
  
  

  private isInsideBox(circleRect: DOMRect, dropRect: DOMRect) { 
    return (
      circleRect.left >= dropRect.left &&
      circleRect.right <= dropRect.right &&
      circleRect.top >= dropRect.top &&
      circleRect.bottom <= dropRect.bottom
    );
  }
}
