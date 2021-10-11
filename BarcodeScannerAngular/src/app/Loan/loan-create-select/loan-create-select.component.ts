import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-create-select',
  templateUrl: './loan-create-select.component.html',
  styleUrls: ['./loan-create-select.component.css']
})
export class LoanCreateSelectComponent implements OnInit {

  existingVisible = true; 
  createNewVisible = false; 


  constructor() { }

  ngOnInit(): void {
  }

  onValChange(value){

    if(value == "new"){
      this.existingVisible = false; 
      this.createNewVisible = true; 
    }else{
      this.createNewVisible = false; 
      this.existingVisible = true; 
    }
  }

}
