// // function doctorize(firstName) {
// //   return `Dr ${firstName}`;
// // }

// // console.log(doctorize('D'));

// // function doctorize(firstName) {
// //   return `Dr. ${firstName}`;
// // }

// const inchToCM = (inches) => inches * 2.54;

// const add = (a, b = 3) => a + b;

// const makeABaby = (first, last) => ({
//   name: `${first} ${last}`,
//   age: 0,
// });

// (function (age) {
//   console.log('Running the anonymous function');
//   return `You are cool and ${age}`;
// })(34);

const Matt = {
  name: 'Matt Schultz',
  sayHi() {
    console.log('Hey Matt');
    return 'Hey Matt';
  },
  yellHi() {
    console.log('HEY MATT!');
    return 'HEY MATT!';
  },
  wisperHi: () => {
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
