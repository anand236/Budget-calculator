import { Component } from '@angular/core';
import { BudgetAmount } from './sharedModel/budget.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-app';

  total :BudgetAmount[] = [];

  totalMoney:number = 0

  onAddAmount(data:BudgetAmount){
  this.total.push(data)
  this.totalMoney += data.amount 
  }


  deleteEmit(item:BudgetAmount){
    let index = this.total.indexOf(item)
    this.total.splice(index,1)
    this.totalMoney -= item.amount 
  }

}
