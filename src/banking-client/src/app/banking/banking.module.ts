import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

import { BankingRoutingModule } from './banking-routing.module';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BankingRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [BankAccountsComponent, CreateBankAccountComponent]
})
export class BankingModule { }
