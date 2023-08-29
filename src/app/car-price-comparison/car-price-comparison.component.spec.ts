import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPriceComparisonComponent } from './car-price-comparison.component';

describe('CarPriceComparisonComponent', () => {
  let component: CarPriceComparisonComponent;
  let fixture: ComponentFixture<CarPriceComparisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarPriceComparisonComponent]
    });
    fixture = TestBed.createComponent(CarPriceComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
