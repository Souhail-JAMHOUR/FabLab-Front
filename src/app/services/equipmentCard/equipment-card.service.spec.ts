import { TestBed } from '@angular/core/testing';

import { EquipmentCardService } from './equipment-card.service';

describe('EquipmentCardService', () => {
  let service: EquipmentCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
