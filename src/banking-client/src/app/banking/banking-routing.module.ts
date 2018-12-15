import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';

const routes: Routes = [
  {
    component: BankAccountsComponent,
    path: 'bank-accounts'
  },
  {
    component: CreateBankAccountComponent,
    path: 'create-bank-account'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingRoutingModule { }
