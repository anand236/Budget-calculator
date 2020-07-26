import { Component, OnInit, Input, Output } from '@angular/core';
import { BudgetAmount } from '../sharedModel/budget.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() budgetItems:BudgetAmount[] = []

  @Output() emitThree:EventEmitter<BudgetAmount> = new EventEmitter<BudgetAmount>();

  constructor() { }

  ngOnInit(): void {
  }

  emitTwo(item:BudgetAmount){
    this.emitThree.emit(item)

  }
   

}
