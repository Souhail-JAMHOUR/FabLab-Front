import { Component , OnInit } from '@angular/core';
import { EquipmentCardService } from '../services/equipmentCard/equipment-card.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.css']
})
export class EquipmentCardComponent implements OnInit{
  equipmentcardsData: any;

  constructor(private equipmentcardService: EquipmentCardService, private sanitizer: DomSanitizer) {}


  ngOnInit(): void {
    this.equipmentcardService.getEquipmentData().subscribe(data => {
      this.equipmentcardsData = data;
    });
  }

}
