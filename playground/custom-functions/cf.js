function calculateBill(mealCost, taxRate = 0.13, tipRate = 0.18) {
  const total = mealCost + mealCost * taxRate + mealCost * tipRate;
  return total;
}

// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// const greeting = sayHiTo('Wes');

// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Matt') {
  return `HEY ${name.toUpperCase()}`;
}

const myBillA = calculateBill(100, undefined, 0.2);
console.log(myBillA);
