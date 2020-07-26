import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAmountComponent } from './add-amount/add-amount.component';
import { TagsComponent } from './tags/tags.component';
import { IncomeOutputComponent } from './income-output/income-output.component';
import { ExpenseOutputComponent } from './expense-output/expense-output.component';
import { from } from 'rxjs';
import { EditPopupComponent } from './edit-popup/edit-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    AddAmountComponent,
    TagsComponent,
    IncomeOutputComponent,
    ExpenseOutputComponent,
    EditPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
