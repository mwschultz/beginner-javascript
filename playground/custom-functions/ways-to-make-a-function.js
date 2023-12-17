// // function doctorize(firstName) {
// //   return `Dr ${firstName}`;
// // }

// fuction(firstName) {
//   return `Dr. ${firstName}`;
// }

// // console.log(doctorize('D'));
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
}
// // function doctorize(firstName) {
// //   return `Dr. ${firstName}`;
// // }

const inchToCM = (inches) => inches * 2.54;

const add = (a, b = 3) => a + b;

const makeABaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});

(function (age) {
  console.log('Running the anonymous function');
  return `You are cool and ${age}`;
})(34);

const Matt = {
  name: 'Marcos',
  sayHi() {
    console.log(`Hey ${this.name}`);
    console.log('Hey Matt');
    return 'Hey Matt';
  },
  yellHi() {
    console.log('HEY MATT!');
    return 'HEY MATT!';
  },
  whisperHi: () => {
    console.log('hiiiii');
  },
};

const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great!');
}

button.addEventListener('click', () => {
  console.log('Yup, anonymous function');
});

button.addEventListener('click', () => {
  console.log('Pennix!');
});

setTimeout(() => {
  console.log('time to eat!');
}, 2000);