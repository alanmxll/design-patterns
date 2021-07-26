import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Alan', age: 28 });
myDatabaseClassic.add({ name: 'Laise', age: 26 });
myDatabaseClassic.add({ name: 'Angelina', age: 48 });

export { myDatabaseClassic };
