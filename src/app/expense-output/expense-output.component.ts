import { Component, OnInit, Input,Output } from '@angular/core';
import { BudgetAmount } from '../sharedModel/budget.model';
import {EventEmitter} from '@angular/core'

@Component({
  selector: 'app-expense-output',
  templateUrl: './expense-output.component.html',
  styleUrls: ['./expense-output.component.css']
})
export class ExpenseOutputComponent implements OnInit {

  @Input() item:BudgetAmount;

  @Output() xBtnEmit:EventEmitter<any> = new EventEmitter<any>();
  

  constructor() { }

  ngOnInit(): void {
  }

  xBtnClicked(){
    //pass click event
    this.xBtnEmit.emit()
  }

}
