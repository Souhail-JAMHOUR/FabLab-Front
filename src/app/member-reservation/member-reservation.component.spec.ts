import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberReservationComponent } from './member-reservation.component';

describe('MemberReservationComponent', () => {
  let component: MemberReservationComponent;
  let fixture: ComponentFixture<MemberReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberReservationComponent]
    });
    fixture = TestBed.createComponent(MemberReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
