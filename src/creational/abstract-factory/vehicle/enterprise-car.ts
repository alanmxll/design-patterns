import { Vehicle } from './vehicle';
import { Customer } from '../customer/customer';

export class EnterpriseCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) { }

  pickUp(): void {
    console.log(
      `${this.name} está buscando ${this.customer.name} (ENTERPRISE)`,
    );
  }
}
