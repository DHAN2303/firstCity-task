import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-component',
  templateUrl: './arrow-component.component.html',
  styleUrl: './arrow-component.component.css'
})
export class ArrowComponentComponent {
  showArrow = false;

  toggleArrow() {
    this.showArrow = !this.showArrow;
  }
}
