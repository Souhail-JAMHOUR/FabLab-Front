import { Component, OnInit } from '@angular/core';
import { Stepper, initTE } from "tw-elements";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentCardService } from '../services/equipmentCard/equipment-card.service';



initTE({ Stepper });

@Component({
  selector: 'app-new-reservation-page',
  templateUrl: './new-reservation-page.component.html',
  styleUrls: ['./new-reservation-page.component.css']
})


export class NewReservationPageComponent implements OnInit {
  Firstname : string = '';
  Lastname : string = '';
  equipmentcardsData!: any[];
  myForm!: FormGroup;
  currentStep = 0;
  
  firstStepForm!: FormGroup; 

  steps = [
    { label: 'Timing'},
    { label: 'Equipments'},
    { label: 'Quantity' },
    { label: 'Confirm' }
  ];

  currentPage = 1;
  itemsPerPage = 6; 

  onPageChange(page: number) {
    this.currentPage = page;
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  getTotalPages(): number {
    return Math.ceil(this.equipmentcardsData.length / this.itemsPerPage);
  }
  
  getEndIndex(): number {
    const endIndex = this.currentPage * this.itemsPerPage;
    return endIndex > this.equipmentcardsData.length ? this.equipmentcardsData.length : endIndex;
  }
  
  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.equipmentcardsData.length / this.itemsPerPage);
    return Array(pageCount)
      .fill(0)
      .map((_, index) => index + 1);
  }  
  
  
  constructor(private equipmentcardService: EquipmentCardService, private formBuilder: FormBuilder) {}


  ngOnInit(): void {
    
      this.myForm = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        LastName: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
        description: ['' , [Validators.required]],
      });
    
      

      this.equipmentcardService.getEquipmentData().subscribe(data => {
        this.equipmentcardsData = data;
      });
    
  }
  // hasError(controlName: string, errorName: string) {
  //   return this.myForm.get(controlName).hasError(errorName);
  // }

  showValidationPopup = false;

  getStepClass(index: number): string {
    if (index === this.currentStep) {
      return 'circle-current';
    } else if (index < this.currentStep) {
      return 'circle-previous';
    } else {
      return 'circle-next';
    }
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  confirm() {
    this.showValidationPopup = true;
  }

  count: number = 0;

  plus() {
    this.count++;
  }

  moins() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
