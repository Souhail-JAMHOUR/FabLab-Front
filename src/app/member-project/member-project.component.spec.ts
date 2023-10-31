import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProjectComponent } from './member-project.component';

describe('MemberProjectComponent', () => {
  let component: MemberProjectComponent;
  let fixture: ComponentFixture<MemberProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberProjectComponent]
    });
    fixture = TestBed.createComponent(MemberProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
