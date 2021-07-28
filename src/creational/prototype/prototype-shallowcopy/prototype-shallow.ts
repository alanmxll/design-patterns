export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Av. Brasil', 1005);
const person1 = new Person('Alan', 28);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Teste';

person2.name = 'Person2';
console.log(person2);
console.log(person2.addresses);
