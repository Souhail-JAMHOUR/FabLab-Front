import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmFailuresComponent } from './comfirm-failures.component';

describe('ComfirmFailuresComponent', () => {
  let component: ComfirmFailuresComponent;
  let fixture: ComponentFixture<ComfirmFailuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComfirmFailuresComponent]
    });
    fixture = TestBed.createComponent(ComfirmFailuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
