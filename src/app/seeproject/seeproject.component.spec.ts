import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeprojectComponent } from './seeproject.component';

describe('SeeprojectComponent', () => {
  let component: SeeprojectComponent;
  let fixture: ComponentFixture<SeeprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeprojectComponent]
    });
    fixture = TestBed.createComponent(SeeprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
