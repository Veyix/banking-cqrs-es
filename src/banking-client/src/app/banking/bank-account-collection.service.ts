import { Injectable } from '@angular/core';
import { BankAccount } from './bank-account';

@Injectable({
  providedIn: 'root'
})
export class BankAccountCollectionService {

  private bankAccounts: BankAccount[] = [];

  getBankAccounts(): Promise<BankAccount[]> {
    console.log(`getting ${this.bankAccounts.length} bank accounts...`);
    return new Promise<any[]>(resolve => resolve(this.bankAccounts));
  }

  createBankAccount(name: string): Promise<void> {
    console.log(`creating bank account ${name}...`);

    this.bankAccounts.push({ name: name });

    return new Promise<void>(resolve => resolve());
  }
}
