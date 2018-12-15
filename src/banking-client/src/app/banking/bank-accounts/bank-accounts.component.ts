import { Component, OnInit } from '@angular/core';
import { BankAccountQueryService } from '../bank-account-query.service';
import { BankAccount } from '../bank-account';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.sass']
})
export class BankAccountsComponent implements OnInit {

  bankAccounts: BankAccount[] = [];

  constructor(private bankAccountQueryService: BankAccountQueryService) {
  }

  async ngOnInit(): Promise<void> {
    this.bankAccounts = await this.bankAccountQueryService.getBankAccounts();
  }
}
