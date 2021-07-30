import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const costumerNames = ['Alan', 'Laise', 'Max', 'Juice'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = costumerNames[randomNumbers(costumerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('---');
}
