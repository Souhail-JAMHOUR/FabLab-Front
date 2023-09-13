import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTryComponent } from './upload-try.component';

describe('UploadTryComponent', () => {
  let component: UploadTryComponent;
  let fixture: ComponentFixture<UploadTryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadTryComponent]
    });
    fixture = TestBed.createComponent(UploadTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
