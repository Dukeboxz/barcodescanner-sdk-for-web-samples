import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { LoanReceiver } from 'src/app/Interfaces/LoanReceiver';
import { LoanService } from 'src/app/Loan/loan.service';

@Component({
  selector: 'app-new-receiver',
  templateUrl: './new-receiver.component.html',
  styleUrls: ['./new-receiver.component.css']
})
export class NewReceiverComponent implements OnInit {
  newReceiver : FormGroup; 
  floatLabels = 'auto'
  constructor(private fb: FormBuilder, private loanService: LoanService) { }

  ngOnInit(): void {

      this.newReceiver = this.fb.group({
        name: ['', Validators.required, Validators.minLength(3)], 
        building: ['', ], 
        street: ['', Validators.required],
        town: ['', Validators.required], 
        country: ['' ], 
        postcode:['']
      })

  }

  CreateNewReceiver()
  {
    if(this.newReceiver.valid){

      let receiver: LoanReceiver = {

        Name : this.newReceiver.value.name, 
        Building: this.newReceiver.value.building,
        Street: this.newReceiver.value.street, 
        Town: this.newReceiver.value.town, 
        Country: this.newReceiver.value.country, 
        Postcode: this.newReceiver.value.postcodes

      } 

      this.loanService.CreateNewReceiver(receiver)
      .subscribe({
        next: res=> {
          console.log(res); 

        }, error: error=>{
          alert("Error creating loan receiver"); 
        }
      } )
    }
  }

}
