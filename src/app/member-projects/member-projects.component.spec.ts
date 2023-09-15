import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProjectsComponent } from './member-projects.component';

describe('MemberProjectsComponent', () => {
  let component: MemberProjectsComponent;
  let fixture: ComponentFixture<MemberProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberProjectsComponent]
    });
    fixture = TestBed.createComponent(MemberProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
