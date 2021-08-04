import { Customer } from './customer';

export class IndividualCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' (INDIVIDUAL)';
  }

  pickUp(): void {
    throw new Error('Method not implemented.');
  }
}
