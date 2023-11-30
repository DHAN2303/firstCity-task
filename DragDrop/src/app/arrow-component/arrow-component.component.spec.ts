import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowComponentComponent } from './arrow-component.component';

describe('ArrowComponentComponent', () => {
  let component: ArrowComponentComponent;
  let fixture: ComponentFixture<ArrowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrowComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
