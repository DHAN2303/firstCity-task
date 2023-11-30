import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfStatisticComponent } from './tf-statistic.component';

describe('TfStatisticComponent', () => {
  let component: TfStatisticComponent;
  let fixture: ComponentFixture<TfStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TfStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
