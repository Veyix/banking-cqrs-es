import { Injectable } from '@angular/core';
import { BankAccountCollectionService } from './bank-account-collection.service';

@Injectable({
  providedIn: 'root'
})
export class BankAccountCommandService {

  constructor(private bankAccountCollectionService: BankAccountCollectionService) {

  }

  async createBankAccount(name: string): Promise<void> {
    await this.bankAccountCollectionService.createBankAccount(name);
  }
}
