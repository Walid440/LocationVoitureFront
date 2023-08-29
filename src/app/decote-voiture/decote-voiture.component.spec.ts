import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoteVoitureComponent } from './decote-voiture.component';

describe('DecoteVoitureComponent', () => {
  let component: DecoteVoitureComponent;
  let fixture: ComponentFixture<DecoteVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecoteVoitureComponent]
    });
    fixture = TestBed.createComponent(DecoteVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
