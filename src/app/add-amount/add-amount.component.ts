import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {BudgetAmount} from '../sharedModel/budget.model'

@Component({
  selector: 'app-add-amount',
  templateUrl: './add-amount.component.html',
  styleUrls: ['./add-amount.component.css']
})
export class AddAmountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() items:BudgetAmount = new BudgetAmount(null,'')
  @Output() formsData:EventEmitter<BudgetAmount> = new EventEmitter<BudgetAmount>();


  onSubmit(form:NgForm){
  this.formsData.emit(form.value);
  form.reset();
  }
  

}
