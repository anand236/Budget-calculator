import { Component, OnInit, Input } from '@angular/core';
import { BudgetAmount } from '../sharedModel/budget.model';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit {

  @Input() item:BudgetAmount;

  constructor() { }

  ngOnInit(): void {
  }

  formSubmitted(updatedItem:BudgetAmount){

  }

}
