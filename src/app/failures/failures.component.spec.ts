import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailuresComponent } from './failures.component';

describe('FailuresComponent', () => {
  let component: FailuresComponent;
  let fixture: ComponentFixture<FailuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FailuresComponent]
    });
    fixture = TestBed.createComponent(FailuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
