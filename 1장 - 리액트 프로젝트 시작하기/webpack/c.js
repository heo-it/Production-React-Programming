import { sayHello } from "./b.js";
console.log('module__c');
export const sayHello2 = () => {
  sayHello();
  sayHello();
};
