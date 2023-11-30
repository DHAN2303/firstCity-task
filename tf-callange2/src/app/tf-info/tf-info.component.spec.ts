import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfInfoComponent } from './tf-info.component';

describe('TfInfoComponent', () => {
  let component: TfInfoComponent;
  let fixture: ComponentFixture<TfInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TfInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
