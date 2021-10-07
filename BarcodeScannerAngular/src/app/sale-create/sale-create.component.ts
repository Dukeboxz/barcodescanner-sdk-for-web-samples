import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.css']
})
export class SaleCreateComponent implements OnInit {

  ShowSelectionButtons: boolean = true; 
  ShowContstructNew: boolean = false; 
  ShowUseExisting: boolean = false; 

  newReceiverForm = this.fb.group({
    receiverName: ['', Validators.required], 
    receiverBuilding: [''], 
    receiverStreet: ['', Validators.required], 
    receiverTown: [' ', Validators.required], 
    receiverCountry: ['', Validators.required], 
    receiverPostcode: ['']
  })

  constructor(private loanService: LoanService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  viewSalePage(selection: string){
    if(selection === "NewReceiver")
    {
      this.ShowSelectionButtons = false; 
      this.ShowContstructNew = true; 
      
    }else if(selection == "ExistingReceiver"){

      this.ShowSelectionButtons = false; 
      this.ShowUseExisting = true; 
    }else{
      this.ShowUseExisting=false; 
      this.ShowContstructNew = false; 
      this.ShowSelectionButtons = true; 
    }
  }

  CreateNewReceiver(){

  }
  UseExistingReceiver(){

  }

}
