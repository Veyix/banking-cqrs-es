import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BankAccountCommandService } from '../bank-account-command.service';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.sass']
})
export class CreateBankAccountComponent {

  name: string;

  constructor(private router: Router, private bankAccountCommandService: BankAccountCommandService) {
  }

  async create(): Promise<any> {
    this.bankAccountCommandService.createBankAccount(this.name);

    await this.router.navigateByUrl('/bank-accounts');
  }
}
