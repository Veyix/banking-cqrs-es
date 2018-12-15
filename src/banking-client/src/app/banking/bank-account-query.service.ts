import { Injectable } from '@angular/core';
import { BankAccount } from './bank-account';
import { BankAccountCollectionService } from './bank-account-collection.service';

@Injectable({
  providedIn: 'root'
})
export class BankAccountQueryService {

  constructor(private bankAccountCollectionService: BankAccountCollectionService) {
  }

  async getBankAccounts(): Promise<BankAccount[]> {
    return await this.bankAccountCollectionService.getBankAccounts();
  }
}
