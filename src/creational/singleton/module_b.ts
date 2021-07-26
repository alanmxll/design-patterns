import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Livia', age: 23 });
myDatabaseClassic.add({ name: 'Lairton', age: 46 });
myDatabaseClassic.add({ name: 'Nilda', age: 58 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
