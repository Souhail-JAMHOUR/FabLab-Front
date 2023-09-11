import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsInfoComponent } from './cards-info.component';

describe('CardsInfoComponent', () => {
  let component: CardsInfoComponent;
  let fixture: ComponentFixture<CardsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsInfoComponent]
    });
    fixture = TestBed.createComponent(CardsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
