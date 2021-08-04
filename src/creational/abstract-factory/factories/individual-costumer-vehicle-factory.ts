import { IndividualCar } from '../vehicle/individual-car';
import { Customer } from '../customer/customer';
import { Vehicle } from '../vehicle/vehicle';
import { IndividualCustomer } from '../customer/individual-costumer';

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
